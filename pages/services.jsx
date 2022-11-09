import styles from "../styles/services.module.css";
import Navbar from "../Components/Navbar";

const Services = () => {
	return (
		<div className={styles.serviceMainContainer}>
			<Navbar />
      <div className={styles.serviceContainer}>
			  <h2 className={styles.heading}>This is a services page</h2>
       </div>
		</div>
	);
};

export default Services;
