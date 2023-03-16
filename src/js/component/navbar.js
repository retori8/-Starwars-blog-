import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Logo from "./logo.js";

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-4" id="navbar">
        <div class="container-fluid">
          <Link to="/">
            <span id="span" className="navbar-brand m-2 ms-5" width="30">
              <Logo />
            </span>
          </Link>
          <div className="ml-auto">
            <div className="ml-auto">
              <Link to="/demo">
                <button
                  id="button"
                  className="btn btn-lg align-middle dropdown-toggle m-2 me-5 ms-3 p-3"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                <FaHeart className="me-4" />
                  FAVORITES
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/single/:theid">
                      character1
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/single/:theid">
                      character2
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/single/:theid">
                      character3
                    </Link>
                  </li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
