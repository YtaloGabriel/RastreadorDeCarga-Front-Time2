import React from 'react'
import api from '../../../services/api';
import Title from '../GlobalComponents/Title/Title';
import styles from './Logger.module.css';

const Logger = () => {
  const [portData, setPortData] = React.useState<[] | null>(null);
  const [cargoData, setCargoData] = React.useState<[] | null>(null);

  const selectCargo = React.useRef<HTMLSelectElement>(null)
  const selectPort = React.useRef<HTMLSelectElement>(null)

  interface PortsList {
    id_porto: number;
    nome_porto: string;
  }
 
  interface CargosList {
    id_carga: number;
    cod_carga: string;
  }

  // interface CargoHistoric {
  //   localizacao: string;
  //   data_modificacao: string;
  // }

  // interface CargosList {
  //   id_carga: number;
  //   cod_carga: string;
  //   origem: string;
  //   destino: string;
  //   status: string;
  //   data_entrega: string;
  //   historico: CargoHistoric[];
  // }

  // Getting cargos and ports api data
  React.useEffect(() => {
    api.get('/cargos')
      .then(({data}) => setCargoData(data))
      .catch((err) => console.error(err));

    api.get('/portos')
      .then(({data}) => setPortData(data))
      .catch((err) => console.error(err));
  }, []);

  const sendForm = (event: any) => {
    event.preventDefault();

    const codeValue = selectCargo.current?.value;
    const portValue = selectPort.current?.value;

    return null;
  };


  return (
    <section className="content">
      <section className={styles.loggerContainer}>
        <Title>Atualizar Cargas</Title>

        <form className={styles.form} onSubmit={sendForm}>
          <div className={styles.inputs}>

          <label className={styles.label}>
            <span>Escolha qual carga atualizar</span>
            <select className={styles.select} ref={selectCargo}>
            {cargoData?.map((cargo: CargosList) => {
                return (
                  <option key={cargo.id_carga} value={cargo.cod_carga}>{cargo.cod_carga}</option>
                );
              })};
            </select>
          </label>

          <label className={styles.label}>
            <span>Escolha o porto atual</span>
            <select className={styles.select} ref={selectPort}>
            {portData?.map((port: PortsList) => {
                return (
                  <option key={port.id_porto} value={port.nome_porto}>{port.nome_porto}</option>
                );
              })};
            </select>
          </label>

          <button className={styles.sendButton}>Enviar Atualização</button>

          </div>
        </form>
      </section>
    </section>
  )
}

export default Logger