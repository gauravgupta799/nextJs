import Navbar from "../../Components/Navbar";
import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await res.json();
	return {
	  props: {
		data,
	  }, 
	}
  }

const index = ({data}) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        { !data ? 
            <div>
              <h2>Loading.............</h2>
            </div>
          :
          data.slice(0,5).map((curElem)=>{
            const {id,title} = curElem;
              return(
                  <div key={id} className={styles.blogContainer}>
                      <h3>{id}</h3>
                      <Link href={`/blogs/${id}`} id={styles.blogTitle}>
                        <h2>{title}</h2>
                      </Link>
                  </div>
              )
            })
        }
      </main>
    <footer className={styles.footer}>
      <span>Powered by Gaurav</span>
    </footer>
  </div>
  )
}

export default index