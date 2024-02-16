import PropTypes from "prop-types";
import styles from "./Card.module.css";

export const Card = ({ objInfo }) => {
	const { img, title, content } = objInfo;
	return (
		<div className={styles.card}>
			<img src={img} />
			<p className={styles.title}>{title}</p>
			<p className={styles.content}>{content}</p>
		</div>
	);
};

Card.propTypes = {
	objInfo: PropTypes.shape({
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}).isRequired,
};
