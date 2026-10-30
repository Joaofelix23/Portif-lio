/* ==========================================================
   JFELIX® — DADOS DOS PROJETOS E EVENTOS
   ========================================================== */

const CONTATO = {
  email: "Joao.vframalho@senacsp.edu.br",
  instagram: "https://instagram.com/jfeelix_",
  whatsapp: "https://wa.me/5515998057042",
  linkedin: "https://www.linkedin.com/in/jfeelix/"
};

const PROJETOS = [
  {
    cliente: "Namata",
    resumo: "Campanhas estratégicas e gestão direta de redes sociais (calendários editoriais, acompanhamento de métricas e alcance) para impulsionar o posicionamento e faturamento do bar e restaurante.",
    campanhas: [
      {
        id: "noite-das-mulheres",
        titulo: "Noite das Mulheres",
        descricao: "Experiência exclusiva e evento-chave recorrente voltado ao público feminino, unindo arte, socialização e gastronomia.",
        capa: "img/capamulheres.jpg",
        contexto: "A dor do cliente era a baixa movimentação e o subaproveitamento do espaço durante os dias de semana (especialmente às quartas-feiras), além da dificuldade em atrair um público novo e qualificado de forma recorrente.",
        publico: "Mulheres que buscam momentos de lazer, conexão e entretenimento diferenciado.",
        estrategia: "Como solução, criamos a 'Noite das Mulheres': uma experiência all-inclusive com oficina de pintura em taças, música e ambiente acolhedor. O projeto solucionou a baixa ocupação convertendo o dia de menor movimento em um sucesso absoluto de público, tornando-se um evento-chave fixo do estabelecimento com altas taxas de recompra e pedidos constantes por novas edições.",
        participacao: "Concepção da experiência, curadoria dos materiais, atendimento, gestão da dinâmica e gestão completa de conteúdo e redes sociais.",
        acoes: [
          "Desenvolvimento de calendários editoriais e estratégias de redes sociais para divulgação",
          "Acompanhamento contínuo de métricas, alcance e engajamento",
          "Estruturação da experiência all-inclusive com kits personalizados",
          "Gestão de reservas e manutenção de edições recorrentes ao longo do ano"
        ],
        formatos: ["Experiência Presencial", "Calendário Editorial", "Stories e Reels"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel 1ª Edição ↗", url: "https://www.instagram.com/reel/DQuHNK-DYhn/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" },
          { rotulo: "Ver Reel de Edição Recorrente ↗", url: "https://www.instagram.com/reel/DRaj61Vjy3v/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Satisfação", valor: "100%", unidade: "", nota: "Taxa de aprovação do público" },
          { indicador: "Novos Clientes", valor: "65%", unidade: "", nota: "Público inédito no Namata" },
          { indicador: "Avaliações", valor: "5", unidade: "estrelas", nota: "Média máxima no Google" },
          { indicador: "Faturamento (Quarta)", valor: "R$ 13.5", unidade: "mil", nota: "Comparado a R$ 0–1.5k habitual" }
        ]
      },
      {
        id: "esquenta-nacopa",
        titulo: "Esquenta Nacopa",
        descricao: "Aquecimento estratégico de 3 dias para gerar expectativa e preparar o público para a Copa do Mundo.",
        capa: "",
        contexto: "Transformar a semana que antecede o torneio em um evento próprio, exibindo as reprises dos 3 últimos títulos do Brasil em Copas de terça a quinta, com suporte de planejamento editorial nas redes sociais.",
        publico: "Frequentadores do espaço e amantes de futebol em busca de entretenimento e aquecimento para o mundial.",
        estrategia: "Criação de aquecimento emocional através de exibições históricas e campanhas editoriais orgânicas focadas em atrair fluxo antecipado para o restaurante.",
        participacao: "Planejamento de pauta, calendários editoriais, acompanhamento de métricas e operação de conteúdo.",
        acoes: [
          "Criação e execução de calendário editorial para redes sociais",
          "Exibição de reprises históricas dos títulos do Brasil",
          "Monitoramento de alcance e conversão de público"
        ],
        formatos: ["Calendário Editorial", "Vídeos para Redes Sociais", "Stories"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Esquenta NaCopa ↗", url: "https://www.instagram.com/reel/DZFiu4ARqdo/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Faturamento Diário", valor: "R$ 5-15", unidade: "mil", nota: "Média durante o período de esquenta" },
          { indicador: "Conversão", valor: "Direta", unidade: "", nota: "Público do esquenta lotou os jogos oficiais" }
        ]
      },
      {
        id: "nacopa",
        titulo: "Nacopa",
        descricao: "Cobertura completa, gestão de redes e plataforma digital interativa para os jogos da Copa do Mundo no Namata.",
        capa: "",
        contexto: "Posicionar o Namata como o principal ponto de encontro da região para assistir aos jogos da Seleção Brasileira durante o torneio, mantendo forte presença digital.",
        publico: "Torcedores e público geral em busca de uma experiência completa de transmissão de futebol com alta qualidade.",
        estrategia: "Diferenciação estrutural com telão de destaque, lançamento de site dedicado com tabela e pontuações ao vivo, aliado a uma forte estratégia de redes sociais e calendários editoriais diários.",
        participacao: "Gestão de redes sociais, acompanhamento de métricas de alcance, desenvolvimento de plataforma digital e coordenação de divulgação.",
        acoes: [
          "Desenvolvimento de calendário editorial e cobertura em tempo real",
          "Lançamento do site oficial da campanha (nacopa-namata.vercel.app)",
          "Implementação de game de pontuação e painel de horários/jogos"
        ],
        formatos: ["Plataforma Web / Site", "Redes Sociais", "Transmissão ao Vivo"],
        galeria: [],
        conteudos: [
          { rotulo: "Acessar Site NaCopa ↗", url: "https://nacopa-namata.vercel.app/" },
          { rotulo: "Ver Reel NaCopa ↗", url: "https://www.instagram.com/reel/DZqh3nrRvH4/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Faturamento Diário", valor: "R$ 5-35", unidade: "mil", nota: "Média durante os dias de jogos da Copa" },
          { indicador: "Lotação", valor: "100%", unidade: "", nota: "Casa cheia superando a forte concorrência local" }
        ]
      }
    ]
  },
  {
    cliente: "Eventos e Festivais",
    resumo: "Atuação em grandes festivais, rodeios e eventos particulares com foco em operação, logística e excelência na entrega.",
    campanhas: [
      {
        id: "sorofolia",
        titulo: "Festival Sorofolia",
        descricao: "Coordenação completa de operações de bar, equipes e infraestrutura em um dos maiores festivais da região.",
        capa: "",
        contexto: "Gestão de grande fluxo de público com eficiência operacional, mantendo alto padrão de atendimento, agilidade e excelência na entrega do evento.",
        publico: "Público de grandes festivais de música e entretenimento (crescimento constante até atingir mais de 12 mil pessoas).",
        estrategia: "Planejamento logístico rigoroso, definição de layout, mapa do evento e coordenação integrada de equipes de montagem e bar.",
        participacao: "Coordenação da operação do bar, equipes, montagem e desmontagem (pré e pós-evento), além de definição de layout e mapa.",
        acoes: [
          "Definição de layout e mapeamento operacional do evento",
          "Coordenação de montagem e desmontagem (pré e pós-evento)",
          "Gestão direta da operação de bar e equipes de atendimento"
        ],
        formatos: ["Grandes Festivais", "Operação de Bar", "Gestão de Logística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Vídeo do Sorofolia ↗", url: "https://www.instagram.com/reel/DGrchYmvCfh/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" },
          { rotulo: "Ver Cobertura do Festival ↗", url: "https://www.instagram.com/reel/DUzSpjUjNtq/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Edição 2024", valor: "7 mil+", unidade: "pessoas", nota: "Sorofolia" },
          { indicador: "Edição 2025", valor: "10 mil+", unidade: "pessoas", nota: "Sorofolia" },
          { indicador: "Edição 2026", valor: "12 mil+", unidade: "pessoas", nota: "Sorofolia" }
        ]
      },
      {
        id: "luau-do-armandinho",
        titulo: "Luau do Armandinho",
        descricao: "Coordenação completa de operações de bar, equipes e infraestrutura em evento de grande porte.",
        capa: "img/Luaucapa.jpg",
        contexto: "Gestão eficiente de grande fluxo de público em ambiente de festival de praia/luau, assegurando excelência operacional e agilidade.",
        publico: "Público amante de shows e grandes experiências musicais (10.000 pessoas).",
        estrategia: "Planejamento logístico detalhado, definição de layout, mapa do evento e coordenação integrada de equipes.",
        participacao: "Coordenação da operação do bar, equipes, montagem e desmontagem (pré e pós-evento), além de definição de layout e mapa.",
        acoes: [
          "Definição de layout e mapeamento operacional do evento",
          "Coordenação de montagem e desmontagem (pré e pós-evento)",
          "Gestão direta da operação de bar e equipes de atendimento"
        ],
        formatos: ["Grandes Shows", "Operação de Bar", "Gestão de Logística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Luau do Armandinho ↗", url: "https://www.instagram.com/reel/DVMdzfqDkzn/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Público", valor: "10 mil", unidade: "pessoas", nota: "Luau do Armandinho" },
          { indicador: "Operação", valor: "100%", unidade: "", nota: "Eficiência e agilidade no atendimento" }
        ]
      },
      {
        id: "rodeo-lucky-friends",
        titulo: "Rodeo Lucky Friends",
        descricao: "Produção e gestão de riders técnico e de camarim na IX edição de evento de grande porte com 15 mil pessoas.",
        capa: "",
        contexto: "Garantir a retaguarda técnica e de hospitalidade artística com precisão e atendimento de alto nível na IX edição do rodeio.",
        publico: "Artistas, equipes técnicas e público do rodeio (15 mil pessoas).",
        estrategia: "Alinhamento minucioso de exigências técnicas, organização de camarins e suporte integral à produção artística.",
        participacao: "Produção e gestão de rider técnico e de camarim.",
        acoes: [
          "Gestão de rider técnico e atendimento a exigências de camarim na IX edição",
          "Suporte direto à produção artística e operacional do evento"
        ],
        formatos: ["Eventos Country", "Rodeio", "Produção Artística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Rodeo Lucky Friends ↗", url: "https://www.instagram.com/reel/Cyr0bO8sruC/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Público", valor: "15 mil", unidade: "pessoas", nota: "Rodeo Lucky Friends (IX Edição)" },
          { indicador: "Operação", valor: "100%", unidade: "", nota: "Cumprimento rigoroso de riders e exigências" }
        ]
      },
      {
        id: "eventos-particulares",
        titulo: "Eventos Corporativos, Casamentos e Festas",
        descricao: "Atuação personalizada em eventos sociais e corporativos, garantindo excelência de ponta a ponta.",
        capa: "",
        contexto: "Entrega de experiências memoráveis alinhadas com as expectativas e objetivos de cada cliente particular ou corporativo.",
        publico: "Empresas, noivos e organizadores de festas e comemorações exclusivas.",
        estrategia: "Acompanhamento integral desde a contratação inicial, desenvolvimento do projeto, execução impecável e fechamento pós-evento.",
        participacao: "Atuação completa da contratação ao desenvolvimento, execução e pós-evento.",
        acoes: [
          "Planejamento estratégico e alinhamento de expectativas",
          "Execução e supervisão no dia do evento",
          "Gestão de fornecedores e suporte pós-evento"
        ],
        formatos: ["Casamentos", "Eventos Corporativos", "Festas Particulares"],
        galeria: [],
        conteudos: [],
        resultados: [
          { indicador: "Processo", valor: "Pontas", unidade: "unidas", nota: "Da contratação ao pós-evento" }
        ]
      }
    ]
  }
];
