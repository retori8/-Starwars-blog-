import React from "react";

const CardTextVehicles = (props) => {
    return(
        <>
        <h4 className="card-title">{props?.title}</h4>
        <hr />
        <h6 className="card-text">Manufacturer: {props?.manufacturer}</h6>
        <h6 className="card-text">Model: {props?.model}</h6>
        <h6 className="card-text">Passengers: {props?.passengers}</h6>
        <hr />
        </>
    )
};

export default CardTextVehicles