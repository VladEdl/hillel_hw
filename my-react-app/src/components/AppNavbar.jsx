import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
    <Container>
      <Navbar.Brand as={NavLink} to="/users">CRUD App</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/users" end>Всі користувачі</Nav.Link>
          <Nav.Link as={NavLink} to="/users/create">+ Створити</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
