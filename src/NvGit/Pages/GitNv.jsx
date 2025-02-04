import "./GitNv.css";
import { dataUsuarios } from "../DataContext";

const Usuario = ({ name, github, imgSrc }) => (
  <div className="usuario">
    <a href={github}>
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
    <img src={imgSrc} alt={`Foto de ${name}`} className="foto" />
    <p className="name">{name}</p>
    <ul>
      <li>
        <img
          src="https://res.cloudinary.com/dfrrujrog/image/upload/v1737046090/tecno_html_xbryvk.png"
          alt="HTML"
          height="30px"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dfrrujrog/image/upload/v1737046090/tecno_css_skdmzh.png"
          alt="CSS"
          height="30px"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dfrrujrog/image/upload/v1737046090/tecno_js_xxzfyk.png"
          alt="JS"
          height="30px"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dfrrujrog/image/upload/v1737046090/tecno_python_zk8tx2.png"
          alt="Python"
          height="30px"
        />
      </li>
    </ul>
  </div>
);

export default function GitNv() {

  return (
    <>
      <header className="header">Github NV/</header>
      <div>
        <h1 class="title">Comparte tu repositorio!</h1>
        <div className="cont-usuario">
          {dataUsuarios.map((usuario, index) => (
            <Usuario
              key={index}
              name={usuario.name}
              github={usuario.github}
              imgSrc={usuario.imgSrc}
            />
          ))}
        </div>
      </div>
      <div className="exit-container">
        <button onClick={() => window.history.back()}>Salir</button>
      </div>
      <footer className="footer">Derechos reservados a NV/</footer>
    </>
  );
}
