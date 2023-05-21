export const Questions = ({ test, currentQuestion, handleAnswerSelect }) => {
	return (
		<>
			{test.questions.map((question, index) => (
				<div key={index} className="questions__content">
					{currentQuestion === index && (
						<div className="questions__format">
							<h3 className="questions__title">{question.question}</h3>
							<ul className="questions__content-options">
								{question.options.map((option, optionIndex) => (
									<li
										key={optionIndex}
										className="content-options__list"
										onClick={() => handleAnswerSelect(index, optionIndex)}>
										{option}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			))}
		</>
	);
};
