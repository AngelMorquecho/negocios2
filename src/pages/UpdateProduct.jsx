import React from 'react'
import { Container, Image,Navbar,NavDropdown,Nav, Button} from 'react-bootstrap'
import sportImage from'../img/sportImage.png'
import FormProductUpdate from '../components/FormProductUpdate'
const UpdateProduct = () => {
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
          <Button className='text-decoration-none text-white text-uppercase m-5'onClick={()=>{localStorage.clear()
    navigate('/sportClubC')
    window.location.href=window.location.href}}variant="dark">Login Out</Button>
 
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

      <h1 className="mt-0 text-center text-uppercase">
      Update Product:
      </h1>

      < Container>
      <FormProductUpdate/>
     
     </Container>
   
    </>
   
  )
}

export default UpdateProduct
