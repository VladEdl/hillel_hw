import { Box, Typography, Button, Divider, InputBase, Dialog, DialogContent } from '@mui/material';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearCart } from '@store/cartSlice';

const DELIVERY_FEE = 15;
const DISCOUNT_PERCENT = 20;

const OrderSummary = ({ items }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const subtotal = Number((items.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2));
    const discount = Number((subtotal * DISCOUNT_PERCENT / 100).toFixed(2));
    const total = Number((subtotal - discount + DELIVERY_FEE).toFixed(2));

    const handleCheckout = () => {
        setOpen(true);
        setTimeout(() => {
            dispatch(clearCart());
            setOpen(false);
            navigate('/');
        }, 3000);
    };

    return (
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 3, p: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
                Order Summary
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography fontWeight="bold">${subtotal}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography color="text.secondary">Discount (-{DISCOUNT_PERCENT}%)</Typography>
                <Typography fontWeight="bold" color="error">-${discount}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography color="text.secondary">Delivery Fee</Typography>
                <Typography fontWeight="bold">${DELIVERY_FEE}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography fontWeight="bold">Total</Typography>
                <Typography fontWeight="bold" variant="h6">${total}</Typography>
            </Box>


            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 5,
                    px: 2,
                    gap: 1,
                }}>
                    <LocalOfferOutlinedIcon sx={{ color: '#888' }} />
                    <InputBase placeholder="Add promo code" fullWidth />
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 5,
                        backgroundColor: '#000',
                        '&:hover': { backgroundColor: '#333' },
                    }}
                >
                    Apply
                </Button>
            </Box>

            <Button
                variant="contained"
                fullWidth
                endIcon={<ArrowForwardIcon />}
                onClick={handleCheckout}
                sx={{
                    borderRadius: 5,
                    backgroundColor: '#000',
                    py: 1.5,
                    '&:hover': { backgroundColor: '#333' },
                }}
            >
                Go to Checkout
            </Button>


            <Dialog open={open} PaperProps={{ sx: { borderRadius: 3, p: 2 } }}>
                <DialogContent>
                    <Box sx={{ textAlign: 'center', py: 2 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
                        <Typography variant="h5" fontWeight="bold" mb={1}>
                            Order Placed!
                        </Typography>
                        <Typography color="text.secondary">
                            Thank you for your purchase. You will be redirected to the home page in 3 seconds.
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

OrderSummary.propTypes = {
    items: PropTypes.array.isRequired,
};

export default OrderSummary;