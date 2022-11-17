import React from 'react'
import styles from './Dashboard.module.css';

import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Title from '../../GlobalComponents/Title/Title';

const Dashboard = () => {
  return (
    <section className="content">
      <AdminNavbar/>
      <section className="adminContent">
        <section className={styles.tableContainer}>
          <Title>Cargas Encaminhadas</Title>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Última Localização</th>
                <th>Status</th>
                <th>Data Limite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>Sei lá</td>
                <td>In Port</td>
                <td>28/11/2022</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>Sei lá</td>
                <td>In Port</td>
                <td>28/11/2022</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>Sei lá</td>
                <td>In Port</td>
                <td>28/11/2022</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.tableContainer}>
        <Title>Cargas Não Encaminhadas</Title>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Data Limite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>28/11/2022</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>28/11/2022</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>28/11/2022</td>
              </tr>
            </tbody>
          </table>
        </section>


        <section className={styles.tableContainer}>
        <Title>Cargas Entregues</Title>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Data Limite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>28/11/2022</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>28/11/2022</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>Hong Kong</td>
                <td>New York</td>
                <td>28/11/2022</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </section>
  )
}

export default Dashboard