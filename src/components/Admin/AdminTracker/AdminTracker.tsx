import React from 'react'
import TrackerPage from '../../GlobalPages/TrackerPage/TrackerPage'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './AdminTracker.module.css'

const AdminTracker = () => {
  return (
    <section className="content">
      <AdminNavbar />
      <section className="adminContent">
        <TrackerPage />
      </section>
    </section>
  )
}

export default AdminTracker