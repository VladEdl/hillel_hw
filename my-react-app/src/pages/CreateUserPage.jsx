import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { createUser } from '../api/users.js';
import PageHeader from '../components/PageHeader.jsx';
import UserForm from '../components/UserForm.jsx';

const CreateUserPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await createUser({
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
        message: `Користувача "${values.name}" успішно створено!`,
      }));
      navigate('/users');
    } catch (e) {
      alert(`Помилка: ${e.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Новий користувач"
        subtitle="Заповніть форму для створення"
        action={<Button variant="outline-secondary" onClick={() => navigate('/users')}>Назад</Button>}
      />
      <UserForm onSubmit={handleSubmit} submitLabel="Створити користувача" onCancel={() => navigate('/users')} />
    </>
  );
};

export default CreateUserPage;
