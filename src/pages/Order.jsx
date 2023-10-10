import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Table,
  Form,
  FormCheck,
  FormLabel,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import sportImage from "../img/sportImage.png";
import axios from "axios";
const Order = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const dateNow = year + "-" + "0" + month + "-" + date;
  const [productLs, setProdcutLs] = useState([]);
  const [data, setData] = useState({});
  const [button, setButton] = useState(true);
  const[text,setText]=useState(false)
  const tokenUser = localStorage.getItem("token");
  const navigate=useNavigate()
  useEffect(() => {
    const getProductLs = () => {
      const pLs = JSON.parse(localStorage.getItem("product")) ?? [];
      
      setProdcutLs(pLs);
      //setProdcutLs(pLs1);
      //setProdcutLs(pLs2);
      //setProdcutLs(pLs3);
      //setProdcutLs(pLs4);
    };
  
    getProductLs();
  }, []);
  const handleSubmit=()=>{
    var options = {
        method: 'post',
        url: 'https://api.weship.com/orders/quoteOrder',
        headers: {Authorization:localStorage.getItem('wtk')},
        data:
          {
            "sender": {
                "name": "Sender Name",
                "email": "sender@email.com",
                "companyName": "Sender Company",
                "phone": "811111111111",
                "country": "México",
                "country_code": "MX",
                "province": "Puebla",
                "province_code": "PU",
                "city": "Puebla",
                "address1": "Cuauhtémoc 28",
                "address2": "Agrícola Ignacio Zaragoza",
                "optionalInfo": "",
                "zip": "72100"
            },
            "recipient": {
                "name": "Recipient Name",
                "email": "recipient@email.com",
                "companyName": null,
                "phone": "211111111111",
                "country": "Mexico",
                "country_code": "MX",
                "province": "Nuevo León",
                "province_code": "NL",
                "city": "San Pedro Garza García",
                "address1": "Valle del Mezquite 1431",
                "address2": "Palo Blanco",
                "optionalInfo": null,
                "zip": "66236"
            },
            "packages": [
                {
                    "h": productLs[0,1].high,
                    "w": productLs[0,1].width,
                    "hh": 2,
                    "weight":productLs.length,
                    "sizeUnit": "CM",
                    "weightUnit": "KG",
                    "declaredValue": 0
                }
            ],
            "courier": [
                "fedex",
                "estafeta",
                "99minutos"
            ]
        
        }
    }
      
    
    axios.request(options).then((response)=>{
      if(response.status==200){
      
      setData(response.data);
     
    }
    setButton(false)
    setText(true)
    //console.log(data.data[0])
   
    }).catch(function (error) {
      console.error(error);
    });
  }

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
            <Nav className="me-auto">
             
            </Nav>
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
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className="text-center text-uppercase">Order Product</h1>
      <Col md={{ span: 5, offset: 4 }}>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Date</th>
                <th>Client</th>
              </tr>
            </thead>
            <tbody>
              {productLs.map((product,index) => (
                <tr>
                  <td>{product.nameProduct}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{dateNow}</td>
                  <td>{localStorage.getItem("email")}</td>
                
                </tr>
                
              ))}
            </tbody>
          </Table>
        </Container>
      </Col>
   <Container className="text-center">
    {!button?(''):(
    <Button onClick={handleSubmit}>
      Detalles de Envio
    </Button>)}
    {!text?(''):(
    <>
    <h5>Enivo:</h5>
    <p>Mensajeria: <span>{data.data[0].courier}</span></p>
    <p>Cantidad: <span>{data.data[0].amount}</span></p>
    <p>Moneda: <span>{data.data[0].currency}</span></p>
    <p>Entrega Estimada: <span>{data.data[0].deliveryTimestamp}</span></p>
    <p>Tamaño de Paquete: <span>{data.data[0].packageSize}</span></p>
    <p>Nombre de Servicio: <span>{data.data[0].serviceName}</span></p>
    <p>Tipo de Servicio: <span>{data.data[0].serviceType}</span></p>
    
    </>
    )}
   </Container>

    </>
  );
};

export default Order;
