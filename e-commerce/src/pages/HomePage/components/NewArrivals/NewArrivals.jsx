import { Box, Container, Typography, Button, CircularProgress } from '@mui/material';
import ProductCard from '@components/ProductCard';
import { useGetProductsQuery } from '@store/productsApi';
import { useState } from 'react';

const CATEGORY = 'beauty';
const INITIAL_LIMIT = 4;

const NewArrivals = () => {
    const [showAll, setShowAll] = useState(false);

    const { data: initialData, isLoading, isError } = useGetProductsQuery({
        limit: INITIAL_LIMIT,
        category: CATEGORY,
    });

    const { data: allData, isLoading: isLoadingAll } = useGetProductsQuery(
        { limit: 100, category: CATEGORY },
        { skip: !showAll }
    );

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

    const products = showAll ? allData?.products : initialData?.products;

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                NEW ARRIVALS
            </Typography>

            {isLoadingAll ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
                    gap: { xs: 1, md: 3 },
                }}>
                    {products?.map((product) => (
                        <Box key={product.id} sx={{ minWidth: 0 }}>
                            <ProductCard product={product} />
                        </Box>
                    ))}
                </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Button
                    variant="outlined"
                    onClick={() => setShowAll((prev) => !prev)}
                    sx={{
                        borderRadius: 5,
                        px: 5,
                        color: '#000',
                        borderColor: '#000',
                        '&:hover': { backgroundColor: '#f5f5f5' },
                    }}
                >
                    {showAll ? 'Hide' : 'View All'}
                </Button>
            </Box>
        </Container>
    );
};

export default NewArrivals;