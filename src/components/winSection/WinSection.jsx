/* eslint-disable react/prop-types */
import "./winsection.css";
import { useAuth } from "../../context/authContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

function WinSection({ contrato, puntos, setIniciar, setContrato }) {
	const { user } = useAuth();

	const handleSubmitPuntos = async () => {
		const docSnap = await getDoc(doc(db, "UserPoint", user.uid));
		if (docSnap.exists()) {
			await setDoc(doc(db, "UserPoint", user.uid), {
				nombre: user.displayName,
				puntosTotales: docSnap.data().puntosTotales + puntos,
			});
		} else {
			await setDoc(doc(db, "UserPoint", user.uid), {
				nombre: user.displayName,
				puntosTotales: puntos,
			});
		}
		setIniciar(false);
		setContrato(null);
	};

	const len = `Ganaste, respondiste ${puntos}/7 preguntas correctamente del ${contrato}`;

	return (
		<div className="wrapper">
			<div
				className="typing"
				style={{ color: "white", width: `${len.length}ch` }}
			>
				Ganaste, respondiste {puntos}/7 preguntas correctamente del {contrato}
			</div>
			<div>
				{user ? (
					<button
						className="button-35"
						role="button"
						onClick={handleSubmitPuntos}
					>
						Guardar Intento
					</button>
				) : null}
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

export default WinSection;
