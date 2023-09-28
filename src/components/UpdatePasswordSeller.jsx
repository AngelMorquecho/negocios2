import React, { useState } from "react";
import { Form,Row,Col,Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { sweetAlerData, sweetAlertPassword, sweetAlertPasswordError } from "../sweetAlert/Alert";
import axios from "axios";



const UpdatePasswordSeller= () => {


  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const handleSubmit= e=>{
    e.preventDefault();
    if([email,password].includes('')){
     sweetAlerData()
      return
    }
    
      const config={
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",
         

        }
       
      }
      axios.put(`${import.meta.env.VITE_BACKEND_URL}updateSeller`,{email,password},config)
      .then((responseData) => {
        if(responseData.status===200){
          sweetAlertPassword()
           
        }
        setEmail("");
        setPassword("");
        navigate('/loginS')
        
      })
      .catch((error) => {
        sweetAlertPasswordError()
      });
      
   
  
  }
  return (
    <>
    <Container >
      <Form onSubmit={handleSubmit}>
       
       
        <Row>
          <Form.Label htmlFor='email' className='text-center text-uppercase blockquote mt-3'>Email:</Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
            type='email'
            id='email'
            name='email'
            className='text-center'
             placeholder='write your email'
             value={email}
             onChange={e=>setEmail(e.target.value.trim())}
             />
          </Col>
        </Row>
        <Row>
          <Form.Label htmlFor='password' className='text-center text-uppercase  blockquote mt-3'>Password:</Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
            type='password'
            id='password'
            name='password'
            className='text-center'
             placeholder='password' 
             value={password}
             onChange={e=>setPassword(e.target.value.trim())}
             />
          </Col>
        </Row>
        <Row>
        
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
            type='submit'
             className='text-center text-uppercase mt-3  bg-black text-white'
             value='update'
              />
          </Col>
        </Row>
        
      
     
      
       
      </Form>
     
    </Container>
 
    </>
  );
};

export default UpdatePasswordSeller;
