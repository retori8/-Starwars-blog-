import React from "react";

const CardTextPlanets = (props) => {
    return(
        <>
        <h4 className="card-title">{props?.title}</h4>
        <hr />
        <h6 className="card-text">Population: {props?.population}</h6>
        <h6 className="card-text">Terrain: {props?.terrain}</h6>
        <hr />
        </>
    )
};

export default CardTextPlanets