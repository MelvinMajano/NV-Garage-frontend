import React, { useEffect, useRef } from 'react';
import Node from "../Node/Node";
import Legend from "../Legend/Legend";
import './Map.css';

const Map = ({ nodes, onNodeClick }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const arcCenterX = mapRef.current.clientWidth / 2;
    const arcCenterY = mapRef.current.clientHeight / 2;
    const radius = 300;
    const angleStep = Math.PI / 3;
    const nodeElements = document.querySelectorAll(".node");

    nodeElements.forEach((node, index) => {
      const angle = angleStep * index - (Math.PI / 3);
      const x = arcCenterX + radius * Math.cos(angle);
      const y = arcCenterY + radius * Math.sin(angle);
      node.style.left = `${x - node.offsetWidth / 2}px`;
      node.style.top = `${y - node.offsetHeight / 2}px`;
    });
  }, [nodes]);

  return (
    <div id="mapContainer" ref={mapRef}>
      <div id="map">
        {Object.keys(nodes).map(nodeId => (
          <Node key={nodeId} id={nodeId} data={nodes[nodeId]} onClick={onNodeClick} />
        ))}
      </div>
      <Legend />
    </div>
  );
};

export default Map;
