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
import "../style/cv.css";

export const Cv = ({ skills }) => {
	const filter = skills.filter((skill) =>
		skill.grade === "Aprobado" ? skill : null
	);
	console.log(filter);

	return (
		<header className="header">
			<img className="header__user" src={Heading} alt="" />
			<section className="profile">
				<main className="profile__main">
					<img className="main__user" src={PersonalData} alt="" />
					<img className="main__add" src={Suggestion} alt="" />
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
					<img className="main__experience" src={Experience} alt="" />
					<img className="main__education" src={Studies} alt="" />
					<img className="main__language" src={Language} alt="" />
					<img className="main__skills" src={Skills} alt="" />
					<img className="main__other-data" src={Other} alt="" />
					<img className="main__status-preferences" src={Status} alt="" />
					<img className="main__other-info" src={Info} alt="" />
				</main>
				<aside className="profile__aside">
					<img className="aside" src={Sidebar} alt="" />
				</aside>
			</section>
			<footer className="profile__footer">
				<img className="footer" src={Footer} alt="" />
			</footer>
		</header>
	);
};
