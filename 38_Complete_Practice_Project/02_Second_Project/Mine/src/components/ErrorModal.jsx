import ErrorCard from "./ErrorCard";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ closeModal, message }) => {
	return (
		<div>
			<div className={classes.backdrop} onClick={closeModal} />
			<ErrorCard closeModal={closeModal} message={message} />
		</div>
	);
};

export default ErrorModal;
