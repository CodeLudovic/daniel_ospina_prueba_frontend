import { useState } from "react";
import { Banner } from "../Banner/Banner";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./NavBar.module.css";
import clsx from "clsx";

export const Nav = () => {
	const [openedMenu, setOpenedMenu] = useState(false);
	const [openedSubMenu, setOpenedSubMenu] = useState(false);
	const [open, setOpen] = useState(false);
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
	return (
		<div>
			<nav className={styles.bannerNavContainer}>
				<div className={styles.mobile} onClick={() => setOpen(!open)}>
					<i id="bars">{open ? <CloseIcon /> : <MenuIcon />}</i>
				</div>
				<ul className={clsx(styles.menuContainer, open ? styles.active : null)}>
					<li onClick={() => (openedMenu ? setOpenedMenu(!openedMenu) : null)}>
						Home
					</li>

					<li
						onClick={handleMenuClick}
						style={
							openedMenu ? { fontWeight: "bold" } : { fontWeight: "normal" }
						}>
						Pages
						<ul
							className={styles.submenuContainer}
							style={
								openedMenu ? { position: "absolute" } : { display: "none" }
							}>
							<li className={styles.menuItem}>Page 1</li>
							<li className={styles.menuItem}>Page 2</li>
							<li onClick={handleSubMenuClick} className={styles.internalMenu}>
								<p className={styles.p3}>
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
									<li
										className={styles.submenuItem}
										onClick={() =>
											openedMenu ? setOpenedMenu(!openedMenu) : null
										}>
										Item 1
									</li>

									<li
										className={styles.submenuItem}
										onClick={() =>
											openedMenu ? setOpenedMenu(!openedMenu) : null
										}>
										Item 2
									</li>

									<li
										className={styles.submenuItem}
										onClick={() =>
											openedMenu ? setOpenedMenu(!openedMenu) : null
										}>
										Item 3
									</li>
								</ul>
							</li>
						</ul>
					</li>

					<li onClick={() => (openedMenu ? setOpenedMenu(!openedMenu) : null)}>
						About
					</li>
					<li onClick={() => (openedMenu ? setOpenedMenu(!openedMenu) : null)}>
						Contact
					</li>
				</ul>
			</nav>
			<Banner />
		</div>
	);
};
