import React, { useState } from 'react';
import './BibliotecaVirtual.css';

const BibliotecaVirtual = () => {
  const [filter, setFilter] = useState('todos');

  const categories = ['todos', 'nv', 'python', 'js', 'html'];

  const books = [
    { 
      id: 1, 
      category: ["nv", "python"], 
      title: "POO con Python", 
      img: "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736883477/POO_de_bolsillo_fwpocw.png", 
      link: "https://drive.google.com/file/d/12bsMd3Ylrn4IHWK_BVmQWxBl5V3Frig3/view?usp=sharing" 
    },
    { 
      id: 2, 
      category: ["nv", "python"], 
      title: "PF con Python", 
      img: "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736883582/Paradigma_Funcional_e7h1ap.png", 
      link: "https://drive.google.com/file/d/1i_ZD9HN3HzjfTZY1OgxApxUnnhJnH2zm/view?usp=sharing" 
    },
    { 
      id: 3, 
      category: ["nv", "js"], 
      title: "Complejidad con JS", 
      img: "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736883891/Copia_de_Paradigma_Funcional_gqqbpk.png", 
      link: "https://drive.google.com/file/d/14daskEL9FG2loXwpggeQaz1uU5rUS3l9/view?usp=drive_link" 
    },
    { 
      id: 4, 
      category: ["html"], 
      title: "Web Html & Css", 
      img: "https://res.cloudinary.com/dcm2dsjov/image/upload/v1736884654/Copia_de_Paradigma_Funcional_1_ooamv7.png", 
      link: "https://melvinmajano.github.io/MelvinMajano-MelvinMajano-Introducci-n-Html_Css--NV/" 
    }
  ];

  const filteredBooks = filter === 'todos' 
    ? books 
    : books.filter(book => book.category.includes(filter));

  return (
    <div className="biblioteca-page">
      <nav className="biblioteca-nav">
        <a href="#external-books">Libros de Informática</a>
      </nav>
     
      <div className="filter-container">
        <label>Filtrar por etiqueta:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat.toUpperCase()}</option>
          ))}
        </select>
      </div>
      
      <section className="library">
        <h2>Documentos de NV/</h2>
        <div className="library-content">
          {filteredBooks.map(book => (
            <div key={book.id} className="book">
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <a href={book.link} target="_blank" rel="noopener noreferrer">Ver libro</a>
            </div>
          ))}
        </div>
      </section>
      
      <div className="exit-container">
        <button onClick={() => window.history.back()}>Salir</button>
      </div>
      <footer className="footer">Derechos reservados a NV/</footer>
    </div>
  );
};

export default BibliotecaVirtual; 