import { useState } from 'react';
import { portfolio } from '../../Data'
import { RiLink, RiGithubFill } from "react-icons/ri";
import './portfolio.css'

export default function Portfolio() {
  const [type, setType] = useState('Todos');
  //Obtener tipos unicos desde los datos
  const types = ['Todos', ...new Set(portfolio.flatMap(p => p.development))];
  // Filtrar en la base al tipo seleccionado
  const projectsFilter = type === 'Todos' ? portfolio : portfolio.filter(p => p.development.includes(type));
  return (
    <section className="portfolio section">
      <h2 className='section__title'>mis <span>proyectos </span></h2>

      {/* ----- FILTRO DE PROYECTOS ----- */}
      <div className='portfolio__filter container'>
        <label htmlFor="filter">Filtrar por categoria</label>
         <select
          id="filter"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {types.map(type => (
            <option value={type} key={type}>{type}</option>
          ))}
        </select>
      </div>


      {/* ----- CONTENEDOR DE PROYECTOS -----  */}
      <div className="portfolio__container container grid">
        {projectsFilter.map(({id, img, title, description, skills, link, git}) =>{
            return (
              <article className='portfolio__card' key={id}>
                  <img src={img} alt={`Imagen de ${title}`} className='portfolio__img' />
                <h3 className='portfolio__title'>{title}</h3>
                <p className="portfolio__description">{description}</p>
                
                <div className="portfolio__skills">
                  {skills.map((skill, index) =>{
                    return <img src={skill} className='portfolio__skill' key={index} />
                  })}
                </div>
                <div className="portfolio__links">
                  <a href={link} target='_blank' rel='noopener noreferrer' className='portfolio__link' title='Ver proyecto'>
                    <RiLink  className='portfolio__icon'/>
                    ver proyecto
                  </a>
                  
                  <a href={git} target='_blank' rel='noopener noreferrer' className='portfolio__link' title='Ver proyecto'>
                    <RiGithubFill  className='portfolio__icon'/>
                    ver repositorio
                  </a>
                </div>
              </article>
            )
        })}
      </div>
    </section>
  )
}