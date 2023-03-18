import React from "react";

const CardTextCharacters = (props) => {
    return(
        <>
        <h4 className="card-title">{props?.title}</h4>
        <hr />
        <h6 className="card-text  ">Gender: {props?.gender}</h6>
        <h6 className="card-text  ">Hair color: {props?.hair_color}</h6>
        <h6 className="card-text ">Eye color: {props?.eye_color}</h6>
        <hr />
        </>
    )
};

export default CardTextCharacters