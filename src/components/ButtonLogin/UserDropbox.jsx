import { useState } from "react";
import ModalStats from "../modalStats/modalStats";

/* eslint-disable react/prop-types */
function UserDropbox(props) {
	const { nombre, foto, cerrarSesion } = props;
	const [modal, setModal] = useState(false);

	return (
		<div className="card">
			<div className="user">
				<img
					className="img"
					src={foto}
				/>
				<h3>{nombre}</h3>
			</div>
			<div>
				<button
					className="cerrarSesion"
					onClick={cerrarSesion}
				>
					Cerrar Sesión
				</button>
				<button
					className="cerrarSesion"
					onClick={() => {
						setModal(true);
					}}
				>
					Ver puntajes globales
				</button>
			</div>
			{modal ? <ModalStats setModal={setModal} /> : null}
		</div>
	);
}

export default UserDropbox;
