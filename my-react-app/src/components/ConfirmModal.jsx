import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, title, body, onConfirm, onCancel, loading }) => (
  <Modal show={show} onHide={onCancel} centered>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onCancel} disabled={loading}>Скасувати</Button>
      <Button variant="danger" onClick={onConfirm} disabled={loading}>
        {loading ? 'Видалення...' : 'Видалити'}
      </Button>
    </Modal.Footer>
  </Modal>
);

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default ConfirmModal;
