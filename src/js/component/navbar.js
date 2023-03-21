import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Logo from "./logo.js";
import propTypes from "prop-types";
import { Context } from "../store/appContext.js";
import Favorites from "./favorites.js";

export const Navbar = () => {
  const { store } = useContext(Context);
  const { favorite } = store;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-4" id="navbar">
        <div className="container-fluid">
          <Link to="/">
            <span id="span" className="navbar-brand m-2 ms-5" width="30">
              <Logo />
            </span>
          </Link>
          <div className="ml-auto">
            <div className="ml-auto">
              <li class="nav-item dropdown">
                <button
                  id="button"
                  className="btn btn-lg align-middle dropdown-toggle m-2 me-5 ms-3 p-3"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <span className="badge rounded-pill text-bg-light fs-6">
                    {favorite.length}
                  </span>
                  FAVORITES
                </button>
                <ul className="dropdown-menu">
                  
                  {!!favorite &&
                    favorite.length > 0 &&
                    favorite.map((fav, index) => {
                      console.log(favorite)
                      return (
                        <Favorites fav={fav} i={index}/>
                      );
                    })}
                  {/* <li>
                    <Link className="dropdown-item" to="/single/:theid">
                      character2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/single/:theid">
                      character3
                    </Link>
                  </li>  */}
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
