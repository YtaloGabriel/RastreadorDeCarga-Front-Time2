import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../GlobalComponents/Navbar/Navbar'
import styles from './AdminNavbar.module.css';

import dashboard from '../../../assets/images/icons/dashboard.svg';
import addcargo from '../../../assets/images/icons/addcargo.svg';
import local from '../../../assets/images/icons/local.svg';
import map from '../../../assets/images/icons/map.svg';

const AdminNavbar = () => {
  return (
    <Navbar>
      <NavLink to="/admin/dashboard" className={styles.link}>
        <img src={dashboard} alt="Ícone de Dashboard" />
        <span>Painel de Controle</span>
      </NavLink>
      <NavLink to="/admin/cargo" className={styles.link}>
      <img src={addcargo} alt="Ícone de Caminhão" />
        <span>Adicionar Carga</span>
      </NavLink>
      <NavLink to="/admin/tracker" className={styles.link}>
      <img src={local} alt="Ícone de Localização" />
        <span>Rastrear Carga</span>
      </NavLink>
      <NavLink to="/admin/cargomap" className={styles.link}>
      <img src={map} alt="Ícone de Mapa" />
        <span>Mapa de Cargas</span>
      </NavLink>
    </Navbar>
  )
}

export default AdminNavbar