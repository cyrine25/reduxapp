import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Edit } from "../redux/action/actions";

const EditModal = ({ show, handleClose, id, movie }) => {
  const [title, setTitle] = useState(movie.title);
  const [src, setSrc] = useState(movie.src);
  const [rating, setRating] = useState(movie.rating);
  const [text, setText] = useState(movie.text);
  const dispatch = useDispatch();
  const Save = () => {
    dispatch(Edit({ id, title, src, rating, text }));
    handleClose();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ backgroundColor: "#212121" }}>
          <h1 style={{ color: "white", fontFamily: "Sacramento, cursive" }}>
            Let's Change Something !!
          </h1>
          <div>
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
          </div>

          <MDBBtn
            outline
            color="white"
            style={{ color: "white" }}
            onClick={handleClose}
          >
            Close
          </MDBBtn>
          <MDBBtn
            outline
            color="white"
            style={{ color: "white" }}
            onClick={Save}
          >
            Save Changes
          </MDBBtn>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditModal;
