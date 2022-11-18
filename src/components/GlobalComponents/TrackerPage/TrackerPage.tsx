import React from 'react'
import styles from './TrackerPage.module.css'
import Title from '../Title/Title'

const TrackerPage = () => {
  const sendForm = (event: any) => {
    event.preventDefault()
  }

  return (
    <section className={styles.public}>
          <Title className={styles.teste}>Rastrear Carga</Title>

          <form className={styles.form} onSubmit={sendForm}>
            <input type="text" placeholder="Pesquise por uma carga. Ex: ABC123" className={styles.searchbar}/>
            <button className={styles.button}>Rastrear</button>
          </form>

          <section className={styles.details}>
            <Title>Informações do Pedido</Title>

            <div className={styles.cargoInfo}>
              <span className={styles.cargoLocal}>A carga <strong>ABC123</strong> está em <strong>Porto de Santos - SP</strong></span>
              <span className={styles.cargoDeadline}>O prazo para a entrega no <strong>Porto de Rio Grande - RS</strong> é: 02/12/2022</span>
            </div>

            <Title>Linha do Tempo</Title>
            <ul className={styles.shipSteps}>
              <li className={styles.step}>
                <div className={styles.stepDate}>25/11/2022</div>
                <div className={styles.stepStatus}></div>
                <div className={styles.stepInfo}>Pedido recebido no porto de Santos - SP</div>
              </li>
              <li className={styles.step}>
                <div className={styles.stepDate}>14/11/2022</div>
                <div className={styles.stepStatus}></div>
                <div className={styles.stepInfo}>Pedido recebido no porto de Maceió - AL</div>
              </li>
              <li className={styles.step}>
                <div className={styles.stepDate}>11/11/2022</div>
                <div className={styles.stepStatus}></div>
                <div className={styles.stepInfo}>Pedido recebido no porto de Fortaleza - CE</div>
              </li>
            </ul>
          </section>
      </section>
  )
}

export default TrackerPage