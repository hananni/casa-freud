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
      'Os atendimentos em nossa Clínica Escola são realizados pelos alunos do último ano do Curso de Formação em Psicanálise.',
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
    link: '',
    image: require('assets/img/psicanalise.jpg'),
  },
  {
    title: 'Curso de Extensão ',
    description: 'Os cursos de extensão são cursos de breve duração e direcionados a temas específicos.',
    link: '',
    image: require('assets/img/psicanalise-ead.JPG'),
  },
  {
    title: 'Grupos de Estudos',
    description: 'Proporciona um espaço para discutir os fundamentos da teoria e da técnica psicanalítica.',
    link: '',
    image: require('assets/img/clinica.JPG'),
  },
];

const IMAGES = [
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
