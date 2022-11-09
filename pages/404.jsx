import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Error = () => {
  return (
    <div className={styles.notFound}>
        <div className = {styles.title404_Div}>
            <h1>😜 404 😜</h1>
        </div>
        <div className = {styles.bottomDiv}>
            <h2>We are sorry. The Page did not found!</h2>
            <p>
               <i> The page you are looking for might have been removed had its name 
                changed or is temporarily unavailable.
                </i>
            </p>
            <Link href="/" id={styles.link}> Back To Homepage</Link>

        </div>
    </div>
  )
}

export default Error
