import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className={styles.main}>
				<div className={styles.homeContainer}>
					<h2>Welcome To The Coding World.</h2>
					<h4>Do Love With Coding</h4>
					<button>Gaurav Gupta</button>
				</div>
			</main>

			<footer className={styles.footer}>
				<span>Powered by Gaurav</span>
			</footer>
		</div>
	);
}
