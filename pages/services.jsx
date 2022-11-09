import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

const Services = () => {
	return (
		<div>
			<Navbar />
			<h2 className={styles.heading}>This is a services page</h2>
		</div>
	);
};

export default Services;
