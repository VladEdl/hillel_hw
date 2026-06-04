import { Box, Typography, Rating, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '@store/cartSlice';
import { useNavigate } from 'react-router';

const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Large');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const originalPrice = Math.round(product.price / (1 - product.discountPercentage / 100));

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            size: selectedSize,
            quantity,
        }));
    };

    return (
        <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" mb={1}>
                {product.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Rating value={product.rating} precision={0.5} readOnly size="small" />
                <Typography variant="body2" color="text.secondary">
                    {product.rating}/5
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                    ${product.price}
                </Typography>
                <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                >
                    ${originalPrice}
                </Typography>
                <Typography
                    variant="body1"
                    color="error"
                    sx={{
                        backgroundColor: '#ffe0e0',
                        px: 1,
                        borderRadius: 2,
                    }}
                >
                    -{Math.round(product.discountPercentage)}%
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" color="text.secondary" mb={2}>
                {product.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight="bold" mb={1}>Choose Size</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                {sizes.map((size) => (
                    <Button
                        key={size}
                        variant={selectedSize === size ? 'contained' : 'outlined'}
                        onClick={() => setSelectedSize(size)}
                        sx={{
                            borderRadius: 5,
                            color: selectedSize === size ? '#fff' : '#000',
                            backgroundColor: selectedSize === size ? '#000' : 'transparent',
                            borderColor: '#000',
                            '&:hover': {
                                backgroundColor: selectedSize === size ? '#333' : '#f5f5f5',
                            },
                        }}
                    >
                        {size}
                    </Button>
                ))}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 5,
                    px: 2,
                    py: 1,
                    gap: 2,
                }}>
                    <RemoveIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    />
                    <Typography fontWeight="bold">{quantity}</Typography>
                    <AddIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={() => setQuantity((prev) => prev + 1)}
                    />
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleAddToCart}
                    sx={{
                        borderRadius: 5,
                        backgroundColor: '#000',
                        py: 1.5,
                        '&:hover': { backgroundColor: '#333' },
                    }}
                >
                    Add to Cart
                </Button>
            </Box>
        </Box>
    );
};

ProductInfo.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductInfo;