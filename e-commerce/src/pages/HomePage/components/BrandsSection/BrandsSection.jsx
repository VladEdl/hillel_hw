import { Box, Container, Typography } from '@mui/material';

const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

const BrandsSection = () => {
    return (
        <Box sx={{ backgroundColor: '#000', py: 3 }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 3,
                }}>
                    {brands.map((brand) => (
                        <Typography
                            key={brand}
                            variant="h5"
                            fontWeight="bold"
                            color="#fff"
                            sx={{color: '#fff', cursor: 'pointer', '&:hover': { opacity: 0.7 } }}
                        >
                            {brand}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default BrandsSection;