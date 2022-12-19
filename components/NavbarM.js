import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function  NavbarM() {
  return (
    <>
      
        <Navbar key="lg"  expand="lg"className=" navB" >
          <Container fluid>
            <Navbar.Brand id="navA" href="/">  <img
              src="./images/logo.svg"
              className='logo'
              
              alt="La Hormiga"
            /></Navbar.Brand>
            <Navbar.Toggle id="menuB" aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className=" navT navM"
            >
              <Offcanvas.Header closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-center margin navF flex-grow-1 pe-3">
                  <Nav.Link href="/">INICIO</Nav.Link>
                  <Nav.Link href="/menu">MENÚ</Nav.Link>
                  <Nav.Link href="/ubicaciones">UBICACIONES</Nav.Link>
                  <Nav.Link href="/servicios">SERVICIOS</Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          
          </Container>
        </Navbar>
     
    </>
  );
}

export default NavbarM;