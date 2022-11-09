import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar/>
      <h2 className={styles.heading}> Hi viewer, You are on the About Page</h2>
    </div>
  )
}

export default About
