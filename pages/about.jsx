import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";
import Styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={Styles.aboutMainContainer}>
      <Navbar/>
      <div className={Styles.aboutContainer}>
         <h2 className={Styles.heading}> Hi viewer, You are on the About Page</h2>
      </div>
    </div>
  )
}

export default About
