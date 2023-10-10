import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { sweetAlerDatas, sweetAlertProduct, sweetAlertProductError } from '../sweetAlert/Alert';

const FormProduct=()=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct]=useState({
    name:'',
    description:'',
    quantity:'',
    price:'',
    high:'',
    width:'',
    weight:''
  })
  
  const [image,setImage] = useState(null);
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
    const formData=new FormData()
    
    formData.append('name',product.name)
    formData.append('description',product.description)
    formData.append('quantity',product.quantity)
    formData.append('price',product.price)
    formData.append('high',product.high)
    formData.append('width',product.width)
    formData.append('weight',product.weight)
    formData.append("file",image,image.name)


    axios.post(`${import.meta.env.VITE_BACKEND_URL}createProduct`,formData)
.then(response=>{
  if(response.status===200){
   sweetAlertProduct()
  }
  window.location.href= window.location.href
 
  setProduct({
    name:'',
    description:'',
    quantity:'',
    price:'',
    high:'',
    width:'',
    weight:''
  })
  setImage(null)

}).catch(error=>{
 sweetAlertProductError()
})
   
  }
  const handleChange=e=>{
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    })
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        ADD NEW PRODUCT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center text-uppercase'>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 text-center text-uppercase">
              <Form.Label htmlFor='name'>Name:</Form.Label>
              <Form.Control
                type="text"
                id='name'
                placeholder="write produt's name"
                className='text-center text-uppercase'
                autoFocus
                value={product.name}
                name='name'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase" >
              <Form.Label htmlFor='description'>Description:</Form.Label>
              <Form.Control
                type="text"
                id='description'
                placeholder="write the description"
                className='text-center text-uppercase'
                autoFocus
                value={product.description}
                name='description'
                onChange={handleChange}
                as="textarea" 

              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase" >
              <Form.Label htmlFor='quantity'>Quantity</Form.Label>
              <Form.Control
                type="number"
                id='quantity'
                placeholder="write quantity"
                className='text-center text-uppercase'
                min={0}
                autoFocus
                value={product.quantity}
                name='quantity'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase">
              <Form.Label htmlFor=''>Price $</Form.Label>
              <Form.Control
                type="number"
                id='price'
                placeholder="write price"
                className='text-center text-uppercase'
                min={0}
                autoFocus
                value={product.price}
                name='price'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase">
              <Form.Label htmlFor='high'>High</Form.Label>
              <Form.Control
                type="number"
                id='high'
                placeholder="write high"
                className='text-center text-uppercase'
                min={0}
                autoFocus
                value={product.high}
                name='high'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase">
              <Form.Label htmlFor='width'>Width</Form.Label>
              <Form.Control
                type="number"
                id='width'
                placeholder="write width"
                className='text-center text-uppercase'
                min={0}
                autoFocus
                value={product.width}
                name='width'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase">
              <Form.Label htmlFor='weight'>Weight</Form.Label>
              <Form.Control
                type="number"
                id='weight'
                placeholder="write Weight"
                className='text-center text-uppercase'
                min={0}
                autoFocus
                value={product.weight}
                name='weight'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-center text-uppercase" >
              <Form.Label htmlFor='image'>Image</Form.Label>
              <Form.Control
                type="file"
                id='image'
               className='text-center text-uppercase'
                autoFocus
                //value={image}
                name='image'
                onChange={e=>setImage(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
}
export default FormProduct

