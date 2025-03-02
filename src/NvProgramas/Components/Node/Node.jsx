import React from 'react';
import './Node.css';

// Función para mapear estados a colores
const getStatusColor = (status) => {
  switch (status) {
    case 'Activo (Inscripción Cerrada)':
      return 'green';
    case 'Inactivo (Inscripción Abierta)':
      return 'red';
    case 'programa por abrir':
      return 'yellow';
    default:
      return 'gray';
  }
};

const Node = ({ id, data, onClick }) => {
  console.log('Node status:', data.status); // Verifica el estado del nodo
  return (
    <div className="node" id={id} onClick={() => onClick(id)}>
      <h3>{data.title}</h3>
      <div
        className="status-indicator"
        style={{ backgroundColor: getStatusColor(data.status) }} // Asigna el color basado en el estado
      ></div>
    </div>
  );
};

export default Node; 
