import React from 'react'
import Title from '../../GlobalComponents/Title/Title'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './Cargo.module.css'

// Escolha a Origem
// Escolha o Destino
// Escolha a data limite

const Cargo = () => {
  const sendForm = (event: any) => {
    event.preventDefault();
  }

  return (
    <section className="content">
      <AdminNavbar />
      <section className="adminContent">
        <form className={styles.cargo} onSubmit={sendForm}>
        <Title>Adicionar Carga</Title>
        <div className={styles.inputs}>
          <label className={styles.label}>
            <span>Escolha a origem da carga</span>
            <select className={styles.select}>
              <option value="Santos">Santos</option>
              <option value="Maceio">Maceió</option>
              <option value="Recife">Recife</option>
            </select>
          </label>

          <label className={styles.label}>
            <span>Escolha o destino da carga</span>
            <select className={styles.select}>
              <option value="Santos">Santos</option>
              <option value="Maceio">Maceió</option>
              <option value="Recife">Recife</option>
            </select>
          </label>

          <label className={styles.label}>
            <span>Escolha a data limite para a entrega</span>
            <input type="date" className={styles.date}/>
          </label>
          <button className={styles.sendButton}>Cadastrar Carga</button>
        </div>
        </form>
      </section>
    </section>
  )
}

export default Cargo