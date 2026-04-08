import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import { addproduct } from '../redux/productslice';
import { useDispatch } from 'react-redux';
function Addproduct({ping, setping}) {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const [newproduct, setnewproduct] = useState({
    nameproduct:"",
    img:"",
    price:0,
    category:"all"
  })
  return (
   <>
      <Button variant="primary" onClick={handleShow}>
       Add product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setnewproduct({...newproduct,nameproduct:e.target.value})} />

      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>img</Form.Label>
        <Form.Control type="text" placeholder="Enter product img" onChange={(e)=>setnewproduct({...newproduct,img:e.target.value})} />

      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" placeholder="Enter product price" onChange={(e)=>setnewproduct({...newproduct,price:e.target.value})}  />

      </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e)=>setnewproduct({...newproduct,category:e.target.value})} >
      <option>Category</option>
      <option value="femme">Female</option>
      <option value="homme">Male</option>

    </Form.Select>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addproduct(newproduct));handleClose(); alert("votre produit est bien enregistrée");setping(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproduct