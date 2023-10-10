import React, { useState, useEffect } from "react";
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
import sportImage from "../img/sportImage.png";
import axios from "axios";
import { sweetAlertProductOrder ,sweetAlertLoginC} from "../sweetAlert/Alert";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { sweetAlerProducts,sweetAlertLoginOut } from "../sweetAlert/Alert";

const ShoppingCart = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const dateNow = year + "-" + "0" + month + "-" + date;
  const [productLs, setProdcutLs] = useState([]);
  const [productFor, setProductFor] = useState([]);
  const tokenUser = localStorage.getItem("token");
  const navigate = useNavigate();
  const car=JSON.parse(localStorage.getItem('product'))
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 2,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  useEffect(() => {
    if(!tokenUser){
     sweetAlertLoginC()
    }
   }, []);
  const orderProduct = () => {
    productLs.map((productArray) => {
      setProductFor(productArray);
      axios.post(`${import.meta.env.VITE_BACKEND_URL}createOrder`, {
        product_id: productArray.id,
        nameProduct: productArray.nameProduct,
        description: productArray.description,
        quantity: 1,
        price: productArray.price,
        date: dateNow,
        email: localStorage.getItem("email"),
      }).then(response=>{
        if(response.status===200){
          sweetAlertProductOrder()
        }
      })
  
    });
  navigate('/orderProduct')


 
  };
 

  useEffect(() => {
    const getProductLs = () => {
      const pLs = JSON.parse(localStorage.getItem("product")) ?? [];
      setProdcutLs(pLs);
    };
    getProductLs();
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

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
             
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
          
            </>):(<Button
                className="text-decoration-none text-white text-uppercase m-5"
                onClick={() => {
                  localStorage.clear();
                  navigate("/sportClubC");
                  window.location.href=window.location.href
                }}
                variant="dark"
              >
                Login Out
              </Button>)}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="mt-0 text-center text-uppercase static">SPORT CLUB</h1>
      <Col md={{ span: 6, offset: 3 }}>
        <Container fluid="md">
          <Row>
            {productLs.map((product1) => (
              <Col>
                <Image
                  src={`${import.meta.env.VITE_BACKEND_URL}product/image/${
                    product1.id
                  }`}
                  height={135}
                  width={145}
                  className="p-3 mt-5 "
                  key={product1.id}
                />

                <p className=" text-uppercase text-secondary">
                  {product1.name}
                </p>
                <p className="text-justify-center text-lowercase text-dark">
                  {product1.description}
                </p>
                <p className="text-center text-lowercase text-dark fs-4">
                  ${product1.price}
                </p>

               <Button className="text-center text-uppercase mt-2" variant="danger"onClick={()=>{
                const productArray=productLs.filter((item) => item.id !==product1.id)
                localStorage.removeItem('product')
     
                setProdcutLs(productArray)
                localStorage.setItem('productLS',JSON.stringify(productArray))
                }}>Delete Product</Button>
              </Col>
            ))}
          </Row>
          
        </Container>
        <Container className="text-center">
        {productLs<=0 &&(<h1 className="text-center text-white mt-5 bg-danger p-3 text-justify rounded">NOT EXIST PRODUCTS YET</h1>)}
       {!tokenUser && productLs>0 ?(''):!tokenUser || productLs<=0 ?(''):(<Button  onClick={orderProduct} size="lg" className="text-center text-uppercase mt-5">
        Realizar Compra
      </Button>)}
       
       
        </Container>
      </Col>
      
      
    </>
  );
};

export default ShoppingCart;
