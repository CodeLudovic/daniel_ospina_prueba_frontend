import styles from "./App.module.css";
import { Cards } from "./components/Cards/Cards";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/Header/NavBar/NavBar";
import { SectionInputs } from "./components/SectionInputs/SectionInputs";

function App() {
	return (
		<div className={styles.appContainer}>
			<NavBar />
			<Cards />
			<SectionInputs />
			<Footer />
		</div>
	);
}

export default App;
