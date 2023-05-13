import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/logo1.png';
import style from '../styles/style1.css';

function NavScrollExample() {
  return (
  
    <Navbar bg="success" expand="lg">
      <Container className='bar'>
        <Navbar.Brand href="#"><img src={logo} className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Quem Somos</Nav.Link>
          
          <NavDropdown title="Works" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Business analytics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Data Science
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
        </Navbar.Collapse>
        <h3>Transformando Dados em Valor</h3>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;