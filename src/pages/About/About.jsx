import { RiDownloadLine } from "react-icons/ri";
import Cv from '../../pdf/cv_miguelortiz.pdf';
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import SkillsItems from "../../components/SkillsItems";
import { skill } from "../../Data";
import ResumeItem from "../../components/ResumeItem";
import { resume } from "../../Data";

import './about.css'

export default function About() {
  return (
    <main className='section container'>
      {/* ----- SECTION INFO --------- */}
      <section className='about'>
        <h2 className='section__title'>sobre <span>mí</span></h2>
        
        <section className='about__container grid'>

            <article className='about__info'>
              <h3 className='about__subtitle'>información personal</h3>
              <ul className='info__list grid'>
                <Info />
              </ul>

              <a href={Cv} download className="button">
                descargar cv
                <span className='button__icon'><RiDownloadLine /></span>
              </a>
            </article>

            <section className="stats grid">
              <Stats />
            </section>
        </section>
      </section>
      
      {/* ----- SEPARATOR --------- */}
      <div className="separator"></div>
      
      {/* ----- SECTION SKILLS --------- */}
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">mis habilidades</h3>
        <div className="skills__container grid">
          <article className="skills__group">
            <h3 className="skills__title">Front End </h3>
            <div className="skills__items grid">
              {skill.map((val) =>{
                if(val.category === 'developer'){
                  return <SkillsItems key={val.id} {...val} />
                }
              })}
            </div>
          </article>
          <article className="skills__group">
            <h3 className="skills__title">Back End </h3>
               <div className="skills__items grid">
              {skill.map((val) =>{
                if(val.category === 'backend'){
                  return <SkillsItems key={val.id} {...val} />
                }
              })}
            </div>
          </article>
        </div>
      </section>
      
      {/* ----- SEPARATOR --------- */}
      <div className="separator"></div>
      
      {/* SECTION RESUME */}
      <section className="resume">
         <h3 className="section__subtitle subtitle__center">experiencia y educación</h3>
         <div className="resume__container grid">
              <article className="resume__group grid">
                  {resume.map((val) =>{
                      if(val.category === 'experience'){
                        return <ResumeItem key={val.id} {...val} />
                      }
                  })}
              </article>
              <article className="resume__group grid">
                  {resume.map((val) =>{
                      if(val.category === 'education'){
                        return <ResumeItem key={val.id} {...val} />
                      }
                  })}
              </article>
         </div>
      </section>
    </main>
  )
}
