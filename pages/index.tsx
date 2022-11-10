import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<meta name="description" content="Free Nextjs Youtube tutorials"/>
				<meta name="keywords" content="HTML, CSS, JavaScript,Nextjs,nextjs,ReactJS,Reactjs,Bootstrap"/>
				<meta name="author" content="Gaurav Gupta"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>Next App | Gaurav</title>
				<link rel='icon' href='/nextjs-icon.png' />
			</Head>
			<main className={styles.main}>
			 <Navbar />
				<div className={styles.homeContainer}>
					<h2>Welcome To The Coding World.</h2>
					<h4>Do Love With Coding</h4>
					<button>More About</button>
				</div>
			<footer className={styles.footer}>
				<span>Powered by Gaurav</span>
			</footer>
			</main>

		</div>
	);
}
