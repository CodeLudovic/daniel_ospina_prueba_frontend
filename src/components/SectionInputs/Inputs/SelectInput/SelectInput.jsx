import { useState } from "react";
import styles from "./SelectInput.module.css";
export const SelectInput = () => {
	const [openedMenu, setOpenedMenu] = useState(true);
	return (
		<div className={styles.selectContainer}>
			<div
				className={styles.selectInputBox}
				onClick={() => setOpenedMenu(!openedMenu)}>
				<p>Select</p>
				{!openedMenu ? (
					<svg width="20" height="20" viewBox="0 0 10 10">
						<polygon points="0,0 10,5 0,10" fill="#0C1726" />
					</svg>
				) : (
					<svg width="20" height="20" viewBox="0 0 10 10">
						<polygon points="0,0 5,10 10,0" fill="#0C1726" />
					</svg>
				)}
			</div>
			{openedMenu ? (
				<div className={styles.openedBoxContainer}>
					<div className={styles.options}>
						<input type="checkbox" className={styles.check1} /> <p>Option 1</p>
					</div>
					<div className={styles.options}>
						<input type="checkbox" className={styles.check1} /> <p>Option 2</p>
					</div>
					<div className={styles.options}>
						<input type="checkbox" className={styles.check1} /> <p>Option 3</p>
					</div>
					<div className={styles.options}>
						<input type="checkbox" className={styles.check1} /> <p>Option 4</p>
					</div>
				</div>
			) : null}
		</div>
	);
};
