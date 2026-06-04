import { Box, Typography, Divider, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large'];
const dressStyles = [
    { label: 'Casual', slug: 'tops' },
    { label: 'Formal', slug: 'mens-shirts' },
    { label: 'Party', slug: 'womens-jewellery' },
    { label: 'Gym', slug: 'sports-accessories' },
];
const colors = [
    '#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5',
    '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000'
];
const categories = [

    { label: 'Shirts', slug: 'mens-shirts' },
    { label: 'Dresses', slug: 'womens-dresses' },
    { label: 'Jewellery', slug: 'womens-jewellery' },
    { label: 'Bags', slug: 'womens-bags' },
];

const Filters = ({
                     selectedSize, setSelectedSize,
                     selectedColor, setSelectedColor,
                     onApply,
                 }) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Typography fontWeight="bold" variant="h6">Filters</Typography>
            </Box>

            <Divider />


            {categories.map((cat) => (
                <Box key={cat.slug}>
                    <Box
                        onClick={() => navigate(`/category/${cat.slug}`)}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 2,
                            py: 1.5,
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: '#f5f5f5' },
                        }}
                    >
                        <Typography variant="body2">{cat.label}</Typography>
                        <ChevronRightIcon fontSize="small" sx={{ color: '#888' }} />
                    </Box>
                    <Divider />
                </Box>
            ))}


            <Accordion disableGutters elevation={0} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Colors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {colors.map((color) => (
                            <Box
                                key={color}
                                onClick={() => setSelectedColor(color === selectedColor ? '' : color)}
                                sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    backgroundColor: color,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: color === '#FFFFFF' ? '1px solid #e0e0e0' : 'none',
                                    outline: selectedColor === color ? '2px solid #000' : 'none',
                                    outlineOffset: 2,
                                }}
                            >
                                {selectedColor === color && (
                                    <CheckIcon sx={{
                                        color: color === '#FFFFFF' || color === '#F5DD06' ? '#000' : '#fff',
                                        fontSize: 16
                                    }} />
                                )}
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Divider />


            <Accordion disableGutters elevation={0} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Size</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {sizes.map((size) => (
                            <Box
                                key={size}
                                onClick={() => setSelectedSize(size === selectedSize ? '' : size)}
                                sx={{
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 4,
                                    cursor: 'pointer',
                                    fontSize: '0.8rem',
                                    backgroundColor: selectedSize === size ? '#000' : '#f0f0f0',
                                    color: selectedSize === size ? '#fff' : '#000',
                                }}
                            >
                                {size}
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Divider />


            <Accordion disableGutters elevation={0} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Dress Style</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {dressStyles.map((style) => (
                        <Box key={style.slug}>
                            <Box
                                onClick={() => navigate(`/category/${style.slug}`)}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    py: 1,
                                    cursor: 'pointer',
                                    '&:hover': { backgroundColor: '#f5f5f5' },
                                }}
                            >
                                <Typography variant="body2">{style.label}</Typography>
                                <ChevronRightIcon fontSize="small" sx={{ color: '#888' }} />
                            </Box>
                            <Divider />
                        </Box>
                    ))}
                </AccordionDetails>
            </Accordion>

            <Box sx={{ p: 2 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={onApply}
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                        borderRadius: 8,
                        textTransform: 'none',
                        py: 1.5,
                        '&:hover': { backgroundColor: '#333' }
                    }}
                >
                    Apply Filter
                </Button>
            </Box>
        </Box>
    );
};

Filters.propTypes = {
    selectedSize: PropTypes.string,
    setSelectedSize: PropTypes.func,
    selectedColor: PropTypes.string,
    setSelectedColor: PropTypes.func,
    onApply: PropTypes.func,
};

export default Filters;