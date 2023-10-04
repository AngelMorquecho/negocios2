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
import Modal from 'react-bootstrap/Modal';
import { useNavigate, Link } from "react-router-dom";
import sportImage from "../img/sportImage.png";
import c1 from "../img/c1.png";
import axios from "axios";
import { sweetAlertSatisfaccion,sweetAlertSatisfaccionError } from "../sweetAlert/Alert";
const Order = () => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const dateNow = year + "-" + "0" + month + "-" + date;
  const [productLs, setProdcutLs] = useState([]);
  const [modal, setModal] = useState(false);
  const [excelente, setExcelente] = useState(false);
  const [buena, setBuena] = useState(false);
  const [mala, setMala] = useState(false);
  const tokenUser = localStorage.getItem("token");
  const close=()=>{
    setModal(false)
 
}
const handleSubmit=e=>{
  e.preventDefault()
  if(!excelente &&!buena && !mala){
    sweetAlertSatisfaccionError()
    return
  }
  else if(excelente){
    axios.post(`${import.meta.env.VITE_BACKEND_URL}satisfaccion`,{excelente:10,buena:0,mala:0})
    .then(response=>{
      if(response.status==200){
        sweetAlertSatisfaccion()
      }
      setModal(false)
    }).catch(error=>{
      console.log(error)
    })
  }else if(buena){
    axios.post(`${import.meta.env.VITE_BACKEND_URL}satisfaccion`,{excelente:0,buena:5,mala:0})
    .then(response=>{
      if(response.status==200){
        sweetAlertSatisfaccion()
      }
      setModal(false)
    })
   .catch(error=>{
    console.log(error)
   })
  }else if(mala){
    axios.post(`${import.meta.env.VITE_BACKEND_URL}satisfaccion`,{excelente:0,buena:0,mala:3})
    .then(response=>{
      if(response.status==200){
      sweetAlertSatisfaccion()
      }
      setModal(false)
    })
   .catch(error=>{
    console.log(error)
   })
  }

 

}
  const navigate=useNavigate()
  useEffect(() => {
    const getProductLs = () => {
      const pLs = JSON.parse(localStorage.getItem("productLS")) ?? [];
      
      setProdcutLs(pLs);
      //setProdcutLs(pLs1);
      //setProdcutLs(pLs2);
      //setProdcutLs(pLs3);
      //setProdcutLs(pLs4);
    };
    getProductLs();
  }, []);
  useEffect(()=>{
    setTimeout(()=>{
setModal(true)
    },5000)
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/shoppingCart">
                {" "}
                <Image src={c1} width={35} height={35} />
              </Link>
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
      {!modal?(<h1 className="text-center text-uppercase">Order Product</h1>):(<h1 className="text-center text-uppercase">Encuesta</h1>)}
      <Col md={{ span: 5, offset: 4 }}>
        <Container>
        {!modal?(<>
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
              {productLs.map((product) => (
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
         
         
        </>):(
          <>
             <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
        {!modal?(''):(<Container className="text-center">
            <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>¿Como fue tu experiencia usando nuestra pagina?</Modal.Title>
        </Modal.Header>
<Container className="justify-content-between">
        <Modal.Body>
        
          <FormLabel >Excelente</FormLabel>
          <Form.Check
                type="checkBox"
                id="excelente"
                name="excelente"
                value={excelente}
                onChange={(e) => setExcelente(e.target.checked)}
                
              />
              <FormLabel >Buena</FormLabel>
          <Form.Check
                type="checkBox"
                id="buena"
                name="buena"
                value={buena}
                onChange={(e) => setBuena(e.target.checked)}
                
               
              />
              <FormLabel >Mala</FormLabel>
          <Form.Check
                type="checkBox"
                id="mala"
                name="mala"
                value={mala}
                onChange={(e) => setMala(e.target.checked)}
              
              />
         
        </Modal.Body>
        </Container>
        <Modal.Footer>
          <Button variant="danger"onClick={close}>Close</Button>
          <Button variant="primary"onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal.Dialog>
        </Container>)}
      
    </div>
          </>
        )}
         
        </Container>
      </Col>
      
    </>
  );
};

export default Order;
