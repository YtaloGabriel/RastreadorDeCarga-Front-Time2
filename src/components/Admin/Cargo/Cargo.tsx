import React, { SyntheticEvent } from 'react'
import api from '../../../../services/api'
import Title from '../../GlobalComponents/Title/Title'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from './Cargo.module.css'


const Cargo = () => {
  const inputOrigin = React.useRef<HTMLSelectElement>(null);
  const inputDestiny = React.useRef<HTMLSelectElement>(null);
  const inputDate = React.useRef<HTMLInputElement>(null);
  
  const [portData, setPortData] = React.useState<[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<string | null>(null);

  interface CargoPost {
    origem: string;
    destino: string;
    data_entrega: string;
  };

  interface PortsList {
    id_porto: number;
    nome_porto: string;
  }

  React.useEffect(() => {
    api.get('/portos')
      .then(({data}) => setPortData(data))
      .catch((err) => console.error(err));
  }, []);

  // Send data to the server
  const sendData = (origin: string, destiny: string, date: string) => {
    const cargoData: CargoPost = {
      origem: origin,
      destino: destiny,
      data_entrega: date
    };

    const headerPostConfig = { headers: { 'Content-type': 'application/json'} };
  
    // Send post requisition to API
    setLoading(true);
    api.post('/cargos', cargoData, headerPostConfig)
      .then(() => {
        setLoading(false);
        setAlert('Carga cadastrada com sucesso!');
      })
      .catch(err => {
        setLoading(false);
        throw new Error(err.alert);
      });
  }

  // Get values from inputs
  const sendForm = (event: SyntheticEvent) => {
    event.preventDefault();
    setAlert(null)

    const originValue = inputOrigin.current?.value;
    const destinyValue = inputDestiny.current?.value;
    const dateValue = inputDate.current?.value;

    const selectedDate = dateValue && new Date(dateValue);

    if (originValue && destinyValue && dateValue){
      if (originValue === destinyValue) {
        return setAlert('Erro: A origem não pode ser a mesma do destino.')
      } else if (selectedDate && selectedDate <= new Date()) {
        return setAlert('Erro: A data de entrega não pode ser menor ou igual a atual')
      }

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
              {portData?.map((port: PortsList) => {
                return (
                  <option key={port.id_porto} value={port.nome_porto}>{port.nome_porto}</option>
                );
              })};
            </select>
          </label>

          <label className={styles.label}>
            <span>Escolha o destino da carga</span>
            <select className={styles.select} ref={inputDestiny} required>
              {portData?.map((port: PortsList) => {
                return (
                  <option key={port.id_porto} value={port.nome_porto}>{port.nome_porto}</option>
                );
              })};
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

        {alert && <span>{alert}</span>}
      </section>
    </section>
  )
}

export default Cargo