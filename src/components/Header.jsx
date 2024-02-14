import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';


function Header() {
  return (
    <div><Navbar style={{backgroundColor:'rgb(249, 246, 246)',height:'80px'}}>
    <Container>
    <Navbar.Brand href="#home" className="d-flex align-items-center">
  <img alt="logo" src={logo} style={{ width: '150px', height: '150px'}} />
  <div style={{fontSize:'20px',marginRight:"400px"}}>
    XYZ SYSTEMS LLP.
  </div>
</Navbar.Brand>

    </Container>
  </Navbar></div>
  )
}

export default Header