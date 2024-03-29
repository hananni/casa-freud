import whoWeAre from 'assets/img/quemsomos2023.jpg';
import valeria from 'assets/img/valeria.JPG';
import marcio from 'assets/img/new-marcio.jpg';
import sheila from 'assets/img/sheila.JPG';
import henrique from 'assets/img/henrique.jpeg';
import cesar from 'assets/img/cesar.jpeg';
import larissa from 'assets/img/larissa-new.jpeg';
import matheus from 'assets/img/new-matheus.jpg';
import objetivo from 'assets/img/nosso-objetivo.jpg';

const WHO_WE_ARE = {
  title: 'Quem somos',
  image: whoWeAre,
  description:
    'A Casa Freud é um espaço dedicado ao estudo, ao ensino, à investigação e à difusão da psicanálise em Anápolis – GO, tornando acessível a formação e o atendimento clínico psicanalítico. São ministrado cursos de Formação em Psicanálise, cursos livres, debates e grupos de estudos.',
};

const PROFESSORS = [
  {
    title: 'Profº M.e Márcio Luppi',
    description:
      'Possui graduação em psicologia pela universidade Mackenzie-SP, é mestre em psicologia pela Puc-go, atuou como coordenador do curso de psicologia no grupo anhanguera educacional na unidade Anápolis por 10 anos. Atua como docente em psicologia clínica e psicanálise além de supervisor e orientador de projetos científicos. É escritor ligado ao movimento surrealista de SP, tem um livro de haikais publicado. atua no consultório há mais de 20 anos.',
    image: marcio,
    instagram: 'https://instagram.com/professor.luppi?igshid=1esftjx0syomk',
  },
  {
    title: 'Profº M.e Sheila Luppi',
    description:
      'Possui graduação em História (2006), mestrado em História pela Universidade de Brasília - UnB (2011), é psicanalista e atuou como professora no curso de Psicologia da Faculdade Anhanguera de Anápolis.',
    image: sheila,
    instagram: 'https://instagram.com/luppisheila?igshid=r73nhmz85osh',
  },
  {
    title: 'Profª Esp.Larissa Geovana de Paiva Batista ',
    description:
      'Psicóloga. Pós graduada em saúde mental. Formação em Psicanálise pela Casa Freud. Atuando em atendimento clínico presencial e online.',
    image: larissa,
    instagram: 'https://www.instagram.com/psi.larissageovana/',
  },
  {
    title: 'Profª Esp.Matheus Santos Alves ',
    description:
      'Psicanalista formado pela Casa Freud.Especialista em Filosofia e Autoconhecimento (PUCRS), Especialista em Psicopatologia psicanalítica (Casa Freud) e Especialista em Formação em Psicanálise do século XXI (FAAP).Atuando em atendimento clínico.',
    image: matheus,
    instagram: 'https://www.instagram.com/matheusantosalves/',
  },
  {
    title: 'Profª Esp.Lauane Carolina Diniz',
    description:
      'Possui graduação em Psicologia e pós-graduação em Psicopatologia. Psicanalista e psicóloga clínica, atua com foco em psicologia perinatal.',
    image: valeria,
    instagram: 'https://instagram.com/psicologa_lauanediniz?igshid=y64lxuraztfb',
  },
  {
    title: 'Profº Henrique Lopes',
    description:
      'Psicanalista e escritor. Professor convidado na Casa Freud. Atua em consultório particular e como supervisor, coordena semestralmente grupos de estudo com temas diversos, tendo como ênfase a prática clincia. É autor do livro de poesias Rifle, publicado pela NegaLilu Editora.',
    image: henrique,
    instagram: 'https://www.instagram.com/henriquealo/',
  },
  {
    title: 'Profº César Guimarães',
    description:
      'Psicanalista e Psicólogo. Professor convidado na Casa Freud. Especialista em psicopatologia psicanalítica. Atua em consultório particular e como supervisor clínico.',
    image: cesar,
    instagram: 'https://www.instagram.com/cesar.guim/',
  },
];

const GOALS = {
  title: 'Nossos Objetivos',
  image: objetivo,
  description:
    'Buscamos transmitir a psicanálise em sua especificidade, com base nos três elementos essenciais da formação: análise pessoal, supervisão e estudo crítico da teoria psicanalítica. Pretende-se desenvolver e aprimorar a escuta clínica levando em consideração a metapsicologia freudiana e os aportes das escolas francesa e inglesa. Nossa clínica psicanalítica busca a compreensão de todas as formas de sofrimento observadas na atualidade.',
};

export { WHO_WE_ARE, PROFESSORS, GOALS };
