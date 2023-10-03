/* eslint-disable react/prop-types */
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../services/firebase.js";

const authContext = createContext(null);

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	const cerrarSesionConGoogle = useCallback(() => {
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const iniciarSesionConGoogle = useCallback(() => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user.providerData[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const values = useMemo(
		() => ({ iniciarSesionConGoogle, cerrarSesionConGoogle, user }),
		[iniciarSesionConGoogle, cerrarSesionConGoogle, user]
	);

	return <authContext.Provider value={values}>{children}</authContext.Provider>;
}

const useAuth = () => useContext(authContext);

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContextProvider, useAuth };
