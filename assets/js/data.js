/*
  Este arquivo é o coração do portfólio.
  Para atualizar o site, edite os objetos abaixo.
  O JavaScript usa estes dados para montar competências, linha do tempo, projetos e serviços.
*/

const portfolioData = {
  filtros: [
    { id: "todos", nome: "Todos", icone: "✦" },
    { id: "projeto", nome: "Projetos", icone: "⚙" },
    { id: "experiencia", nome: "Experiência", icone: "▣" },
    { id: "pesquisa", nome: "Pesquisa", icone: "⌕" },
    { id: "ieee", nome: "IEEE", icone: "◈" },
    { id: "publicacao", nome: "Publicações", icone: "☰" },
    { id: "servico", nome: "Serviços", icone: "◆" }
  ],

  competencias: [
    {
      id: "energia-sistemas",
      nome: "Energia e Sistemas Elétricos",
      icone: "⚡",
      resumo: "Estudos, monitoramento, análise e documentação envolvendo sistemas elétricos, proteção, fluxo de potência e energia.",
      ferramentas: ["OpenDSS", "MATPOWER/MATLAB", "Elplek", "Grafana", "InfluxDB", "Modbus", "Excel"],
      evidencias: [
        "Monitoramento remoto de energia com Raspberry Pi e multimedidor",
        "Fluxo de potência com parque eólico acoplado ao sistema IEEE-14",
        "Estudos de proteção de sistemas elétricos de potência",
        "Projeto elétrico e levantamento de cargas para consultório",
        "Artigo sobre Índice de Maturidade de Transição Energética"
      ],
      relacionados: ["monitoramento-energia", "casa-nova-fluxo", "opendss-api", "imte", "consultorio-estetica", "protecao-sep"]
    },
    {
      id: "automacao-industrial",
      nome: "Automação Industrial",
      icone: "▧",
      resumo: "Apoio técnico em aplicações industriais, acionamentos, inversores, instrumentação e organização de soluções para chão de fábrica.",
      ferramentas: ["Rockwell Automation", "Inversores", "Soft-starter", "Motores elétricos", "Excel/VBA", "Documentação técnica"],
      evidencias: [
        "Atuação no Grupo JAV com soluções e arquiteturas Rockwell",
        "Suporte técnico em aplicações com inversores e componentes industriais",
        "Estudos de acionamentos elétricos com motores de indução",
        "Ideia de interface para parametrização e padronização técnica"
      ],
      relacionados: ["grupo-jav", "acionamentos-motor", "dashboard-comercial"]
    },
    {
      id: "dados-dashboards",
      nome: "Dados, Dashboards e APIs",
      icone: "▤",
      resumo: "Coleta, tratamento, visualização e disponibilização de dados técnicos para tomada de decisão.",
      ferramentas: ["Python", "Pandas", "Grafana", "InfluxDB", "Redis", "FastAPI", "Excel", "Power BI"],
      evidencias: [
        "Dashboards de energia no Grafana",
        "API com FastAPI e Redis para dados operacionais simulados",
        "Tratamento de indicadores para pesquisa de transição energética",
        "Ideia de dashboard para acompanhamento comercial e pós-venda técnica"
      ],
      relacionados: ["monitoramento-energia", "opendss-api", "imte", "dashboard-comercial"]
    },
    {
      id: "programacao-simulacao",
      nome: "Programação e Simulação",
      icone: "{ }",
      resumo: "Uso de programação para automatizar análises, simular sistemas e estruturar ferramentas técnicas.",
      ferramentas: ["Python", "MATLAB", "Octave", "OpenDSS", "FastAPI", "Git/GitHub", "VBA"],
      evidencias: [
        "Scripts Python para leitura Modbus e envio de dados",
        "Modelagem de fluxo de potência em MATLAB/Octave",
        "Emulação de rede com OpenDSS e API",
        "Processamento de sinais no NASA Space Apps"
      ],
      relacionados: ["monitoramento-energia", "casa-nova-fluxo", "opendss-api", "nasa-space-apps", "acionamentos-motor"]
    },
    {
      id: "pesquisa-aplicada",
      nome: "Pesquisa Aplicada",
      icone: "⌁",
      resumo: "Transformação de problemas técnicos em metodologia, análise, artigo, simulação e proposta de solução.",
      ferramentas: ["Metodologia científica", "Python", "Bases públicas", "Simulação", "Revisão bibliográfica", "LaTeX/Word"],
      evidencias: [
        "Artigo IMTE sobre transição energética no Território de Irecê",
        "Projeto de emulação de rede de distribuição com dados online",
        "Participação no NASA Space Apps com processamento sísmico",
        "Estudos de smart grids, VPPs e sistemas elétricos"
      ],
      relacionados: ["imte", "opendss-api", "nasa-space-apps", "casa-nova-fluxo"]
    },
    {
      id: "prototipagem-modelagem",
      nome: "Prototipagem e Modelagem",
      icone: "◫",
      resumo: "Modelagem, fabricação digital, impressão 3D, corte laser e materialização de ideias técnicas.",
      ferramentas: ["Impressão 3D", "Corte laser", "CAD", "Laboratório Maker", "Prototipagem rápida"],
      evidencias: [
        "Estágio no Laboratório Maker do SENAI CIMATEC",
        "Apoio a projetos acadêmicos com protótipos físicos",
        "Projeto Genius e atividades de fabricação digital",
        "Uso de recursos de modelagem e prototipagem para validação de ideias"
      ],
      relacionados: ["laboratorio-maker", "projeto-genius", "trackieeers"]
    },
    {
      id: "lideranca-ieee",
      nome: "Liderança Técnica e IEEE",
      icone: "◈",
      resumo: "Organização de projetos, eventos, equipes técnicas e iniciativas estudantis com impacto institucional.",
      ferramentas: ["Gestão de equipes", "Comunicação", "Eventos técnicos", "IEEE", "Planejamento", "Mentoria"],
      evidencias: [
        "Atuação no Ramo Estudantil IEEE CIMATEC",
        "Presidência e organização de iniciativas técnicas",
        "Projetos e publicações divulgados em canais IEEE",
        "Experiência em coordenação de pessoas e entregas"
      ],
      relacionados: ["ieee-cimatec", "pes-week", "noticia-i3r", "trackieeers"]
    },
    {
      id: "documentacao-comunicacao",
      nome: "Documentação e Comunicação Técnica",
      icone: "☷",
      resumo: "Capacidade de traduzir problemas técnicos em relatórios, apresentações, roteiros, documentação e comunicação executiva.",
      ferramentas: ["Relatórios", "Apresentações", "Canvas", "Word", "PowerPoint", "GitHub", "Dashboards"],
      evidencias: [
        "Documentação de trabalhos técnicos de engenharia elétrica",
        "Roteiros de apresentação para seminários e projetos",
        "Posts técnicos e comunicação profissional no LinkedIn",
        "Organização de entregáveis acadêmicos, técnicos e comerciais"
      ],
      relacionados: ["imte", "nasa-space-apps", "acionamentos-motor", "protecao-sep"]
    }
  ],

  projetos: [
    {
      id: "monitoramento-energia",
      titulo: "Monitoramento remoto de energia",
      ano: "2024",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: true,
      categorias: ["projeto", "energia", "dados", "programacao"],
      competencias: ["energia-sistemas", "dados-dashboards", "programacao-simulacao"],
      imagem: "assets/img/projetos/monitoramento-energia.svg",
      descricao: "Sistema para coleta de dados elétricos com Raspberry Pi, comunicação Modbus, InfluxDB Cloud e visualização em Grafana.",
      tecnologias: ["Raspberry Pi", "Python", "pymodbus", "InfluxDB", "Grafana", "RS-485"],
      evidencias: [
        "Leitura de grandezas elétricas em multimedidor via Modbus",
        "Envio dos dados para banco temporal",
        "Dashboard com indicadores de tensão, corrente, potência, energia e frequência",
        "Estrutura aplicável a monitoramento energético remoto"
      ],
      links: []
    },
    {
      id: "opendss-api",
      titulo: "Emulação de rede com OpenDSS, Redis e FastAPI",
      ano: "2026",
      tipo: "pesquisa",
      tipoNome: "Pesquisa",
      destaque: true,
      categorias: ["pesquisa", "projeto", "dados", "programacao", "energia"],
      competencias: ["energia-sistemas", "dados-dashboards", "programacao-simulacao", "pesquisa-aplicada"],
      imagem: "assets/img/projetos/opendss-api.svg",
      descricao: "Ambiente de emulação de rede de distribuição com disponibilização online de dados operativos para testes de smart grids e VPPs.",
      tecnologias: ["OpenDSS", "Python", "Redis", "FastAPI", "Uvicorn", "Ngrok"],
      evidencias: [
        "Fluxo producer → Redis → FastAPI",
        "Endpoint de dados operacionais com tensão, corrente, potência e frequência",
        "Estrutura pensada para testes de aplicações de smart grid",
        "Publicação temporária de API via túnel externo"
      ],
      links: []
    },
    {
      id: "imte",
      titulo: "Índice de Maturidade de Transição Energética",
      ano: "2026",
      tipo: "publicacao",
      tipoNome: "Publicação",
      destaque: true,
      categorias: ["publicacao", "pesquisa", "energia", "dados"],
      competencias: ["energia-sistemas", "dados-dashboards", "pesquisa-aplicada", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/imte.svg",
      descricao: "Construção de índice para avaliar maturidade de transição energética no Território de Identidade de Irecê, Bahia.",
      tecnologias: ["IBGE", "SIGA/MMGD", "Indicadores", "Normalização", "Análise territorial"],
      evidencias: [
        "Uso de bases públicas e indicadores socioeconômicos",
        "Cálculo de crescimento e ponderação territorial",
        "Redação científica e revisão para submissão",
        "Discussão sobre desigualdade, energia e desenvolvimento regional"
      ],
      links: []
    },
    {
      id: "nasa-space-apps",
      titulo: "NASA Space Apps — processamento sísmico",
      ano: "2024",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: true,
      categorias: ["projeto", "pesquisa", "dados", "programacao"],
      competencias: ["programacao-simulacao", "pesquisa-aplicada", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/nasa-space-apps.svg",
      descricao: "Ideia de pipeline para detecção e análise de sinais sísmicos usando processamento de sinais, Python, MATLAB e inteligência artificial.",
      tecnologias: ["Python", "MATLAB", "ObsPy", "Pandas", "NumPy", "Wavelet", "TCN"],
      evidencias: [
        "Participação no desafio NASA Space Apps em 2024",
        "Pipeline de aquisição, pré-processamento, análise e validação",
        "Uso de técnicas de processamento de sinais",
        "Proposta de aplicação com redes temporais convolucionais"
      ],
      links: []
    },
    {
      id: "casa-nova-fluxo",
      titulo: "Fluxo de potência — Parque eólico em Casa Nova",
      ano: "2025",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: false,
      categorias: ["projeto", "energia", "programacao"],
      competencias: ["energia-sistemas", "programacao-simulacao", "pesquisa-aplicada"],
      imagem: "assets/img/projetos/casa-nova.svg",
      descricao: "Estudo de fluxo de potência com aerogeradores acoplados a sistema de referência, usando MATLAB/Octave e MATPOWER.",
      tecnologias: ["MATLAB", "Octave", "MATPOWER", "Fluxo de potência", "IEEE-14"],
      evidencias: [
        "Modelagem de barras adicionais para representar geração eólica",
        "Análise de grandezas elétricas em regime permanente",
        "Integração de dados técnicos e simulação computacional"
      ],
      links: []
    },
    {
      id: "grupo-jav",
      titulo: "Atuação técnica com soluções Rockwell",
      ano: "2025–2026",
      tipo: "experiencia",
      tipoNome: "Experiência",
      destaque: false,
      categorias: ["experiencia", "automacao", "servico"],
      competencias: ["automacao-industrial", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/automacao.svg",
      descricao: "Atuação com vendas técnicas, arquiteturas industriais, suporte técnico, visitas e soluções relacionadas ao ecossistema Rockwell.",
      tecnologias: ["Rockwell Automation", "Inversores", "Arquiteturas industriais", "Suporte técnico"],
      evidencias: [
        "Contato com demandas reais de clientes industriais",
        "Apoio em especificação e entendimento de aplicações",
        "Comunicação entre necessidade comercial e solução técnica"
      ],
      links: []
    },
    {
      id: "laboratorio-maker",
      titulo: "Laboratório Maker — modelagem e prototipagem",
      ano: "2023",
      tipo: "experiencia",
      tipoNome: "Experiência",
      destaque: false,
      categorias: ["experiencia", "projeto", "prototipagem"],
      competencias: ["prototipagem-modelagem"],
      imagem: "assets/img/projetos/laboratorio-maker.svg",
      descricao: "Vivência com fabricação digital, prototipagem rápida, impressão 3D, corte laser e apoio a projetos acadêmicos.",
      tecnologias: ["Impressão 3D", "Corte laser", "CAD", "Prototipagem"],
      evidencias: [
        "Uso de ferramentas de fabricação digital",
        "Apoio à materialização de ideias e protótipos",
        "Contato com projetos multidisciplinares em ambiente maker"
      ],
      links: []
    },
    {
      id: "projeto-genius",
      titulo: "Projeto Genius",
      ano: "2023",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: false,
      categorias: ["projeto", "prototipagem", "programacao"],
      competencias: ["prototipagem-modelagem", "programacao-simulacao"],
      imagem: "assets/img/projetos/genius.svg",
      descricao: "Projeto acadêmico de prototipagem e lógica aplicada, útil para demonstrar integração entre criatividade, eletrônica e construção física.",
      tecnologias: ["Prototipagem", "Eletrônica", "Lógica", "Documentação"],
      evidencias: [
        "Integração entre ideia, montagem e validação",
        "Apoio à construção de protótipo funcional",
        "Aplicação de raciocínio lógico e eletrônica básica"
      ],
      links: []
    },
    {
      id: "trackieeers",
      titulo: "Trackieeers — seguidor solar",
      ano: "2023",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: false,
      categorias: ["projeto", "energia", "prototipagem", "ieee"],
      competencias: ["energia-sistemas", "prototipagem-modelagem", "lideranca-ieee"],
      imagem: "assets/img/projetos/trackieeers.svg",
      descricao: "Projeto de seguidor solar com foco em energia, prototipagem, controle e aplicação prática de conceitos de engenharia.",
      tecnologias: ["Energia solar", "Prototipagem", "Controle", "Eletrônica"],
      evidencias: [
        "Liderança em projeto técnico",
        "Integração entre energia, mecânica, sensores e controle",
        "Aplicação visual e didática de conceitos de geração solar"
      ],
      links: []
    },
    {
      id: "ieee-cimatec",
      titulo: "Ramo Estudantil IEEE CIMATEC",
      ano: "2021–2025",
      tipo: "ieee",
      tipoNome: "IEEE",
      destaque: false,
      categorias: ["ieee", "experiencia", "lideranca"],
      competencias: ["lideranca-ieee", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/ieee.svg",
      descricao: "Atuação em liderança estudantil, projetos, organização de eventos e iniciativas técnicas dentro do IEEE CIMATEC.",
      tecnologias: ["Gestão", "Eventos", "Liderança", "Comunicação técnica"],
      evidencias: [
        "Participação em diferentes capítulos e cargos de liderança",
        "Organização de eventos e projetos técnicos",
        "Reconhecimentos e atuação voluntária com impacto acadêmico"
      ],
      links: []
    },
    {
      id: "pes-week",
      titulo: "PES WEEK e eventos técnicos IEEE",
      ano: "2022–2024",
      tipo: "ieee",
      tipoNome: "IEEE",
      destaque: false,
      categorias: ["ieee", "projeto", "lideranca"],
      competencias: ["lideranca-ieee", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/pes-week.svg",
      descricao: "Organização de iniciativas voltadas a energia, tecnologia, formação de alunos e aproximação com temas técnicos.",
      tecnologias: ["Planejamento", "Eventos", "Energia", "Comunicação"],
      evidencias: [
        "Estruturação de atividades técnicas",
        "Coordenação de pessoas e entregas",
        "Comunicação com público acadêmico e profissional"
      ],
      links: []
    },
    {
      id: "noticia-i3r",
      titulo: "Projeto divulgado no IEEE I3R / R9 LATAM",
      ano: "2026",
      tipo: "ieee",
      tipoNome: "IEEE",
      destaque: false,
      categorias: ["ieee", "publicacao", "projeto"],
      competencias: ["lideranca-ieee", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/i3r.svg",
      descricao: "Projeto idealizado por Arley e desenvolvido com colega IEEE, divulgado em noticiário regional do IEEE.",
      tecnologias: ["IEEE", "Divulgação técnica", "Projeto colaborativo"],
      evidencias: [
        "Reconhecimento em canal de comunicação IEEE",
        "Idealização e desenvolvimento colaborativo",
        "Demonstração de iniciativa e comunicação técnica"
      ],
      links: []
    },
    {
      id: "protecao-sep",
      titulo: "Estudos de proteção de sistemas elétricos",
      ano: "2026",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: false,
      categorias: ["projeto", "energia", "programacao"],
      competencias: ["energia-sistemas", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/protecao-sep.svg",
      descricao: "Análise de coordenação de proteção, ajustes 50/51 e interpretação de curvas em sistemas elétricos de potência.",
      tecnologias: ["Elplek", "Relés 50/51", "Curvas de proteção", "SEP"],
      evidencias: [
        "Cálculo e validação de ajustes de proteção",
        "Análise de correntes de curto-circuito",
        "Organização de critérios técnicos de avaliação"
      ],
      links: []
    },
    {
      id: "acionamentos-motor",
      titulo: "Simulação de motor de indução e acionamentos",
      ano: "2026",
      tipo: "projeto",
      tipoNome: "Projeto",
      destaque: false,
      categorias: ["projeto", "automacao", "programacao", "energia"],
      competencias: ["automacao-industrial", "programacao-simulacao", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/acionamentos.svg",
      descricao: "Comparação entre partida direta, soft-starter e controle V/f para motor de indução aplicado a carga do tipo compressor.",
      tecnologias: ["Motores de indução", "Soft-starter", "V/f", "Simulação", "Python/MATLAB"],
      evidencias: [
        "Curvas torque × velocidade, torque × corrente e corrente × velocidade",
        "Comparação entre métodos de acionamento",
        "Documentação técnica e análise de critérios de escolha"
      ],
      links: []
    },
    {
      id: "consultorio-estetica",
      titulo: "Levantamento elétrico de consultório de estética",
      ano: "2026",
      tipo: "servico",
      tipoNome: "Serviço / Estudo",
      destaque: false,
      categorias: ["servico", "energia", "projeto"],
      competencias: ["energia-sistemas", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/consultorio.svg",
      descricao: "Levantamento de cargas, divisão de circuitos e organização preliminar de pontos elétricos para consultório de estética.",
      tecnologias: ["NBR 5410", "Circuitos", "Tomadas", "Iluminação", "Proteções"],
      evidencias: [
        "Organização de pontos de tomada por ambiente",
        "Separação de circuitos de iluminação, tomadas e cargas específicas",
        "Consideração de equipamentos atuais e expansão futura"
      ],
      links: []
    },
    {
      id: "dashboard-comercial",
      titulo: "Ideia de dashboard e automação de acompanhamento comercial",
      ano: "2026",
      tipo: "servico",
      tipoNome: "Solução interna",
      destaque: false,
      categorias: ["servico", "dados", "automacao"],
      competencias: ["dados-dashboards", "automacao-industrial", "documentacao-comunicacao"],
      imagem: "assets/img/projetos/dashboard-comercial.svg",
      descricao: "Proposta de base em Excel, dashboards e avisos no Teams para acompanhar pedidos, etapas, prazos e follow-ups comerciais.",
      tecnologias: ["Excel", "Power BI", "Teams", "Automação", "Indicadores"],
      evidencias: [
        "Pensamento sistêmico para processo comercial técnico",
        "Proposta de cards de preenchimento para vendedores",
        "Geração de alertas por etapa, prazo e pendência"
      ],
      links: []
    }
  ],

  servicos: [
    {
      nome: "Dashboards técnicos e indicadores",
      icone: "▤",
      descricao: "Estruturação de bases, tratamento de dados e painéis para energia, manutenção, operação ou acompanhamento comercial.",
      entregas: ["Excel estruturado", "Power BI ou Grafana", "Indicadores", "Documentação de uso"]
    },
    {
      nome: "Estudos e documentação elétrica",
      icone: "⚡",
      descricao: "Apoio em levantamento de cargas, organização de circuitos, memoriais, relatórios e documentação técnica preliminar.",
      entregas: ["Levantamento técnico", "Divisão de circuitos", "Memorial", "Relatório organizado"]
    },
    {
      nome: "Automação e suporte técnico",
      icone: "▧",
      descricao: "Apoio em aplicações com motores, inversores, parametrização básica, organização de dados técnicos e materiais de suporte.",
      entregas: ["Análise da aplicação", "Lista de parâmetros", "Material de apoio", "Orientação técnica"]
    },
    {
      nome: "Simulações e trabalhos acadêmicos técnicos",
      icone: "{ }",
      descricao: "Apoio na estruturação de simulações, códigos, relatórios, apresentações e validação dos resultados técnicos.",
      entregas: ["Código comentado", "Relatório", "Gráficos", "Roteiro de apresentação"]
    },
    {
      nome: "Pesquisa aplicada e artigos",
      icone: "⌕",
      descricao: "Organização de metodologia, bases de dados, indicadores, gráficos, discussão técnica e revisão de texto acadêmico.",
      entregas: ["Metodologia", "Análise de dados", "Figuras", "Texto revisado"]
    },
    {
      nome: "Portfólio técnico e comunicação profissional",
      icone: "☷",
      descricao: "Apoio para transformar projetos técnicos em narrativas, apresentações, posts, páginas e documentação visual.",
      entregas: ["Storytelling", "Slides", "Post técnico", "Página de projeto"]
    }
  ]
};
