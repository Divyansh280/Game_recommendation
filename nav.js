import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Home from './Home';
function CustomNavbar() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img className='nav-img' src='https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/cee2e87d-011f-4c2f-9d51-3b3dd171042c/design-previews/4cdcb617-9635-49e3-8eb9-390fca4052a4/1687302919360-thumbnail.jpeg'/></Navbar.Brand>
          <Nav className="">
            <Nav.Link as={Link} to='/' className='rightie'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/filters">Recommend</Nav.Link>
            

            {/* <Button style={{color: "#0099cc"}} className='' variant="black">Login</Button> */}
          </Nav>
        </Container>
      </Navbar>
      <br />
   </>
  );
}
export default CustomNavbar;