import styles from "./Animation.module.css";
import img from "./../../../assets/someanimation.png";
export const Animation = () => {
	return (
		<div className={styles.animationContainer}>
			<img src={img} className={styles.img} />
		</div>
	);
};
