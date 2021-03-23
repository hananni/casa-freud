import whoWeAre from 'assets/img/who-we-are.jpg';
import olivio from 'assets/img/olivio.jpg';
import valeria from 'assets/img/valeria.JPG';
import marcio from 'assets/img/marcio.JPG';
import sheila from 'assets/img/sheila.JPG';
import lauane from 'assets/img/lauane.JPG';
import nelson from 'assets/img/nelson.JPG';
import objetivo from 'assets/img/nosso-objetivo.jpg';
import { NewReleasesOutlined } from '@material-ui/icons';

const WHO_WE_ARE = {
  title: 'Quem somos',
  image: whoWeAre,
  description:
    'A Casa Freud é um espaço dedicado ao estudo, ao ensino, à investigação e à difusão da psicanálise em Anápolis – GO, tornando acessível a formação e o atendimento clínico psicanalítico. São ministrado cursos de Formação em Psicanálise, cursos livres, debates e grupos de estudos.',
};

const PROFESSORS = [
  {
    title: 'Profº M.e Olivio Israel Costa',
    description:
      'Psicólogo Clínico. Atua como psicoterapeuta e realiza avaliação psicológica em consultório particular. Especialista em Psicologia Jurídica (PUC-GO). Atualmente é mestrando do Programa de Pós-Graduação em Psicologia Clínica e Cultura da UnB.',
    image: olivio,
    instagram: 'https://instagram.com/oliviopsi?igshid=4649jib8e26r',
  },
  {
    title: 'Profª Esp.Valéria Lopes da Silva',
    description:
      'Graduada em Psicologia pela Faculdade Anhanguera de Anápolis (2011); Especialista em Didática e Metodologia do Ensino Superior (2013); Especialista em Psicologia Jurídica pelo IPES (2013). Atua como psicóloga clínica com base psicanalítica.',
    image: lauane,
    instagram: 'https://instagram.com/psi_valeria.lopes?igshid=j7hgawt059xy',
  },
  {
    title: 'Profº M.e Márcio Luppi',
    description:
      'Possui graduação em psicologia pela universidade Mackenzie-SP, é mestre em psicologia pela Puc-go, atuou como coordenador do curso de psicologia no grupo anhanguera educacional na unidade Anápolis por 10 anos. Atua como docente em psicologia clínica e psicanálise além de supervisor e orientador de projetos científicos. É escritor ligado ao movimento surrealista de SP, tem um livro de haikais publicado. atua no consultório há mais de 20 anos.',
    image: marcio,
    instagram: 'https://instagram.com/professor.luppi?igshid=1esftjx0syomk',
  },
  {
    title: 'Profª Sheila',
    description:
      'Possui graduação em História (2006), mestrado em História pela Universidade de Brasília - UnB (2011), é psicanalista e atuou como professora no curso de Psicologia da Faculdade Anhanguera de Anápolis.',
    image: sheila,
    instagram: 'https://instagram.com/luppisheila?igshid=r73nhmz85osh',
  },
  {
    title: 'Profº Dr.Nelson de Abreu Júnior',
    image: nelson,
    description:
      'Possui graduação, Bacharelado e Licenciatura em Psicologia pelas Faculdades Metropolitanas Unidas (1985), mestrado em Ciências da Educação Superior pela Universidade de Havana (2003) convalidado pela pontifícia Universidade Católica de Goiás e doutorado em Educação pela Universidade de Brasília (2017).',
    instagram: 'https://instagram.com/nelsonabreujr?igshid=1nu1o4o73tsa8',
  },
  {
    title: 'Profª Esp.Lauane Carolina Diniz',
    description:
      'Possui graduação em Psicologia e pós-graduação em Psicopatologia. Psicanalista e psicóloga clínica, atua com foco em psicologia perinatal.',
    image: valeria,
    instagram: 'https://instagram.com/psicologa_lauanediniz?igshid=y64lxuraztfb',
  },
];

const GOALS = {
  title: 'Nossos Objetivos',
  image: objetivo,
  description:
    'Buscamos transmitir a psicanálise em sua especificidade, com base nos três elementos essenciais da formação: análise pessoal, supervisão e estudo crítico da teoria psicanalítica. Pretende-se desenvolver e aprimorar a escuta clínica levando em consideração a metapsicologia freudiana e os aportes das escolas francesa e inglesa. Nossa clínica psicanalítica busca a compreensão de todas as formas de sofrimento observadas na atualidade.',
};

export { WHO_WE_ARE, PROFESSORS, GOALS };
