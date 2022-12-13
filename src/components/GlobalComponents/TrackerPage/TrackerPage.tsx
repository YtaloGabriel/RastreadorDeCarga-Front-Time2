import React from 'react'
import styles from './TrackerPage.module.css'
import Title from '../Title/Title'
import api from '../../../../services/api.js';
import moment from 'moment'
import Loader from '../Loader/Loader';

const TrackerPage = () => {
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false);
  const [apiData, setApiData] = React.useState<CargoData | null>(null);
  const inputCargo = React.useRef<any>(null);
  const cargoFormatedDate = apiData?.data_entrega && moment(apiData?.data_entrega).format(`DD/MM/YYYY`);

  interface CargoData {
    cod_carga: string;
    data_entrega: string;
    destino: string;
    id_carga: number;
    origem: string;
    status: Array<object>;
  }

  const getApiData = async(value: string) => {
    if (value) {
      setLoading(true);
      setApiData(null);
      setError(null)
      
      api.get(`?codigo=${value}`)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setApiData(response.data)
        };
      })
      .catch(() => {
        setLoading(false);
        setError('Ops! Algo deu errado. :(')
      });
    }
  }

  const submitForm = (event: any) => {
    event.preventDefault();

    getApiData(String(inputCargo?.current.value))
  }

  const SearchFormComponent = () => {
    return (
      <>
        <Title className={styles.teste}>Rastrear Carga</Title>

        <form className={styles.form} onSubmit={submitForm}>
          <input type="text" ref={inputCargo} placeholder="Pesquise por uma carga. Ex: ABC123" className={styles.searchbar}/>
          <button className={styles.button}>Rastrear</button>
        </form>
      </>
    );
  }

  const CargoDetailsComponent = () => {
    return (
      <>
        <section className={styles.details}>
            <Title>Informações do Pedido</Title>
            
            <div className={styles.cargoInfo}>
              <span className={styles.cargoLocal}>A carga <strong>{apiData?.cod_carga}</strong> está em <strong>Localização atual **</strong></span>
              
              <span className={styles.cargoDeadline}>O prazo para a entrega em <strong>{apiData?.destino}</strong> é: {cargoFormatedDate}</span>
            </div>
            
            <Title>Linha do Tempo</Title>
            <ul className={styles.shipSteps}>
              <li className={styles.step}>
                <div className={styles.stepDate}>25/11/2022</div>
                <div className={styles.stepStatus}></div>
                <div className={styles.stepInfo}>Pedido recebido no porto de Santos - SP</div>
              </li>
            </ul>
          </section>
      </>
    )
  }

  return (
    <section className={styles.public}>
          <SearchFormComponent />
          {loading && <Loader />}
          {error && <span>{error}</span>}
          {apiData && <CargoDetailsComponent />}
      </section>
  )
}

export default TrackerPage