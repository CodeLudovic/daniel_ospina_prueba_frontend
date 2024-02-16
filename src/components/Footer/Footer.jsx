import styles from "./Footer.module.css";

/**
 * Componente Footer
 * Este componente representa el pie de página de la aplicación.
 */
export const Footer = () => {
	// Función para manejar el clic en el enlace del pie de página
	const clickLink = () => {
		console.log("footer link");
	};

	return (
		<div className={styles.footerContainer}>
			{/* Contenedor de los párrafos */}
			<div className={styles.divPContainers}>
				{/* Primer conjunto de párrafos */}
				<div className={styles.divP}>
					<p>Lorem ipsum dolor amet </p>
					<p>consectetur adipiscing elit, Quisque eu consectetur mi</p>
				</div>
				{/* Segundo conjunto de párrafos */}
				<div className={styles.divP}>
					<p>Lorem ipsum dolor amet </p>
					<p>consectetur adipiscing elit, Quisque eu consectetur mi</p>
				</div>
				{/* Tercer conjunto de párrafos */}
				<div className={styles.divP}>
					<p>Lorem ipsum dolor amet </p>
					<p>consectetur adipiscing elit, Quisque eu consectetur mi</p>
				</div>
			</div>
			{/* Contenedor del párrafo final del pie de página */}
			<div className={styles.divFinalFooter}>
				{/* Párrafo final del pie de página */}
				<p className={styles.pFooter}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
					{/* Enlace dentro del párrafo */}
					<a
						style={{ textDecoration: "underline", fontWeight: "bold" }}
						onClick={clickLink}>
						Link Here
					</a>{" "}
					Lorem ipsum
				</p>
			</div>
		</div>
	);
};
