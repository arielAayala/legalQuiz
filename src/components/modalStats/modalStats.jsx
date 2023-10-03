/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./modalStats.css";
import { orderBy, limit, collection, query, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase.js";

function ModalStats({ setModal }) {
	const [lista, setLista] = useState([]);

	const getPlayers = async () => {
		const lst = [];
		const q = query(
			collection(db, "UserPoint"),
			orderBy("puntosTotales", "desc"),
			limit(10)
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			lst.push({ ...doc.data(), id: doc.id });
		});
		setLista(lst);
	};

	useEffect(() => {
		getPlayers();
	}, []);

	return (
		<div className="containerModal">
			<div className="modalContenido">
				<button onClick={() => setModal(false)}>Cerrar</button>
				{lista.map((i, index) => {
					return (
						<h5 key={i.id}>
							#{index + 1} {i.nombre} - Puntos totales:{i.puntosTotales}
						</h5>
					);
				})}
			</div>
		</div>
	);
}

export default ModalStats;
