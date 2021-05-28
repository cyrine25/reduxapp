import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Delete } from "../redux/action/actions";
import EditModal from "./EditModal";


const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-auto p-2" style={{ width: "23rem", marginTop: "80px" }}>
      <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
          <MDBCardImage
            className="img-fluid"
            src={movie.src}
            style={{ width: "325px" }}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle
              style={{ fontFamily: "Sacramento, cursive", fontSize: "30px" }}
            >
              {movie.title} 
              
            </MDBCardTitle>
            <span>{"".padStart(movie.rating,"⭐")}</span><span style={{fontSize:'20px'}}>{"".padStart(5-movie.rating,"☆")}</span>
            <MDBCardText>{movie.text}</MDBCardText>
            <MDBBtn
              outline
              color="grey"
              style={{ color: "#212121" }}
              onClick={() => dispatch(Delete(movie.id))}
            >
              Delete
            </MDBBtn>
            <MDBBtn
              outline
              color="grey"
              style={{ color: "#212121" }}
              onClick={() => {
                handleShow();
                setId(movie.id);
              }}
            >
              Edit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <EditModal show={show} handleClose={handleClose} id={id} movie={movie} />
    </div>
  );
};

export default MovieCard;
