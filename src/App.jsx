import { useState } from "react";
import SpinnerContratos from "./components/spinnerContratos/SpinnerContratos";
import ModalPreStart from "./components/modalPreStart/ModalPreStart";
import Game from "./components/game/Game";

function App() {
	const [contrato, setContrato] = useState(null);
	const [iniciar, setIniciar] = useState(false);

	if (!iniciar) {
		return (
			<>
				{contrato ? (
					<ModalPreStart
						setIniciar={setIniciar}
						contrato={contrato}
						setContrato={setContrato}
					/>
				) : null}
				<SpinnerContratos setResult={setContrato} />
			</>
		);
	}

	return (
		<Game
			contrato={contrato}
			setIniciar={setIniciar}
			setContrato={setContrato}
		/>
	);
}

export default App;
