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
import {  sweetAlertLoginOut, sweetAlertLoginS } from "../sweetAlert/Alert";
import AnyChart from 'anychart-react'
import axios from "axios";

const Grafica = () => {
    const navigate = useNavigate();
    const tokenUser = localStorage.getItem('token')
    const [dtE,setDtE]=useState({})
    const [dtB,setDtB]=useState({})
    const [dtM,setDtM]=useState({})
    useEffect(()=>{
        axios(`${import.meta.env.VITE_BACKEND_URL}dataSatisfaccion`)
        .then(response=>{
            setDtE(response.data)
        })
    },[])
    useEffect(()=>{
        axios(`${import.meta.env.VITE_BACKEND_URL}dataSatisfaccionB`)
        .then(response=>{
            setDtB(response.data)
        })
    },[])
    useEffect(()=>{
        axios(`${import.meta.env.VITE_BACKEND_URL}dataSatisfaccionM`)
        .then(response=>{
            setDtM(response.data)
        })
    },[])
    const complexSettings = {
    
    width: 600,
    height: 400,
    type: 'column',
    data: `Excelente${' totalClientes '+ dtE},10\nBuena${' totalClientes '+ dtB},4\nMala${' totalClientes '+ dtM},3`,
    title: 'Satisfaccion',
    yAxis: [1, {
        orientation: 'right',
        enabled: true,
        labels: {
            format: '{%Value}{decimalPoint:\\,}',
            fontColor: 'black',

        }
    }],
    
    lineMarker: {
        value: 5
        
    }
};
const complexSettings2 = {
    width: 600,
    height: 400,
    type: 'pie',
    data: "Buena,10\nRegular,4\nPesima,2",
    title: 'Satisfaccion',
    yAxis: [1, {
        orientation: 'right',
        enabled: true,
        labels: {
            format: '{%Value}{decimalPoint:\\,}',
            fontColor: 'black',

        }
    }],
    
    lineMarker: {
        value: 5
        
    }
};
    useEffect(() => {
        if(!tokenUser){
    sweetAlertLoginS()
        }
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
                        <Link to='/sportClubS' className='text-decoration-none text-white text-uppercase m-5'>Menu</Link>

                        {!tokenUser ? ('') : (<Button className='text-decoration-none text-white text-uppercase m-5' onClick={() => {
                            localStorage.clear()
                            navigate('/sportClubS')
                            window.location.href = window.location.href
                        }} variant="dark">Login Out</Button>)}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h1 className="mt-0 text-center text-uppercase static">SPORT CLUB SATISFACCION</h1>
            <Container className="text-center">
            <Row className="justify-content-md-center">
       
        <Col md="auto">{!tokenUser?(''):(<AnyChart {...complexSettings}/>)}</Col>
        <Col md="auto">{!tokenUser?(''):(<AnyChart {...complexSettings2}/>)}</Col>
       
      </Row>
        </Container>

        </>
    );
};

export default Grafica;
