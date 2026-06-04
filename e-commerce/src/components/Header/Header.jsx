import { AppBar, Toolbar, Typography, Box, IconButton, InputBase, Container, Drawer, List, ListItem, ListItemText, Badge, Menu, MenuItem } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '@store/productsApi';

const navLinks = [
    { label: 'On Sale', path: '/category/groceries' },
    { label: 'New Arrivals', path: '/category/tops' },
    { label: 'Brands', path: '/' },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [shopAnchor, setShopAnchor] = useState(null);
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const { data: categories } = useGetCategoriesQuery();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && search.trim()) {
            navigate(`/search?q=${search.trim()}`);
            setSearch('');
        }
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 1 }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ gap: 2, py: 1 }}>
                    <IconButton
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ flexShrink: 0, cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        SHOP.CO
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mx: 3, alignItems: 'center' }}>

                        <Box
                            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                            onClick={(e) => setShopAnchor(e.currentTarget)}
                        >
                            <Typography sx={{ '&:hover': { textDecoration: 'underline' } }}>
                                Shop
                            </Typography>
                            <KeyboardArrowDownIcon fontSize="small" />
                        </Box>

                        <Menu
                            anchorEl={shopAnchor}
                            open={Boolean(shopAnchor)}
                            onClose={() => setShopAnchor(null)}
                            PaperProps={{
                                sx: {
                                    maxHeight: 400,
                                    width: 220,
                                    mt: 1,
                                }
                            }}
                        >
                            {categories?.map((cat) => (
                                <MenuItem
                                    key={cat.slug}
                                    onClick={() => {
                                        navigate(`/category/${cat.slug}`);
                                        setShopAnchor(null);
                                    }}
                                    sx={{ textTransform: 'capitalize' }}
                                >
                                    {cat.name}
                                </MenuItem>
                            ))}
                        </Menu>

                        {navLinks.map((link) => (
                            <Typography
                                key={link.label}
                                onClick={() => navigate(link.path)}
                                sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{
                        flex: 1,
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 5,
                        px: 2,
                        py: 0.5,
                    }}>
                        <SearchIcon sx={{ color: '#888', mr: 1 }} />
                        <InputBase
                            placeholder="Search for products..."
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', ml: 'auto' }}>
                        <IconButton onClick={() => navigate('/cart')}>
                            <Badge badgeContent={cartCount} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={() => navigate('/login')}>
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{ width: 250, pt: 2 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ px: 2, mb: 2 }}>
                        SHOP.CO
                    </Typography>
                    <List>
                        <ListItem
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {
                                navigate('/category/tops');
                                setDrawerOpen(false);
                            }}
                        >
                            <ListItemText primary="Shop" />
                        </ListItem>
                        {navLinks.map((link) => (
                            <ListItem
                                key={link.label}
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate(link.path);
                                    setDrawerOpen(false);
                                }}
                            >
                                <ListItemText primary={link.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;