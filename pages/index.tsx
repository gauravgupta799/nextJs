// import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<div className={styles.homeContainer}>
					<h2>Welcome To The Coding World.</h2>
					<h4>Do Love With Coding</h4>
					<button>More About</button>
				</div>
			</main>
			{/* <footer className={styles.footer}>
				<span>Powered by Gaurav</span>
			</footer> */}
		</>
	);
};

export default Home;
