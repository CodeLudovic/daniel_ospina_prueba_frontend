/* eslint-disable */
import { Card } from "./Card/Card";
import styles from "./Cards.module.css";
import img from "./../../assets/img.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const responsive = {
	XXLarge: {
		breakpoint: { max: 4000, min: 1700 },
		items: 5,
	},
	XLarge: {
		breakpoint: { max: 1700, min: 1400 },
		items: 4,
	},
	Large: {
		breakpoint: { max: 1400, min: 992 },
		items: 3,
	},
	Medium: {
		breakpoint: { max: 992, min: 768 },
		items: 3,
	},
	Small: {
		breakpoint: { max: 768, min: 464 },
		items: 2,
	},
	ExtraSmall: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CustomArrowLeft = ({ onClick, direction }) => {
	const arrowStyle = {
		cursor: "pointer",
		border: "2px solid #ccc",
		borderRadius: "20px",
		padding: "1px",
		margin: "10px",
	};

	return (
		<div style={arrowStyle} onClick={onClick}>
			{direction === "left" ? "<" : ">"}
		</div>
	);
};
export const Cards = () => {
	return (
		<Carousel responsive={responsive} infinite={true}>
			{Array.from({ length: 6 }, (_, i) => (
				<div key={i} className={styles.CardLayoutContainer}>
					<Card
						key={i}
						img={img}
						title="Lorem Ipsum"
						content="Loream ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aenean vitae nibh eu neque finibus luctus. "
					/>
				</div>
			))}
		</Carousel>
	);
};
