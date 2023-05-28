import avatar from "../assets/avatar.png";
import logo from "../assets/Logo.png";
import avatarRes from "../assets/responsive/avatar-responsive.png";
import btn from "../assets/responsive/hamburguer.png";
import logoNav from "../assets/responsive/Logo-nav.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/navbar.css";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<div className="responsive">
				<button className="responsive__btn" onClick={toggleNavbar}>
					<img src={btn} alt="" />
				</button>

				<img src={logoNav} alt="" />
			</div>
			<ul
				className={`navbar__list ${isOpen ? "active" : ""}`}
				onClick={toggleNavbar}>
				<li className="navbar__list-item">
					<img src={logo} alt="" />
				</li>
				<div className="item">
					<img className="navbar__list-img" src={avatarRes} alt="" />
				</div>
				<li className="navbar__list-unable">Empleo</li>
				<li className="navbar__list-unable">Mas Ofertas</li>
				<Link to="/cv" className="navbar__list-item">
					CV
				</Link>
				<li className="navbar__list-unable">Quien me ve</li>
			</ul>
			<div className="navbar__user">
				<img src={avatar} alt="" />
			</div>
		</nav>
	);
};
