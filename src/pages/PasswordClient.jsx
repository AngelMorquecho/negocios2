import React from 'react'
import { Container, Image,Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UpdatePasswordClient from '../components/UpdatePasswordClient'
import sportImage from'../img/sportImage.png'
const PasswordClient= () => {
  return (
    <>
   
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Image src={sportImage} width={95}height={95}/>
      <Container>
          
        <Navbar.Brand className='mr-0'>SPORT CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Link to='/createCountS' className='text-decoration-none text-white'>CREATE COUNT</Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

      <h1 className="mt-0 text-center text-uppercase">
      Update Password:
      </h1>

      < Container>
      <UpdatePasswordClient/>
     
     </Container>
   
    </>
   
  )
}

export default PasswordClient
