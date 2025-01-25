import "./HomePage.css";

export const HomePage = () => {
    return (
        <div className="homepage">
            {/* Sección Principal */}
            <section className="hero">
                <h1 className="logo">NV/</h1>
            </section>

           {/* Misión */}
      <section className="block mission">
        <div className="block-content">
          <h2>Misión</h2>
          <p>
            En NV/ nos dedicamos a reforzar habilidades académicas y preparar a estudiantes con
            herramientas prácticas que impulsen su crecimiento personal y profesional.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dcm2dsjov/image/upload/v1737836094/Agregar_un_t%C3%ADtulo_1_rwfo1y.png"
          alt="Misión"
          className="block-image"
        />
      </section>


       {/* Visión */}
       <section className="block vision">
        <img
          src="https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970772/da6495ef-b8cf-4388-a470-d75d2571536c_leisyy.jpg"
          alt="Visión"
          className="block-image"
        />
        <div className="block-content">
          <h2>Visión</h2>
          <p>
            Ser un referente en el desarrollo de habilidades técnicas y
            científicas, conectando estudiantes con oportunidades reales en el
            mundo profesional.
          </p>
        </div>
      </section>


            {/* Galería de Imágenes */}
            <section className="image-gallery">
                <h2>Galería de Imágenes</h2>
                <div className="images">
                    <img
                        src="https://res.cloudinary.com/dcm2dsjov/image/upload/v1736970772/da6495ef-b8cf-4388-a470-d75d2571536c_leisyy.jpg"
                        alt="Imagen 1"
                    />
                    <img
                        src="https://res.cloudinary.com/dcm2dsjov/image/upload/v1737433302/d3b51382-1390-405e-bbe7-5db18871dff2_wndawc.jpg"
                        alt="Imagen 2"
                    />
                    <img
                        src="https://res.cloudinary.com/dcm2dsjov/image/upload/v1737836386/f4cbd125-42b9-49e6-be49-8a72c195cd9f_sqqdre.jpg"
                        alt="Imagen 3"
                    />
                </div>
            </section>

            {/* Programas */}
            <section className="programas">
                <div className="container">
                    <h2>Programas</h2>
                    <div className="program-list">
                        <div className="program-item">
                            <h3>Desarrollo Web</h3>
                            <p>Aprende mas sobre el mundo web y todo su potencial como una herramienta de alta funcionalidad en el mercado</p>
                            <a href="/programas/web" className="btn-mas-info">Más información</a>
                        </div>
                        <div className="program-item">
                            <h3>Python</h3>
                            <p>Desde la ciencia de datos hasta el mundo web un programa de python apasionante que te da las bases y orientaciones en este potente lenguajes de programacion</p>
                            <a href="/programas/automatizacion" className="btn-mas-info">Más información</a>
                        </div>
                        <div className="program-item">
                            <h3>Flutter & Dart</h3>
                            <p>Desarrolla aplicaciones mobiles con flutter y dart dentro de este apasionante mundo que conecta a todos desde nuestros dispositivos moviles</p>
                            <a href="/programas/gestion" className="btn-mas-info">Más información</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redes Sociales */}
            <footer className="social-media">
                <h2>Conéctate con Nosotros</h2>
                <div className="icons">
                    <a href="https://www.instagram.com/netverkteam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                            alt="Instagram"
                        />
                    </a>

                </div>
            </footer>
        </div>
    );
};
