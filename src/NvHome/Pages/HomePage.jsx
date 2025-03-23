import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { 
  FaGraduationCap, 
  FaRocket, 
  FaGlobe, 
  FaDesktop, 
  FaLaptop, 
  FaPython, 
  FaLightbulb, 
  FaChartBar, 
  FaPlug, 
  FaCog, 
  FaUsers, 
  FaStar, 
  FaBook, 
  FaTrophy, 
  FaHandshake,
  FaCode,
  FaArrowRight
} from "react-icons/fa";

// Datos para Valor Diferencial
export const valueProps = [
  {
    icon: <FaGraduationCap />,
    title: "Cursos Gratuitos",
    description: "Educación de calidad sin barreras económicas",
  },
  {
    icon: <FaRocket />,
    title: "Proyectos Innovadores",
    description: "Desarrollamos tecnología con impacto social",
  },
  {
    icon: <FaGlobe />,
    title: "Comunidad Global",
    description: "+7 carreras conectadas con NV",
  },
];

// Datos para Programas Estrella actualizados
export const programas = [
  {
    title: "Desarrollo Web",
    icons: [<FaDesktop />, <FaGlobe />, <FaLaptop />],
    description: "Domina las tecnologías modernas para crear sitios web.",
    techStack: ["HTML5, CSS3, JavaScript", "React", "Node.js"],
    link: { href: "/programas", label: "Ver Programa Completo →" },
    cardClass: "web-dev",
  },
  {
    title: "Python",
    icons: [<FaPython />, <FaLightbulb />, <FaChartBar />],
    description: "Aprende Python desde lo básico hasta aplicaciones avanzadas.",
    techStack: ["Python básico", "Automatización", "Análisis de datos"],
    link: { href: "/programas", label: "Explorar Contenidos →" },
    cardClass: "python",
  },
  {
    title: "Microcontroladores",
    icons: [<FaPlug />, <FaCog />, <FaLightbulb />],
    description: "Explora el mundo de la electrónica y la programación integrada.",
    techStack: ["Arduino", "ESP32", "IoT"],
    link: { href: "/programas", label: "Comenzar Ahora →" },
    cardClass: "micro-dev",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="logo">NV/</h1>
        <p className="tagline">Comunidad de Innovación Educativa</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/programas')} className="cta-btn">
            Explora Cursos
          </button>
          <button onClick={() => navigate('/comunidad')} className="cta-btn outline">
            Únete a la Comunidad
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator" aria-hidden="true"></div>
    </section>
  );
};

const ValuePropsSection = memo(() => (
  <section className="value-props">
    {valueProps.map((prop, index) => (
      <div className="prop-card" key={index}>
        <div className="prop-icon" aria-hidden="true">
          {prop.icon}
        </div>
        <h3>{prop.title}</h3>
        <p>{prop.description}</p>
      </div>
    ))}
  </section>
));

const AboutSection = () => (
  <section className="about-section">
    <div className="mission-vision-container">
      <div className="mv-card mission">
        <h2>Nuestra Misión</h2>
        <p className="highlight">"Empoderar a través del conocimiento colaborativo"</p>
        <p>
          Creemos en la educación como herramienta de transformación social. Nuestros programas
          combinan teoría y práctica para desarrollar habilidades relevantes en la era digital.
        </p>
        <div className="mv-stats">
          <div className="stat">
            <span>5</span>
            <p>Cursos activos</p>
          </div>
          <div className="stat">
            <span>90%</span>
            <p>Satisfacción estudiantil</p>
          </div>
          <div className="stat">
            <span>+100</span>
            <p>Estudiantes</p>
          </div>
        </div>
      </div>

      <div className="mv-card vision">
        <h2>Nuestra Visión</h2>
        <p className="highlight">
          "Para 2025, convertirnos en una comunidad líder del aprendizaje integrando metodologías
          académicas e innovación"
        </p>
        <p>
          Para 2025, buscamos ser la comunidad líder en el aprendizaje colaborativo, integrando
          metodologías académicas e innovación en cada proceso.
        </p>
        <div className="innovation-highlight">
          <h4>Innovaciones Recientes</h4>
          <ul>
            <li>Enseñar código con el mismo código como base de nuestras lecciones</li>
            <li>Programas de voluntariado</li>
            <li>Laboratorios virtuales</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ProgramasSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="programas" id="programas" role="region" aria-labelledby="programas-title">
      <h2 id="programas-title">Nuestros Programas Estrella</h2>
      <div className="program-grid">
        {programas.map((programa, index) => (
          <div className={`program-card ${programa.cardClass}`} key={index}>
            <div className="program-header">
              <div className="tech-icons">
                {programa.icons.map((icon, i) => (
                  <span key={i} aria-hidden="true">
                    {icon}
                  </span>
                ))}
              </div>
              <h3>{programa.title}</h3>
            </div>
            <div className="program-body">
              <p>{programa.description}</p>
              <ul className="tech-stack">
                {programa.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <button onClick={() => navigate(programa.link.href)} className="program-cta">
                {programa.link.label}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BlogSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="blog-section" id="blog">
      <h2>Blog Tec NV/lear</h2>
      <div className="blog-grid">
        <article className="blog-card">
          <div className="blog-content">
            <span className="blog-category">Desarrollo Web</span>
            <h3>Introducción a React Hooks</h3>
            <p>Aprende cómo los Hooks están revolucionando el desarrollo de componentes en React.</p>
            <button onClick={() => navigate('/blog')} className="blog-cta">
              Leer más <FaArrowRight />
            </button>
          </div>
        </article>
        <article className="blog-card">
          <div className="blog-content">
            <span className="blog-category">Python</span>
            <h3>Automatización con Python</h3>
            <p>Descubre cómo automatizar tareas repetitivas usando Python.</p>
            <button onClick={() => navigate('/blog')} className="blog-cta">
              Leer más <FaArrowRight />
            </button>
          </div>
        </article>
        <article className="blog-card">
          <div className="blog-content">
            <span className="blog-category">IoT</span>
            <h3>Primeros Pasos con Arduino</h3>
            <p>Guía completa para comenzar con Arduino y el mundo de la electrónica.</p>
            <button onClick={() => navigate('/blog')} className="blog-cta">
              Leer más <FaArrowRight />
            </button>
          </div>
        </article>
      </div>
      <button onClick={() => navigate('/blog')} className="view-all-blog">
        Ver todos los artículos
      </button>
    </section>
  );
};

const ProyectosSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="proyectos-section" id="proyectos">
      <h2>Proyectos Destacados</h2>
      <div className="proyectos-grid">
        <div className="proyecto-card">
          <div className="proyecto-content">
            <h3>E-commerce Platform</h3>
            <p>Plataforma de comercio electrónico construida con React y Node.js</p>
            <div className="proyecto-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <button onClick={() => navigate('/proyectos/ecommerce')} className="proyecto-cta">
              Ver proyecto <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="proyecto-card">
          <div className="proyecto-content">
            <h3>IoT Dashboard</h3>
            <p>Sistema de monitoreo en tiempo real para dispositivos IoT</p>
            <div className="proyecto-tech">
              <span>Python</span>
              <span>Arduino</span>
              <span>WebSocket</span>
            </div>
            <button onClick={() => navigate('/proyectos/iot-dashboard')} className="proyecto-cta">
              Ver proyecto <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/proyectos')} className="view-all-proyectos">
        Ver todos los proyectos
      </button>
    </section>
  );
};

const ComunidadSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/H6t4Lew66bSDPpPojLIILU', '_blank');
  };

  return (
    <section className="comunidad" id="comunidad">
      <h2>Únete a Nuestra Comunidad</h2>
      <div className="comunidad-grid">
        <div className="comunidad-card eventos">
          <h3>Eventos en Vivo</h3>
          <p>Webinars semanales con expertos</p>
          <div className="evento-destacado">
            <p>Próximo evento:</p>
            <h4>Taller de IA con Python</h4>
            <button onClick={handleWhatsAppClick} className="evento-cta">Unirse</button>
          </div>
        </div>

        <div className="comunidad-card proyectos">
          <h3>Proyectos Colaborativos</h3>
          <p>Participa en iniciativas reales</p>
          <div className="proyecto-destacado">
            <h4>Plataforma Educativa Open Source</h4>
            <div className="proyecto-stats">
              <span><FaUsers /></span>
              <span><FaStar /></span>
              <p>10 integrantes, 50 commits</p>
            </div>
          </div>
        </div>

        <div className="comunidad-card logros">
          <h3>Logros Colectivos</h3>
          <div className="logros-grid">
            <div className="logro-item">
              <span><FaBook /></span>
              <p>+100 horas de contenido explicado</p>
            </div>
            <div className="logro-item">
              <span><FaTrophy /></span>
              <p>3 proyectos universitarios activos</p>
            </div>
            <div className="logro-item">
              <span><FaHandshake /></span>
              <p>3 alianzas estratégicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  const socialLinks = {
    instagram: 'https://www.instagram.com/netverkteam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D',
    youtube: 'https://www.youtube.com/@NetVerkTeam',
    whatsapp: 'https://chat.whatsapp.com/H6t4Lew66bSDPpPojLIILU'
  };

  return (
    <footer className="social-media">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>NV/ Educación Disruptiva</h3>
          <p>
            Transformando vidas mediante la tecnología y educación colaborativa desde 2024
          </p>
        </div>

        <div className="footer-section links">
          <h4>Explora</h4>
          <ul>
            <li>
              <a href="#programas">Cursos</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/nvlearn">NV Learn</a>
            </li>
            <li>
              <a href="#comunidad">Comunidad</a>
            </li>
          </ul>
        </div>

        <div className="footer-section connect">
          <h4>Conecta</h4>
          <div className="social-icons">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link ig"
              aria-label="Instagram"
            >
              <img
                loading="lazy"
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
              />
            </a>
            <a 
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube" 
              aria-label="YouTube"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
              />
            </a>
            <a 
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp" 
              aria-label="WhatsApp"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 NV/ - Código abierto, mentes abiertas</p>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <HeroSection />
      </header>
      <main>
        <ValuePropsSection />
        <AboutSection />
        <ProgramasSection />
        <ComunidadSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default HomePage;
