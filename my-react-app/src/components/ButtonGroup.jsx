import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ButtonGroup = ({ userId, onDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex gap-2 flex-wrap">
      <Button size="sm" variant="outline-secondary" onClick={() => navigate(`/users/${userId}`)}>
        View
      </Button>
      <Button size="sm" variant="outline-primary" onClick={() => navigate(`/users/${userId}/edit`)}>
        Edit
      </Button>
      <Button size="sm" variant="outline-danger" onClick={() => onDelete(userId)}>
        Delete
      </Button>
    </div>
  );
};

ButtonGroup.propTypes = {
  userId: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonGroup;
