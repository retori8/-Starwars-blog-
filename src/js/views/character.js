import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
  const { store } = useContext(Context);
  const { characters } = useContext(Context);
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
                <h5 className="card-title text-danger">hola</h5>
                <p className="card-text">
                {store.characters?.results?.description}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>

    // <div className="jumbotron bg-light">
    // 	{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}

    // 	<hr className="my-4" />

    // 	{/* <Link to="/">
    // 		<span className="btn btn-primary btn-lg" href="#" role="button">
    // 			Back home
    // 		</span>
    // 	</Link> */}
    // </div>
  );
};

Character.propTypes = {
  match: PropTypes.object,
};
