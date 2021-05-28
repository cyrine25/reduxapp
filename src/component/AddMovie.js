import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Add } from "../redux/action/actions";

const AddMovie = ({show,handleClose}) => {

  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>

        <Modal show={show} onHide={handleClose} >
          <Modal.Header style={{ backgroundColor: "#212121" }} closeButton>
            
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#212121" }}>
            <Form.Control
              placeholder="Title"
              value={title}
              onChange={(title) => setTitle(title.target.value)}
            />
            <Form.Control
              placeholder="image source"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
            />
            <Form.Control
              placeholder="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="description"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#212121" }}>
            <MDBBtn
            outline
            color="white"
            style={{ color: "white" }} onClick={handleClose}>
              Close
            </MDBBtn>
            <MDBBtn
            outline
            color="white"
            style={{ color: "white" }}
              onClick={() => {
                handleClose();
                dispatch(Add({title:title, src:src, rating:rating, text:text,id:Math.random()}));
              }}
            >
              Save
            </MDBBtn>
          </Modal.Footer>
        </Modal>
      
    </div>
  );
};

export default AddMovie;
