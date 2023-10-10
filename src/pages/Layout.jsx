import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Navbar,
  Nav,
  Row,
  Col,
  Button,

} from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import sportImage from "../img/sportImage.png";
import c1 from "../img/c1.png";
import FormProduct from "../components/FormProduct";
import axios from "axios";
import FormProductUpdate from "../components/FormProductUpdate";
import { sweetAlerProductsDelete, sweetAlertLoginOut, sweetAlertLoginS} from "../sweetAlert/Alert";


const Layout = () => {
  const navigate = useNavigate();
  const tokenUser=localStorage.getItem('tokenS')
  const [product, setProdcut] = useState([]);
  
  useEffect(() => {
    if(!tokenUser){
sweetAlertLoginS()
    }
   }, []);

  useEffect(() => {
    axios(`${import.meta.env.VITE_BACKEND_URL}product`).then((response) => {
      setProdcut(response.data);
    });
  }, []);
 
  useEffect(() => {
    if(!tokenUser){
      setTimeout(() => {
        localStorage.clear()
        sweetAlertLoginOut()
        
      },550000);



     }
   }, []);


 

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image src={sportImage} width={95} height={95} />
        <Container>
          
          <Navbar.Brand className="mr-0">SPORT CLUB</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              {!tokenUser ?(''):(<FormProduct />)} 
             
             
            </Nav>
           
    {!tokenUser ?(''):(<Nav>
      <Link to='/grafica'className='text-decoration-none text-white text-uppercase m-5'>Grafica Satisfaccion</Link>
      <Link to='/search'className='text-decoration-none text-white text-uppercase m-5'>Busqueda de Ordenes</Link>
    </Nav>)}
    {!tokenUser &&(
              <>
            <Link to='/loginS' className='text-decoration-none text-white text-uppercase m-5'>Login</Link>
            <Nav> <Link to='/createCountS' className='text-decoration-none text-white text-uppercase'>CREATE COUNT</Link></Nav></>)}
            {!tokenUser ?(''):(<Button className='text-decoration-none text-white text-uppercase m-5'onClick={()=>{localStorage.clear()
    navigate('/sportClubS')
    window.location.href=window.location.href}}variant="dark">Login Out</Button>)}
    

          
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="mt-0 text-center text-uppercase static">SPORT CLUB</h1>
      <Col  >
      <Container fluid="md" >
      <Row>
         {product.map((product1) => (
            <Col>
              <Image
                src={`${import.meta.env.VITE_BACKEND_URL}product/image/${
                  product1.id
                }`}
                height={135}
                width={145}
                className="p-3 mt-5"
                key={product1.id}
              />
              <p className=" text-uppercase text-secondary">{product1.name}</p>
              <p className="text-justify-center text-lowercase text-dark">{product1.description}</p>
              <p className="text-center text-lowercase text-dark fs-6">Max:{product1.quantity}</p>
              <p className="text-center text-lowercase text-dark fs-4">${product1.price}</p>
              
              {!tokenUser ?(""):(
                <>
                <Button className="text-center text-uppercase mt-2" variant="dark"
                onClick={()=>{navigate(`/product/${product1.id}`)}}>Update  Product</Button>
              <Button className="text-center text-uppercase mt-2" variant="danger"onClick={id=>{  axios.delete(`${import.meta.env.VITE_BACKEND_URL}deleteProduct/${product1.id}`)
              .then(response=>{
                if(response.status===200){
                  const porductState=product.filter(product3=>product3.id!==id)
                  setProdcut(porductState)
                }
                sweetAlerProductsDelete()
                window.location.href=window.location.href
              })
}}>Delete Product</Button></>)}
              
         
            
            </Col>
          ))}
        
      </Row>
      
    </Container>
      </Col>
    </>
  );
};

export default Layout;
