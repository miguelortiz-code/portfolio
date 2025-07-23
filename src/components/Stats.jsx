import {stats} from '../Data';
import parse from 'html-react-parser';

export default function Stats() {
  return(
    <>
        {stats.map(({no, title}, index) =>{
            return(
                <article className='stats__box' key={index}>
                    <h3 className='stats__no'>{no}</h3>
                    <p className='stats__title'>{parse(title)}</p>
                </article>
            )
        })}
    </>
  )
}