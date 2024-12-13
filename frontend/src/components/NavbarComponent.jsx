import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container fluid>
        
      <Navbar.Brand href="#home">
      <img src=
      {logo} alt=""
      width="50"
       height="50"
             /> Kasir

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

          </Nav>

          <Nav className="ms-auto"> {/* Letakkan di kanan */}
          <NavDropdown title="Log Out" id="basic-nav-dropdown" onClick={()=>navigate("/")}>
        
              </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
