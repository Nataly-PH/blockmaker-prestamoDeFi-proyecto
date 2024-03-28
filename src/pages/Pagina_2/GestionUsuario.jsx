// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import AltaCliente from './GestionUsuario'; 
import AltaPrestamista from './GestionUsuario'; 

function GestionUsuarios() {
  const [clienteData, setClienteData] = useState({
    nombre: '',
    apellido: '',
  });

  const [prestamistaData, setPrestamistaData] = useState({
    nombreEmpresa: '',
    direccion: '',
  });

  const handleClienteChange = (e) => {
    setClienteData({
      ...clienteData,
      [e.target.name]: e.target.value
    });
  };

  const handlePrestamistaChange = (e) => {
    setPrestamistaData({
      ...prestamistaData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitCliente = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del cliente
  };

  const handleSubmitPrestamista = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del prestamista
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      
      <div>
        <h3>Alta de Cliente</h3>
        <AltaCliente /> {}
        <form onSubmit={handleSubmitCliente}>
          <input type="text" name="nombre" value={clienteData.nombre} onChange={handleClienteChange} />
          <input type="text" name="apellido" value={clienteData.apellido} onChange={handleClienteChange} />
          {}
          <button type="submit">Registrar Cliente</button>
        </form>
      </div>

      <div>
        <h3>Alta de Prestamista</h3>
        <AltaPrestamista /> {}
        <form onSubmit={handleSubmitPrestamista}>
          <input type="text" name="nombreEmpresa" value={prestamistaData.nombreEmpresa} onChange={handlePrestamistaChange} />
          <input type="text" name="direccion" value={prestamistaData.direccion} onChange={handlePrestamistaChange} />
          {}
          <button type="submit">Registrar Prestamista</button>
        </form>
      </div>
    </div>
  );
}

export default GestionUsuarios;