import psicanalise from 'assets/img/psicanalise.jpg';
import psicaead from 'assets/img/psicanalise-ead.JPG';
import clinica from 'assets/img/clinica.JPG';
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
    title: ' Curso de Extensão ',
    description:
      'Os cursos de extensão são cursos de breve duração e direcionados a temas específicos, são abertos a profissionais e estudantes de qualquer área que queiram iniciar e aprofundar seus estudos sobre psicanálise. ',
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
    image: book1,
  },
  {
    image: book2,
  },
  {
    image: book3,
  },
  {
    image: book4,
  },
  {
    image: book5,
  },
  {
    image: book6,
  },
  {
    image: book7,
  },
  {
    image: book8,
  },
];

export { SERVICES, INTRO_TEXT, BOOKS };
