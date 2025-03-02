import React from 'react';
import './Legend.css';

const Legend = () => (
  <div id="legend">
    <div className="legend-item">
      <span className="legend-indicator" style={{ background: 'green' }}></span>
      Inscripcion Abierta
    </div>
    <div className="legend-item">
      <span className="legend-indicator" style={{ background: 'red' }}></span>
        Inscripcion Cerrada
    </div>
    <div className="legend-item">
      <span className="legend-indicator" style={{ background: 'yellow' }}></span>
        programa por abrir
    </div>
  </div>
);

export default Legend;
