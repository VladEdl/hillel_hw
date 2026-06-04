import { Box, Card, CardMedia, CardContent, Typography, Rating } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <Card
            onClick={() => navigate(`/product/${product.id}`)}
            sx={{
                borderRadius: 3,
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                cursor: 'pointer',
                '&:hover': { boxShadow: 3 },
                transition: 'box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}>
            <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.title}
                sx={{
                    width: '100%',
                    height: { xs: 150, md: 250 },
                    objectFit: 'contain',
                    backgroundColor: '#f9f9f9',
                    p: 1
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography fontWeight="bold" noWrap>{product.title}</Typography>
                <Rating value={product.rating} precision={0.5} readOnly size="small" />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <Typography fontWeight="bold">${product.price}</Typography>
                    {product.discountPercentage > 0 && (
                        <>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ textDecoration: 'line-through' }}
                            >
                                ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                            </Typography>
                            <Typography variant="body2" color="error">
                                -{Math.round(product.discountPercentage)}%
                            </Typography>
                        </>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.number,
        price: PropTypes.number,
        discountPercentage: PropTypes.number,
    }).isRequired,
};

export default ProductCard;