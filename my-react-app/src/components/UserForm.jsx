import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Row, Col, Button } from 'react-bootstrap';
import userSchema from '../schemas/userSchema.js';

const INITIAL = {
  name: '', username: '', email: '', phone: '',
  website: '', city: '', street: '', companyName: '',
};

const TextField = ({ name, label, placeholder }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <div className="mb-3">
        <label className="form-label fw-semibold">{label}</label>
        <input
          {...field}
          placeholder={placeholder}
          className={`form-control${meta.touched && meta.error ? ' is-invalid' : ''}`}
        />
        {meta.touched && meta.error && (
          <div className="invalid-feedback">{meta.error}</div>
        )}
      </div>
    )}
  </Field>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

const UserForm = ({ initialValues, onSubmit, submitLabel = 'Зберегти', onCancel }) => (
  <Formik
    initialValues={{ ...INITIAL, ...initialValues }}
    validationSchema={userSchema}
    onSubmit={onSubmit}
    enableReinitialize
  >
    {({ isSubmitting }) => (
      <Form>
        <div className="card mb-4">
          <div className="card-body">
            <h6 className="card-subtitle mb-3 text-muted text-uppercase">Основна інформація</h6>
            <Row>
              <Col md={6}><TextField name="name" label="Ім'я" placeholder="John Doe" /></Col>
              <Col md={6}><TextField name="username" label="Нікнейм" placeholder="johndoe" /></Col>
              <Col md={6}><TextField name="email" label="Email" placeholder="john@example.com" /></Col>
              <Col md={6}><TextField name="phone" label="Телефон" placeholder="+380..." /></Col>
              <Col md={6}><TextField name="website" label="Веб-сайт" placeholder="example.com" /></Col>
            </Row>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h6 className="card-subtitle mb-3 text-muted text-uppercase">Адреса</h6>
            <Row>
              <Col md={6}><TextField name="city" label="Місто" placeholder="Kyiv" /></Col>
              <Col md={6}><TextField name="street" label="Вулиця" placeholder="Khreshchatyk St, 1" /></Col>
            </Row>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h6 className="card-subtitle mb-3 text-muted text-uppercase">Компанія</h6>
            <Row>
              <Col md={6}><TextField name="companyName" label="Назва компанії" placeholder="Acme Corp" /></Col>
            </Row>
          </div>
        </div>

        <div className="d-flex gap-2">
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Збереження...' : submitLabel}
          </Button>
          {onCancel && (
            <Button type="button" variant="outline-secondary" onClick={onCancel}>
              Скасувати
            </Button>
          )}
        </div>
      </Form>
    )}
  </Formik>
);

UserForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  onCancel: PropTypes.func,
};

export default UserForm;
