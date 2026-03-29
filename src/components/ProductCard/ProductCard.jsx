import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, onDelete, onToggleStatus }) => {
    const displayPrice = product.discountPrice ? product.discountPrice : product.price;
    const hasDiscount = !!product.discountPrice;

    return (
        <Card className={`${styles.card} ${!product.isActive ? styles.inactive : ''} h-100 shadow-sm`}>
            <div className={styles.imageWrapper} style={{ height: '180px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
                <Card.Img
                    variant="top"
                    src={product.mainImage}
                    alt={product.name}
                    style={{ objectFit: 'contain', maxHeight: '100%' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image' }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="h6 mb-0 text-truncate" style={{ maxWidth: '140px' }}>
                        {product.name}
                    </Card.Title>
                    <Badge bg={product.isActive ? "success" : "secondary"}>
                        {product.isActive ? 'Active' : 'Draft'}
                    </Badge>
                </div>

                <Card.Text className="small text-muted text-truncate mb-2">
                    {product.description}
                </Card.Text>

                <div className="mt-auto mb-3">
                    <span className="h5 fw-bold text-dark me-2">
                        {displayPrice} UAH
                    </span>
                    {hasDiscount && (
                        <del className="text-danger small">
                            {product.price} UAH
                        </del>
                    )}
                </div>

                <div className="d-flex gap-2">
                    <Button
                        size="sm"
                        variant={product.isActive ? "outline-secondary" : "outline-success"}
                        onClick={() => onToggleStatus(product.id)}
                        className="flex-grow-1"
                    >
                        {product.isActive ? 'Deactivate' : 'Activate'}
                    </Button>
                    <Button
                        size="sm"
                        variant="danger"
                        onClick={() => onDelete(product.id)}
                    >
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        discountPrice: PropTypes.number,
        mainImage: PropTypes.string,
        isActive: PropTypes.bool,
        sku: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleStatus: PropTypes.func.isRequired,
};

export default ProductCard;