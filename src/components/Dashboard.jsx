import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dash">
      <header className="dash__header">
        <h1 className="dash__title">Dashboard</h1>
        <button onClick={handleLogout} className="dash__logout">Logout</button>
      </header>

      <section className="dash__welcome">
        <h2>Hello, {user?.name || 'Student'}</h2>
        <p>Signed in as {user?.username}. Keep learning!</p>
      </section>

      <section className="dash__info">
        <h3>Account</h3>
        <ul className="dash__list">
          <li><span>Username</span><strong>{user?.username}</strong></li>
          <li><span>Email</span><strong>{user?.email}</strong></li>
          <li><span>ID</span><strong>{user?.id}</strong></li>
          <li><span>Status</span><strong className="ok">Active</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
