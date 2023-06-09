import { Link } from "react-router-dom";
import Heading from "../assets/cv/Heading.png";
import PersonalData from "../assets/cv/CV-PersonalData-CA-Mvp1.png";
import Suggestion from "../assets/cv/Card-Suggestion.png";
import Experience from "../assets/cv/Section - Experience.png";
import Studies from "../assets/cv/Section - Studies.png";
import Language from "../assets/cv/Frame 214.png";
import Skills from "../assets/cv/Frame 215.png";
import Other from "../assets/cv/Frame 216.png";
import Status from "../assets/cv/Frame 217.png";
import Info from "../assets/cv/Frame 218.png";
import Footer from "../assets/cv/Footer.png";
import Sidebar from "../assets/cv/Sidebar.png";
import star from "../assets/Group.png";

import HeadingCell from "../assets/responsive/Heading.png";
import PersonalDataCell from "../assets/responsive/CV-PersonalData-CA-Mvp1.png";
import SuggestionCell from "../assets/responsive/Card-Suggestion.png";
import ExperienceCell from "../assets/responsive/Frame 210.png";
import StudiesCell from "../assets/responsive/Frame 211.png";
import LanguageCell from "../assets/responsive/Frame 214.png";
import SkillsCell from "../assets/responsive/Frame 215.png";
import OtherCell from "../assets/responsive/Frame 216.png";
import StatusCell from "../assets/responsive/Frame 217.png";
import InfoCell from "../assets/responsive/Frame 218.png";
import FooterCell from "../assets/responsive/Footer.png";
import SidebarCell from "../assets/responsive/Sidebar.png";
import { useState, useEffect } from "react";

import "../style/cv.css";

export const Cv = ({ skills }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1110);
		};

		// Detectar el ancho de la pantalla al cargar y al cambiar el tamaño de la ventana
		window.addEventListener("resize", handleResize);
		handleResize();

		// Eliminar el event listener al desmontar el componente
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const filter = skills.filter((skill) =>
		skill.grade === "Aprobado" ? skill : null
	);

	return (
		<header className="header">
			<img
				className="header__user"
				src={isMobile ? HeadingCell : Heading}
				alt=""
			/>
			<section className="profile">
				<main className="profile__main">
					<img
						className="main__user"
						src={isMobile ? PersonalDataCell : PersonalData}
						alt=""
					/>
					<img
						className="main__add"
						src={isMobile ? SuggestionCell : Suggestion}
						alt=""
					/>
					<section className="main__aptitudes">
						<section className="aptitudes__header">
							<h4 className="aptitudes__header-title">Aptitudes</h4>

							<Link to="/" className="aptitudes__header-buttom">
								ADQUIRIR NUEVA APTITUDES
							</Link>
						</section>

						<ul className="main__aptitudes-item">
							{filter.length !== 0 ? (
								filter.map((aptitud, index) => (
									<li key={index} className="aptitudes__item-title">
										<img
											className="aptitudes__item-img"
											src={star}
											alt="star-skill"
										/>
										{aptitud.technology}
									</li>
								))
							) : (
								<p>No tengo Aptitudes</p>
							)}
						</ul>
					</section>
					<img
						className="main__experience"
						src={isMobile ? ExperienceCell : Experience}
						alt=""
					/>
					<img
						className="main__education"
						src={isMobile ? StudiesCell : Studies}
						alt=""
					/>
					<img
						className="main__language"
						src={isMobile ? LanguageCell : Language}
						alt=""
					/>
					<img
						className="main__skills"
						src={isMobile ? SkillsCell : Skills}
						alt=""
					/>
					<img
						className="main__other-data"
						src={isMobile ? OtherCell : Other}
						alt=""
					/>
					<img
						className="main__status-preferences"
						src={isMobile ? StatusCell : Status}
						alt=""
					/>
					<img
						className="main__other-info"
						src={isMobile ? InfoCell : Info}
						alt=""
					/>
				</main>
				<aside className="profile__aside">
					<img
						className="aside"
						src={isMobile ? SidebarCell : Sidebar}
						alt=""
					/>
				</aside>
			</section>
			<footer className="profile__footer">
				<img className="footer" src={isMobile ? FooterCell : Footer} alt="" />
			</footer>
		</header>
	);
};
