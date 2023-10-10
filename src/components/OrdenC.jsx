import {React, useEffect, useState} from 'react'
import { Container, Image,Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {Link}from'react-router-dom'
import sportImage from'../img/sportImage.png'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import WeShipButton from './WeShipButton';

// const nombres = ["Leo", "Angel", "Caro", "Anna", "Juanito"];
// console.log(nombres)

const OrdenC = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [tablausuarios, setTablaUsuarios] = useState([]);
  const [data, setData] = useState([]);

  const email = localStorage.getItem('email');

  const peticionGet=async()=>{
    
    await axios.get(`http://localhost/example-app/public/orderUser?email=${email}`)
    .then(response=>{
      console.log(response.data);
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
     <Image src={sportImage} width={95}height={95}/>
      <Container>
        <Navbar.Brand className='mr-0'>SPORT CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
              <Nav>
                <Link to='/createCountC' className='text-decoration-none text-white'>CREATE COUNT</Link>
              </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>


      <h1 className="mt-0 text-center text-uppercase">Ordenes:</h1>
      {
        // <div className='App'>
        //   <header className='App-header'>
        //     <ol>
        //       {
        //         nombres.map(nom=>(
        //           <li key={nom}>{nom}</li>
        //         )) 
        //       }
        //     </ol>
        //   </header>
        // </div>
      }
      <p>Correo: {email}</p>
      <div className='containerInput'>
        <br/>
      </div>
      <table className='table table-sm table-bordered'>
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
        {/* {
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.nameProduct}</td>
                <td>{data.description}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>{data.date}</td>
                <td>{data.email}</td>
              </tr>
          } */}

          {
            data.map(usuario=>(
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
      </table>
    <div>
      <h1>Consulta de WeShip API</h1>
      <WeShipButton />
    </div>

    </>
  )
}

export default OrdenC
