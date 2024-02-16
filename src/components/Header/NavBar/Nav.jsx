import { useState } from "react";
import { Banner } from "../Banner/Banner";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./NavBar.module.css";
import clsx from "clsx";

export const Nav = () => {
	// Estado para controlar si el menú está abierto o cerrado
	const [openedMenu, setOpenedMenu] = useState(false);
	// Estado para controlar si el submenú está abierto o cerrado
	const [openedSubMenu, setOpenedSubMenu] = useState(false);
	// Estado para controlar si el menú de móviles está abierto o cerrado
	const [open, setOpen] = useState(false);

	// Función para manejar el clic en el ícono del menú de móviles
	const handleMobileMenuClick = () => {
		setOpen(!open);
	};

	// Función para manejar el clic en un ítem del menú principal
	const handleMenuClick = () => {
		setOpenedMenu(!openedMenu);
		if (openedMenu) {
			setOpenedSubMenu(false);
		}
	};

	// Función para manejar el clic en un ítem del submenú
	const handleSubMenuClick = (e) => {
		e.stopPropagation();
		setOpenedSubMenu(!openedSubMenu);
	};

	// Función para manejar el clic en un enlace del menú
	const handleLinkClick = () => {
		if (open) {
			setOpen(false);
		}
		if (openedMenu) {
			setOpenedMenu(false);
		}
	};

	return (
		<div>
			<nav className={styles.bannerNavContainer}>
				<div className={styles.mobile} onClick={handleMobileMenuClick}>
					{/* Icono del menú de móviles */}
					<i id="bars">{open ? <CloseIcon /> : <MenuIcon />}</i>
				</div>
				{/* Menú principal */}
				<ul className={clsx(styles.menuContainer, open ? styles.active : null)}>
					{/* Ítem "Home" */}
					<li onClick={handleLinkClick}>Home</li>

					{/* Ítem "Pages" */}
					<li onClick={handleMenuClick}>
						Pages
						{/* Submenú */}
						<ul
							className={styles.submenuContainer}
							style={
								openedMenu ? { position: "absolute" } : { display: "none" }
							}>
							{/* Ítems del submenú */}
							<li onClick={handleLinkClick} className={styles.menuItem}>
								Page 1
							</li>
							<li onClick={handleLinkClick} className={styles.menuItem}>
								Page 2
							</li>
							{/* Ítem del submenú con submenú interno */}
							<li onClick={handleSubMenuClick} className={styles.internalMenu}>
								{/* Título del submenú interno */}
								<p
									className={styles.p3}
									style={
										openedSubMenu
											? { fontWeight: "bold" }
											: { fontWeight: "normal" }
									}>
									Page 3{/* Icono de expansión del submenú interno */}
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

								{/* Submenú interno */}
								<ul
									className={
										openedSubMenu ? styles.contSub : styles.contSubHidden
									}>
									{/* Ítems del submenú interno */}
									<li className={styles.submenuItem} onClick={handleLinkClick}>
										Item 1
									</li>
									<li className={styles.submenuItem} onClick={handleLinkClick}>
										Item 2
									</li>
									<li className={styles.submenuItem} onClick={handleLinkClick}>
										Item 3
									</li>
								</ul>
							</li>
						</ul>
					</li>

					{/* Ítem "About" */}
					<li onClick={handleLinkClick}>About</li>
					{/* Ítem "Contact" */}
					<li onClick={handleLinkClick}>Contact</li>
				</ul>
			</nav>
			{/* Banner */}
			<Banner />
		</div>
	);
};
