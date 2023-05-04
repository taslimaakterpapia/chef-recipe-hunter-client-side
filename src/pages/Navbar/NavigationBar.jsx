import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut=()=>[
    logOut()
    .then()
    .catch(error=>console.log(error))
  ]
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">The Kitchen</Navbar.Brand>
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
              <Link
                to="/error"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "15px",
                }}
              >
                Error
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sunfy</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ?
                <Button onClick={handleLogOut} variant="secondary" className="text-white fw-semibold">Logout</Button>:
                <Link to="/login">
                <Button variant="secondary" className="text-white fw-semibold">Login</Button>
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
