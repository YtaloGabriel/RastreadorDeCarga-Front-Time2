import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../../assets/images/ship.svg';

const Navbar = ({children}: any) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Imagem de Navio" />
        <h1 className={styles.title}>Cargo<span>Tracker</span></h1>
      </div>
      {children}
    </nav>
  )
}

export default Navbar