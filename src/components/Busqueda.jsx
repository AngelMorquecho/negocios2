import {React, useEffect, useState} from 'react'
import { Container, Image,Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {Link}from'react-router-dom'
import sportImage from'../img/sportImage.png'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

// const nombres = ["Leo", "Angel", "Caro", "Anna", "Juanito"];
// console.log(nombres)

const Busqueda= () => {

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


      <h1 className="mt-0 text-center text-uppercase">
      Usuarios:
      </h1>
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
      <div className='containerInput'>
        <input className='form-control inputBuscar' value={busqueda} placeholder='Buscar' onChange={busca}/>
        <br/>
        <button className='btn btn-success'>
          Buscar
        </button>
      </div>
      <br/><br/><br/> 
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
          {
            usuarios && usuarios.map((usuario)=>(
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

    </>
  )
}

export default Busqueda