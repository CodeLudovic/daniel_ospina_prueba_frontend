import styles from "./Footer.module.css";
export const Footer = () => {
	const clickLink = () => {
		console.log("footer link");
	};

	return (
		<div className={styles.footerContainer}>
			<div className={styles.divPContainers}>
				<div className={styles.divP}>
					<p>Lorem ipsum dolor amet </p>
					<p>consectetur adipiscing elit, Quisque eu consectetur mi</p>
				</div>
				<div className={styles.divP}>
					<p>Lorem ipsum dolor amet </p>
					<p>consectetur adipiscing elit, Quisque eu consectetur mi</p>
				</div>
				<div className={styles.divP}>
					<p>Lorem ipsum dolor amet </p>
					<p>consectetur adipiscing elit, Quisque eu consectetur mi</p>
				</div>
			</div>
			<div className={styles.divFinalFooter}>
				<p className={styles.pFooter}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
