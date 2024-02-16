/* eslint-disable */
import { useState, useEffect } from "react";
import { Animation } from "../Animation/Animation";
import styles from "./NavBar.module.css";
import { Nav } from "./Nav";

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
