import styles from "./FormInput.module.css";

export const FormInput = () => {
	const onSubmit = (e) => {
		e.preventDefault();

		const nombre = document.getElementById("name")?.value;
		const email = document.getElementById("email")?.value;

		const combinedValues = "Name: " + nombre + "\nEmail: " + email;

		if (nombre === "" || email === "") {
			return;
		}

		document.getElementById("textarea").value = combinedValues;
	};

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={onSubmit}>
				<label className={styles.labels}>
					Name:
					<input
						type="text"
						name="name"
						id="name"
						className={styles.inputText}
					/>
				</label>
				<label className={styles.labels}>
					Email:
					<input
						type="text"
						name="email"
						id="email"
						className={styles.inputText}
					/>
				</label>

				<textarea
					type="text"
					id="textarea"
					className={styles.textArea}
					placeholder="Render the input text information here..."
				/>

				<button type="submit" className={styles.buttonSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};
