import Button from "./Button";
import classes from "./ErrorCard.module.css";

const ErrorModal = ({ closeModal, message }) => {
	return (
		<div>
			<div className={classes.backdrop} onClick={closeModal} />
			<div className={classes.modal}>
				<header className={classes.header}>
					<h2>Invalid input</h2>
				</header>
				<div className={classes.content}>
					<p>{message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={closeModal}>Close</Button>
				</footer>
			</div>
		</div>
	);
};

export default ErrorModal;
