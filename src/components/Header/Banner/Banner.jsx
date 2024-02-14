/* eslint-disable */
import styles from "./Banner.module.css";
export const Banner = () => {
	const actionButton = () => {
		console.log("Go There");
	};

	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<h1 className={styles.titleBanner}>Lorem ipsum</h1>
				<h2 className={styles.subTitleBanner}>Neque porro quisquam</h2>
				<div className={styles.paragraphs}>
					<h5 className={styles.paragraph}>
						"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
						consectetur, adipisci velit..." <br />
						"There is no one who loves pain itself, who seeks after it and
						wantsto have it, simply because it is pain..."
					</h5>
				</div>
				<button className={styles.buttonBanner} onClick={() => actionButton()}>
					<p className={styles.textButton}>Go there...</p>
					<svg width="24px" height="24px" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="#0C1726" rx="12" ry="12" />
						<polygon points="8,6 18,12 8,18" fill="white" />
					</svg>{" "}
				</button>
			</div>
		</div>
	);
};
