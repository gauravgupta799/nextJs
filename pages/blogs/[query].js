import styles from "../../styles/Home.module.css";
import Navbar from "../../Components/Navbar";

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	const paths = data.map((item) => {
		return {
			params: {
				query: item.id.toString(),
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	// const id = context.params.query;
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.query}`
	);
	const data = await res.json();
	return {
		props: { data },
	};
};

const Query = ({ data }) => {
	const { id, title, body } = data;
	return (
		<>
			<Navbar />
			<div className={styles.blog}>
				<h3>{id}</h3>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
		</>
	);
};

export default Query;
