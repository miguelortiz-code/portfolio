export default function SkillsItems({img, title}) {
    return (
        <article className="skills__data">
            <figure className="skills__blob">
                <img src={img} alt={`Imagen de ${title}`} className="skills__img" />
            </figure>
                <h3 className="skills__name">{title}</h3>
        </article>
    )
}
