import avatar from "../assets/avatar.png";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__list-item">
					<img src={logo} alt="" />
				</li>
				<li className="navbar__list-unable">Empleo</li>
				<li className="navbar__list-unable">Mas Ofertas</li>
				<Link to="/cv" className="navbar__list-item">
					CV
				</Link>
				<li className="navbar__list-unable">Quien me ve</li>
				<Link to="/" className="navbar__list-item">
					Aptitudes
				</Link>
			</ul>
			<div className="navbar__user">
				<img src={avatar} alt="" />
				<img src="" alt="" />
			</div>
		</nav>
	);
};
