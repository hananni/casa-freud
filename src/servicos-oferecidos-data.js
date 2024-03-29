import psicanalise from 'assets/img/book7.JPG';
import psicaead from 'assets/img/turma-livre.jpg';
import clinica from 'assets/img/book3.JPG';
import casa1 from 'assets/img/casa1.jpg';
import casa2 from 'assets/img/casa2.jpg';
import casa3 from 'assets/img/casa3.jpg';
import casa4 from 'assets/img/casa4.jpg';
import book1 from 'assets/img/book1.jpg';
import book2 from 'assets/img/book2.JPG';
import book3 from 'assets/img/book3.JPG';
import book4 from 'assets/img/book4.JPG';
import book5 from 'assets/img/book5.JPG';
import book6 from 'assets/img/book6.JPG';
import book7 from 'assets/img/book7.JPG';
import book8 from 'assets/img/book8.JPG';

const INTRO_TEXT =
  'A escola oferece cursos abrangendo áreas correlatas à psicanálise como Psicologia, Psicopatologia, Cultura e Arte. Palestras e seminários aberto a estudantes e a comunidade em geral.';

const SERVICES = [
  {
    title: ' Cursos Livres ',
    description:
      'Os cursos livres são cursos de breve duração e direcionados a temas específicos, são abertos a profissionais e estudantes de qualquer área que queiram iniciar e aprofundar seus estudos sobre psicanálise. ',
    image: psicaead,
  },
  {
    title: ' Formação em Psicanálise',
    description:
      'O curso de Formação em Psicanálise tem como objetivo oferecer um espaço de transmissão da psicanálise, onde o estudo cuidadoso da obra de Freud e dos pós-freudianos é considerado fundamental para criar uma base sólida para a intervenção clínica. Está aberto a profissionais da psicologia, medicina ou demais áreas abrangidas pelos interesses terapêuticos da psicanálise.',
    image: psicanalise,
  },
  {
    title: ' Grupos de estudo',
    description:
      'Os grupos de estudos têm como objetivo propiciar um espaço para discutir os fundamentos da teoria e da técnica psicanalítica, bem como realizar leituras e debates acerca de questões da atualidade.',
    image: clinica,
  },
];

const BOOKS = [
  {
    src: casa1,
    thumbnail: casa1,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: casa2,
    thumbnail: casa2,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: casa3,
    thumbnail: casa3,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: casa4,
    thumbnail: casa4,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book1,
    thumbnail: book1,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book2,
    thumbnail: book2,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book3,
    thumbnail: book3,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book4,
    thumbnail: book4,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book5,
    thumbnail: book5,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book6,
    thumbnail: book6,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book7,
    thumbnail: book7,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
  {
    src: book8,
    thumbnail: book8,
    thumbnailWidth: 350,
    thumbnailHeight: 212,
  },
];

export { SERVICES, INTRO_TEXT, BOOKS };
