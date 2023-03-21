import propTypes from "prop-types";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favorites = (props) => {
  const { store, actions } = useContext(Context);
  const { favorite } = store;

  return (
    <li id="li" className="list-group-item d-flex justify-content-between align-items-start">
      {/* <Link className="dropdown-item" to="/single/:theid"> */}
      {props.fav}
      {/* </Link> */}
      <button
            id="buttonDelete"
            type="button-toggle"
            className="btn-close btn-close-focus-shadow"
            aria-label="Close"
            onClick={() => {actions.handleDelete(props.i)}}
      ></button>
    </li>
  );
};

export default Favorites;
