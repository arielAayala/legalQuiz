/* eslint-disable react/prop-types */
function UserDropbox(props) {
	const { nombre, foto, email, cerrarSesion } = props;

	return (
		<div className="card">
			<div className="card-border-top"></div>
			<div className="img">
				<img src={foto} />
			</div>
			<span> {nombre}</span>
			<p className="job"> {email}</p>
			<button onClick={cerrarSesion}> Cerrar Sesión</button>
		</div>
	);
}

export default UserDropbox;
