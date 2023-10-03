/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

function SpinnerContratos({ setResult }) {
	const [anchor, setAnchor] = useState(0);
	const [rotation, setRotation] = useState(0);
	const barRef = useRef(null);
	const force = () => {
		barRef.current.classList.toggle("stopper");
		const width2 = barRef.current.getBoundingClientRect().width;
		setAnchor(width2);
		spin();
	};
	const spin = () => {
		const newSpin = Math.floor(Math.random() * 210) + 340;
		setRotation(rotation + anchor + newSpin);
	};
	const final = () => {
		barRef.current.classList.toggle("stopper");
		const grades = ((rotation % 360) + 360) % 360;
		if ((grades >= 0 && grades <= 49) || (grades >= 349 && grades <= 360)) {
			setResult("Contrato de honorarios o servicios");
		} else if (grades >= 44 && grades <= 108) {
			setResult("Contrato de alquiler");
		} else if (grades >= 109 && grades <= 168) {
			setResult("Contrato de adhesion");
		} else if (grades >= 167 && grades <= 228) {
			setResult("Contrato laboral");
		} else if (grades >= 229 && grades <= 289) {
			setResult("Contrato informatico");
		} else if (grades >= 289 && grades <= 348) {
			setResult("Corona");
		}
	};

	return (
		<div className="container">
			<div
				className="rouletteWheel"
				style={{
					backgroundImage: `url('./assets/rouletteWheel.png')`,
					transform: `rotate(${rotation}deg)`,
					transition: "transform 6s cubic-bezier(0.2,0.8,0.7,0.99)",
				}}
				onTransitionEnd={final}
			></div>
			<div className="bar1">
				<div
					className="bar1_Animation"
					ref={barRef}
				></div>
			</div>
			<div className="bar2">
				<button
					className="button-82-pushable spin"
					role="button"
					onClick={force}
				>
					<span className="button-82-shadow"></span>
					<span className="button-82-edge"></span>
					<span className="button-82-front text">Girar</span>
				</button>
			</div>
			<div className="arrowPicker">
				<img
					src="./assets/arrowPicker.png"
					alt="picker"
				/>
			</div>
		</div>
	);
}

export default SpinnerContratos;
