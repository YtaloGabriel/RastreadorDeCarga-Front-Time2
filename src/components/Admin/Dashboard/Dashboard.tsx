import React from 'react'
import styles from './Dashboard.module.css';
import moment from 'moment';

import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Title from '../../GlobalComponents/Title/Title';

const Dashboard = () => {
  const [cargoData, setCargoData] = React.useState<Cargo | null>(null);

  interface Cargo {
    id_carga: number;
    cod_carga: string;
    origem: string;
    destino: string;
    status: string;
    data_entrega: string;
  }

  const illustrativeData = [
    {
      id_carga: 1,
      cod_carga: 'kjs094',
      origem: 'Porto de Vitória - ES',
      destino: 'Porto de Recife - PE',
      status: 'não encaminhada',
      data_entrega: '2022-01-12'
    },
    {
      id_carga: 2,
      cod_carga: 'asd341',
      origem: 'Porto de Cabedelo - PB',
      destino: 'Porto de Santos - SP',
      status: 'a caminho',
      data_entrega: '2022-04-01'
    },
    {
      id_carga: 3,
      cod_carga: 'eas974',
      origem: 'Porto de Paranaguá - PR',
      destino: 'Porto de Santos - SP',
      status: 'entregue',
      data_entrega: '2022-10-12'
    },
    {
      id_carga: 4,
      cod_carga: 'por345',
      origem: 'Porto de Santana - AP',
      destino: 'Porto de Manaus - AM',
      status: 'entregue',
      data_entrega: '2022-01-17'
    },
    {
      id_carga: 5,
      cod_carga: 'euv131',
      origem: 'Porto do Rio de Janeiro - RJ',
      destino: 'Porto de Maceió - AL',
      status: 'não encaminhada',
      data_entrega: '2022-01-13'
    },
    {
      id_carga: 6,
      cod_carga: 'aci888',
      origem: 'Porto de Natal - RN',
      destino: 'Porto de Fortaleza - CE',
      status: 'não encaminhada',
      data_entrega: '2022-01-12'
    },
    {
      id_carga: 7,
      cod_carga: 'abc123',
      origem: 'Porto de Rio Grande - RS',
      destino: 'Porto de Santana - AP',
      status: 'a caminho',
      data_entrega: '2023-11-02'
    },
    {
      id_carga: 8,
      cod_carga: 'eao923',
      origem: 'Porto de Rio Grande - RS',
      destino: 'Porto de Santana - AP',
      status: 'entregue',
      data_entrega: '2022-01-13'
    },
  ]

  // Cargos filtered by shipping
  const deliveredCargos = illustrativeData.filter(cargo => cargo.status === 'entregue');
  const forwardedCargos = illustrativeData.filter(cargo => cargo.status === 'a caminho');
  const notForwardedCargos = illustrativeData.filter(cargo => cargo.status === 'não encaminhada');


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
                <th>Data Limite</th>
              </tr>
            </thead>
            <tbody>
              {forwardedCargos?.map((cargo: Cargo) => {
                return (
                  <tr>
                    <td>{(cargo.cod_carga).toUpperCase()}</td>
                    <td>{cargo.origem}</td>
                    <td>{cargo.destino}</td>
                    <td>Porto de Rio de Janeiro - RJ</td>
                    <td>{moment(cargo.data_entrega).format(`DD/MM/YYYY`)}</td>
                  </tr>
                )
              })}
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
              {notForwardedCargos?.map((cargo: Cargo) => {
                return (
                  <tr>
                    <td>{(cargo.cod_carga).toUpperCase()}</td>
                    <td>{cargo.origem}</td>
                    <td>{cargo.destino}</td>
                    <td>{moment(cargo.data_entrega).format(`DD/MM/YYYY`)}</td>
                  </tr>
                );
              })}
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
              {deliveredCargos?.map((cargo: Cargo) => {
                return (
                  <tr>
                    <td>{(cargo.cod_carga).toUpperCase()}</td>
                    <td>{cargo.origem}</td>
                    <td>{cargo.destino}</td>
                    <td>{moment(cargo.data_entrega).format(`DD/MM/YYYY`)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </section>
  )
}

export default Dashboard