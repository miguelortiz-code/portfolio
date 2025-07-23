import parse from 'html-react-parser';

export default function ResumeItem({icon, year, title, desc}) {
  return (
    <div className="resume__item">
        <span className="resume__icon">{icon}</span>
        <span className="resume__data">{year}</span>
        <h3 className="resume__title">{parse(title)}</h3>
        <p className="resume__description">{desc}</p>
    </div>
  )
}