import React from 'react'
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} alt="Logomarca" />
        <div className={styles.links}>
        <Link to="/">Rastreamento Público</Link>
        <Link to="/admpanel">Painel Administrativo</Link>
        <Link to="/eventlogger">Registrador de Eventos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header