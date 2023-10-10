import React, { useState } from "react";
import { Form,Row,Col,Container} from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { sweetAlerDatas, sweetAlert, sweetAlertUserExist } from "../sweetAlert/Alert";



const SellerCreate = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const random=Math.random().toString(32).substring(3)
  const nickName= name+random 

  

  const handleSubmit= e=>{
    e.preventDefault();
    if([name,email,password].includes('')){
     sweetAlerDatas()
      return
    }
      const config={
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",
         

        }
      }
      axios.post(`${import.meta.env.VITE_BACKEND_URL}createSeller`,{name,nickName,email,password},config)
     .then(responseData=>{
      if(responseData.status===200){
       sweetAlert()
      

      }
      setName('')
      setEmail('')
      setPassword('')
      navigate('/loginS')
    
      
   
     }).catch(error=>{
      
   console.log(error)
     })
     
     

   
  
  }
  return (
    <>
    <Container >
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Label htmlFor='name' className='text-center text-uppercase blockquote'>Name:</Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
            type='text'
            id='name'
            name='name'
             placeholder='write your full name'
             className='text-center text-uppercase'
             value={name}
             onChange={e=>setName(e.target.value)}
             />
          </Col>
        </Row>
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
             value='create'
              />
          </Col>
        </Row>
        
      
     
      
       
      </Form>
      <h6 className="text-center text-uppercase mt-3">¿Do you have a count?{" "}<span>  <Link to='/loginS' className='text-decoration-none text-black'>LOGIN</Link></span></h6>
    </Container>
 
    </>
  );
};

export default SellerCreate;
