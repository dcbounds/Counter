//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { App } from "./app.js";

function SimpleCounter(props) {
	return (
		<div className="big-counter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
