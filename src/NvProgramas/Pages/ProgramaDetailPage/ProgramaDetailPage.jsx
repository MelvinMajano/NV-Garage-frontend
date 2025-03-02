import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProgramaDetailPage = () => {
  const { nodeId } = useParams();
  const location = useLocation();
  const { nodes } = location.state || { nodes: {} };  // Acceder a nodos desde el estado
  const node = nodes[nodeId];
  
  if (!node) {
    return <div>Programa no encontrado</div>;
  }

  return (
    <div>
      <h1>{node.title}</h1>
      <h3>{node.status}</h3>
      <p>{node.description}</p>
      <h2>{node.availability}</h2>
      <a href={node.technicalSheet}>Ficha Tecnica</a>
      {node.images && node.images.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index + 1}`} />
      ))}
    </div>
  );
}

export default ProgramaDetailPage;
