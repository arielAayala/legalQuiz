/* eslint-disable react/prop-types */
import "./answer.css";
import QuestionPanel from "../questionPanel/QuestionPanel";
import AnswersSection from "../answersSection/AnswersSection";
import { contratos } from "../../json/contratos";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../loader/Loader";
import LoseSection from "../loseSection/LoseSection";
import WinSection from "../winSection/WinSection";

function Game(props) {
	const { contrato, setIniciar, setContrato } = props;
	const [puntos, setPuntos] = useState(0);
	const [vidas, setVidas] = useState(3);
	const [pregunta, setPregunta] = useState(0);
	const [data, setData] = useState(null);
	const [ayuda, setAyuda] = useState(null);
	const [terminado, setTerminado] = useState(false);

	useEffect(() => {
		if (contrato == "Contrato de adhesion") {
			setData(contratos["contrato de adhesion"]);
		} else if (contrato == "Contrato de alquiler") {
			setData(contratos["contrato de alquiler"]);
		} else if (contrato == "Contrato de honorarios o servicios") {
			setData(contratos["contrato de honorarios o servicios"]);
		} else if (contrato == "Contrato informatico") {
			setData(contratos["contrato informatico"]);
		} else if (contrato == "Contrato laboral") {
			setData(contratos["contrato laboral"]);
		}
	}, []);

	const cambiarSiguientePregunta = () => {
		setAyuda(false);
		if (pregunta == 6) {
			setTerminado(true);
		}
		setPregunta(() => {
			if (pregunta < 6) {
				return pregunta + 1;
			} else {
				return pregunta;
			}
		});
	};

	const selectResponse = (response) => {
		if (response == data.preguntas[pregunta].respuestaCorrecta) {
			setPuntos(() => puntos + 1);
			cambiarSiguientePregunta();
		} else {
			setVidas(() => vidas - 1);
			cambiarSiguientePregunta();
		}
	};

	if (vidas == 0) {
		return (
			<LoseSection
				setIniciar={setIniciar}
				setContrato={setContrato}
			/>
		);
	}

	if (terminado) {
		return (
			<WinSection
				contrato={contrato}
				puntos={puntos}
				setIniciar={setIniciar}
				setContrato={setContrato}
			/>
		);
	}

	if (!data) {
		return <Loader />;
	}

	return (
		<>
			<div className="vidaSection">
				{[...Array(vidas).keys()].map((i) => (
					<img
						className="vidas"
						key={i}
						src="../../../public/assets/vida.png"
					/>
				))}
			</div>

			<QuestionPanel
				pregunta={data.preguntas[pregunta].pregunta}
				numero={pregunta}
			/>

			<div className="content">
				{data.preguntas[pregunta].respuestas.map((i) => (
					<AnswersSection
						key={i}
						respuesta={i}
						selectResponse={selectResponse}
					/>
				))}
			</div>
			<div className="help">
				<button
					className="button-55"
					role="button"
					onClick={() => setAyuda(() => !ayuda)}
				>
					Ayuda
				</button>
				{ayuda ? (
					<h1 className="helpText">{data.preguntas[pregunta].infoRespuesta}</h1>
				) : null}
			</div>
		</>
	);
}

export default Game;
