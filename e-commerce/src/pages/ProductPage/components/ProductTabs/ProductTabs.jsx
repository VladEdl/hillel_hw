import { Box, Typography, Tabs, Tab, Rating, Divider } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductTabs = ({ product }) => {
    const [tab, setTab] = useState(0);

    return (
        <Box sx={{ mb: 6 }}>
            <Tabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                centered
                sx={{
                    borderBottom: '1px solid #e0e0e0',
                    '& .MuiTab-root': { color: '#888' },
                    '& .Mui-selected': { color: '#000' },
                    '& .MuiTabs-indicator': { backgroundColor: '#000' },
                }}
            >
                <Tab label="Product Details" />
                <Tab label="Rating & Reviews" />
                <Tab label="FAQs" />
            </Tabs>


            {tab === 0 && (
                <Box sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography><strong>Brand:</strong> {product.brand}</Typography>
                        <Typography><strong>Category:</strong> {product.category}</Typography>
                        <Typography><strong>Stock:</strong> {product.stock}</Typography>
                        <Typography><strong>SKU:</strong> {product.sku}</Typography>
                    </Box>
                </Box>
            )}


            {tab === 1 && (
                <Box sx={{ py: 4 }}>
                    {product.reviews?.length > 0 ? (
                        product.reviews.map((review, index) => (
                            <Box key={index}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Rating value={review.rating} readOnly size="small" />
                                    <Typography fontWeight="bold">{review.reviewerName}</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" mb={1}>
                                    {review.comment}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {new Date(review.date).toLocaleDateString()}
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                            </Box>
                        ))
                    ) : (
                        <Typography color="text.secondary">No reviews yet.</Typography>
                    )}
                </Box>
            )}


            {tab === 2 && (
                <Box sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                        No FAQs available for this product.
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

ProductTabs.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductTabs;