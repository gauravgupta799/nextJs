import styles from '../styles/contact.module.css'
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div className={styles.contactMainContainer}>
      <Navbar/>
      <div className={styles.contactContainer}>
        <h2 className={styles.heading}> Hi viewer, You are on the Contact Page</h2>
      </div>
    </div>
  )
}

export default Contact
