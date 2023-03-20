import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {

    const { actions } = useContext(Context);

  return (
    <div className="card-body text-light">
      <h4 className="card-title">{props?.title}</h4>
      <hr />
      <h6 className="card-text">Manufacturer: {props?.manufacturer}</h6>
      <h6 className="card-text">Model: {props?.model}</h6>
      <h6 className="card-text">Passengers: {props?.passengers}</h6>
      <hr />
      <div className="d-flex justify-content-between">
        <Link
          to={"/single/" + { ...props?.uid }}
          className="btn btn-outline-light"
          id="lernMore"
        >
          Learn more!
        </Link>
        <button
          onClick={() => {
            actions.addFavorite(props.title);
          }}
          className="btn btn-outline-danger"
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default CardVehicles;
