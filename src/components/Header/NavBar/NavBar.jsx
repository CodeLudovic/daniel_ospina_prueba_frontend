/* eslint-disable */
import { useState } from "react";
import { Animation } from "../Animation/Animation";
import { Banner } from "../Banner/Banner";
import styles from "./NavBar.module.css";
export const NavBar = () => {
	const [openedMenu, setOpenedMenu] = useState(false);
	const [openedSubMenu, setOpenedSubMenu] = useState(false);

	const handleMenuClick = () => {
		setOpenedMenu(!openedMenu);
		if (openedMenu) {
			setOpenedSubMenu(false);
		}
	};

	const handleSubMenuClick = (e) => {
		e.stopPropagation();
		setOpenedSubMenu(!openedSubMenu);
	};

	const handleOutMenu = () => {
		setOpenedMenu(false);
		setOpenedSubMenu(false);
	};

	return (
		<header className={styles.navBarContainer}>
			<nav className={styles.bannerNavContainer}>
				<ul className={styles.menuContainer}>
					<li>Home</li>
					<li
						style={openedMenu ? { fontWeight: "bold" } : null}
						onClick={handleMenuClick}>
						Pages
						<ul
							className={styles.submenuContainer}
							style={
								openedMenu ? { position: "absolute" } : { display: "none" }
							}>
							<li className={styles.menuItem}>Page 1</li>
							<li className={styles.menuItem}>Page 2</li>
							<li onClick={handleSubMenuClick} className={styles.internalMenu}>
								<p
									className={styles.p3}
									style={!openedSubMenu ? null : { fontWeight: "bold" }}>
									Page 3
									{!openedSubMenu ? (
										<svg width="10" height="10" viewBox="0 0 10 10">
											<polygon points="0,0 10,5 0,10" fill="white" />
										</svg>
									) : (
										<svg width="10" height="10" viewBox="0 0 10 10">
											<polygon points="0,0 5,10 10,0" fill="white" />
										</svg>
									)}
								</p>
								<ul
									className={
										openedSubMenu ? styles.contSub : styles.contSubHidden
									}>
									<li className={styles.submenuItem}>Item 1</li>
									<li className={styles.submenuItem}>Item 2</li>
									<li className={styles.submenuItem}>Item 3</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<Banner />
			</nav>
			<div>
				<Animation />
			</div>
		</header>
	);
};
