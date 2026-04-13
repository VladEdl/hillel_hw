import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center py-5">
      <h1 className="display-1 text-muted">404</h1>
      <h2 className="h4">Сторінку не знайдено</h2>
      <p className="text-muted mb-4">Схоже, цієї сторінки не існує або вона була переміщена.</p>
      <Button variant="primary" onClick={() => navigate('/users')}>Повернутись до списку</Button>
    </div>
  );
};

export default NotFoundPage;
