import { FaUser, FaFolderOpen, FaEnvelopeOpen, FaMap, FaPhoneAlt } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
import { IoMdMail } from "react-icons/io";

// =========  LOGO DE SKILLS  =========  //
import html from './assets/html-logo.svg';
import css from './assets/css-logo.svg';
import js from './assets/javascript-logo.svg';
import react from './assets/react-logo.svg';
import tailwind from './assets/tailwind-css-logo.svg';
import figma from './assets/figma-logo.svg';
import node from './assets/node-js.svg';
import mysql from './assets/mysql-logo.svg';
import postgresql from './assets/postgresql.svg';
import postman from './assets/postman.svg';
import pug from './assets/pug.svg';

// =========  IMAGE OF PROJECT =========  //
import projectImg1 from './assets/bienes.png';
// import projectImg2 from './assets/project-2.jpg';
// import projectImg3 from './assets/project-3.jpg';
// import projectImg4 from './assets/project-4.jpg';
// import projectImg5 from './assets/project-5.jpg';
// =========  CHANGE THEME =========  //
import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';


// =========  LINKS =========  //
export const links = [
  {
    name: 'Inicio',
    icon: <GoHomeFill  className='nav__icon' />,
    path: '/',
  },

  {
    name: 'Sobre mi',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    name: 'Portafolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

// =========  PERSONAL INFO  =========  //
export const personalInfo = [
  {
    title: 'Nombres : ',
    description: 'Miguel Angel',
  },

  {
    title: 'Apellidos : ',
    description: 'Aya Ortiz',
  },

  {
    title: 'Edad : ',
    description: '22 Años',
  },

  // {
  //   title: 'Dirección : ',
  //   description: 'Tv 36 # 58 C Sur - 90, Bogotá',
  // },

  {
    title: 'Celular : ',
    description: '+57 300 298 8345',
  },

  {
    title: 'Correo Electrónico : ',
    description: 'miguelortiz.code@gmail.com',
  },

  {
    title: 'Idiomas : ',
    description: 'Español, Ingles',
  },
];

// =========  STATS  =========  //
export const stats = [
  {
    no: '2+',
    title: 'Años de <br /> Experiencia',
  },

  {
    no: '8+',
    title: 'Proyectos <br /> Completados',
  },
];

// =========  SKILSS  =========  //

export const skill = [
  // =========  FRONTEND  =========  //
  {
    id: 1,
    img: html,
    title: 'HTML',
    category: 'developer',
  },

  {
    id: 2,
    img: css,
    title: 'CSS',
    category: 'developer',
  },

  {
    id: 3,
    img: js,
    title: 'JavaScript',
    category: 'developer',
  },

  {
    id: 4,
    img: react,
    title: 'React',
    category: 'developer',
  },

  {
    id: 5,
    img: tailwind,
    title: 'Tailwind',
    category: 'developer',
  },

  {
    id: 6,
    img: figma,
    title: 'Figma',
    category: 'developer',
  },

  // =========  BACKEND  =========  //
  {
    id: 7,
    img: node,
    title: 'Node Js',
    category: 'backend',
  },

  {
    id: 8,
    img: mysql,
    title: 'MySql',
    category: 'backend',
  },

  {
    id: 9,
    img: postgresql,
    title: 'PostgreSql',
    category: 'backend',
  },

  {
    id: 10,
    img: postman,
    title: 'Postman',
    category: 'backend',
  }
];

// =========  RESUME  =========  //
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Abril 2024 - Noviembre 2024',
    title: 'Desarrollador (funciones de soporte) <span> Bogotá, (IDNETWORKING) </span>',
    desc: `Brindar asesoría a clientes a nivel nacional resolviendo inconvenientes en la plataforma LIKE. Desarrollar módulos para reconstruir notas crédito y detectar productos con mayor inactividad. Ejecutar consultas SQL para optimizar datos y mejorar el rendimiento, y realizar configuración remota de impresoras
    `,
  },

  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Junio 2025 - Julio 2025',
    title: 'Bienes Raíces <span> Bogotá, (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma de bienes raíces con Node.js bajo arquitectura MVC, utilizando Pug como motor de plantillas, Sequelize como ORM con operaciones CRUD de propiedades, permitiendo a los usuarios publicar y gestionar inmuebles.`,
  },

  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Junio 2022 - Diciembre 2022',
    title: 'Aprendiz SENA<span>Bogotá,  Jones Lang Lasalle (Practicas) </span>',
    desc: `Desarrollo de un sistema para el registro y control de inventario de productos (sillas y aires), incluyendo el historial de mantenimientos realizados. Se utilizó HTML, CSS y JavaScript para la interfaz de usuario; PHP para el backend con manejo de rutas; y MySQL para la gestión de datos. El sistema incluye autenticación de usuarios y manejo de sesiones`
  },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: 'Mayo 2023 - Actual',
    title: 'Licenciatura en sistemas Computacionales <span> Universidad Utel  (México) </span>',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: 'Noviembre 2020 - Diciembre 2022',
    title: 'Análisis y Desarrollo de Sistemas de información <span> SENA </span>',
  },
];

// =========  PORTFOLIO  =========  //
export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Bienes Raices',
    description: `
    La aplicación permite a los usuarios publicar propiedades para vender o arrendar , visualizar información detallada de cada inmueble y enviar mensajes directos a los vendedores interesados. También incluye una interfaz administrativa para gestionar propiedades, mensajes de forma eficiente.`,
    skills: [node, tailwind, pug, mysql],
    link: 'https://bienes-raices-10wl.onrender.com/',
    git:'https://github.com/miguelortiz-code/bienes-raices',
    development: ['Backend']
  },

  // {
  //   id: 2,
  //   img: projectImg2,
  //   title: 'Food Product Design',
  //   description:`
  //   La aplicación permite a los usuarios publicar propiedades para vender o arrendar , visualizar información detallada de cada inmueble y enviar mensajes directos a los vendedores interesados. También incluye una interfaz administrativa para gestionar propiedades, mensajes de forma eficiente.`,
  //   skills: [figma, node],
  //   link: 'https://www.google.com',
  //   git:'https://www.github.com',
  //   development: ['Backend']
  // },

  // {
  //   id: 3,
  //   img: projectImg3,
  //   title: 'Restaurant Landing Page',
  //   description:`
  //   La aplicación permite a los usuarios publicar propiedades para vender o arrendar , visualizar información detallada de cada inmueble y enviar mensajes directos a los vendedores interesados También incluye una interfaz administrativa para gestionar propiedades, mensajes de forma eficiente.
  //   `,
  //   skills: [html, css, js],
  //   link: 'https://www.google.com',
  //   git:'https://www.github.com',
  //   development: ['Frontend']
  // },

  // {
  //   id: 4,
  //   img: projectImg4,
  //   title: 'Barbershop Website',
  //   description:`
  //   La aplicación permite a los usuarios publicar propiedades para vender o arrendar , visualizar información detallada de cada inmueble y enviar mensajes directos a los vendedores interesados. También incluye una interfaz administrativa para gestionar propiedades, mensajes de forma eficiente.
  //   `,
  //   skills: [react, tailwind],
  //   link: 'https://www.google.com',
  //   git:'https://www.github.com',
  //   development: ['Frontend']
  // },

  // {
  //   id: 5,
  //   img: projectImg5,
  //   title: 'Construction Landing Page',
  //   description:`
  //   La aplicación permite a los usuarios publicar propiedades para vender o arrendar , visualizar información detallada de cada inmueble y enviar mensajes directos a los vendedores interesados. También incluye una interfaz administrativa para gestionar propiedades, mensajes de forma eficiente.
  //   `,
  //   skills: [html, css, js],
  //   link: 'https://www.google.com',
  //   git:'https://www.github.com',
  //   development: ['Fullstack']
  // },
];

// =========  CONTACT  =========  //
export const contact = [
  {
    id: 1,
    icon: <FaUser />,
    title: 'freelancer',
    data: 'Disponible ahora mismo'
  },
  {
    id: 2,
    icon: <FaMap />,
    title: 'ciudad',
    data: 'Bogotá'
  },
  {
    id: 3,
    icon: <IoMdMail />,
    title: 'correo electrónico:',
    data: 'miguelortiz.code@gmail.com'
  },
  {
    id: 4,
    icon: <FaPhoneAlt />,
    title: 'telefono:',
    data: '(+57) 300 298 83 45'
  },
]
// =========  THEMES  =========  //
export const themes = [
  {
    img: Theme1,
    title: 'Rojo',
    hue: '4',
  },

  {
    img: Theme2,
    title: 'Azul Violeta',
    hue: '271',
  },

  {
    img: Theme3,
    title: 'Azul',
    hue: '225',
  },

  {
    img: Theme4,
    title: 'Magenta',
    hue: '339',
  },

  {
    img: Theme5,
    title: 'Amarillo Verdoso',
    hue: '80',
  },

  {
    img: Theme6,
    title: 'Naranja',
    hue: '19',
  },

  {
    img: Theme7,
    title: 'Amarillo',
    hue: '42',
  },
];
