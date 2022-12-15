import React from 'react'
import styles from './Dashboard.module.css';
import moment from 'moment';

import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Title from '../../GlobalComponents/Title/Title';
import api from '../../../../services/api';
import Loader from '../../GlobalComponents/Loader/Loader';

const Dashboard = () => {
  const [cargosData, setCargosData] = React.useState<[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  interface Cargo {
    id_carga: number;
    cod_carga: string;
    origem: string;
    destino: string;
    status: string;
    data_entrega: string;
  }

  React.useEffect(() => {
    setError(null);
    setLoading(true);

    api.get('/cargos')
      .then(({data}) => {
        setLoading(false);
        setCargosData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError('Ops! Algo deu errado.');
      });
  }, [])

  // Cargos filtered by shipping
  const deliveredCargos = cargosData?.filter((cargo: Cargo) => cargo.status === 'entregue');
  const forwardedCargos = cargosData?.filter((cargo: Cargo) => cargo.status === 'a caminho');
  const notForwardedCargos = cargosData?.filter((cargo: Cargo) => cargo.status === 'não encaminhada');


  const AdminContent = () => {
    return (
      <>
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
      </>
    )
  }

  return (
    <section className="content">
      <AdminNavbar/>
      <section className="adminContent">
        {(loading && !error) ? <Loader/> : <AdminContent />}
        {error && <span>{error}</span>}
      </section>
    </section>
  )
}

export default Dashboard