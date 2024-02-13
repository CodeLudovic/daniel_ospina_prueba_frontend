// prettier-ignore
import styles from "./Banner.module.css";
export const Banner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div>
					<h1 className={styles.titleBanner}>Lorem ipsum</h1>
				</div>
				<div>
					<h2 className={styles.subTitleBanner}>Neque porro quisquam</h2>
				</div>
				<div className={styles.paragraph}>
					"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
					consectetur, adipisci velit..."
				</div>
				<div className={styles.paragraph}>
					"There is no one who loves pain itself, who seeks after it and wants
					to have it, simply because it is pain..."
				</div>
			</div>
		</div>
	);
};
