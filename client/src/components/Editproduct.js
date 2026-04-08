import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

import { useDispatch } from 'react-redux';
import { editproduct } from '../redux/productslice';
function Editproduct({el, ping, setping}) {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const [edited, setedited] = useState({
    nameproduct:el?.nameproduct,
    img:el?.img,
    price:el?.price,
    category:el?.category
  })
  return (
   <>
      <Button variant="primary" onClick={handleShow}>
       edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={el?.nameproduct} onChange={(e)=>setedited({...edited,nameproduct:e.target.value})} />

      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>img</Form.Label>
        <Form.Control type="text" placeholder={el?.img} onChange={(e)=>setedited({...edited,img:e.target.value})} />

      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" placeholder={el?.price} onChange={(e)=>setedited({...edited,price:e.target.value})}  />

      </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited,category:e.target.value})} >
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
          <Button variant="primary" onClick={()=>{dispatch(editproduct({id:el?._id,edited}));handleClose(); alert("votre produit est bien modifié");setping(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editproduct