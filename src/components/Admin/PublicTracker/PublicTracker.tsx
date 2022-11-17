import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './PublicTracker.module.css'

const PublicTracker = () => {
  return (
    <section className="content">
      <AdminNavbar />
      <section className="adminContent">
        PublicTracker
      </section>
    </section>
  )
}

export default PublicTracker