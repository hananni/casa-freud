import React from 'react';

const FEATURES = [
  {
    id: 1,
    title: 'Serviços Oferecidos',
    description:
      'A escola oferece cursos abrangendo áreas correlatas à psicanálise como Psicologia, Psicopatologia, Cultura e Arte.',
    link: '/servicos-oferecidos',
  },
  {
    id: 2,
    title: 'Perguntas Frequentes',
    description: (
      <div>
        Tem alguma dúvida? <div>Encontre respostas na página perguntas frequentes</div>{' '}
      </div>
    ),
    link: '/duvidas',
  },
  {
    id: 3,
    title: 'Clínica',
    description:
      'Os atendimentos são realizados por profissionais preparados para acolher as mais diversas demandas e faixas etárias.',
    link: '/clinica',
  },

  {
    id: 4,
    title: 'Quem Somos',
    description:
      'A Casa Freud é um espaço dedicado ao estudo, ao ensino, à investigação e à difusão da psicanálise em Anápolis ',
    link: '/quem-somos',
  },
];

const COURSES = [
  {
    title: 'Formação em Psicanálise',
    description: 'O curso tem como objetivo oferecer um espaço de transmissão da psicanálise.',
    link: '/servicos-oferecidos',
    image: require('assets/img/book7.JPG'),
  },
  {
    title: 'Curso Livres ',
    description: 'Os cursos livres são cursos de breve duração e direcionados a temas específicos.',
    link: '/servicos-oferecidos',
    image: require('assets/img/turma-livre.jpg'),
  },
  {
    title: 'Grupos de Estudos',
    description: 'Proporciona um espaço para discutir os fundamentos da teoria e da técnica psicanalítica.',
    link: '/servicos-oferecidos',
    image: require('assets/img/book3.JPG'),
  },
];

const IMAGES = [
  {
    src: require('assets/img/1.jpg'),
    thumbnail: require('assets/img/1.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  // {
  //   src: require('assets/img/2.jpg'),
  //   thumbnail: require('assets/img/2.jpg'),
  //   thumbnailWidth: 350,
  //   thumbnailHeight: 212,
  // },
  {
    src: require('assets/img/3.jpg'),
    thumbnail: require('assets/img/3.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/4.jpg'),
    thumbnail: require('assets/img/4.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/5.jpg'),
    thumbnail: require('assets/img/5.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  // {
  //   src: require('assets/img/7.jpg'),
  //   thumbnail: require('assets/img/7.jpg'),
  //   thumbnailWidth: 350,
  //   thumbnailHeight: 212,
  // },
  {
    src: require('assets/img/8.jpg'),
    thumbnail: require('assets/img/8.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/9.jpg'),
    thumbnail: require('assets/img/9.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/12.jpg'),
    thumbnail: require('assets/img/12.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/13.jpg'),
    thumbnail: require('assets/img/13.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/15.jpg'),
    thumbnail: require('assets/img/15.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  // {
  //   src: require('assets/img/16.jpg'),
  //   thumbnail: require('assets/img/16.jpg'),
  //   thumbnailWidth: 350,
  //   thumbnailHeight: 212,
  // },
  {
    src: require('assets/img/17.jpg'),
    thumbnail: require('assets/img/17.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/18.jpg'),
    thumbnail: require('assets/img/18.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/19.jpg'),
    thumbnail: require('assets/img/19.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/bg.jpg'),
    thumbnail: require('assets/img/bg.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: require('assets/img/bg3.1.jpg'),
    thumbnail: require('assets/img/bg3.1.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },

  {
    src: require('assets/img/bg6.jpg'),
    thumbnail: require('assets/img/bg6.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },

  {
    src: require('assets/img/bg5.jpg'),
    thumbnail: require('assets/img/bg5.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },

  {
    src: require('assets/img/bg2.jpg'),
    thumbnail: require('assets/img/bg2.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },

  {
    src: require('assets/img/bg7.jpg'),
    thumbnail: require('assets/img/bg7.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },

  {
    src: require('assets/img/bg8.jpg'),
    thumbnail: require('assets/img/bg8.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },

  {
    src: require('assets/img/bg9.jpg'),
    thumbnail: require('assets/img/bg9.jpg'),
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
];

const EVALUATIONS = [
  {
    name: 'Wagner Braz de Matos',
    grade: 5,
    opinion:
      'Parabéns à Casa Freud por ter em seu corpo docente uma professora tão extraordinária quanto a Sheila. Na verdade não são somente aulas que ela ministra, são verdadeiros seminários.',
  },
  {
    name: 'Suzi Borges Inácio Quirino',
    grade: 5,
    opinion:
      'Excelente aula, prof Valéria trás muita clareza ao ministrar o conteúdo, faz várias pontuações importantes e enriquece a aula com os exemplos de  atendimentos clínicos',
  },
  {
    name: ' Reginaldo Flozino de Souza',
    grade: 5,
    opinion:
      'Os esclarecimentos feitos pela professora sobre a maneira de tornar inteligível os conteúdos mais complexos adstritos ao ser humano, revelam a seriedade de se considerar todos os sintomas expressos como as " ambivalências". Aula muito boa e envolvente. A psicanálise é uma grande metodologia introduzida por Freud e revela por si mesma que o mérito está nas suas bases investigativas e criteriosas  em como se iniciou e não para de crescer. Aula excelente!',
  },
];

export { FEATURES, COURSES, IMAGES, EVALUATIONS };
