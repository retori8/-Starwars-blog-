import React from "react";
import "../../styles/home.css";
import 
Card from "../../js/component/card.js";

export const Home = () => (
	<>
	<p id="titulo" class="fs-1 text-white">CHARACTERS</p>
	<hr className="hr"/>
	<div className="containet d-flex justify-content-center">
		<div class="row row-col-2 mt-5 g-2">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
	<p id="titulo" class="fs-1 text-white">PLANETS</p>
	<div className="containet d-flex justify-content-center">
		<div class="row row-col-2 mt-5 g-2">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
	</>
);
