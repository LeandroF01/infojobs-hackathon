import { useNavigate } from "react-router-dom";
import "../style/skillSelection.css";

import php from "../assets/technologies/php.svg";
import angular from "../assets/technologies/angular-icon.svg";
import css from "../assets/technologies/css-3.svg";
import express from "../assets/technologies/express.svg";
import vue from "../assets/technologies/vue.svg";
import svelte from "../assets/technologies/svelte-icon.svg";
import sass from "../assets/technologies/sass.svg";
import react from "../assets/technologies/react.svg";
import postgresql from "../assets/technologies/postgresql.svg";
import node from "../assets/technologies/nodejs.svg";
import mysql from "../assets/technologies/mysql.svg";
import mongodb from "../assets/technologies/mongodb.svg";
import javascript from "../assets/technologies/javascript.svg";
import java from "../assets/technologies/java.svg";

export const SkillSelection = ({ skills }) => {
	const navigate = useNavigate();

	const filter = skills.filter((skill) =>
		skill.grade !== "Aprobado" ? skill : null
	);

	const handdleClick = (testName) => {
		navigate(`/test/${testName}`);
	};

	const renderImage = (type) => {
		const technologyImages = {
			php,
			angular,
			css,
			express,
			vue,
			svelte,
			sass,
			react,
			postgresql,
			node,
			mysql,
			mongodb,
			javascript,
			java,
		};
		const lowercaseType = type.toLowerCase();
		const technology = lowercaseType.endsWith(".js")
			? lowercaseType.slice(0, -3)
			: lowercaseType;
		const imageSrc = technologyImages[technology];
		return (
			<div className="selection__questions-image">
				<img src={imageSrc} alt={`${type}`} />
			</div>
		);
	};
	return (
		<>
			<section className="selection">
				<section className="selection__questions">
					{filter.map((el) => {
						return (
							<article
								className={`selection__questions-content ${el.technology.toLowerCase()}`}
								key={el.testName}>
								<div>
									<h3 className="selection__questions-title">{el.testName}</h3>
									{renderImage(el.technology)}
									<p className="selection__questions-description">
										{el.description}
									</p>
								</div>

								<div className="selection__questions-interactive">
									<p className="selection__questions-grade">{el.grade}</p>

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
