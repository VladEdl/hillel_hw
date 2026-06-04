import { Box, Typography, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '@store/cartSlice';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 3,
            p: 2,
        }}>

            <Box
                component="img"
                src={item.thumbnail}
                alt={item.title}
                sx={{
                    width: 100,
                    height: 100,
                    objectFit: 'cover',
                    borderRadius: 2,
                    backgroundColor: '#f5f5f5',
                }}
            />


            <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography fontWeight="bold">{item.title}</Typography>
                    <IconButton
                        onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size }))}
                        sx={{ color: 'error.main' }}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </Box>

                <Typography variant="body2" color="text.secondary">
                    Size: {item.size}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    <Typography fontWeight="bold">${item.price.toFixed(2)}</Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 5,
                        px: 1,
                        gap: 1,
                    }}>
                        <IconButton
                            size="small"
                            onClick={() => dispatch(decreaseQuantity({ id: item.id, size: item.size }))}
                        >
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography fontWeight="bold">{item.quantity}</Typography>
                        <IconButton
                            size="small"
                            onClick={() => dispatch(increaseQuantity({ id: item.id, size: item.size }))}
                        >
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        size: PropTypes.string,
        quantity: PropTypes.number,
    }).isRequired,
};

export default CartItem;