import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import BrowseByStyle from './components/BrowseByStyle';
import HappyCustomers from './components/HappyCustomers';

const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <BrandsSection />
            <NewArrivals />
            <TopSelling />
            <BrowseByStyle />
            <HappyCustomers />
        </Box>
    );
};

export default HomePage;