/* eslint-disable react/prop-types */

function AnswersSection(props) {
	const { respuesta, selectResponse } = props;
	return (
		<div
			onClick={() => selectResponse(respuesta)}
			className="item"
		>
			{respuesta}
		</div>
	);
}

export default AnswersSection;
