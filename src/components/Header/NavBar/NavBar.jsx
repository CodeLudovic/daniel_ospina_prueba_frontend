import { Animation } from "../Animation/Animation";
import { Banner } from "../Banner/Banner";
import styles from "./NavBar.module.css";
export const NavBar = () => {
	return (
		<header className={styles.navBarContainer}>
			<div className={styles.bannerNavContainer}>
				<ul className={styles.menuContainer}>
					<li>Home</li>
					<li>Pages</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<Banner />
			</div>
			<div>
				<Animation />
			</div>
		</header>
	);
};
