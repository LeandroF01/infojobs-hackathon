import avatar from "../assets/avatar.png";
import logo from "../assets/Logo.png";
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
				<li className="navbar__list-unable">CV</li>
				<li className="navbar__list-unable">Quien me ve</li>
				<li className="navbar__list-item">Aptitudes</li>
			</ul>
			<div className="navbar__user">
				<img src={avatar} alt="" />
				<img src="" alt="" />
			</div>
		</nav>
	);
};
