import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './Cargo.module.css'

const Cargo = () => {
  return (
    <section className="content">
      <AdminNavbar />
      <section className={styles.cargo}>
        Cargo
      </section>
    </section>
  )
}

export default Cargo