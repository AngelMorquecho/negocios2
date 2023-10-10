
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
import { useNavigate, Link } from "react-router-dom";
import sportImage from "../img/sportImage.png";
import c1 from "../img/c1.png";
import whatsApp from "../img/whatsApp.jpg"
import facebook from "../img/facebook.png"
import axios from "axios";
import { sweetAlerProducts,sweetAlertLoginOut } from "../sweetAlert/Alert";
const LayoutClient = () => {
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("token");
  const [product, setProdcut] = useState([]);
  const [productAdd, setProdcutAdd] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const random=Math.random()+1

  /*useEffect(() => {
   if(!tokenUser){
    sweetAlertLoginC()
   }
  }, []);*/


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
                <Link to='/shoppingCart'> <Image src={c1} width={35} height={35} /></Link>
             
            </Nav>
            {!tokenUser ?(  
              <>
            <Link
              to="/loginC"
              className="text-decoration-none text-white text-uppercase m-5"
            >
              Login
            </Link>
            <Nav>
              {" "}
              <Link
                to="/createCountC"
                className="text-decoration-none text-white text-uppercase"
              >
                Create Count
              </Link>
              
            </Nav>
          
            </>):(
              <>
                <Nav>
                {" "}
                <Link
                  to="https://wa.me/qr/KYSTZA5QFIWJE1"
                  className="text-decoration-none text-white text-uppercase"
                >
                           <Image src={whatsApp} width={35} height={35} className="m-2 rounded"/>
                </Link>
                
              </Nav>
              <Nav>
                {" "}
                <Link
                 to="https://www.facebook.com/profile.php?id=61551068342815"
                  className="text-decoration-none text-white text-uppercase"
                >
                           <Image src={facebook} width={35} height={35} className="m-2 rounded"/>
                </Link>
                
              </Nav>
              </>
            )}

            
            {!tokenUser ? (
              ""
            ) : (
              <>
              <Button
                className="text-decoration-none text-white text-uppercase m-5"
                onClick={() => {
                  navigate("/OrdenC");
                  window.location.href=window.location.href
                }}
                variant="dark"
              >
                Ver ordenes anteriores
              </Button>
              <Button
                className="text-decoration-none text-white text-uppercase m-5"
                onClick={() => {
                  localStorage.clear();
                  navigate("/sportClubC");
                  window.location.href=window.location.href
                }}
                variant="dark"
              >
                Login Out
              </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="mt-0 text-center text-uppercase static">SPORT CLUB</h1>
      <Col >
        <Container fluid="md">
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
                <p className=" text-uppercase text-secondary">
                  {product1.name}
                </p>
              


               

                <p className="text-center text-lowercase text-dark fs-4">
                  ${product1.price}
                </p>

                <Button
                    className="text-center text-uppercase mt-2 text-white"
                    variant="primary"
                    onClick={() => {
                     navigate(`/detalles/${product1.id}`)
                    }}

                  >
                    Detalles
                  </Button>
                  <Button
                    className="text-center text-uppercase mt-2"
                    variant="danger"
                    onClick={() => {
                      const product = productAdd;
                      
                      const productObj={id:product1.id,nameProduct:product1.name,price:product1.price,description:product1.description,quantity:product1.quantity}
                      product.push(
                       productObj
                      );
                      localStorage.setItem('product',JSON.stringify(product))
                     // localStorage.setItem('product1',JSON.stringify(product))
                     // localStorage.setItem('product2',JSON.stringify(product))
                     // localStorage.setItem('product3',JSON.stringify(product))
                      //localStorage.setItem('product4',JSON.stringify(product))
                      sweetAlerProducts()
                      setQuantity(quantity+1);
                    }}

                  >
                    Agregar Producto
                  </Button>
                  
                 
                
              </Col>
            ))}
          </Row>
       
        </Container>
       
      </Col>
      
    </>
  );
};

export default LayoutClient;

