import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export default class Stopwatch extends React.Component {
	render() {
		return (
			<div>
				<div className="text-center mt-5">
					<div className="Stopwatch-display">Counter Here</div>
				</div>
			</div>
		);
	}
}
