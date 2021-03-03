import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Fusible-logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            style={{ width: "180px" }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
