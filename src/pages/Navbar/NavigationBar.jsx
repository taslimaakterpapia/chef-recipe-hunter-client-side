import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => [
    logOut()
      .then()
      .catch(error => console.log(error))
  ]
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-2 text-danger">The Kitchen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-semibold">

              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "15px",

                }}
              >
                Home
              </Link>

              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "15px",
                }}
              >
                Blog
              </Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="">{user?user.displayName:""}</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ?
                  <div className="d-flex align-item-center"> <img className="w-25 h-25 mx-4 rounded-circle" src={user.photoURL} alt="" /><Button onClick={handleLogOut} variant="danger" className="text-white fw-semibold">Logout</Button></div> :
                  <Link to="/login">
                    <Button variant="danger" className="text-white fw-semibold">Login</Button>
                  </Link>
                }

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
