import React from 'react'
import { Container, Image,Navbar,NavDropdown,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SellerCreate from '../components/SellerCreate'
import sportImage from'../img/sportImage.png'
const NewSellerCount = () => {
  return (
    <>
   
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Image src={sportImage} width={95}height={95}/>
      <Container>
          
        <Navbar.Brand className='mr-0'>SPORT CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
              
              </Nav>
      
          <Nav>
          <Link to='/loginS' className='text-decoration-none text-white'>LOGIN</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

      <h1 className="mt-0 text-center text-uppercase">
      Create Count:
      </h1>

      < Container>
      <SellerCreate/>
     
     </Container>
   
    </>
   
  )
}

export default NewSellerCount
