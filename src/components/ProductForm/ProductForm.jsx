import React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormField from '../FormField/FormField';
import validationSchema from '../Validation/Validation';

const ProductForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            discountPrice: '',
            category: '',
            brand: '',
            sku: '',
            quantity: 0,
            mainImage: '',
            isActive: true,
            inStock: true,
            showOnMain: false
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            onSubmit({
                ...values,
                id: Date.now(),
                price: Number(values.price),
                discountPrice: values.discountPrice ? Number(values.discountPrice) : null
            });
            resetForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="p-4 border rounded bg-white shadow-sm">
            <FormField
                label="Назва товару"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
            />

            <FormField
                label="Опис"
                name="description"
                as="textarea"
                rows={3}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && formik.errors.description}
            />

            <Row>
                <Col md={6}>
                    <FormField
                        label="Ціна (UAH)"
                        name="price"
                        type="number"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.price && formik.errors.price}
                    />
                </Col>
                <Col md={6}>
                    <FormField
                        label="Ціна зі знижкою"
                        name="discountPrice"
                        type="number"
                        value={formik.values.discountPrice}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.discountPrice && formik.errors.discountPrice}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormField
                        label="Категорія"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.category && formik.errors.category}
                    />
                </Col>
                <Col md={6}>
                    <FormField
                        label="Бренд"
                        name="brand"
                        value={formik.values.brand}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.brand && formik.errors.brand}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormField
                        label="SKU / Артикул"
                        name="sku"
                        value={formik.values.sku}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.sku && formik.errors.sku}
                    />
                </Col>
                <Col md={6}>
                    <FormField
                        label="Кількість"
                        name="quantity"
                        type="number"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.quantity && formik.errors.quantity}
                    />
                </Col>
            </Row>

            <FormField
                label="URL головного зображення"
                name="mainImage"
                value={formik.values.mainImage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mainImage && formik.errors.mainImage}
            />

            <div className="mb-3">
                <Form.Check
                    type="switch"
                    id="isActive"
                    name="isActive"
                    label="Товар активний"
                    checked={formik.values.isActive}
                    onChange={formik.handleChange}
                />
                <Form.Check
                    type="checkbox"
                    id="inStock"
                    name="inStock"
                    label="В наявності"
                    checked={formik.values.inStock}
                    onChange={formik.handleChange}
                />
                <Form.Check
                    type="checkbox"
                    id="showOnMain"
                    name="showOnMain"
                    label="Показувати на головній"
                    checked={formik.values.showOnMain}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="d-flex gap-2">
                <Button type="submit" variant="primary" className="w-100">
                    Створити товар
                </Button>
                <Button type="button" variant="outline-secondary" onClick={formik.handleReset}>
                    Очистити
                </Button>
            </div>
        </Form>
    );
};

ProductForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;