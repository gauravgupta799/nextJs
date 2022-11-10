import styles from '../styles/Home.module.css'
import Navbar from "../Components/Navbar";
import Styles from "../styles/about.module.css";
import Image from 'next/image';

const About = () => {
  return (
    <div className={Styles.aboutMainContainer}>
      <Navbar/>
      <div className={Styles.aboutContainer}>
         <h2 className={Styles.heading}> Hi viewer, You are on the About Page</h2>
      </div>
      <div style={{textAlign:"center"}}>
        <Image src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" 
         width="800" height="670" alt="about"/>
      </div>
    </div>
  )
}

export default About
