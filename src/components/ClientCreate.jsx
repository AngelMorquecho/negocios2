import React, { useState } from "react";
import { Form,Row,Col,Container} from "react-bootstrap";
import{Link,useNavigate}from "react-router-dom";
import axios from "axios";
import { sweetAlerDatas, sweetAlert, sweetAlertUserExist } from "../sweetAlert/Alert";



const ClientCreate = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[sex,setSex]=useState('')
  const[city,setCity]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const random=Math.random().toString(32).substring(3)
  const nickName= name+random 

  

  const handleSubmit= e=>{
    e.preventDefault();
    if([name,email,sex,city,password].includes('')){
   sweetAlerDatas()
      return
    }
    
      const config={
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",
         

        }
       
      }
      axios.post(`${import.meta.env.VITE_BACKEND_URL}createClient`,{name,nickName,email,sex,city,password},config)
      .then(responseData=>{
        if(responseData.status===200){
        sweetAlert()
         
         
      }
      setName('')
      setEmail('')
      setSex('')
      setCity('')
      setPassword('')
      navigate('/loginC')
    
     
        
       }).catch(error=>{
        
       sweetAlertUserExist()
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
          <Form.Label htmlFor='sex' className='text-center text-uppercase blockquote mt-3'>Sex:</Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Select
            type='text'
            id='text'
            name='tex'
            className='text-center text-uppercase'
             placeholder='write your email'
             value={sex}
             onChange={e=>setSex(e.target.value)}
             >
                <option>SELECT YOUR SEX:</option>
                 <option value="M">M</option>
                 <option value="F">F</option>
             </Form.Select>
          </Col>
        </Row>
        <Row>
          <Form.Label htmlFor='city' className='text-center text-uppercase blockquote mt-3'>City:</Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
            type='city'
            id='city'
            name='city'
            className='text-center text-uppercase'
             placeholder='write your city'
             value={city}
             onChange={e=>setCity(e.target.value)}
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
          <Form.Label htmlFor='password' className='text-center text-uppercase blockquote mt-3'>Password:</Form.Label>
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
      <h6 className="text-center text-uppercase mt-3">¿Do you have a count?{" "}<span> <Link to='/loginC' className='text-decoration-none text-black'>LOGIN</Link></span></h6>
    </Container>
 
    </>
  );
};

export default ClientCreate;
