import { Outlet } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ScrollToTop from '@components/ScrollToTop';
import { Box } from '@mui/material';

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ScrollToTop />
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;