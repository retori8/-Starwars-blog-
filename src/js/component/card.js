import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card bg-dark m-4 ms-5" style={{ width: "18rem" }}>
            <img style={{height:"30vh"}} src="..." className="card-img-top bg-white" alt="..." />
            <div className="card-body text-light">
                <h4 className="card-title">Card title</h4>
                <hr/>
                <h6 className="card-text  ">Gender: {props.gender}</h6>
                <h6 className="card-text  ">Hair color: {props.hairColor}</h6>
                <h6 className="card-text ">Eye color: {props.eyeColor}</h6>
                <hr/>
                <div className="d-flex justify-content-between">
                <Link to="/single/:theid" className="btn btn-outline-light">
                    Learn more!
                </Link>
                <button className="btn btn-outline-danger">
                    <FaHeart />
                </button>
                </div>
            </div>
        </div>
    )
};

export default Card
