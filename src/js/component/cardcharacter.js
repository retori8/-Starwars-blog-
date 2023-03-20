import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacters = (props) => {
  
  const { store, actions } = useContext(Context);

  return (
    <div className="card-body text-light" id={props?.key}>
      <h4 className="card-title">{props?.title}</h4>
      <hr />
      <h6 className="card-text  ">Gender: {props?.gender}</h6>
      <h6 className="card-text  ">Hair color: {props?.hair_color}</h6>
      <h6 className="card-text ">Eye color: {props?.eye_color}</h6>
      <hr />
      <div className="d-flex justify-content-between">
        <Link
          to={props.uid}
          className="btn btn-outline-light"
        >
          Learn more!
        </Link>
        <button
          onClick={() => {
            actions.addFavorite(props?.key);
          }}
          className="btn btn-outline-danger"
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default CardCharacters;
