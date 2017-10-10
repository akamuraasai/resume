const social = [
  { id: 1, text: 'linkedin', value: 'https://www.linkedin.com/in/jonathan-willian-916b2a73/' },
  { id: 2, text: 'github', value: 'https://github.com/akamuraasai/' },
  { id: 3, text: 'bitbucket', value: 'https://bitbucket.org/akamuraasai/' },
  { id: 4, text: 'codepen', value: 'https://codepen.io/akamuraasai/' },
];

const about = {
  id: 1,
  title: 'Jonathan Willian',
  containers: [
    {
      id: 1,
      title: '',
      description: 'Um profissional dedicado que está sempre em busca de conhecimentos e aprendendo sobre novas tecnologias.',
      items: [
        { id: 1, type: 'Signature', value: 'Jonathan Willian' },
        {
          id: 2,
          type: 'PersonalData',
          value: [
            { id: 1, title: 'Nickname', value: 'AkamuraAsai' },
            { id: 2, title: 'E-mail', value: 'contato@akamuraasai.work' },
            { id: 3, title: 'WhatsApp', value: '+55 11 95273 6102' },
            { id: 4, title: 'Aniversário', value: 'Outubro/1990' },
            { id: 5, title: 'Endereçp', value: 'São Paulo - SP' },
          ],
        },
        {
          id: 3,
          type: 'StatisticsGroup',
          value: [
            { id: 1, title: 'Projetos', value: 15 },
            { id: 2, title: 'Experiência', value: 7 },
            { id: 3, title: 'Hackathons', value: 6 },
            { id: 4, title: 'Eventos', value: 12 },
          ],
        },
      ],
    },
  ],
};

const skills = {
  id: 2,
  title: 'Minhas Habilidades',
  containers: [
    {
      id: 1,
      title: 'Habilidades e Experiências',
      description: 'Os anos de experiência e curiosidade em aprender, me fizeram estudar uma ampla gama de temas, mas acabei por focar os conhecimentos principalmente no ambito de programação Web, tendo como foco principal as linguagens PHP e Javascript.',
      items: [
        {
          id: 1,
          type: 'SkillList',
          value: [
            { id: 1, title: 'PHP', value: 90, color: 'yellow' },
            { id: 2, title: 'HTML 5 & CSS 3', value: 70, color: 'orange' },
            { id: 3, title: 'NodeJS', value: 90, color: 'purple' },
            { id: 4, title: 'EcmaScript', value: 90, color: 'red' },
            { id: 5, title: 'MySQL', value: 70, color: 'blue' },
            { id: 6, title: 'Git', value: 100, color: 'green' },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Idiomas',
      description: 'Graças ao meu grande interesse por outras culturas e pela forma como o ser humano evoluiu em cada região do mundo acabei por estudar idiomas diferentes, a fim de entender um pouco mais sobre essas diferenças culturais.',
      items: [
        {
          id: 1,
          type: 'LanguageList',
          value: [
            { id: 1, title: 'Português', value: 100, color: 'red' },
            { id: 2, title: 'Inglês', value: 70, color: 'purple' },
            { id: 3, title: 'Francês', value: 20 },
            { id: 4, title: 'Japonês', value: 20, color: 'orange' },
          ],
        },
      ],
    },
  ],
};

const jobs = {
  id: 3,
  title: 'Minha Experiência',
  containers: [
    {
      id: 1,
      title: 'últimas Empresas',
      description: 'Abaixo há uma lista com as últimas empresas em que trabalhei e que me proporcionaram um crescimento profissional durante esses anos de experiência na área.',
      items: [
        {
          id: 1,
          type: 'JobList',
          value: [
            {
              id: 1,
              image: 'https://ev.contem1gmagic.com.br/img/topo-login.png',
              title: 'Contem1g Magic',
              initial: '31-08-2017',
              end: null,
              description: 'Trabalhei prestando manutenção em um sistema legado, feito em PHP. E ao mesmo tempo desenvolvi um sistema novo de BI onde o usuário podia criar gráficos e páginas de métricas que posteriormente seriam exibidas para seus clientes. Este sistemas foi desenvolvido em PHP, usando Laravel. No front-end foi utilizado VueJS 2.x com Bootstrap. Tudo feito com testes unitários e bem documentado, ganhando nota A no Codacy.',
            },
            {
              id: 2,
              image: 'http://bits.abras.com.br/img/hotsite/32/logo.png',
              title: 'R-Dias Acessoria p/ Varejo',
              initial: '04-02-2016',
              end: '25-08-2017',
              description: 'Nesta empresa eu prestei serviço dando manutenção em um sistema legado em conjunto ao desenvolvimento e migração para um novo. O sistema novo foi feito em PHP, utilizando Laravel e Lumen. O sistema Web rodava encima de Laravel com Angular no front-end. E o aplicativo mobile fazia sua comunicação por meio de uma API feita com Lumen. Meu papel na API foi de estrutrar e desenvolvê-la do zero.',
            },
            {
              id: 3,
              image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_Workana.png',
              title: 'Workana (Freelancer)',
              initial: '23-02-2015',
              end: null,
              description: 'Adquiri diversos clientes por meio desta plataforma e desenvolvi também os mais diversos tipos de projetos, desde um sistema para controle de imobiliaras, até um sistema de coaching para concursos. Os sistemas foram feitos sempre com as tecnologias que mais atendiam as necessidades dos clientes, variando de PHP a Elixir no back-end, e de Angular a React no front-end. Sempre desenvolvidos com código limpo e testes unitários.',
            },
          ],
        },
      ],
    },
  ],
};

const eduk = {
  id: 4,
  title: 'Ensino',
  containers: [
    {
      id: 1,
      title: 'Apenas Meu Histórico Educacional',
      description: 'Nesta sessão você encontra meu histórico educacional baseado em instituições de ensino técnico e superior, desconsiderando assim livros, artigos e cursos online que eu possa ter feito de forma auto-didata.',
      items: [
        {
          id: 1,
          type: 'StudyList',
          value: [
            {
              id: 1,
              image: 'https://d0.awsstatic.com/logos/customers/Customer%20Success%20Homepage%20Tiles/Anhanguera.png',
              title: 'Universidade Anhanguera',
              subtitle: 'Tecnologo em Analise e Desenvolvimento de Sistemas',
              initial: '30-06-2016',
              end: '31-12-2018',
              description: 'Curso de ensino superior focado no desenvolvimento de softwares para o mercado de trabalho. Curta duração e semi-presencial, possui apenas o básico para inciar o aluno ao mundo do desenvolvimento de softwares.',
            },
            {
              id: 2,
              image: 'http://etecaruja.com.br/img/logo-etec.png',
              title: 'ETEC Basilides de Godoy',
              subtitle: 'Programação e Informática',
              initial: '30-06-2009',
              end: '31-12-2010',
              description: 'Este é um curso técnico/profissionalizando com foco na entrada rápida no mercado de trabalho. Curso de tempo integral durante todos os dias úteis da semana com foco principal no ensino de desenvolvimento para Desktops.',
            },
          ],
        },
      ],
    },
  ],
};

const contact = {
  id: 5,
  title: 'Contate-Me',
  containers: [
    {
      id: 1,
      title: 'Vamos Manter Contato',
      description: 'Use os contatos disponíveis nesta sessão para me encontrar a qualquer momento, ficarei feliz em responder algumas perguntas!',
      items: [
        {
          id: 1,
          type: 'ContactList',
          value: [
            { id: 1, icon: 'address card', color: 'red', title: 'Endereço', value: 'São Paulo - SP' },
            { id: 2, icon: 'whatsapp', color: 'yellow', title: 'WhatsApp', value: '+55 11 95273 6102' },
            { id: 3, icon: 'mail outline', color: 'purple', title: 'E-mail de Contato', value: 'contato@akamuraasai.work' },
            {
              id: 4,
              icon: 'external',
              color: 'blue',
              title: 'Redes Sociais',
              value: social,
            },
          ],
        },
      ],
    },
  ],
};

const blog = {
  id: 6,
  title: 'Blog',
  containers: [
    {
      id: 1,
      title: 'Novidades & Coisas Assim',
      description: 'Aqui você encontrará alguns artigos sobre coisas de meu interesse, ou mesmo pequenas aulas ensinando como chegar em determinado resultado de forma eficiênte com alguma técnologia que eu esteja utilizando no momento. Enjoy! ;)',
      items: [
        {
          id: 1,
          type: 'PostList',
          value: [
            {
              id: 1,
              image: 'http://via.placeholder.com/450x350',
              title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: '30/Set',
              description: 'Elliot is a sound engineer living in Nashville\n' +
              'who enjoys playing guitar and hanging with his cat.',
            },
            {
              id: 2,
              image: 'http://via.placeholder.com/450x350',
              title: 'Lorem ipsum dolor sit amet',
              date: '01/Out',
              description: 'Elliot is a sound engineer living in Nashville\n' +
              'who enjoys playing guitar and hanging with his cat.',
            },
          ],
        },
      ],
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const INITIAL_RESUME = {
  name: 'Jonathan Willian',
  social,
  sections: [
    about,
    skills,
    jobs,
    eduk,
    contact,
    blog,
  ],
};
