/* eslint-disable */
import styles from "./Banner.module.css";

/**
 * Componente Banner
 * Este componente representa el banner principal de la aplicación.
 */
export const Banner = () => {
	// Función para manejar el clic en el botón del banner
	const actionButton = () => {
		console.log("Go There");
	};

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				{/* Título principal del banner */}
				<h1 className={styles.titleBanner}>Lorem ipsum</h1>
				{/* Subtítulo del banner */}
				<h2 className={styles.subTitleBanner}>Neque porro quisquam</h2>
				<div className={styles.paragraphs}>
					{/* Párrafo del banner */}
					<h5 className={styles.paragraph}>
						"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit..." <br />
						"There is no one who loves pain itself, who seeks after it and
						wantsto have it, simply because it is pain..."
					</h5>
				</div>
				{/* Botón del banner */}
				<button className={styles.buttonBanner} onClick={() => actionButton()}>
					{/* Texto del botón */}
					<p className={styles.textButton}>Go there...</p>
					{/* Icono del botón */}
					<svg width="24px" height="24px" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="#0C1726" rx="12" ry="12" />
						<polygon points="8,6 18,12 8,18" fill="white" />
					</svg>{" "}
				</button>
			</div>
		</div>
	);
};
