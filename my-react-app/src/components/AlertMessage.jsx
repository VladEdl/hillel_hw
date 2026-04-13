import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const TYPE_MAP = { success: 'success', error: 'danger', warning: 'warning' };

const AlertMessage = ({ type = 'success', message, onClose }) => {
  if (!message) return null;
  return (
    <Alert variant={TYPE_MAP[type]} dismissible={!!onClose} onClose={onClose} className="mb-4">
      {message}
    </Alert>
  );
};

AlertMessage.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export default AlertMessage;
