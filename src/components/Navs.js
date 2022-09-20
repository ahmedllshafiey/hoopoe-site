import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/hoopoe_logo.png';
import '../styles/nav.css'

function Navs() {
  return (
    <Navbar expand="lg" className='nav-bar'>
      <Container>
        <Navbar.Brand href="#home" className='logo-container'>
            <img className='logo' alt='logo' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-item'>Hoopoe</Nav.Link>
            <Nav.Link className='nav-item'>Location</Nav.Link>
            <Nav.Link className='nav-item'>Kinds</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;