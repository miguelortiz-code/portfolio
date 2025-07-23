import { useEffect, useState } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import ThemeItems from './ThemeItems';
import {themes} from '../../Data';
import './themes.css';

// ======= CHANGE COLORS ======= //
const getStorageColor = () =>{
  let color  = '4';
  if(localStorage.getItem('color')){
    color = localStorage.getItem('color');
  }

  return color;
};

// ======= DARKMODE ======= //
const getStorageTheme  = () =>{
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
}

export default function Themes() {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());
  
  // ======= CHANGE COLORS ======= //
  const changeColor = (color) =>{
    setColor(color);
  }

  useEffect(()=>{
    document.documentElement.style.setProperty('--hue', color);
    localStorage.setItem('color', color);
  },[color]);

  // ======= DARKMODE ======= //
  const toggleTheme = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    }else{
      setTheme('light-theme');
    }
  }

  useEffect(() =>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])




  return (
    <>
      <div className="theme__toggle" onClick={toggleTheme}>
        {theme === 'light-theme' ? <FaMoon /> : <FaSun/>}
      </div>
      <div className="switcher__toogle" onClick={() =>setShowSwitcher(!showSwitcher)}>
        <FaCog />
      </div>
      <div className={`style__switcher ${showSwitcher ? 'show__switcher' : ''}`}>
        <h3 className="switcher__title">elije el color</h3>
        <div className="switcher__items grid">
          {themes.map((theme, index) =>{
            return <ThemeItems key={index} {...theme} changeColor={changeColor} />
          })}
        </div>

        <div className="switcher__close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
    </div>
    
    </>
  )
}