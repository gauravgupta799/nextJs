import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <>
      <div className= {styles.navbar}>
          <h3 className= {styles.logo}>Gaurav</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
    </>
  )
}

export default Navbar
