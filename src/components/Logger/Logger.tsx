import moment from 'moment';
import React from 'react'
import api from '../../../services/api';
import Title from '../GlobalComponents/Title/Title';
import styles from './Logger.module.css';

const Logger = () => {
  const [portData, setPortData] = React.useState<[] | null>(null);
  const [cargoData, setCargoData] = React.useState<[] | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const selectCargo = React.useRef<HTMLSelectElement>(null)
  const selectPort = React.useRef<HTMLSelectElement>(null)
  const selectStatus = React.useRef<HTMLSelectElement>(null)

  interface PortsList {
    id_porto: number;
    nome_porto: string;
  }
 
  interface CargosList {
    id_carga: number;
    cod_carga: string;
  }

  React.useEffect(() => {
    api.get('/cargos')
      .then(({data}) => setCargoData(data))
      .catch((err) => console.error(err));

    api.get('/portos')
      .then(({data}) => setPortData(data))
      .catch((err) => console.error(err));
  }, []);

  interface InputData {
    codigo: string | undefined;
    localizacao: string | undefined;
    status: string | undefined;
    data_modificacao: string;
  }

  
  // Function to update the cargo data
  const updateCargo = (data: InputData) => {
    const patchHeaderConfig = { headers: { 'Content-type': 'application/json'} };

    setMessage(null);
    setLoading(true);

    api.patch('/cargos', data, patchHeaderConfig)
      .then(response => {
        if (response.status === 200) {
          setMessage(response.data.message);
          setLoading(false);
        } else {
          setMessage('Erro: Não conseguimos atualizar a carga')
          setLoading(false);
        }

        return null;
      })
      .catch((error) => {
        setMessage('Ops! Algo deu errado.');
        setLoading(false);
        console.error(error)
      });
  }

  // get inputs data
  const sendForm = (event: any) => {
    event.preventDefault();

    const codeValue = selectCargo.current?.value;
    const portValue = selectPort.current?.value;
    const statusValue = selectStatus.current?.value;
    const currentDate = moment(new Date()).format(`DD/MM/YYYY`);

    const inputValues: InputData = {
      localizacao: portValue,
      status: statusValue,
      data_modificacao: currentDate,
      codigo: codeValue
    };

    if (inputValues.codigo && inputValues.localizacao) {
      return updateCargo(inputValues);
    }

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

          <label className={styles.label}>
            <span>Escolha o status da carga</span>
            <select className={styles.select} ref={selectStatus}>
              <option value="não encaminhada">Não Encaminhada</option>
              <option value="a caminho">A caminho</option>
              <option value="entregue">Entregue</option>
            </select>
          </label>

          <button className={styles.sendButton}>{loading ? 'Enviando...' : 'Enviar Atualização'}</button>
          
          </div>

          {message && <span>{message}</span>}
        </form>
      </section>
    </section>
  )
}

export default Logger