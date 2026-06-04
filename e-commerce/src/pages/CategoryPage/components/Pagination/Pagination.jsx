import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PropTypes from 'prop-types';

const Pagination = ({ page, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 4,
            pt: 2,
            borderTop: '1px solid #e0e0e0',
        }}>
            <Button
                variant="outlined"
                startIcon={<ArrowBackIosNewIcon fontSize="small" />}
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                sx={{
                    borderRadius: 2,
                    color: '#000',
                    borderColor: '#e0e0e0',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                }}
            >
                Previous
            </Button>

            <Box sx={{ display: 'flex', gap: 1 }}>
                {pages.map((p) => (
                    <Box
                        key={p}
                        onClick={() => onPageChange(p)}
                        sx={{
                            width: 36,
                            height: 36,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 2,
                            cursor: 'pointer',
                            backgroundColor: page === p ? '#000' : 'transparent',
                            color: page === p ? '#fff' : '#000',
                            '&:hover': { backgroundColor: page === p ? '#000' : '#f5f5f5' },
                        }}
                    >
                        <Typography variant="body2">{p}</Typography>
                    </Box>
                ))}
            </Box>

            <Button
                variant="outlined"
                endIcon={<ArrowForwardIosIcon fontSize="small" />}
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
                sx={{
                    borderRadius: 2,
                    color: '#000',
                    borderColor: '#e0e0e0',
                    '&:hover': { backgroundColor: '#f5f5f5' },
                }}
            >
                Next
            </Button>
        </Box>
    );
};

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;