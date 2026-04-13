import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import UserCard from './UserCard.jsx';

const UsersCards = ({ users, onDelete }) => (
  <Row>
    {users.map((user) => (
      <UserCard key={user.id} user={user} onDelete={onDelete} />
    ))}
  </Row>
);

UsersCards.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UsersCards;
