import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { sweetAlerData, sweetAlertLoginError } from "../sweetAlert/Alert";



const LoginSeller = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();
    if ([email, password].includes('')) {
      sweetAlerData()
      return
    }

    const config = {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",


      }

    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}loginS`, { email, password }, config)
      .then(response => {
        if (response.status === 200) {
          var options = {
            method: 'post',
            url: 'https://api.weship.com/user/login',
            headers:{},
            data: {

              email: "morquechoangel30@gmail.com",
              password: "Angelmorquecho2001@"
            }
          }
          axios.request(options).then((response)=>{
            if(response.status==200){
            
            localStorage.setItem('wtk',response.data.token);
           
          }
        
          //console.log(data.data[0])
         
          }).catch(function (error) {
            console.error(error);
          });
          localStorage.setItem('tokenS', response.data)



        }
        navigate('/sportClubS')
        setEmail('')
        setPassword('')


      }).catch(error => {
        sweetAlertLoginError()
      })



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
                onChange={e => setEmail(e.target.value.trim())}
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
                onChange={e => setPassword(e.target.value.trim())}
              />
            </Col>
          </Row>
          <Row>

            <Col md={{ span: 4, offset: 4 }}>
              <Form.Control
                type='submit'
                className='text-center text-uppercase mt-3  bg-black text-white'
                value='login'
              />
            </Col>
          </Row>





        </Form>
        <h6 className="text-center text-uppercase mt-3">¿Do you forget your password?{" "}<span><Link to='/udpatePasswordS' className='text-decoration-none text-black'>Update your password</Link></span></h6>
      </Container>

    </>
  );
};

export default LoginSeller;
