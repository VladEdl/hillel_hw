import { Box, Container, Typography } from '@mui/material';
import { useGetProductsQuery } from '@store/productsApi';
import { useNavigate } from 'react-router';

const styles = [
    { label: 'Casual', category: 'tops' },
    { label: 'Formal', category: 'mens-shirts' },
    { label: 'Party', category: 'womens-jewellery' },
    { label: 'Gym', category: 'sports-accessories' },
];

const BrowseByStyle = () => {
    const navigate = useNavigate();
    const { data: casual } = useGetProductsQuery({ limit: 1, category: 'tops' });
    const { data: formal } = useGetProductsQuery({ limit: 1, category: 'mens-shirts' });
    const { data: party } = useGetProductsQuery({ limit: 1, category: 'womens-jewellery' });
    const { data: gym } = useGetProductsQuery({ limit: 1, category: 'sports-accessories' });

    const images = [
        casual?.products?.[0]?.thumbnail,
        formal?.products?.[0]?.thumbnail,
        party?.products?.[0]?.thumbnail,
        gym?.products?.[0]?.thumbnail,
    ];

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                    BROWSE BY DRESS STYLE
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 2,
                }}>
                    {styles.map(({ label, category }, index) => (
                        <Box
                            key={label}
                            onClick={() => navigate(`/category/${category}`)}
                            sx={{
                                borderRadius: 3,
                                height: 250,
                                display: 'flex',
                                alignItems: 'flex-start',
                                p: 3,
                                cursor: 'pointer',
                                backgroundImage: images[index] ? `url(${images[index]})` : 'none',
                                backgroundSize: '80%',
                                backgroundPosition: 'center',
                                backgroundColor: '#e0e0e0',
                                '&:hover': { opacity: 0.9 },
                                transition: 'opacity 0.2s',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.8)',
                                    px: 1.5,
                                    borderRadius: 2,
                                }}
                            >
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default BrowseByStyle;