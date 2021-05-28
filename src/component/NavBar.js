import {
  MDBBtn,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdbreact";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../redux/action/actions";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [search, setSearch] = useState("");
  const starTab = useSelector((state) => state.StarReducer.starTab);
  const dispatch = useDispatch();
  const [rate, setRate] = useState(0);

  return (
    <div>
      <MDBNavbar
        style={{ backgroundColor: "#212121" }}
        dark
        expand="md"
        scrolling
        fixed="top"
      >
        <MDBNavbarBrand>
          <strong
            style={{ fontFamily: "Sacramento, cursive", fontSize: "40px" }}
          >
            The Cyrix ...
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse navbar>
          <MDBNavbarNav right>
            <div>
              {starTab.map((star, index) => (
                <span
                key={index}
                  className={star.isColored? "gold" : "black"}
                  onClick={() => {
                    dispatch(Rating(star.id));
                    setRate(index + 1);
                  }}
                >
                  {star.icon}
                </span>
              ))}
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(search) => setSearch(search.target.value)}
            />
          </MDBNavbarNav>
          <MDBBtn outline color="white" style={{ color: "white" }}>
            Search
          </MDBBtn>
          <MDBBtn
            outline
            color="white"
            style={{ color: "white" }}
            onClick={handleShow}
          >
            ADD
          </MDBBtn>
        </MDBCollapse>
      </MDBNavbar>
      <AddMovie show={show} handleClose={handleClose} />
      <MovieList search={search} />
    </div>
  );
};

export default NavBar;
