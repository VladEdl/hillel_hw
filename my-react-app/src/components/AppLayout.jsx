import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './AppNavbar.jsx';

const AppLayout = () => (
  <>
    <AppNavbar />
    <main className="main-content">
      <Container>
        <Outlet />
      </Container>
    </main>
  </>
);

export default AppLayout;
