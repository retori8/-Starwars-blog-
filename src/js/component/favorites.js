import propTypes from "prop-types";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favorites = (props) => {
  const { store } = useContext(Context);
  const { favorite } = store;

  return (
    <li>
      <Link className="dropdown-item" to="/single/:theid">
      {props.fav}
      </Link>
    </li>
  );
};

export default Favorites;
