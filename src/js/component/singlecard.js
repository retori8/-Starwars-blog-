import React from "react";
// import React, { Component } from "react";

export const SingleCardCharacter = (props) => {
    const {name, description, gender, eye_color, hair_color } = useParams();
    console.log(params)

  return (
          <div className="card bg-dark m-3 mb-4" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ height: "60vh" }}
                  src="..."
                  className="img-fluid rounded-start bg-white"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-light">
                  <h4 className="card-title">Name Character</h4>
                  <p className="card-text">
                    Description ranodom this is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <hr />
                </div>
              </div>
              <div className="d-flex justify-content-between m-3 text-light">
                <h6 className="card-text  ">Gender: single {gender}</h6>
                <h6 className="card-text  ">Hair color: {props.hairColor}</h6>
                <h6 className="card-text ">Eye color: {props.eyeColor}</h6>
              </div>
            </div>
          </div>
  );
};
