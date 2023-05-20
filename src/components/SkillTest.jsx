import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export const SkillTest = ({ setTestData }) => {
	const { testName } = useParams();
	const skills = [
		{
			testName: "Desafío Maestro de JavaScript",
			description:
				"Este test evalúa tus conocimientos en JavaScript, el lenguaje de programación utilizado para crear interactividad en sitios web y aplicaciones. Preguntas sobre conceptos fundamentales, sintaxis, manipulación de objetos y más te desafiarán a demostrar tu dominio en JavaScript.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Reto del Experto en CSS",
			description:
				"Este test evalúa tus conocimientos en CSS (Cascading Style Sheets), el lenguaje utilizado para dar estilo y diseño a los elementos HTML. Preguntas sobre selectores, propiedades, modelos de caja y diseño responsivo pondrán a prueba tu habilidad para crear interfaces visualmente atractivas.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Examen de Destreza en React",
			description:
				"Este test evalúa tus conocimientos en React, una biblioteca de JavaScript ampliamente utilizada para construir interfaces de usuario interactivas. Preguntas sobre componentes, estados, ciclos de vida y enrutamiento te retarán a mostrar tu experiencia en el desarrollo con React.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Desafío de Maestría en CSS y Sass",
			description:
				"Este test evalúa tus conocimientos en Sass, una extensión de CSS que agrega características adicionales y facilita la escritura de estilos más eficientes. Preguntas sobre variables, mixins, anidamiento y directivas te permitirán demostrar tu dominio en el uso de Sass para estilizar tus proyectos.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Cuestionario del Maestro en PHP",
			description:
				"Este test evalúa tus conocimientos en PHP, un lenguaje de programación utilizado principalmente en el desarrollo web del lado del servidor. Preguntas sobre sintaxis, manipulación de datos, bases de datos y seguridad te desafiarán a demostrar tu experiencia en el uso de PHP para crear aplicaciones web dinámicas.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Examen de Ninja en Java",
			description:
				"Este test evalúa tus conocimientos en Java, un lenguaje de programación versátil y ampliamente utilizado en el desarrollo de software. Preguntas sobre conceptos fundamentales, estructuras de datos, programación orientada a objetos y manejo de excepciones pondrán a prueba tus habilidades en Java.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Evaluación de Expertos en Vue.js",
			description:
				"Este test evalúa tus conocimientos en Vue.js, un framework progresivo de JavaScript para la construcción de interfaces de usuario. Preguntas sobre componentes, directivas, enrutamiento y manejo de estados te desafiarán a mostrar tu experiencia en el desarrollo con Vue.js.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Examen de Dominio en Angular",
			description:
				"Este test evalúa tus conocimientos en Angular, un framework de JavaScript desarrollado por Google para la construcción de aplicaciones web. Preguntas sobre componentes, módulos, enrutamiento y manejo de datos te retarán a demostrar tu habilidad en el desarrollo con Angular.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Cuestionario del As en Svelte",
			description:
				"Este test evalúa tus conocimientos en Svelte, un framework de JavaScript que permite construir interfaces de usuario reactivas y eficientes. Preguntas sobre componentes, propiedades, reactividad y ciclo de vida te permitirán demostrar tu dominio en el desarrollo con Svelte.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Examen de Habilidad en Node.js",
			description:
				"Este test evalúa tus conocimientos en Node.js, un entorno de ejecución de JavaScript que permite ejecutar código JavaScript en el lado del servidor. Preguntas sobre el sistema de módulos, manejo de eventos, creación de servidores y manejo de archivos te desafiarán a mostrar tu experiencia en el desarrollo con Node.js.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Prueba de Competencia en MySQL",
			description:
				"Este test evalúa tus conocimientos en MySQL, un sistema de gestión de bases de datos relacionales ampliamente utilizado. Preguntas sobre consultas SQL, diseño de tablas, funciones y optimización te retarán a demostrar tu habilidad en el manejo de bases de datos con MySQL.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Evaluación de Dominio en PostgreSQL",
			description:
				"Este test evalúa tus conocimientos en PostgreSQL, un sistema de gestión de bases de datos relacional de código abierto. Preguntas sobre consultas SQL avanzadas, diseño de esquemas, funciones y transacciones te permitirán demostrar tu experiencia en el manejo de bases de datos con PostgreSQL.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Cuestionario del Experto en MongoDB",
			description:
				"Este test evalúa tus conocimientos en MongoDB, una base de datos NoSQL orientada a documentos. Preguntas sobre consultas, agregaciones, índices y replicación te desafiarán a demostrar tu experiencia en el manejo de bases de datos con MongoDB.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
		{
			testName: "Examen de Maestría en Express.js",
			description:
				"Este test evalúa tus conocimientos en Express.js, un framework de JavaScript para la construcción de aplicaciones web del lado del servidor. Preguntas sobre enrutamiento, middleware, manejo de solicitudes y respuestas te retarán a demostrar tu habilidad en el desarrollo con Express.js.",
			grade: "No realizado",
			questions: [
				{
					question: "¿Cuál es la capital de Francia?",
					options: ["Madrid", "París", "Londres", "Roma"],
					correctAnswer: 1,
				},
				{
					question: "¿Cuál es el símbolo químico del oro?",
					options: ["Ag", "Au", "Pt", "Hg"],
					correctAnswer: 1,
				},
				{
					question: "¿En qué año comenzó la Segunda Guerra Mundial?",
					options: ["1939", "1941", "1945", "1947"],
					correctAnswer: 0,
				},
			],
		},
	];

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const [test, setTest] = useState(null);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	//const [testIndex, setTestIndex] = useState(0);

	const [minutes, setMinutes] = useState(1);
	const [seconds, setSeconds] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const [correctAnswers, setCorrectAnswers] = useState([]);
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
		let interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(interval);
					setShowModal(true);
				} else {
					setMinutes(minutes - 1);
					setSeconds(20);
				}
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

		for (let i = 0; i < totalQuestions; i++) {
			const selectedAnswerIndex = selectedAnswers[i];
			const correctAnswerIndex = correctAnswers[i];

			if (selectedAnswerIndex === correctAnswerIndex) {
				correctCount++;
			}
		}
		console.log(correctCount);

		const percentage = (100 / totalQuestions) * correctCount;
		setResult(percentage);

		if (percentage >= 60) {
			setApprovalInterval("Aprobado");
		} else if (percentage < 50) {
			setApprovalInterval("No aprobado");
		}
	};

	const renderQuestions = () => {
		return test.questions.map((question, index) => (
			<div key={index}>
				{currentQuestion === index && (
					<div>
						<h3>{question.question}</h3>
						<ul>
							{question.options.map((option, optionIndex) => (
								<li key={optionIndex}>
									<button
										onClick={() => handleAnswerSelect(index, optionIndex)}>
										{option}
									</button>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		));
	};

	const renderResult = () => {
		if (result !== null) {
			return (
				<div>
					<h2>Resultado: {result}%</h2>
					<h3>Intervalo de aprobación: {approvalInterval}</h3>
				</div>
			);
		}

		return null;
	};

	const { description } = test;

	return (
		<div>
			<h1>{testName}</h1>
			<p>{description}</p>
			<div>
				<h1>Countdown Timer</h1>
				<div>
					{minutes.toString().padStart(2, "0")}:
					{seconds.toString().padStart(2, "0")}
				</div>
				{showModal && (
					<div className="modal">
						<div className="modal-content">
							<h2>¡Tiempo terminado!</h2>
							<button onClick={closeModal}>Regresar</button>
						</div>
					</div>
				)}
			</div>
			{renderQuestions()}
			{renderResult()}
		</div>
	);
};
