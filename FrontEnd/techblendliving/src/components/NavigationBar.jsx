import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#D8232A" }} variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>TechBlendLiving</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/registrationuser">
                <Nav.Link>Registration User</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/registrationowner">
                <Nav.Link>Registration Owner</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/dashboard">
                <Nav.Link>Owner Section</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/host">
                <Nav.Link>Host</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/userview">
                <Nav.Link>userview</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
