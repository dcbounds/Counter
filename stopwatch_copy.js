import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export default class Stopwatch extends React.Component {
	startTimer = () => {
		this.setState({
			timerOn: true,
			timerTime: this.state.timerTime,
			timerStart: Date.now() - this.state.timerTime
		});
		this.timer = setInterval(() => {
			this.setState({
				timerTime: Date.now() - this.state.timerStart
			});
		}, 10);
	};

	stopTimer = () => {
		this.setState({ timerOn: false });
		clearInterval(this.timer);
	};
	resetTimer = () => {
		this.setState({
			timerStart: 0,
			timerTime: 0
		});
	};
	render() {
		const { timerTime } = this.state.timerTime;
		let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
		let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
		let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
		let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

		return (
			<div>
				<div className="text-center mt-5">
					<h1>Stopwatch App!</h1>

					<div className="Stopwatch-display">
						<p>Stopwatch</p> {hours} : {minutes} : {seconds} :{" "}
						{centiseconds}
						{this.state.timerOn === false &&
							this.state.timerTime === 0 && (
								<button onClick={this.startTimer}>Start</button>
							)}
						{this.state.timerOn === true && (
							<button onClick={this.stopTimer}>Stop</button>
						)}
						{this.state.timerOn === false &&
							this.state.timerTime > 0 && (
								<button onClick={this.startTimer}>
									Resume
								</button>
							)}
						{this.state.timerOn === false &&
							this.state.timerTime > 0 && (
								<button onClick={this.resetTimer}>Reset</button>
							)}
					</div>
				</div>
			</div>
		);
	}
}
