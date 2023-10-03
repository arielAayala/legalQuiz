import { useEffect } from "react";
import "./loader.css";

function Loader() {
	useEffect(() => {});

	return (
		<>
			<div className="containerTypeWriter">
				<div className="typewriter">
					<div className="slide">
						<i></i>
					</div>
					<div className="paper"></div>
					<div className="keyboard"></div>
				</div>
			</div>
		</>
	);
}

export default Loader;
