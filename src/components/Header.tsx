import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className="navbar-brand nav-link" to="/">
            Medicines delivery
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Shop
              </NavLink>
              <NavLink className="nav-link" to="/cart">
                Shopping cart
              </NavLink>
              <NavLink className="nav-link" to="/fav">
                Favorites
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
