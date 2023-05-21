import aprobado from "../assets/aprobado.svg";
import desaprobado from "../assets/desaprobado.svg";

export const Result = ({ approvalInterval, result, handleGoBack }) => {
	return (
		<article className="skill__result">
			<div className="skill__result-modal">
				<h2 className="skill__result-title">Resultado: {result}%</h2>
				<img
					className="skill__result-img"
					src={approvalInterval === "Aprobado" ? aprobado : desaprobado}
					alt="img-result"
				/>
				<h3 className="skill__result-intervalo">
					Intervalo de aprobación: {approvalInterval}
				</h3>
				<button className="skill__result-button" onClick={handleGoBack}>
					Finalizar
				</button>
			</div>
		</article>
	);
};
