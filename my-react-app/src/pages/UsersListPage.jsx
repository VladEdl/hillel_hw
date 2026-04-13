import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, deleteUser } from '../api/users.js';
import PageHeader from '../components/PageHeader.jsx';
import UsersCards from '../components/UsersCards.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import AlertMessage from '../components/AlertMessage.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';

const UsersListPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);

  const [confirm, setConfirm] = useState({ show: false, id: null, name: '' });
  const [deleting, setDeleting] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  useEffect(() => {
    const saved = sessionStorage.getItem('um_alert');
    if (saved) {
      setAlert(JSON.parse(saved));
      sessionStorage.removeItem('um_alert');
    }
  }, []);

  const handleDeleteRequest = (id) => {
    const user = users.find((u) => u.id === id);
    setConfirm({ show: true, id, name: user?.name || `#${id}` });
  };

  const handleDeleteConfirm = async () => {
    setDeleting(true);
    try {
      await deleteUser(confirm.id);
      setUsers((prev) => prev.filter((u) => u.id !== confirm.id));
      setAlert({ type: 'success', message: `Користувача "${confirm.name}" успішно видалено.` });
    } catch (e) {
      setAlert({ type: 'error', message: e.message });
    } finally {
      setDeleting(false);
      setConfirm({ show: false, id: null, name: '' });
    }
  };

  return (
    <>
      <PageHeader
        title="Користувачі"
        subtitle={!loading && !error ? `${users.length} записів` : undefined}
        action={
          <button className="btn-primary-brand" onClick={() => navigate('/users/create')}>
            + Створити користувача
          </button>
        }
      />

      <AlertMessage
        type={alert?.type}
        message={alert?.message}
        onClose={() => setAlert(null)}
      />

      {loading && <Loader />}
      {!loading && error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <UsersCards users={users} onDelete={handleDeleteRequest} />
      )}

      <ConfirmModal
        show={confirm.show}
        title="Видалити користувача"
        body={`Ви впевнені, що хочете видалити "${confirm.name}"? Цю дію не можна скасувати.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirm({ show: false, id: null, name: '' })}
        loading={deleting}
      />
    </>
  );
};

export default UsersListPage;
