/* eslint-disable react/prop-types */
import "./winsection.css";

function LoseSection({ setIniciar, setContrato }) {
	const len = `Perdiste, gastaste todas tus vidas`;

	return (
		<div className="wrapper">
			<div
				className="typing"
				style={{ color: "white", width: `${len.length}ch` }}
			>
				Perdiste, gastaste todas tus vidas
			</div>
			<div>
				<button
					className="button-35"
					role="button"
					onClick={() => {
						setIniciar(false);
						setContrato(null);
					}}
				>
					Volver a inicio
				</button>
			</div>
		</div>
	);
}

export default LoseSection;
