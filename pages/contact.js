import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
        <div className= {styles.navbar}>
          <h3 className= {styles.logo}>Gaurav</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
      </div>
      <h2 className={styles.heading}> Hi viewer, You are on the Contact Page</h2>
    </div>
  )
}

export default Contact
