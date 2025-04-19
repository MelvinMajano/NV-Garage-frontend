import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from './ProgramaDetailPage.module.css';

const ProgramaDetailPage = () => {
  const { nodeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { nodes } = location.state || { nodes: {} };  // Acceder a nodos desde el estado
  const node = nodes[nodeId];

  if (!node) {
    return (
      <main className={styles.detailContainer}>
        <section>
          <h1 className={styles.title}>Programa no encontrado</h1>
          <button onClick={() => navigate(-1)} className={styles.backButton} style={{marginTop: '1rem'}}>Volver</button>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.detailContainer}>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{node.title}</h1>
        </header>
        {node.description && (
          <section className={styles.descriptionSection}>
            <p className={styles.descriptionText}>{node.description}</p>
          </section>
        )}
        {node.status && (
          <section>
            <span className={styles.status} style={{background: node.indicatorColor || '#6366f1'}}>{node.status}</span>
          </section>
        )}
        {node.technicalSheet && (
          <section>
            <a href={node.technicalSheet} target="_blank" rel="noopener noreferrer" className={styles.technicalSheet}>Ficha Técnica</a>
          </section>
        )}
        {node.images && node.images.length > 0 && (
          <section className={styles.gallerySection}>
            <div className={styles.galleryImages}>
              {node.images.map((image, index) => (
                <figure key={index}>
                  <img src={image} alt={`Imagen del programa ${node.title} ${index + 1}`} className={styles.galleryImage} />
                </figure>
              ))}
            </div>
          </section>
        )}
        <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap', margin: '1.5rem 0 1rem 0'}}>
          {node.duration && (
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span style={{fontWeight:600}}>Duración:</span> <span>{node.duration}</span>
            </div>
          )}
          {typeof node.limit !== 'undefined' && (
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span style={{fontWeight:600}}>Límite:</span> <span>{node.limit} personas</span>
            </div>
          )}
        </div>
        {node.requirements && (
          <section style={{marginBottom:'0.7rem'}}>
            <span style={{fontWeight:600, color:'#a5b4fc'}}>Requisitos previos:</span> {node.requirements}
          </section>
        )}
        {(node.startDate || node.endDate) && (
          <section style={{marginBottom:'0.7rem'}}>
            <span style={{fontWeight:600, color:'#a5b4fc'}}>Fechas:</span> {node.startDate ? `Inicio: ${node.startDate}` : ''} {node.endDate ? `- Fin: ${node.endDate}` : ''}
          </section>
        )}
        {node.manager && (
          <section style={{marginBottom:'0.7rem'}}>
            <span style={{fontWeight:600, color:'#a5b4fc'}}>Encargado:</span> {node.manager}
          </section>
        )}
        <footer className={styles.footer}>
          <button onClick={() => navigate(-1)} className={styles.backButton}>Volver</button>
        </footer>
      </article>
    </main>
  );
};

export default ProgramaDetailPage;
