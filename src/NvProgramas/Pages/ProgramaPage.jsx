import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Map from "../Components/Map/Map";

const nodes = {
  mainNode: {
    title: "Desarrollo WEB",
    description: "Aprende a crear sitios web desde cero usando tecnologías esenciales.",
    link: "https://example.com/desarrollo-web",
    status: "Activo (Inscripción Cerrada)",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://example.com/ficha-desarrollo-web",
    indicatorColor: "#f00",  // rojo
    images: [
      "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970771/f8b6aaf5-7533-44f7-928a-9480c7f942f5_avwto6.jpg",
      "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970772/da6495ef-b8cf-4388-a470-d75d2571536c_leisyy.jpg",
      "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970770/1706cfb2-916c-4665-9351-38b3f81ede33_fnzgdy.jpg"
    ]
  },
  pythonNode: {
    title: "Python",
    description: "Curso completo de Python para todos los niveles.",
    link: "https://example.com/python",
    status: "Activo (Inscripción Cerrada)",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://drive.google.com/file/d/1DhXlJ5P5d3tiB66W1fNJIw0alONPScP5/view?usp=sharing",
    indicatorColor: "#f00"  // rojo
  },
  jsNode: {
    title: "DESARROLLO WEB II",
    description: "Explora conceptos avanzados y frameworks modernos en JavaScript.",
    link: "https://example.com/desarrollo-web-ii",
    status: "Inactivo (Inscripción Abierta)",
    availability: "Inscripción Abierta",
    technicalSheet: "https://example.com/ficha-desarrollo-web-ii",
    indicatorColor: "#ffa500",  // naranja
  },
  dartNode: {
    title: "desarrollo mobil",
    description: "Desarrollo de aplicaciones móviles con Flutter.",
    link: "https://example.com/desarrollo-mobil",
    status: "Activo (Inscripción Cerrada)",
    availability: "Inscripción Cerrada",
    technicalSheet: "https://example.com/ficha-desarrollo-mobil",
    indicatorColor: "#f00"  // rojo
  },
  ScnNode: {
    title: "informatica en las ciencias",
    description: "Programa enfocado en informática aplicada a las ciencias.",
    link: "https://example.com/informatica-ciencias",
    status: "Inactivo (Inscripción Abierta)",
    availability: "Inscripción Abierta",
    technicalSheet: "https://example.com/ficha-informatica-ciencias",
    indicatorColor: "#ffa500"  // naranja
  },
  hardwareNode: {
    title: "Hardware y Robotica",
    description: "Aprende a diseñar y construir sistemas de hardware y robótica.",
    link: "https://example.com/hardware-robotica",
    status: "Inactivo (Inscripción Abierta)",
    availability: "Inscripción Abierta",
    technicalSheet: "https://example.com/ficha-hardware-robotica",
    indicatorColor: "#00FF04FF" , // verde
    Inscripcion: "Inscribirme"
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
