import React, { useState,useEffect } from "react";
import { Form, Row, Col, Container, Image } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";
import { sweetAlerDatas, sweetAlertProductUpdate,sweetAlertProductUpdateError } from "../sweetAlert/Alert";
import axios from "axios";
const FormProductUpdate = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });
  const { id } = useParams();
  const navigate=useNavigate()
  useEffect(() => {
    axios(`${import.meta.env.VITE_BACKEND_URL}product/${id}`)
    .then((response) => {
      if(response.status===200){
        setProduct(response.data)
      }


      
    });
   
  }, [])
  const handleSubmit=e=>{
    e.preventDefault()
    if(Object.keys(product).includes('')){
      sweetAlerDatas()
      return
    }
   
    const config={
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json", 
        }
    }
    


    axios.put(`${import.meta.env.VITE_BACKEND_URL}updateProduct`,product,config)
   
   
.then(response=>{
  if(response.status===200){
    sweetAlertProductUpdate()
  }
 
  setProduct({
    name:'',
    description:'',
    quantity:'',
    price:''
  })
  navigate('/sportClubS')
  

}).catch(error=>{
 sweetAlertProductUpdateError()
})
}
 
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset:5}}>
        <Image
          src={`${import.meta.env.VITE_BACKEND_URL}product/image/${id}`}
          height={135}
          width={145}
          className="p-3 mt-2 "
          key={id}
        />
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Label
            htmlFor="name"
            className="text-center text-uppercase blockquote"
          >
            Name Product:
          </Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
              type="text"
              id="name"
              name="name"
              className="text-center text-uppercase"
              value={product.name}
              onChange={handleChange}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Form.Label
            htmlFor="description"
            className="text-center text-uppercase blockquote"
          >
            Description:
          </Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
              type="text"
              id="description"
              name="description"
              placeholder="write product description"
              className="text-center text-uppercase"
              value={product.description}
              onChange={handleChange}
              as="textarea" 
            />
          </Col>
        </Row>
        <Row>
          <Form.Label
            htmlFor="quantity"
            className="text-center text-uppercase blockquote"
          >
            Quantity:
          </Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
              type="number"
              id="quantity"
              name="quantity"
              placeholder="write product quantity"
              className="text-center text-uppercase"
              value={product.quantity}
              onChange={handleChange}
              min={0}
            />
          </Col>
        </Row>
        <Row>
          <Form.Label
            htmlFor="price"
            className="text-center text-uppercase blockquote"
          >
            Price $:
          </Form.Label>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
              type="number"
              id="price"
              name="price"
              placeholder="write product price"
              className="text-center text-uppercase"
              value={product.price}
              onChange={handleChange}
              min={0}
            />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Control
              type="submit"
              className="text-center text-uppercase mt-3  bg-black text-white"
              value="save change"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormProductUpdate;
