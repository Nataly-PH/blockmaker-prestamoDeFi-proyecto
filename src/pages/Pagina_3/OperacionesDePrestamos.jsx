// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function SolicitarPrestamo() {
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Datos del préstamo:', { monto, plazo });
      setMensaje('Préstamo solicitado exitosamente.');
    };
  
    return (
      <div>
        <h3>Solicitar Préstamo</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Monto:
            <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
          </label>
          <label>
            Plazo (en meses):
            <input type="number" value={plazo} onChange={(e) => setPlazo(e.target.value)} />
          </label>
          <button type="submit">Solicitar Préstamo</button>
        </form>
        <p>{mensaje}</p>
      </div>
    );
  }
  
  export default SolicitarPrestamo;