import React from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaTags } from 'react-icons/fa';
import './BlogPage.css';

const BlogPage = () => {
  const categories = ['Todos', 'Inteligencia Artificial', 'Seguridad', 'Desarrollo'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog NV</h1>
        <p>Explora artículos sobre tecnología, desarrollo y más</p>
      </div>

      <div className="blog-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {/* Los posts se agregarán aquí cuando estén disponibles */}
      </div>
    </div>
  );
};

export default BlogPage; 