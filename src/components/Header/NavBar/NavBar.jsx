/* eslint-disable */
import { Animation } from "../Animation/Animation";
import styles from "./NavBar.module.css";
import { Nav } from "./Nav/Nav";

export const NavBar = () => {
	return (
		<header className={styles.navBarContainer}>
			<Nav />
			<div>
				<Animation />
			</div>
		</header>
	);
};
