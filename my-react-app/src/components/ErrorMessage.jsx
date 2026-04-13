import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const ErrorMessage = ({ message = 'Сталася помилка. Спробуйте ще раз.' }) => (
  <Alert variant="danger">{message}</Alert>
);

ErrorMessage.propTypes = { message: PropTypes.string };

export default ErrorMessage;
