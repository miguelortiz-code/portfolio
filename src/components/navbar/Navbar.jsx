import {links} from '../../Data';
import { NavLink } from 'react-router';
import { RiCloseLargeLine  , RiMenuLine  } from "react-icons/ri";
import './navbar.css'
import { useState } from 'react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className='nav'>
      <div className={`${showMenu ? 'nav__menu show__menu' :  'nav__menu'}`}>
        <ul className='nav__list grid'>
          {links.map(({name, icon, path}, index) =>{
            return(
              <li className='nav__item' key={index}>
                <NavLink to={path} className={({isActive }) => isActive ? 'nav__link active__nav' : 'nav__link'} onClick={() => setShowMenu(!showMenu)}>
                  {icon}
                  <h3 className='nav__name'>{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className='nav__close' onClick={() => setShowMenu(!showMenu)}>
          <RiCloseLargeLine  />
        </div>
      </div>
      <div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
        <RiMenuLine />
      </div>
    </nav>
  )
}