import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar bg-dark" data-bs-theme="dark">
			<Link to="/">
				<span className="navbar-brand m-2 ms-5 h1"><img src="https://es.logodownload.org/star-wars-logo/" alt="Bootstrap" width="30" height="24"/></span>
			</Link>
			<div className="ml-auto">
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-outline-light  dropdown-toggle m-2 me-5 p-3" type="button" data-bs-toggle="dropdown"> FAVORITES </button>
					<ul class="dropdown-menu">
    					<li><Link class="dropdown-item" to="/single/:theid">character1</Link></li>
						<li><Link class="dropdown-item" to="/single/:theid">character2</Link></li>
						<li><Link class="dropdown-item" to="/single/:theid">character3</Link></li>
  					</ul>
				</Link>
			</div>
			</div>
		</nav>
	);
};
