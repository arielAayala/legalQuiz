import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import Home from "./pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<Home />
		</AuthContextProvider>
	</React.StrictMode>
);
