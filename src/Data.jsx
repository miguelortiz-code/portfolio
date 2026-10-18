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
    title: 'Celular : ',
    description: '+57 300 298 8345',
  },

  {
    title: 'Correo Electrónico : ',
    description: 'miguelortiz.code@gmail.com',
  },

  {
    title: 'Idiomas : ',
    description: 'Español (nativo), Inglés (básico)',
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
    title: 'Meeti <span> Bogotá (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma web de reuniones presenciales o virtuales bajo arquitectura MVC, utilizando EJS como motor de plantillas y PostgreSQL (Sequelize). Permite crear meeti's, gestionar grupos y comunidad, y cuenta con un panel administrativo para administrar categorías, usuarios y reuniones.`,
  },
  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Julio 2025 - Agosto 2025',
    title: 'DevJobs <span> Bogotá (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma web de empleos con Node.js bajo arquitectura MVC, utilizando Handlebars como motor de plantillas y MongoDB (Mongoose). Permite publicar y gestionar vacantes, postulación de candidatos con envío de CV y un panel administrativo para administrar vacantes, usuarios y candidatos.`,
  },

  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Junio 2025 - Julio 2025',
    title: 'Bienes Raíces <span> Bogotá (Proyecto freelance) </span>',
    desc: `Desarrollo de una plataforma de bienes raíces con Node.js bajo arquitectura MVC, utilizando Pug como motor de plantillas, MySQL y Sequelize como ORM, con operaciones CRUD de propiedades que permiten a los usuarios publicar y gestionar inmuebles.`,
  },
  
  {
    id: 4,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Abril 2024 - Noviembre 2024',
    title: 'Desarrollador de Soporte <span> IDNetworking, Bogotá </span>',
    desc: `Desarrollo de módulos para reconstruir notas crédito y detectar los productos con mayor inactividad en la plataforma LIKE. Ejecución y optimización de consultas SQL para corregir datos y mejorar el rendimiento, y soporte técnico a clientes a nivel nacional, incluida la configuración remota de impresoras.`,
  },

  {
    id: 5,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'Junio 2022 - Diciembre 2022',
    title: 'Aprendiz de Desarrollo (Etapa práctica SENA) <span> Jones Lang LaSalle, Bogotá </span>',
    desc: `Desarrollo de un sistema para el registro y control de inventario de productos (sillas y aires), incluyendo el historial de mantenimientos realizados. Se utilizó HTML, CSS y JavaScript para la interfaz de usuario; PHP para el backend con manejo de rutas; y MySQL para la gestión de datos. El sistema incluye autenticación de usuarios y manejo de sesiones.`
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: 'Mayo 2023 - Actualidad',
    title: 'Licenciatura en Sistemas Computacionales <span> Universidad UTEL (virtual, México) </span>',
  },

  {
    id: 7,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: 'Noviembre 2020 - Diciembre 2022',
    title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información <span> SENA, Bogotá </span>',
  },
];

// =========  PORTFOLIO  =========  //
export const portfolio = [
  // Bienes Raices
  {
    id: 1,
    img: projectImg1,
    title: 'Bienes Raíces',
    description: `
    La aplicación permite a los usuarios publicar propiedades para vender o arrendar, visualizar información detallada de cada inmueble y enviar mensajes directos a los vendedores interesados. También incluye una interfaz administrativa para gestionar propiedades y mensajes de forma eficiente.`,
    skills: [
      { img: node, name: 'Node.js' },
      { img: tailwind, name: 'Tailwind CSS' },
      { img: pug, name: 'Pug' },
      { img: mysql, name: 'MySQL' },
    ],
    link: 'https://bienes-raices-10wl.onrender.com/',
    note: 'Demo alojada en el plan gratuito de Render: la primera carga puede tardar hasta un minuto.',
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
    skills: [
      { img: node, name: 'Node.js' },
      { img: mongo, name: 'MongoDB' },
      { img: handlebars, name: 'Handlebars' },
      { img: css, name: 'CSS' },
    ],
    link: 'https://devjobs-1r4u.onrender.com/',
    note: 'Demo alojada en el plan gratuito de Render: la primera carga puede tardar hasta un minuto.',
    git:'https://github.com/miguelortiz-code/devjobs',
    development: ['Backend']
  },

  {
    id: 3,
    img: projectImg3,
    title: 'AYA Ingeniería',
    description:`Desarrollo de una página web informativa sobre energía renovable, enfocada en presentar servicios, beneficios y soluciones sostenibles mediante una interfaz moderna y responsiva. Implementación de diseño adaptable y optimización visual para mejorar la experiencia de usuario y la navegación.`,
    skills: [
      { img: react, name: 'React' },
      { img: tailwind, name: 'Tailwind CSS' },
    ],
    link: 'https://seagreen-bear-171627.hostingersite.com/',
    git:'https://github.com/miguelortiz-code/aya-ingeneria',
    development: ['Frontend']
  },
];

// =========  CONTACT  =========  //
export const contact = [
  {
    id: 1,
    icon: <FaUser />,
    title: 'freelance',
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
    title: 'teléfono:',
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
