import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const InfoModal = ({ gif, show,handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{gif.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={gif.url} alt={gif.title} style={{width: '75%', borderRadius: "8px"}} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoModal;
