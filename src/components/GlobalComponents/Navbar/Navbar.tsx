import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({children}: any) => {
  return (
    <nav className={styles.nav}>{children}</nav>
  )
}

export default Navbar