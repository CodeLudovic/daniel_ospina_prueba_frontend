import styles from "./RadioInput.module.css";

export const RadioInput = () => {
	return (
		<div className={styles.radioContainer}>
			<form className={styles.radioForm}>
				<label className={styles.radio}>
					<input type="radio" name="grupo" value="opcion1" /> Option 1
				</label>
				<br />
				<label className={styles.radio}>
					<input type="radio" name="grupo" value="opcion2" /> Option 2
				</label>
				<br />
				<label className={styles.radio}>
					<input type="radio" name="grupo" value="opcion3" /> Option 3
				</label>
				<br />
				<label className={styles.radio}>
					<input type="radio" name="grupo" value="opcion4" /> Option 4
				</label>
			</form>
		</div>
	);
};
