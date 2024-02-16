/* eslint-disable */
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./ResponsiveMenu.module.css";

const ResponsiveMenu = ({ open, setOpen }) => {
	const handleClick = () => {
		if (window.innerWidth < 768) {
			setOpen(!open);
		}
	};

	return (
		<div className={style.navbarAssets}>
			{!open && (
				<div className={style.navbarLinks}>
					<div>
						<ul>
							<li>
								<button
									className={style.outline_button}
									name="about"
									onClick={handleClick}>
									Home
								</button>
							</li>
							<li>
								<button
									className={style.outline_button}
									name="about"
									onClick={handleClick}>
									Pages
								</button>
							</li>
							<li>
								<button
									className={style.outline_button}
									name="projects"
									onClick={handleClick}>
									Contact
								</button>
							</li>
							<li>
								<button
									className={style.outline_button}
									name="skills"
									onClick={handleClick}>
									About
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
			<div className={style.navbarToggle} onClick={handleClick}>
				{open ? (
					<CloseIcon className={style.menuClose} />
				) : (
					<MenuIcon className={style.menuOpen} />
				)}
			</div>
		</div>
	);
};

export default ResponsiveMenu;
