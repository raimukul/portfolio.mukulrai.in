import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="./img/logo2.png" className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                My Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> My Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://blog.mukulrai.in/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> My Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/raimukul"
                target="_blank"
              > <AiFillStar style={{ fontSize: "1.1em" }} /> Rate me 
                
               
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
