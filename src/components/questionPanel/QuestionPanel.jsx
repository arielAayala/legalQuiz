/* eslint-disable react/prop-types */
import "./QuestionPanel.css";

function QuestionPanel(props) {
	const { pregunta, numero } = props;
	return (
		<>
			<section className="panel">
				<header className="panel__header">
					<h1 className="panel__title">Pregunta n°{numero + 1}</h1>
				</header>
				<div className="panel__content">{pregunta}</div>
			</section>
		</>
	);
}

export default QuestionPanel;
