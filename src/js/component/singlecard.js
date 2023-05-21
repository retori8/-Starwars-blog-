import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleCardCharacter = () => {
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
                  src="../../../dist/img/1.jpeg"
                  className="img-fluid rounded-start bg-white"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body text-light">
                  <h1 className="card-title">{store.characters?.results[position]?.name}</h1>
                  <hr />
                  <h5 className="card-text"> Height :{store.characters?.results[position]?.properties?.height}</h5>
                  <h5 className="card-text"> Mass :{store.characters?.results[position]?.properties?.mass}</h5>
                  <h5 className="card-text"> Hair color :{store.characters?.results[position]?.properties?.hair_color}</h5>
                  <h5 className="card-text"> Skin color :{store.characters?.results[position]?.properties?.skin_color}</h5>
                  <h5 className="card-text"> Eye color :{store.characters?.results[position]?.properties?.eye_color}</h5>
                  <h5 className="card-text"> Birth year :{store.characters?.results[position]?.properties?.birth_year}</h5>
                  <h5 className="card-text"> Gender :{store.characters?.results[position]?.properties?.gender}</h5>
                </div>
              </div>
            </div>
          </div>
  );
};


