import {React, useEffect, useState} from 'react'
import { Container, Image,Navbar,NavDropdown,Nav,Form,Col,Row,Table} from 'react-bootstrap'
import {Link}from'react-router-dom'
import sportImage from'../img/sportImage.png'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

// const nombres = ["Leo", "Angel", "Caro", "Anna", "Juanito"];
// console.log(nombres)

const Search= () => {

  const [usuarios, setUsuarios] = useState([]);
  const [tablausuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState([]);

  const peticionGet=async()=>{
    await axios.get("http://localhost/example-app/public/order")
    .then(response=>{
      setUsuarios(response.data)
      setTablaUsuarios(response.data)
    }).catch(error=>{
      console.log(error);
    })
  }

  const busca=e=>{
    setBusqueda(e.target.value)
    console.log("Busqueda: " +e.target.value);
    filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadoBusqueda=tablausuarios.filter((elemento)=>{
      if(elemento.email.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    });
    setUsuarios(resultadoBusqueda);
  }
  
  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <>
   
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/sportClubS">
          {" "}
          <Image src={sportImage} width={95} height={95} />
        </Link>

        <Container>
          <Navbar.Brand className="mr-0">
            <Link
              to="/sportClubS"
              className="text-decoration-none text-white text-uppercase"
            >
              SPORT CLUB
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>


      <h1 className="mt-0 text-center text-uppercase">
      Ordenes de Usuarios:
      </h1>
      <Container>
      <Row>
        <Col>
          <Form.Label htmlFor='busqueda' className='text-center text-uppercase blockquote mt-3'>Email de Usuario:</Form.Label>
          <Form.Control
            type='text'
            id='busqueda'
            name='busqueda'
            className='text-center'
             placeholder='Escribe el Email del Usuario Deseado'
             value={busqueda}
             onChange={busca}
             />
          </Col>
        </Row>
        </Container>
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
             
                 { usuarios && usuarios.map((usuario)=>(
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nameProduct}</td>
                <td>{usuario.description}</td>
                <td>{usuario.quantity}</td>
                <td>{usuario.price}</td>
                <td>{usuario.date}</td>
                <td>{usuario.email}</td>
              </tr>
            ))
          }
            
            </tbody>
          </Table>
      
     
    </>


  )
}

export default Search
