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
			setOpenedSubMenu(false); // Cerrar submenú si se cierra el menú principal
		}
	};

	const handleSubMenuClick = (e) => {
		e.stopPropagation(); // Evitar que el evento se propague y cierre el menú principal
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
						className={styles.submenu}
						style={
							openedMenu ? { fontWeight: "bold" } : { fontWeight: "normal" }
						}
						onMouseEnter={() => setOpenedMenu(true)}
						//onMouseLeave={handleOutMenu}
						onClick={handleMenuClick}>
						Pages
						<ul
							className={styles.submenuContainer}
							style={openedMenu ? { position: "fixed" } : { display: "none" }}>
							<li className={styles.menuItem}>Page 1</li>
							<li className={styles.menuItem}>Page 2</li>
							<li
								onClick={handleSubMenuClick}
								style={
									openedSubMenu
										? { fontWeight: "bold" }
										: { fontWeight: "normal" }
								}>
								<p className={styles.p3}>
									Page 3{" "}
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
									<li className={styles.submenuItem}>Item 1</li>
									<li className={styles.submenuItem}>Item 1</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<Banner />
				<div style={{ marginTop: openedMenu ? "80px" : "0" }}></div>
			</nav>
			<div>
				<Animation />
			</div>
		</header>
	);
};
