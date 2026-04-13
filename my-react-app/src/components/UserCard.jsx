import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';
import ButtonGroup from './ButtonGroup.jsx';

const UserCard = ({ user, onDelete }) => (
  <Col xs={12} sm={6} xl={4} className="mb-4">
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">@{user.username}</Card.Subtitle>
        <hr />
        <p className="mb-1 small">{user.email}</p>
        <p className="mb-1 small">{user.phone}</p>
        <p className="mb-3 small">{user.website}</p>
        <ButtonGroup userId={user.id} onDelete={onDelete} />
      </Card.Body>
    </Card>
  </Col>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;
