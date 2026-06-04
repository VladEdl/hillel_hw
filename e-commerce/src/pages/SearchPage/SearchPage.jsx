import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { useSearchProductsQuery } from '@store/productsApi';
import { useLocation } from 'react-router';
import ProductCard from '@components/ProductCard';

const SearchPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';

    const { data, isLoading, isError } = useSearchProductsQuery(query, {
        skip: !query,
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

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="body2" color="text.secondary" mb={2}>
                Home / <strong>Search</strong>
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Results for "{query}"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data?.products?.length || 0} products found
                </Typography>
            </Box>

            {data?.products?.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography color="text.secondary">
                        No products found for "{query}"
                    </Typography>
                </Box>
            )}

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: { xs: 1, md: 3 },
            }}>
                {data?.products?.map((product) => (
                    <Box key={product.id} sx={{ minWidth: 0 }}>
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default SearchPage;