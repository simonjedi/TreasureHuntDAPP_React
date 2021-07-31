import React, {useState} from 'react'

import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNav.css';

import Connection from "./Connection";
import App from "./App";





const MyNav = (props) => {



  return(

    <Navbar collapseOnSelect className="fixed-top MyBakground" expand="lg" variant="dark">
      <Container>
      <Navbar.Brand href="#home">In Nav.js</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">{props.accounts}</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>

          <Connection accounts={props.accounts}/>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>


  );


};

export default MyNav;
