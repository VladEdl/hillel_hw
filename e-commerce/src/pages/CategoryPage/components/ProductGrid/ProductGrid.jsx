import { Box, Typography } from '@mui/material';
import ProductCard from '@components/ProductCard';
import PropTypes from 'prop-types';

const ProductGrid = ({ products }) => {
    if (!products?.length) return (
        <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography color="text.secondary">No products found.</Typography>
        </Box>
    );

    return (
        <Box sx={{
            display: 'grid',

            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 3,
            margin: 5,
        }}>
            {products.map((product) => (
                <Box key={product.id} sx={{ minWidth: 0 }}>
                    <ProductCard product={product} />
                </Box>
            ))}
        </Box>
    );
};

ProductGrid.propTypes = {
    products: PropTypes.array,
};

export default ProductGrid;