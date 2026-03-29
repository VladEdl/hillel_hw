import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

const App = () => {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('products_db');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('products_db', JSON.stringify(products));
    }, [products]);

    const handleAddProduct = (product) => setProducts([product, ...products]);

    const handleDeleteProduct = (id) => setProducts(products.filter(p => p.id !== id));

    const handleToggleStatus = (id) => {
        setProducts(products.map(p =>
            p.id === id ? { ...p, isActive: !p.isActive } : p
        ));
    };

    return (
        <div className="app-wrapper bg-light min-vh-100">
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Container>
                    <Navbar.Brand>Shop Admin Panel</Navbar.Brand>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col lg={5} className="mb-4">
                        <h4 className="mb-3">Новий товар</h4>
                        <ProductForm onSubmit={handleAddProduct} />
                    </Col>
                    <Col lg={7}>
                        <h4 className="mb-3">Товари в системі</h4>
                        <ProductList
                            products={products}
                            onDelete={handleDeleteProduct}
                            onToggleStatus={handleToggleStatus}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;