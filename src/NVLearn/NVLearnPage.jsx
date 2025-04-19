import React from 'react';
import { FaAtom, FaFlask, FaWhatsapp } from 'react-icons/fa';
import './NVLearnPage.css';

const NVLearnPage = () => {
  const courses = [
    {
      id: 2,
      title: "Física 100",
      description: "Tutorías para Física General I. Cubre mecánica, cinemática, dinámica y principios de conservación.",
      category: "Física",
      level: "Principiante",
      icon: <FaAtom />
    },
    {
      id: 3,
      title: "Física 200",
      description: "Tutorías para Física General II. Enfocado en electromagnetismo, ondas y física moderna.",
      category: "Física",
      level: "Intermedio",
      icon: <FaFlask />
    },
    {
      id: 4,
      title: "Física Médica",
      description: "Tutorías de apoyo en física médica: conceptos de radiación, imagenología, física de la salud y aplicaciones clínicas.",
      category: "Física",
      level: "Avanzado",
      icon: <FaFlask />
    }
  ];

  return (
    <div className="nvlearn-page">
      <div className="nvlearn-header">
        <h1>Programas de Tutoría NV Learn</h1>
        <p>Programas personalizados de tutoría para materias universitarias</p>
      </div>
      <div className="nvlearn-description" style={{maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '1.08em', color: '#e0e0e0', textAlign: 'center'}}>
        Estos programas tienen la finalidad de reforzar y apoyar a los alumnos en los conocimientos de clases de física en general, proporcionando acompañamiento, resolución de dudas y ejercicios prácticos.
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <div className="course-content">
              <span className="course-category">{course.category}</span>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-meta">
                <span className="course-level">{course.level}</span>
              </div>
              <a 
                href="https://chat.whatsapp.com/Hxob8TLubdI9NTIAaYxWB7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="course-cta"
              >
                Unirse al grupo de WhatsApp
                <FaWhatsapp className="whatsapp-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NVLearnPage;