import {React, useEffect, useState} from 'react'
import { Container, Image,Navbar,NavDropdown,Nav,Button,Table} from 'react-bootstrap'
import { useNavigate,Link} from 'react-router-dom'
import sportImage from'../img/sportImage.png'
import axios from 'axios'

const OrdersClient = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [tablausuarios, setTablaUsuarios] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("token");
  const email = localStorage.getItem('email');

  const peticionGet=async()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_URL}orderUser?email=${email}`)
    .then(response=>{
  
      setUsuarios(response.data)
      setTablaUsuarios(response.data)
      setData(response.data)
    }).catch(error=>{
      console.log(error);
    })
  }
  
  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/sportClubC">
          {" "}
          <Image src={sportImage} width={95} height={95} />
        </Link>

        <Container>
          <Navbar.Brand className="mr-0">
            <Link
              to="/sportClubC"
              className="text-decoration-none text-white text-uppercase"
            >
              SPORT CLUB
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
              <Nav>
              {!tokenUser ? (
              ""
            ) : (
              <Button
                className="text-decoration-none text-white text-uppercase m-5"
                onClick={() => {
                  localStorage.clear();
                  navigate("/sportClubC");
                 
                }}
                variant="dark"
              >
                Login Out
              </Button>
            )}
              </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      <h1 className="mt-0 text-center text-uppercase">Ordenes:</h1>
      <h6 className='text-center'>Correo: {email}</h6>
      <Table striped bordered hover variant="dark" className='m-2'>
            <thead>
              <tr>
              <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Fecha</th>
            <th>Correo</th>
              </tr>
            </thead>
            <tbody>
             
                 {data.map(usuario=>(
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nameProduct}</td>
                    <td>{usuario.description}</td>
                    <td>{usuario.quantity}</td>
                    <td>{usuario.price}</td>
                    <td>{usuario.date}</td>
                    <td>{usuario.email}</td>
                  </tr>
                ))}
            
            </tbody>
          </Table>
           
          
       

    </>
  )
}

export default OrdersClient