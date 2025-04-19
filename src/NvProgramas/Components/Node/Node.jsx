import React from 'react';
import './Node.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faGraduationCap, faFlask } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faUsb } from '@fortawesome/free-brands-svg-icons';

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

const getStatusText = (status) => {
  const text = {
    'Activo (Inscripción Cerrada)': 'Inscripción Cerrada',
    'Inactivo (Inscripción Abierta)': 'Inscripción Abierta',
    'Inscripción Abierta': 'Inscripción Abierta',
    'Inscripción Cerrada': 'Inscripción Cerrada',
    default: 'Estado Desconocido'
  };
  return text[status] || text.default;
};

// Elige un icono según el título del programa
const getProgramIcon = (title) => {
  if (title.toLowerCase().includes('bioinformatica')) return <FontAwesomeIcon icon={faFlask} className="node-icon" title="Bioinformática" />;
  if (title.toLowerCase().includes('python')) return <FontAwesomeIcon icon={faPython} className="node-icon" title="Python" />;
  if (title.toLowerCase().includes('web')) return <FontAwesomeIcon icon={faCode} className="node-icon" title="Desarrollo Web" />;
  if (title.toLowerCase().includes('arduino')) return <FontAwesomeIcon icon={faUsb} className="node-icon" title="Arduino" />;
  if (title.toLowerCase().includes('java')) return <FontAwesomeIcon icon={faJava} className="node-icon" title="Java" />;
  if (title.toLowerCase().includes('robot')) return <FontAwesomeIcon icon={faRobot} className="node-icon" title="Robótica" />;
  return <FontAwesomeIcon icon={faGraduationCap} className="node-icon" title="Programa" />;
};

const Node = ({ id, data, onClick }) => {
  const statusColor = getStatusColor(data.status);
  const statusText = getStatusText(data.status);

  return (
    <div className="node" id={id} onClick={() => onClick(id)}>
      <div className="status-indicator" style={{ backgroundColor: statusColor }} title={statusText}></div>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
        {getProgramIcon(data.title)}
        <h3 style={{margin: 0}}>{data.title}</h3>
      </div>
      <div style={{marginTop: 'auto', fontSize: '0.92em', color: '#a7e3ff', fontWeight: 500, letterSpacing: '0.5px'}}>
        {statusText}
      </div>
    </div>
  );
};

export default Node; 
