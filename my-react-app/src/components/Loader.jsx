import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const Loader = ({ text = 'Завантаження...' }) => (
  <div className="d-flex flex-column align-items-center justify-content-center py-5 gap-3">
    <Spinner animation="border" variant="primary" />
    <p className="text-muted">{text}</p>
  </div>
);

Loader.propTypes = { text: PropTypes.string };

export default Loader;
