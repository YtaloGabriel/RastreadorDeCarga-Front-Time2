import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}>CargoTracker</h1>
        <nav className={styles.navigator}>
          <Link to="/public">Rastreamento Público</Link>
          <Link to="/admin">Painel Administrativo</Link>
          <Link to="/logger">Registrador de Eventos</Link>
        </nav>
      </div>
    </section>
  )
}

export default Home