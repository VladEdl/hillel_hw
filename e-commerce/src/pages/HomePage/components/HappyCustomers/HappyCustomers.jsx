import { Box, Container, Typography, Rating, IconButton, CircularProgress } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { useGetCommentsQuery } from '@store/productsApi';

const VISIBLE_COUNT = 3;

const HappyCustomers = () => {
    const [startIndex, setStartIndex] = useState(0);
    const { data, isLoading, isError } = useGetCommentsQuery({ limit: 10 });

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 1, (data?.comments?.length || 0) - VISIBLE_COUNT));
    };

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
        </Box>
    );

    if (isError) return (
        <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography color="error">Something went wrong. Please try again.</Typography>
        </Box>
    );

    const visibleReviews = data?.comments?.slice(startIndex, startIndex + VISIBLE_COUNT);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                    OUR HAPPY CUSTOMERS
                </Typography>
                <Box>
                    <IconButton onClick={handlePrev} disabled={startIndex === 0}>
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={handleNext}
                        disabled={startIndex >= (data?.comments?.length || 0) - VISIBLE_COUNT}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 3,
            }}>
                {visibleReviews?.map((review) => (
                    <Box
                        key={review.id}
                        sx={{
                            border: '1px solid #e0e0e0',
                            borderRadius: 3,
                            p: 3,
                        }}
                    >
                        <Rating value={review.likes} readOnly size="small" />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1 }}>
                            <Typography fontWeight="bold">{review.user.fullName}</Typography>
                            <Typography color="success.main">✓</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {review.body}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default HappyCustomers;