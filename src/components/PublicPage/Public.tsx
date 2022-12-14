import React from 'react';
import TrackerPage from '../GlobalPages/TrackerPage/TrackerPage';
import styles from './Public.module.css'

const Public = () => {
  return (
      <section className="content">
        <div className={styles.publicContent}>
          <TrackerPage/>
        </div>
      </section>
  )
}

export default Public