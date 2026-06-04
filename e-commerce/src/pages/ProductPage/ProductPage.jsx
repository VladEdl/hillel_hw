import { Box, Container, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '@store/productsApi';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';
import SimilarProducts from './components/SimilarProducts';

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

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

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                mb: 6,
            }}>
                <ProductImages product={product} />
                <ProductInfo product={product} />
            </Box>


            <ProductTabs product={product} />


            <SimilarProducts category={product?.category} currentId={product?.id} />
        </Container>
    );
};

export default ProductPage;