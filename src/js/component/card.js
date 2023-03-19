import React, {useContext} from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {

  const{actions} = useContext(Context)
  
  return (
    <div id="card" className="card m-3" style={{ width: "18rem" }}>
      <img
        style={{ height: "30vh" }}
        src="..."
        className="card-img-top bg-white"
        alt="..."
      />
      <div className="card-body text-light">
        {props.children}
        <div className="d-flex justify-content-between">
          <Link
            to={"/single/" + props.key}
            className="btn btn-outline-light"
            id="lernMore"
          >
            Learn more!
          </Link>
          <button onClick={() => {actions.addFavorite(props.title)}} className="btn btn-outline-danger">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
