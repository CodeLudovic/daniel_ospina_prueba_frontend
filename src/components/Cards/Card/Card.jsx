import PropTypes from "prop-types"; // Importa el libreria prop-types para validación de props
import styles from "./Card.module.css"; // Importa estilos del componente.

/**
 * Componente Card
 * Este componente se encarga de renderizar una tarjeta con la información proporcionada.
 *
 * Props:
 * - objInfo: Un objeto que contiene la información de la tarjeta, incluyendo img, title y content.
 */
export const Card = ({ objInfo }) => {
	const { img, title, content } = objInfo;

	return (
		<div className={styles.card}>
			<img src={img} alt={title} /> {/* La imagen de la tarjeta */}
			<p className={styles.title}>{title}</p> {/* El título de la tarjeta */}
			<p className={styles.content}>{content}</p>{" "}
			{/* El contenido de la tarjeta */}
		</div>
	);
};

// Prop Types para validar las props recibidas por el componente
Card.propTypes = {
	objInfo: PropTypes.shape({
		img: PropTypes.string.isRequired, // La URL de la imagen (requerida)
		title: PropTypes.string.isRequired, // El título de la tarjeta (requerido)
		content: PropTypes.string.isRequired, // El contenido de la tarjeta (requerido)
	}).isRequired,
};
