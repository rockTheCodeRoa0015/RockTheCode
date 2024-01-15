const data = {
  name: 'Jesús Roa Gonzalez',
  address: "Calle Rodes 22, L'Hospitalet de Llobregat, BCN",
  email: 'roa0015@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jesus-roa-gonzalez-a41791125/',
  github: 'https://github.com/rockTheCodeRoa0015/RockTheCode',
  avatar: './img/IMG-20231108-WA0009.jpg',
  aboutMe:
    'Soy una persona apasionada con el mundo del desarrollo, me gusta programar y buscar soluciones a los problemas del día a día en el mundo de la programación, soy una persona abierta y divertida que le gusta trabajar en equipo y hacer que todos nos lo pasemos bien a la hora de trabajar. Soy muy perfeccionista a la hora de trabajar, no me gusta hacer las cosas a medias y exijo lo mismo a mis compañeros. Me sé adaptar a cualquier desarrollo y a cualquier equipo de trabajo, y siempre dispuesto a aceptar cualquier reto que me propongan.',

  education: {
    degree: 'Técnico superior en Desarrollador de aplicaciones informáticas',
    university: 'C.E Jaume Balmes',
    graduationYear: 2008,
    relevantCourses: [
      'Java Development Fundamentals (PUE)',
      'PHP Development Fundamentals (CIFO)',
      'Fullstack Developer (The Power MBA)'
    ]
  },
  workExperience: [
    {
      position: 'Fullstack Developer',
      company: 'EQTIC',
      startDate: '2016',
      endDate: '2022',
      description:
        'Analista Desarrollador en tecnología OpenText en proyectos BPM, creación de la BBDD, creación del proyecto en AppWorks, desarrollo en BPM del Backend, desarrollo del Frontend en AppWorks con JS y despliegue de aplicaciones en clientes.',
      client: [
        {
          name: 'Eurona',
          description:
            'Proyecto en java, middleware para conectar los entornos de BDD con zabbix y OTRS. Administración y configuración del entorno del proceso de negocio (BPM), creación de entornos, creación de usuarios, creación de roles y creación de proyectos.'
        },
        {
          name: 'Cellnex Telecom',
          description:
            'Proyecto en java, scripts de automatización de funciones en zabbix.'
        },
        {
          name: 'Europastry',
          description:
            'Proyectos en BPM, una aplicación de gestión de incidencias con cliente y una aplicación de investigación y creación de nuevos productos.'
        },
        {
          name: 'Orange',
          description:
            'Proyectos en BPM, aplicación de gestión de grande cuentas y middleware para comunicación desde Orange y clientes externos.'
        },
        {
          name: 'Teladoc',
          description:
            'Proyectos en BPM, aplicación de gestión de pólizas de seguros y aplicación de gestión de seguimientos de casos médicos.'
        }
      ]
    }
  ],
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'PHP',
    'JAVA',
    'Oracle',
    'Microsoft Sever',
    'MySQL',
    'Git',
    'Frontend and Backend Development',
    'BPM',
    'RESTful API',
    'XML',
    'XLS'
  ],
  projects: [
    {
      title: 'Landing Page',
      description: 'Desarrollo de una Landing Page simulando un e-commerce.',
      link: 'https://github.com/rockTheCodeRoa0015/RockTheCode/tree/main/Proyecto1',
      page: 'https://pro1jesusroacorregido.netlify.app/',
      preview: './img/landingPage.png'
    },
    {
      title: 'Landing Page con Javascript',
      description:
        'Desarrollo de una Landing Page simulando un e-commerce con funcionalidades en javascript.',
      link: 'https://github.com/rockTheCodeRoa0015/RockTheCode/tree/main/proyecto2Bis',
      page: 'https://pr2jesusroacorregido.netlify.app/',
      preview: './img/javascript.png'
    },
    {
      title: 'Galleria Pinterest',
      description:
        'Recrear la página de Pinterst con funcionalidades JS y llamadas asíncronas la API de unsplash.',
      link: 'https://github.com/rockTheCodeRoa0015/RockTheCode/tree/main/proyecto3',
      page: 'https://pr3jesusroacorregido.netlify.app/',
      preview: './img/gallery.png'
    }
  ]
}

export default data
