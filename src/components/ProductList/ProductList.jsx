import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, onDelete, onToggleStatus }) => {
    if (products.length === 0) {
        return <div className="text-center p-5 border rounded bg-light">Список товарів порожній</div>;
    }

    return (
        <Row xs={1} md={2} className="g-4">
            {products.map((product) => (
                <Col key={product.id}>
                    <ProductCard
                        product={product}
                        onDelete={onDelete}
                        onToggleStatus={onToggleStatus}
                    />
                </Col>
            ))}
        </Row>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleStatus: PropTypes.func.isRequired,
};

export default ProductList;