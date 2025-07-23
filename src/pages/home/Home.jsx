import { Link } from "react-router";
import {
  RiArrowRightSLine,
  RiWhatsappFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import Profile from "../../assets/foto.png";
import "./home.css";

export default function Home() {
  return (
    <section className="home__container grid">
      <figure className="home__figure">
        <img src={Profile} alt="Imagen de Miguel" className="home__img" />
      </figure>

      <div className="home__content">
        <h1 className="home__title">
          <span>Miguel Ortiz </span> <br /> Desarrollador Full Stack
        </h1>
        <p className="home__description">
          Desarrollador Full Stack con enfoque en interfaces limpias, accesibles
          y responsivas. Me especializo en construir soluciones modernas que
          combinan lógica, diseño y rendimiento, priorizando siempre una
          experiencia fluida para el usuario.
        </p>
        <div className="home__links">
          <Link to={"/portfolio"} className="button">
            mis proyectos
            <span className="button__icon">
              <RiArrowRightSLine />
            </span>
          </Link>
          <Link
            to={"https://api.whatsapp.com/send?phone=573002988345"}
            target="_blank"
            className="button"
          >
            Contactame
            <span className="button__icon">
              <RiWhatsappFill />
            </span>
          </Link>

          <Link
            to={"https://github.com/miguelortiz-code/"}
            target="_blank"
            className="button"
          >
            github
            <span className="button__icon">
              <RiGithubFill />
            </span>
          </Link>

          <Link
            to={"https://www.linkedin.com/in/miguelortizcode/"}
            target="_blank"
            className="button"
          >
            linked
            <span className="button__icon">
              <RiLinkedinBoxFill />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}
