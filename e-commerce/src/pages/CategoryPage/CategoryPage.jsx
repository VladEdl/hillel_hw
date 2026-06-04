import { Box, Container, Typography, CircularProgress, Select, MenuItem } from '@mui/material';
import { useParams, useNavigate } from 'react-router';
import { useGetProductsQuery } from '@store/productsApi';
import { useState } from 'react';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

const LIMIT = 9;

const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [appliedPriceRange, setAppliedPriceRange] = useState([0, 500]);
    const [sortBy, setSortBy] = useState('');

    const { data, isLoading, isError } = useGetProductsQuery({
        limit: LIMIT,
        skip: (page - 1) * LIMIT,
        category,
    });

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
        </Box>
    );

    if (isError) return (
        <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography color="error">Something went wrong. Please try again.</Typography>
        </Box>
    );

    const filteredProducts = data?.products?.filter((product) => {
        const matchesPrice = product.price >= appliedPriceRange[0] && product.price <= appliedPriceRange[1];
        return matchesPrice;
    });

    const sortedProducts = [...(filteredProducts || [])].sort((a, b) => {
        if (sortBy === 'price_asc') return a.price - b.price;
        if (sortBy === 'price_desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
    });

    const totalPages = Math.ceil((data?.total || 0) / LIMIT);

    const handleApply = () => {
        setAppliedPriceRange(priceRange);
        setPage(1);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="body2" color="text.secondary" mb={2}>
                <Typography
                    component="span"
                    variant="body2"
                    onClick={() => navigate('/')}
                    sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                >
                    Home
                </Typography>
                {' / '}
                <strong>{category}</strong>
            </Typography>

            <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>

                <Box sx={{ display: { xs: 'none', md: 'block' }, width: 250, flexShrink: 0, mt: 11 }}>
                    <Filters
                        category={category}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        selectedStyle={selectedStyle}
                        setSelectedStyle={setSelectedStyle}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        onApply={handleApply}
                    />
                </Box>


                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 3,
                        pb: 2,
                        borderBottom: '1px solid #e0e0e0',
                    }}>
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                flex: 1,
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {category}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
                            <Typography variant="body2" color="text.secondary">
                                Showing {sortedProducts?.length || 0} of {data?.total} Products
                            </Typography>
                            <Select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                size="small"
                                displayEmpty
                                sx={{ borderRadius: 2, minWidth: 160 }}
                            >
                                <MenuItem value="">Most Popular</MenuItem>
                                <MenuItem value="price_asc">Price: Low to High</MenuItem>
                                <MenuItem value="price_desc">Price: High to Low</MenuItem>
                                <MenuItem value="rating">Top Rated</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    <ProductGrid products={sortedProducts} />

                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default CategoryPage;