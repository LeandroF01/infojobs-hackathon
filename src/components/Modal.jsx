export const Modal = ({ time, closeModal }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<h2 className="modal-content-title">¡Tiempo terminado!</h2>
				<img className="modal-content-img" src={time} alt="time" />
				<button className="modal-content-button" onClick={closeModal}>
					Regresar
				</button>
			</div>
		</div>
	);
};
