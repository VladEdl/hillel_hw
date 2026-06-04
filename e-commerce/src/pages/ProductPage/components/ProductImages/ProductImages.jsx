import { Box } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductImages = ({ product }) => {
    const [selected, setSelected] = useState(0);

    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                gap: 1,
                order: { xs: 2, md: 1 },
            }}>
                {product?.images?.map((img, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelected(index)}
                        component="img"
                        src={img}
                        sx={{
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            objectFit: 'cover',
                            borderRadius: 2,
                            cursor: 'pointer',
                            border: selected === index ? '2px solid #000' : '2px solid transparent',
                            opacity: selected === index ? 1 : 0.6,
                        }}
                    />
                ))}
            </Box>


            <Box
                component="img"
                src={product?.images?.[selected]}
                alt={product?.title}
                sx={{
                    width: { xs: '100%', md: 400 },
                    height: { xs: 300, md: 500 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    order: { xs: 1, md: 2 },
                }}
            />
        </Box>
    );
};

ProductImages.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductImages;