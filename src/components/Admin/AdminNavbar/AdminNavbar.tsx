import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../GlobalComponents/Navbar/Navbar'

const AdminNavbar = () => {
  return (
    <Navbar>
      <Link to="/admin/dashboard">Painel de Controle</Link>
      <Link to="/admin/cargo">Adicionar Carga</Link>
      <Link to="/admin/tracker">Rastrear Carga</Link>
      <Link to="/admin/cargomap">Mapa de Cargas</Link>
    </Navbar>
  )
}

export default AdminNavbar