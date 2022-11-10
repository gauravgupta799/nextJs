import Navbar from "../../Components/Navbar";
import styles from "../../styles/Home.module.css";

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
          data.slice(0,10).map((curElem)=>{
              return(
                <div key={curElem.id} className={styles.blogContainer}>
                    <h3>{curElem.id}</h3>
                    <h2>{curElem.title}</h2>
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