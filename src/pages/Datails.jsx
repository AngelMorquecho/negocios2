import React, { useState,useEffect} from "react";
import {
  Container,
  Image,
  Navbar,
  Nav,
  Row,
  Col,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import sportImage from "../img/sportImage.png";
import axios from "axios";

const Details = () => {
const [product, setProdcut] = useState([]);
  const tokenUser = localStorage.getItem("token");
  const navigate = useNavigate();
  const {id}=useParams()

  useEffect(() => {
    axios(`${import.meta.env.VITE_BACKEND_URL}product/${id}`).then((response) => {
      setProdcut(response.data);
    });
  }, []);
  
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

         
            {!tokenUser ? (
              ""
            ) : (
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
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="mt-0 text-center text-uppercase static">SPORT CLUB</h1>
      <Col md={{ span: 6, offset: 3 }}>
        <Container fluid="md">
          <Row>
           
              <Col>
                <Image
                  src={`${import.meta.env.VITE_BACKEND_URL}product/image/${
                    id
                  }`}
                  height={135}
                  width={145}
                  className="p-3 mt-5 "
                  key={product.id}
                />

                <p className=" text-uppercase text-secondary">
                  {product.name}
                </p>
                <p className="text-justify-center text-lowercase text-dark">
                  {product.description}
                </p>
                <p className="text-center text-lowercase text-dark fs-4">
                  ${product.price}
                </p>
             
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
                    }}

                  >
                    Agregar Producto
                  </Button>
              
              </Col>
      
          </Row>
          
        </Container>
        
      </Col>
      
      
    </>
  );
};

export default Details;
