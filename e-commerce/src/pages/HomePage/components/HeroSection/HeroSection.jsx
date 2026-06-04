import { Box, Button, Container, Typography } from '@mui/material';

const stats = [
    { value: '200+', label: 'International Brands' },
    { value: '2,000+', label: 'High-Quality Products' },
    { value: '30,000+', label: 'Happy Customers' },
];

const HeroSection = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5' }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: { xs: 4, md: 8 },
                    gap: 4,
                }}>

                    <Box sx={{ maxWidth: { xs: '100%', md: 500 } }}>
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            lineHeight={1.1}
                            mb={3}
                            sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' } }}
                        >
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={4}>
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth={false}
                            sx={{
                                backgroundColor: '#000',
                                borderRadius: 5,
                                px: 5,
                                width: { xs: '100%', md: 'auto' },
                                '&:hover': { backgroundColor: '#333' },
                            }}
                        >
                            Shop Now
                        </Button>


                        <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, mt: 6, flexWrap: 'wrap' }}>
                            {stats.map((stat) => (
                                <Box key={stat.value}>
                                    <Typography variant="h5" fontWeight="bold">{stat.value}</Typography>
                                    <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>


                    <Box sx={{
                        width: { xs: '100%', md: 400 },
                        height: { xs: 300, md: 450 },
                        backgroundColor: '#e0e0e0',
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}>
                        <Typography color="text.secondary">Hero Image</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;