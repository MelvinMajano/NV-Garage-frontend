import React from 'react';
import { FaCalendarAlt, FaTags } from 'react-icons/fa';
import './BlogPage.css';

const posts = [
    {
      id: 1,
      title: "Introducción",
      date: "2025-05-15",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      category: "Introducción",
      details: "Una breve introducción sencilla a nuestro blog y como funciona este espacio para nuestra comunidad universitaria.",
      video: "https://www.youtube.com/watch?v=aircAruvnKk",
      authors: "Joseph Adrian Alcerro Lopez",
      descriptionLong: "Bienvenidos a lo que sera el primer post dentro de nuestro blog de seguro no entiendes bien como funciona pero tranquilo accede al video y al articulo respecto a este mismo para estar mas enterado respecto a la funcionalidad de este blog."
    }
  ];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog NV</h1>
        <p style={{maxWidth: '650px', margin: '0 auto', fontSize: '1.1em', color: '#e0e0e0'}}>
          Este blog funciona como un muro científico multidisciplinario para la publicación de investigaciones, documentos y videos sobre física, química, biología y computación. Todas las publicaciones están orientadas a la divulgación científica, teniendo como base la ciencia de la computación.
        </p>
      </div>
      <div className="blog-grid-vertical">
        {posts.map(post => (
          <div className="blog-card-molde" key={post.id}>
            {/* Imagen con número y fecha sobrepuesta */}
            <div className="blog-molde-img-container">
              <div className="blog-molde-img">
                <img src={post.image} alt={post.title} />
                <div className="blog-molde-overlay">
                  <div className="blog-molde-number">#1</div>
                  <div className="blog-molde-date"><FaCalendarAlt style={{ marginRight: 6 }} />{post.date}</div>
                </div>
              </div>
            </div>
            {/* Botones */}
            <div className="blog-molde-actions">
              <a href="#" className="blog-btn blog-btn-read" target="_blank" rel="noopener noreferrer">Leer publicación</a>
              {post.video && post.video !== "" && (
                <a href={post.video} className="blog-btn blog-btn-video" target="_blank" rel="noopener noreferrer">Ver video</a>
              )}
            </div>

            {/* Descripción y Autores */}
            <div className="blog-molde-desc">
              <span className="blog-category"><FaTags /> {post.category}</span>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-details">{post.details}</p>
              <div className="blog-authors"><b>Autores:</b> {post.authors}</div>
              <p className="blog-desc-long">{post.descriptionLong}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
