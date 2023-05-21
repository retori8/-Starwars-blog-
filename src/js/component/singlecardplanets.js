import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCardPlanets = () => {
    const { store } = useContext(Context);
    const {uid} = useParams();
    const position = parseInt(uid) -1;
    console.log(uid)

  return (
          <div className="cardetail card bg-dark">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  style={{ height: "60vh" }}
                  src="https://www.consumer.es/app/uploads/2004/05/flor-de-loto-e1653918982491.jpg"
                  className="img-fluid rounded-start bg-white"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body text-light">
                  <h1 className="card-title">{store.planets?.results[position]?.name}</h1>
                  <hr />
                  <h5 className="card-text"> Diameter :{store.planets?.results[position]?.properties?.diameter}</h5>
                  <h5 className="card-text"> Rotation Period :{store.planets?.results[position]?.properties?.rotation_period}</h5>
                  <h5 className="card-text"> Orbital Period :{store.planets?.results[position]?.properties?.orbital_period}</h5>
                  <h5 className="card-text"> Gravity :{store.planets?.results[position]?.properties?.gravity}</h5>
                  <h5 className="card-text"> Population :{store.planets?.results[position]?.properties?.population}</h5>
                  <h5 className="card-text"> Climate :{store.planets?.results[position]?.properties?.climate}</h5>
                </div>
              </div>
            </div>
          </div>
  );
};