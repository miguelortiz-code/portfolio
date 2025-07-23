import React from 'react'

export default function ThemeItems({hue, img, title, changeColor}) {
  return (
    <img src={img} alt={`Imagen del color: ${title}`} className='theme__img' onClick={() => {changeColor(hue)}} />
  )
}
