import React from 'react';
import { FaSearch, FaCalculator, FaAtom, FaFlask, FaWhatsapp } from 'react-icons/fa';
import './NVLearnPage.css';

const NVLearnPage = () => {
  const courses = [
    {
      id: 1,
      title: "Ecuaciones Diferenciales",
      description: "Tutorías personalizadas para ecuaciones diferenciales ordinarias y parciales. Incluye ejercicios prácticos y resolución de problemas.",
      category: "Matemáticas",
      level: "Intermedio",
      icon: <FaCalculator />,
      whatsappLink: "https://chat.whatsapp.com/K4r167z7SREIXjMXgqS4fL"
    },
    {
      id: 2,
      title: "Física 100",
      description: "Tutorías para Física General I. Cubre mecánica, cinemática, dinámica y principios de conservación.",
      category: "Física",
      level: "Principiante",
      icon: <FaAtom />,
      whatsappLink: "https://chat.whatsapp.com/JHr9KAqSB0x8Ke6CwQnudI"
    },
    {
      id: 3,
      title: "Física 200",
      description: "Tutorías para Física General II. Enfocado en electromagnetismo, ondas y física moderna.",
      category: "Física",
      level: "Intermedio",
      icon: <FaFlask />,
      whatsappLink: "https://chat.whatsapp.com/E0F1pHTcwKf4kYo5CtcmxB"
    }
  ];

  const categories = ["Matemáticas", "Física"];
  const levels = ["Todos", "Principiante", "Intermedio"];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [selectedLevel, setSelectedLevel] = React.useState('Todos');

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'Todos' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'Todos' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="nvlearn-page">
      <div className="nvlearn-header">
        <h1>Programas de Tutoría NV Learn</h1>
        <p>Programas personalizados de tutoría para materias universitarias</p>
      </div>

      <div className="search-filters">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar programas..." />
        </div>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          {levels.map((level) => (
            <button
              key={level}
              className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
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
                href={course.whatsappLink} 
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