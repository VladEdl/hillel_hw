import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getUserById, updateUser } from '../api/users.js';
import PageHeader from '../components/PageHeader.jsx';
import UserForm from '../components/UserForm.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

const EditUserPage = () => {
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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await updateUser(id, {
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        website: values.website,
        address: { city: values.city, street: values.street },
        company: { name: values.companyName },
      });
      sessionStorage.setItem('um_alert', JSON.stringify({
        type: 'success',
        message: `Користувача "${values.name}" успішно оновлено!`,
      }));
      navigate('/users');
    } catch (e) {
      alert(`Помилка: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader text="Завантаження даних користувача..." />;
  if (error) return <ErrorMessage message={error} />;

  const initialValues = {
    name: user?.name || '',
    username: user?.username || '',
    email: user?.email || '',
    phone: user?.phone || '',
    website: user?.website || '',
    city: user?.address?.city || '',
    street: user?.address?.street || '',
    companyName: user?.company?.name || '',
  };

  return (
    <>
      <PageHeader
        title={`Редагувати: ${user?.name}`}
        subtitle="Змініть потрібні поля та збережіть"
        action={
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" onClick={() => navigate(`/users/${id}`)}>Деталі</Button>
            <Button variant="outline-secondary" onClick={() => navigate('/users')}>Всі користувачі</Button>
          </div>
        }
      />
      <UserForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitLabel="Зберегти зміни"
        onCancel={() => navigate(`/users/${id}`)}
      />
    </>
  );
};

export default EditUserPage;
