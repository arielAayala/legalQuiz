import { useAuth } from "../../context/authContext";
import UserDropbox from "./UserDropbox";
import "./buttonLogin.css";

function Login() {
	const { iniciarSesionConGoogle, user, cerrarSesionConGoogle } = useAuth();

	if (!user) {
		return (
			<button
				className="button-85"
				onClick={iniciarSesionConGoogle}
			>
				Iniciar Sesion
			</button>
		);
	}

	return (
		<UserDropbox
			nombre={user.displayName}
			email={user.email}
			foto={user.photoURL ?? "../../../public/assets/userPhoto.png"}
			cerrarSesion={cerrarSesionConGoogle}
		/>
	);
}

export default Login;
