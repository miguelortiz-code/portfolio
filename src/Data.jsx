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
import mongo from './assets/mongo.svg';
import git from './assets/git.svg';
import github from './assets/github.svg';
import vite from './assets/vite.svg';
import vercel from  './assets/vercel.svg';
import handlebars from './assets/handlebars.svg';

// =========  IMAGE OF PROJECT =========  //
import projectImg1 from './assets/projects/bienes.png';
import projectImg2 from './assets/projects/devJobs.png';
import projectImg3 from './assets/projects/aya-ingenieria.png';
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
    description: '23 Años',
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
    no: '1+',
    title: 'Años de <br /> Experiencia',
  },

  {
    no: '4+',
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
  },

  {
    id: 11,
    img: mongo,
    title: 'MongoDB',
    category: 'backend',
  },

  // TOOLS
  {
    id: 13,
    img: git,
    title: 'Git',
    category: 'tools',
  },

  {
    id: 14,
    img: github,
    title: 'GitHub',
    category: 'tools',
  },
  {
    id: 15,
    img: vite,
    title: 'Vite',
    category: 'tools',
  },
  {
    id: 16,
    img: vercel,
    title: 'Vercel',
    category: 'tools',
  }
];

// =========  RESUME  =========  //
export const resume = [  
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Octubre 2025 - Febrero 2026',
    title: 'Meeti <span> Bogotá, (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma web de reuniones presenciales o virtual bajo arquitectura MVC, utilizando EJS como motor de plantillas, PostgreSQL (Sequelize). Permite crear meeti's y gestionar grupos, comunidad y un panel administrativo para administrar categoria, usuarios y reuniones.`,
  },
  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Julio 2025 - Agosto 2025',
    title: 'DevJobs <span> Bogotá, (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma web de empleos con Node.js bajo arquitectura MVC, utilizando Handlebars como motor de plantillas, MongoDB (Mongoose). Permite publicar y gestionar vacantes, postulación de candidatos con envío de CV y un panel administrativo para administrar vacantes, usuarios y candidatos.`,
  },

  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Junio 2025 - Julio 2025',
    title: 'Bienes Raíces <span> Bogotá, (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma de bienes raíces con Node.js bajo arquitectura MVC, utilizando Pug como motor de plantillas, Sequelize como ORM con operaciones CRUD de propiedades, permitiendo a los usuarios publicar y gestionar inmuebles.`,
  },
  
  {
    id: 4,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Abril 2024 - Noviembre 2024',
    title: 'Desarrollador (funciones de soporte) <span> Bogotá, (IDNETWORKING) </span>',
    desc: `Brindar asesoría a clientes a nivel nacional resolviendo inconvenientes en la plataforma LIKE. Desarrollar módulos para reconstruir notas crédito y detectar productos con mayor inactividad. Ejecutar consultas SQL para optimizar datos y mejorar el rendimiento, y realizar configuración remota de impresoras
    `,
  },

  {
    id: 5,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Junio 2022 - Diciembre 2022',
    title: 'Aprendiz SENA<span>Bogotá,  Jones Lang Lasalle (Practicas) </span>',
    desc: `Desarrollo de un sistema para el registro y control de inventario de productos (sillas y aires), incluyendo el historial de mantenimientos realizados. Se utilizó HTML, CSS y JavaScript para la interfaz de usuario; PHP para el backend con manejo de rutas; y MySQL para la gestión de datos. El sistema incluye autenticación de usuarios y manejo de sesiones`
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: 'Mayo 2023 - Actual',
    title: 'Licenciatura en sistemas Computacionales <span> Universidad Utel  (México) </span>',
  },

  {
    id: 7,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: 'Noviembre 2020 - Diciembre 2022',
    title: 'Análisis y Desarrollo de Sistemas de información <span> SENA </span>',
  },
];

// =========  PORTFOLIO  =========  //
export const portfolio = [
  // Bienes Raices
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
  // DevJobs
  {
    id: 2,
    img: projectImg2,
    title: 'DevJobs',
    description:`
    La aplicación permite a los usuarios postularse a vacantes, subir su CV y contactar directamente con los reclutadores interesados. También incluye una interfaz administrativa para que los reclutadores publiquen vacantes, gestionen candidatos y visualicen información detallada de cada postulación de forma eficiente.`,
    skills: [node, mongo, handlebars,css],
    link: 'https://devjobs-1r4u.onrender.com/',
    git:'https://github.com/miguelortiz-code/devjobs',
    development: ['Backend']
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Aya Ingeneria',
    description:`Desarrollo de una página web informativa sobre energía renovable, enfocada en presentar servicios, beneficios y soluciones sostenibles mediante una interfaz moderna y responsiva. Implementación de diseño adaptable y optimización visual para mejorar la experiencia de usuario y la navegación`,
    skills: [react, tailwind],
    link: 'https://seagreen-bear-171627.hostingersite.com/',
    git:'https://github.com/miguelortiz-code/aya-ingeneria',
    development: ['Frontend']
  },

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
