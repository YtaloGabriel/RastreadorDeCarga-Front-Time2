import React from 'react'
import styles from './TrackerPage.module.css'
import Title from '../../GlobalComponents/Title/Title'
import api from '../../../../services/api.js';
import moment from 'moment'
import Loader from '../../GlobalComponents/Loader/Loader';

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
    historico: [
      {
        localizacao: string;
        data_modificacao: string;
      }
    ]
  }

  const getApiData = async(value: string) => {
    if (value) {
      setLoading(true);
      setApiData(null);
      setError(null)

      api.get(`/cargos?codigo=${value}`)
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

    getApiData(String(inputCargo?.current.value).toLowerCase())
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
    const currentLocation = apiData?.historico[0];
    const timeLineList = apiData?.historico;

    return (
      <>
        <section className={styles.details}>
            <Title>Informações do Pedido</Title>
            
            <div className={styles.cargoInfo}>
              <span className={styles.cargoLocal}>A carga <strong>{(apiData?.cod_carga)?.toUpperCase()}</strong> está no <strong>{currentLocation?.localizacao ? currentLocation?.localizacao : 'local de origem.'}</strong></span>
              
              <span className={styles.cargoDeadline}>O prazo para a entrega em <strong>{apiData?.destino}</strong> é: {(cargoFormatedDate)}</span>
            </div>
            

            {Boolean(timeLineList?.length) && <>
              <Title>Linha do Tempo</Title>
              
              <ul className={styles.shipSteps}>
                {timeLineList?.map((item, index) => {
                  return (
                      <li key={`historicItem${index}`} className={styles.step}>
                      <div className={styles.stepDate}>{item.data_modificacao}</div>
                      <div className={styles.stepStatus}></div>
                      <div className={styles.stepInfo}>Pedido recebido no {item.localizacao}</div>
                    </li>
                  )
                })}
              </ul>
            </>}
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