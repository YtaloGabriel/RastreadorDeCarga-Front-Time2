import React, { SyntheticEvent } from 'react'
import api from '../../../../services/api'
import Title from '../../GlobalComponents/Title/Title'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './Cargo.module.css'


const Cargo = () => {
  const inputOrigin = React.useRef<HTMLSelectElement>(null);
  const inputDestiny = React.useRef<HTMLSelectElement>(null);
  const inputDate = React.useRef<HTMLInputElement>(null);

  const [loading, setLoading] = React.useState<boolean>(false);

  interface CargoPost {
    origem: string;
    destino: string;
    data_entrega: string;
  }

  // Send data to the server
  const sendData = (origin: string, destiny: string, date: string) => {
    const cargoData: CargoPost = {
      origem: origin,
      destino: destiny,
      data_entrega: date
    }

    const headerPostConfig = { headers: { 'Content-type': 'application/json'} }

    // Send post requisition to API
    setLoading(true)
    api.post('/', cargoData, headerPostConfig)
      .then(() => setLoading(false))
      .catch(err => {
        setLoading(false);
        throw new Error(err.message);
      })
  }

  // Get values from inputs
  const sendForm = (event: SyntheticEvent) => {
    event.preventDefault();

    const originValue = inputOrigin.current?.value;
    const destinyValue = inputDestiny.current?.value;
    const dateValue = inputDate.current?.value;

    if (originValue && destinyValue && dateValue){
      return sendData(originValue, destinyValue, dateValue);
    }

    return null;
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
            <select className={styles.select} ref={inputOrigin} required>
              <option value="Santos">Santos</option>
              <option value="Maceio">Maceió</option>
              <option value="Recife">Recife</option>
            </select>
          </label>

          <label className={styles.label}>
            <span>Escolha o destino da carga</span>
            <select className={styles.select} ref={inputDestiny} required>
              <option value="Santos">Santos</option>
              <option value="Maceio">Maceió</option>
              <option value="Recife">Recife</option>
            </select>
          </label>

          <label className={styles.label}>
            <span>Escolha a data limite para a entrega</span>
            <input type="date" className={styles.date} ref={inputDate} required/>
          </label>

          <button className={styles.sendButton}>
            {loading ? 'Cadastrando...' : 'Cadastrar Carga'}
          </button>
        </div>
        </form>
      </section>
    </section>
  )
}

export default Cargo