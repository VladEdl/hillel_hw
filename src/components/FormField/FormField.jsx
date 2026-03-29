import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormField = ({ label, name, type = 'text', as, error, ...props }) => (
    <Form.Group className="mb-3">
        <Form.Label className="fw-bold small">{label}</Form.Label>
        <Form.Control
            name={name}
            type={type}
            as={as}
            isInvalid={!!error}
            {...props}
        />
        <Form.Control.Feedback type="invalid">
            {error}
        </Form.Control.Feedback>
    </Form.Group>
);

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    as: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FormField;