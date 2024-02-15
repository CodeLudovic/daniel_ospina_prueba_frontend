import PropTypes from "prop-types";
import styles from "./Card.module.css";

export const Card = ({ title, content, img }) => {
	return (
		<div className={styles.card}>
			<img src={img} />
			<p className={styles.title}>{title}</p>
			<p className={styles.content}>{content}</p>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};
