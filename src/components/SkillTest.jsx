import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Questions } from "./Questions.jsx";
import { Result } from "./Result.jsx";
import { Modal } from "./Modal.jsx";
import time from "../assets/ExtraTime.svg";
import confetti from "canvas-confetti";
import "../style/skillTest.css";

export const SkillTest = ({ skills }) => {
	const { testName } = useParams();

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const [test, setTest] = useState(null);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	//const [testIndex, setTestIndex] = useState(0);

	const [minutes, setMinutes] = useState(10);
	const [seconds, setSeconds] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const [result, setResult] = useState(null);

	const [approvalInterval, setApprovalInterval] = useState("");

	useEffect(() => {
		// Simulación de una llamada a la API para obtener el test específico
		// Aquí debes implementar la lógica para obtener los datos del test en base al `testName`
		// Por simplicidad, se utiliza un setTimeout para simular la llamada asincrónica
		setTimeout(() => {
			const testFromAPI = skills.find((skill) => skill.testName === testName);
			setTest(testFromAPI);
		}, 800);
	}, [testName]);

	useEffect(() => {
		let totalSeconds = minutes * 60 + seconds;
		let interval = setInterval(() => {
			if (totalSeconds > 0) {
				totalSeconds--;
				setMinutes(Math.floor(totalSeconds / 60));
				setSeconds(totalSeconds % 60);
			} else {
				clearInterval(interval);
				setShowModal(true);
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [minutes, seconds]);

	if (!test) {
		return <div>Loading...</div>;
	}

	const closeModal = () => {
		setShowModal(false);
		navigate(-1); // Aquí especifica la ruta a la que deseas regresar
	};

	const handleAnswerSelect = (questionIndex, answerIndex) => {
		setSelectedAnswers((prevSelectedAnswers) => {
			const updatedSelectedAnswers = [...prevSelectedAnswers];
			updatedSelectedAnswers[questionIndex] = answerIndex;
			return updatedSelectedAnswers;
		});

		if (questionIndex < test.questions.length - 1) {
			setCurrentQuestion(questionIndex + 1);
		} else {
			calculateResult();
		}
	};

	const calculateResult = () => {
		const totalQuestions = test.questions.length;
		console.log(test.questions);
		const correctAnswers = test.questions.map(
			(question) => question.correctAnswer
		);

		let correctCount = 0;

		for (let i = 0; i <= totalQuestions; i++) {
			const selectedAnswerIndex = selectedAnswers[i];
			const correctAnswerIndex = correctAnswers[i];

			if (selectedAnswerIndex === correctAnswerIndex) {
				correctCount++;
			}
		}

		const percentage = (correctCount / totalQuestions) * 100;
		const roundedResult = Math.ceil(percentage);

		setResult(roundedResult);

		if (percentage >= 60) {
			setApprovalInterval("Aprobado");
			test.grade = "Aprobado";
		} else if (percentage < 50) {
			test.grade = "No aprobado";
			setApprovalInterval("No aprobado");
		}
	};

	if (approvalInterval === "Aprobado") {
		confetti();
	}

	localStorage.setItem("skills", JSON.stringify(skills));

	return (
		<section className="skill-test">
			<article className="skill-test__questions">
				<h1 className="skill-test__title">{testName}</h1>
				<Questions
					test={test}
					currentQuestion={currentQuestion}
					handleAnswerSelect={handleAnswerSelect}
				/>
				<div className="questions__time">
					{minutes.toString().padStart(2, "0")}:
					{seconds.toString().padStart(2, "0")}
				</div>
			</article>
			{showModal && <Modal closeModal={closeModal} time={time} />}
			{result !== null ? (
				<Result
					approvalInterval={approvalInterval}
					result={result}
					handleGoBack={handleGoBack}
				/>
			) : null}
		</section>
	);
};
