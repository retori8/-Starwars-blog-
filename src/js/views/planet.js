import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
  const { store } = useContext(Context);
  const {uid} = useParams();

  return (
    <>
        <div id="singlecard" className="card w-75 mb-3 position-absolute top-50 start-50 translate-middle text-light">
          <div className="row g-0">
            <div className="col-md-4">
              <img style={{ height: "90vh" }}src="..." className="img-fluid rounded-start bg-light" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{store.planets?.results?.uid}</h5>
                <p className="card-text">
                {store.planets?.results?.name}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

Planet.propTypes = {
  match: PropTypes.object,
};
