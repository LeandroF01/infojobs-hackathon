import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import "../style/skillSelection.css";

export const SkillSelection = ({ skills }) => {
	const navigate = useNavigate();

	const handdleClick = (testName) => {
		navigate(`/test/${testName}`);
	};

	const condition = (grade) => {
		console.log(grade);
		return grade === "Aprobado" ? "aprobado" : null;
	};

	return (
		<>
			<section className="selection">
				<h2 className="selection__title">Test de Aptitudes</h2>
				<section className="selection__questions">
					{skills.map((el) => {
						return (
							<article
								className="selection__questions-content"
								key={el.testName}>
								<h3 className="selection__questions-title">{el.testName}</h3>
								<p className="selection__questions-description">
									{el.description}
								</p>
								<div className="selection__questions-interactive">
									<p
										className={`selection__questions-grade ${condition(
											el.grade
										)}`}>
										{el.grade}
									</p>

									<button
										className="selection__questions-button"
										onClick={() => handdleClick(el.testName)}>
										View Questions
									</button>
								</div>
							</article>
						);
					})}
				</section>
			</section>
		</>
	);
};
