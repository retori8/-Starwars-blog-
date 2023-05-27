import React from "react";

const Card = (props) => {
    return(
        <div id="card" className="card m-3" style={{ width: "18rem" }}>
        <img
          style={{ height: "30vh" }}
          src={props?.img}
          className="card-img-top bg-white"
          alt="..."
        />
        {props.children}
        </div>
    )
};

export default Card