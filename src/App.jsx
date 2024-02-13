import styles from "./App.module.css";
//import { Banner } from "./components/Header/Banner/Banner";
import { NavBar } from "./components/Header/NavBar/NavBar";

function App() {
	return (
		<div className={styles.appContainer}>
			<NavBar />
		</div>
	);
}

export default App;
