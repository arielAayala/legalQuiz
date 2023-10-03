import App from "../App";
import Login from "../components/ButtonLogin/Login";

function Home() {
	return (
		<div className="home">
			<div className="top"></div>
			<div className="login">
				<Login />
			</div>
			<App />
		</div>
	);
}

export default Home;
