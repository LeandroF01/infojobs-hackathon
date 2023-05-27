import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import mongodb from "../assets/technologies/mongodb-icon.svg";
import javascript from "../assets/technologies/javascript.svg";
import java from "../assets/technologies/java.svg";

export const SkillSelection = ({ skills }) => {
	const navigate = useNavigate();

	const [canRetry, setCanRetry] = useState(true);
	const [retryTime, setRetryTime] = useState(null);

	const filter = skills.filter((skill) =>
		skill.grade !== "Aprobado" ? skill : null
	);

	const handdleClick = (testName) => {
		navigate(`/test/${testName}`);
	};

	const test = (type) => {
		const lowercaseType = type.toLowerCase();
		const technology = lowercaseType.endsWith(".js")
			? lowercaseType.slice(0, -3)
			: lowercaseType;

		return technology;
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

		const imageSrc = technologyImages[test(type)];
		return (
			<div className="selection__questions-image">
				<img src={imageSrc} alt={`${type}`} />
			</div>
		);
	};

	//time nmo parobado
	useEffect(() => {
		const calculateRetryTime = () => {
			const noAprobadoSkills = skills.filter(
				(skill) => skill.grade === "No aprobado"
			);
			console.log(noAprobadoSkills.length);
			if (noAprobadoSkills.length > 0) {
				setCanRetry(false);

				// Calcular la fecha y hora para el próximo mes
				const now = new Date();
				const nextMonth = now.getMonth() + 1;
				const nextYear = now.getFullYear();
				const retryDate = new Date(nextYear, nextMonth, 1);
				retryDate.setHours(0, 0, 0, 0);

				const timeRemaining = retryDate - now;
				setRetryTime(timeRemaining);
			}
		};

		calculateRetryTime();
	}, [skills]);

	useEffect(() => {
		if (!canRetry && retryTime !== null) {
			const interval = setInterval(() => {
				setRetryTime((prevRetryTime) => {
					if (prevRetryTime <= 0) {
						clearInterval(interval);
						setCanRetry(true);
						return null;
					}
					return prevRetryTime - 1000;
				});
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [canRetry, retryTime]);

	const renderTime = (time) => {
		const padZero = (value) => {
			return value.toString().padStart(2, "0");
		};

		const secondsInAMonth = 30 * 24 * 60 * 60;
		const months = Math.floor(time / secondsInAMonth);
		const days = Math.floor((time % secondsInAMonth) / (24 * 60 * 60));

		return `Próximo intento en ${months}:${padZero(days)}`;
	};
	return (
		<>
			<section className="selection">
				<section className="selection__questions">
					{filter.map((el) => {
						return (
							<article
								className={`selection__questions-content ${test(
									el.technology
								)}`}
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
									<div className="timer">
										{el.grade === "No aprobado" && retryTime !== null ? (
											renderTime(retryTime)
										) : (
											<button
												className="selection__questions-button"
												onClick={() => handdleClick(el.testName)}>
												View Questions
											</button>
										)}
									</div>
								</div>
							</article>
						);
					})}
				</section>
			</section>
		</>
	);
};
