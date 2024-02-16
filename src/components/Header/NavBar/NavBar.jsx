/* eslint-disable */
import { useState, useEffect } from "react";
import { Animation } from "../Animation/Animation";
import { Banner } from "../Banner/Banner";
import styles from "./NavBar.module.css";
import ResponsiveMenu from "./ResponsiveMenu";
import { Nav } from "./Nav";

export const NavBar = () => {
	const [openedMenu, setOpenedMenu] = useState(false);
	const [openedSubMenu, setOpenedSubMenu] = useState(false);

	const [minMenu, setMinMenu] = useState(false);

	const handleMenuClick = () => {
		setOpenedMenu(!openedMenu);
		if (openedMenu) {
			setOpenedSubMenu(false);
		}
	};

	useEffect(() => {
		// Función para manejar el cambio de tamaño de la ventana
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth < 769) {
				setMinMenu(true);
			} else {
				setMinMenu(false);
			}
		};

		// Agregar un event listener al evento 'resize' del objeto 'window'
		window.addEventListener("resize", handleResize);

		// Llamar a handleResize inicialmente para manejar el tamaño de la ventana al cargar la página
		handleResize();

		// Limpiar el event listener cuando el componente se desmonte
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // El efecto se ejecuta solo una vez al montar el componente

	const handleSubMenuClick = (e) => {
		e.stopPropagation();
		setOpenedSubMenu(!openedSubMenu);
	};

	return (
		<header className={styles.navBarContainer}>
			<Nav />
			<div>
				<Animation />
			</div>
		</header>
	);
};
