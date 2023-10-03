/* eslint-disable react/prop-types */
import "./lose.css";

function LoseSection({ setIniciar, setContrato }) {
	return (
		<div className="loseSection">
			<h1>Perdiste, te quedaste sin vidas</h1>
			<button
				onClick={() => {
					setIniciar(false);
					setContrato(null);
				}}
			>
				Volver a iniciar
			</button>
		</div>
	);
}

export default LoseSection;
