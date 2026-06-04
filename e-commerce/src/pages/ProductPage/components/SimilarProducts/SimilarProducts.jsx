import { Box, Container, Typography, CircularProgress } from '@mui/material';
import ProductCard from '@components/ProductCard';
import { useGetProductsQuery } from '@store/productsApi';
import PropTypes from 'prop-types';

const SimilarProducts = ({ category, currentId }) => {
    const { data, isLoading } = useGetProductsQuery({ limit: 8, category });

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
        </Box>
    );

    const filtered = data?.products?.filter((p) => p.id !== currentId);

    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                YOU MIGHT ALSO LIKE
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: { xs: 1, md: 3 },
            }}>
                {filtered?.slice(0, 4).map((product) => (
                    <Box key={product.id} sx={{ minWidth: 0 }}>
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

SimilarProducts.propTypes = {
    category: PropTypes.string,
    currentId: PropTypes.number,
};

export default SimilarProducts;