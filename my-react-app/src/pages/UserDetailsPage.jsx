import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getUserById } from '../api/users.js';
import PageHeader from '../components/PageHeader.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

const Field = ({ label, value }) => (
  <div className="mb-3">
    <small className="text-muted text-uppercase fw-semibold">{label}</small>
    <p className="mb-0">{value || '—'}</p>
  </div>
);

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserById(id)
      .then(setUser)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return null;

  return (
    <>
      <PageHeader
        title={user.name}
        subtitle={`@${user.username}`}
        action={
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" onClick={() => navigate('/users')}>Назад до списку</Button>
            <Button variant="primary" onClick={() => navigate(`/users/${id}/edit`)}>Редагувати</Button>
          </div>
        }
      />
      <Card>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6 className="text-muted text-uppercase mb-3">Контакти</h6>
              <Field label="Email" value={user.email} />
              <Field label="Телефон" value={user.phone} />
              <Field label="Веб-сайт" value={user.website} />
            </Col>
            <Col md={6}>
              <h6 className="text-muted text-uppercase mb-3">Адреса</h6>
              <Field label="Місто" value={user.address?.city} />
              <Field label="Вулиця" value={user.address?.street} />
            </Col>
            <Col md={6} className="mt-3">
              <h6 className="text-muted text-uppercase mb-3">Компанія</h6>
              <Field label="Назва" value={user.company?.name} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserDetailsPage;
