import { Box, Container, Typography, InputBase, Button } from '@mui/material';

const footerLinks = {
    Company: ['About', 'Features', 'Works', 'Career'],
    Help: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
    FAQ: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    Resources: ['Free eBooks', 'Development Tutorial', 'Blog', 'YouTube Playlist'],
};

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', mt: 8 }}>
            <Container maxWidth="lg" sx={{ py: 6 }}>


                <Box sx={{
                    backgroundColor: '#000',
                    borderRadius: 3,
                    p: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 6,
                    gap: 2,
                    flexWrap: 'wrap',
                }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ maxWidth: 400, color: '#fff' }}>
                        STAY UP TO DATE ABOUT OUR LATEST OFFERS
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            px: 2,
                            py: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: 250,
                        }}>
                            <InputBase placeholder="Enter your email address" fullWidth />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 5,
                                backgroundColor: '#fff',
                                color: '#000',
                                '&:hover': { backgroundColor: '#e0e0e0' },
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Subscribe to Newsletter
                        </Button>
                    </Box>
                </Box>


                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(5, 1fr)' },
                    gap: 4,
                    mt: 4,
                }}>
                    <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' }, maxWidth: 200 }}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>SHOP.CO</Typography>
                        <Typography variant="body2" color="text.secondary">
                            We have clothes that suits your style and which you're proud to wear.
                        </Typography>
                    </Box>
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <Box key={section}>
                            <Typography fontWeight="bold" mb={2}>{section}</Typography>
                            {links.map((link) => (
                                <Typography
                                    key={link}
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    ))}
                </Box>

                <Typography variant="body2" color="text.secondary" textAlign="center" mt={4}>
                    © 2024 SHOP.CO. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;