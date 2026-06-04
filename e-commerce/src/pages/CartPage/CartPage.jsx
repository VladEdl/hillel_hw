import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';

const CartPage = () => {
    const items = useSelector((state) => state.cart.items);

    if (items.length === 0) return (
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
                YOUR CART
            </Typography>
            <Typography color="text.secondary">Your cart is empty.</Typography>
        </Container>
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="body2" color="text.secondary" mb={2}>
                Home / <strong>Cart</strong>
            </Typography>

            <Typography variant="h4" fontWeight="bold" mb={4}>
                YOUR CART
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
            }}>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {items.map((item) => (
                        <CartItem key={`${item.id}-${item.size}`} item={item} />
                    ))}
                </Box>


                <Box sx={{ width: { xs: '100%', md: 350 }, flexShrink: 0 }}>
                    <OrderSummary items={items} />
                </Box>
            </Box>
        </Container>
    );
};

export default CartPage;