import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Map from "../Components/Map/Map";

const nodes = {
  mainNode: {
    title: "Desarrollo WEB I",
    link: "https://example.com/desarrollo-web",
    status: "Inscripción Cerrada",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://example.com/ficha-desarrollo-web",
    indicatorColor: "#f00",  // rojo
    images: [
      "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970771/f8b6aaf5-7533-44f7-928a-9480c7f942f5_avwto6.jpg",
      "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970772/da6495ef-b8cf-4388-a470-d75d2571536c_leisyy.jpg",
      "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970770/1706cfb2-916c-4665-9351-38b3f81ede33_fnzgdy.jpg"
    ],
    duration: "2 meses",
    requirements: "Conocimientos básicos de informática",
    startDate: "2025-05-01",
    endDate: "2025-10-31",
    manager: "Est. Angie Fajardo",
    limit: 20
  },
  pythonNode: {
    title: "Python",
    link: "https://example.com/python",
    status: "Inscripción Cerrada",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://drive.google.com/file/d/1DhXlJ5P5d3tiB66W1fNJIw0alONPScP5/view?usp=sharing",
    indicatorColor: "#f00",  // rojo
    duration: "5 meses",
    requirements: "Ninguno",
    startDate: "2025-06-10",
    endDate: "2025-10-10",
    manager: "Por Definir",
    limit: 20
  },
  jsNode: {
    title: "DESARROLLO WEB II",
    link: "https://example.com/desarrollo-web-ii",
    status: "Inscripción Cerrada",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://example.com/ficha-desarrollo-web-ii",
    indicatorColor: "#f00",  // rojo
    duration: "3 meses",
    requirements: "Desarrollo WEB I aprobado",
    startDate: "2025-07-01",
    endDate: "2025-11-30",
    manager: "Est. Melvin Majano",
    limit: 20
  },
  dartNode: {
    title: "Desarrollo Mobil",
    link: "https://example.com/desarrollo-mobil",
    status: "Inscripción Cerrada",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://example.com/ficha-desarrollo-mobil",
    indicatorColor: "#f00"  // rojo
  },
  ScnNode: {
    title: "BIOINFORMATICA",
    link: "https://example.com/bioinformatica",
    status: "Inscripción Abierta",
    availability: "Inscripción Abierta",
    technicalSheet: "https://example.com/ficha-bioinformatica",
    indicatorColor: "#FFD600",  // amarillo
    duration: "3 meses",
    requirements: "Ninguno",
    startDate: "2025-09-01",
    endDate: "2025-11-30",
    manager: "Est. Joseph Lopez",
    limit: 15
  },
  hardwareNode: {
    title: "Hardware y Robotica",
    link: "https://example.com/hardware-robotica",
    status: "Inscripción Cerrada",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://example.com/ficha-hardware-robotica",
    indicatorColor: "#f00", // rojo
    duration: "3 meses",
    requirements: "Ninguno",
    startDate: "2025-06-15",
    endDate: "2025-10-15",
    manager: "Est. Emanuel Morales",
    limit: 20
  }
};

const ProgramaPage = () => {
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (nodeId) => {
    setSelectedNode(nodes[nodeId]);
    console.log('Node clicked:', nodeId);
    navigate(`/nvprogramas/${nodeId}`, { state: { nodes } }); // Pasar nodos como estado
  };

  return (
    <div className="app">
      <Map nodes={nodes} onNodeClick={handleNodeClick} />
    </div>
  );
};

export default ProgramaPage;
