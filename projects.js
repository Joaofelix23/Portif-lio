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
        contexto: "A dor do cliente era a baixa movimentação e o subaproveitamento do espaço durante os dias de semana (especialmente às quartas-feiras), além da dificuldade em atrair um público novo e qualificado de forma recorrente[cite: 5].",
        publico: "Mulheres que buscam momentos de lazer, conexão e entretenimento diferenciado[cite: 5].",
        estrategia: "Como solução, criamos a 'Noite das Mulheres': uma experiência all-inclusive com oficina de pintura em taças, música e ambiente acolhedor. O projeto solucionou a baixa ocupação convertendo o dia de menor movimento em um sucesso absoluto de público, tornando-se um evento-chave fixo do estabelecimento com altas taxas de recompra e pedidos constantes por novas edições[cite: 5].",
        participacao: "Concepção da experiência, curadoria dos materiais, atendimento, gestão da dinâmica e gestão completa de conteúdo e redes sociais[cite: 5].",
        acoes: [
          "Desenvolvimento de calendários editoriais e estratégias de redes sociais para divulgação[cite: 5]",
          "Acompanhamento contínuo de métricas, alcance e engajamento[cite: 5]",
          "Estruturação da experiência all-inclusive com kits personalizados[cite: 5]",
          "Gestão de reservas e manutenção de edições recorrentes ao longo do ano[cite: 5]"
        ],
        formatos: ["Experiência Presencial", "Calendário Editorial", "Stories e Reels"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel 1ª Edição ↗", url: "https://www.instagram.com/reel/DQuHNK-DYhn/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" },
          { rotulo: "Ver Reel de Edição Recorrente ↗", url: "https://www.instagram.com/reel/DRaj61Vjy3v/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Satisfação", valor: "100%", unidade: "", nota: "Taxa de aprovação do público[cite: 5]" },
          { indicador: "Novos Clientes", valor: "65%", unidade: "", nota: "Público inédito no Namata[cite: 5]" },
          { indicador: "Avaliações", valor: "5", unidade: "estrelas", nota: "Média máxima no Google[cite: 5]" },
          { indicador: "Faturamento (Quarta)", valor: "R$ 13.5", unidade: "mil", nota: "Comparado a R$ 0–1.5k habitual[cite: 5]" }
        ]
      },
      {
        id: "esquenta-nacopa",
        titulo: "Esquenta Nacopa",
        descricao: "Aquecimento estratégico de 3 dias para gerar expectativa e preparar o público para a Copa do Mundo.",
        capa: "img/Esquenta.jpg",
        contexto: "Transformar a semana que antecede o torneio em um evento próprio, exibindo as reprises dos 3 últimos títulos do Brasil em Copas de terça a quinta, com suporte de planejamento editorial nas redes sociais[cite: 5].",
        publico: "Frequentadores do espaço e amantes de futebol em busca de entretenimento e aquecimento para o mundial[cite: 5].",
        estrategia: "Criação de aquecimento emocional através de exibições históricas e campanhas editoriais orgânicas focadas em atrair fluxo antecipado para o restaurante[cite: 5].",
        participacao: "Planejamento de pauta, calendários editoriais, acompanhamento de métricas e operação de conteúdo[cite: 5].",
        acoes: [
          "Criação e execução de calendário editorial para redes sociais[cite: 5]",
          "Exibição de reprises históricas dos títulos do Brasil[cite: 5]",
          "Monitoramento de alcance e conversão de público[cite: 5]"
        ],
        formatos: ["Calendário Editorial", "Vídeos para Redes Sociais", "Stories"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Esquenta NaCopa ↗", url: "https://www.instagram.com/reel/DZFiu4ARqdo/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Faturamento Diário", valor: "R$ 5-15", unidade: "mil", nota: "Média durante o período de esquenta[cite: 5]" },
          { indicador: "Conversão", valor: "Direta", unidade: "", nota: "Público do esquenta lotou os jogos oficiais[cite: 5]" }
        ]
      },
      {
        id: "nacopa",
        titulo: "Nacopa",
        descricao: "Cobertura completa, gestão de redes e plataforma digital interativa para os jogos da Copa do Mundo no Namata.",
        capa: "img/Nacopa.jpg",
        contexto: "Posicionar o Namata como o principal ponto de encontro da região para assistir aos jogos da Seleção Brasileira durante o torneio, mantendo forte presença digital[cite: 5].",
        publico: "Torcedores e público geral em busca de uma experiência completa de transmissão de futebol com alta qualidade[cite: 5].",
        estrategia: "Diferenciação estrutural com telão de destaque, lançamento de site dedicado com tabela e pontuações ao vivo, aliado a uma forte estratégia de redes sociais e calendários editoriais diários[cite: 5].",
        participacao: "Gestão de redes sociais, acompanhamento de métricas de alcance, desenvolvimento de plataforma digital e coordenação de divulgação[cite: 5].",
        acoes: [
          "Desenvolvimento de calendário editorial e cobertura em tempo real[cite: 5]",
          "Lançamento do site oficial da campanha (nacopa-namata.vercel.app)[cite: 5]",
          "Implementação de game de pontuação e painel de horários/jogos[cite: 5]"
        ],
        formatos: ["Plataforma Web / Site", "Redes Sociais", "Transmissão ao Vivo"],
        galeria: [],
        conteudos: [
          { rotulo: "Acessar Site NaCopa ↗", url: "https://nacopa-namata.vercel.app/" },
          { rotulo: "Ver Reel NaCopa ↗", url: "https://www.instagram.com/reel/DZqh3nrRvH4/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Faturamento Diário", valor: "R$ 5-35", unidade: "mil", nota: "Média durante os dias de jogos da Copa[cite: 5]" },
          { indicador: "Lotação", valor: "100%", unidade: "", nota: "Casa cheia superando a forte concorrência local[cite: 5]" }
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
        capa: "img/Sorofolia.jpg",
        contexto: "Gerenciar a expansão anual de público de um festival de grande porte sem perder o controle de custos, prazos e eficiência operacional[cite: 5].",
        publico: "Público de grandes festivais de música e entretenimento na região[cite: 5].",
        estrategia: "Planejamento logístico rigoroso, definição de layout e coordenação integrada de equipes de montagem e bar sob alta pressão[cite: 5].",
        participacao: "Coordenação da operação do bar, equipes, montagem e desmontagem, além de definição de layout e mapa[cite: 5].",
        acoes: [
          "Coordenação de equipes, montagem e desmontagem[cite: 5]",
          "Gestão direta do fluxo e operação de bar[cite: 5]"
        ],
        formatos: ["Grandes Festivais", "Operação de Bar", "Gestão de Logística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Vídeo do Sorofolia ↗", url: "https://www.instagram.com/reel/DGrchYmvCfh/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" },
          { rotulo: "Ver Cobertura do Festival ↗", url: "https://www.instagram.com/reel/DUzSpjUjNtq/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Edição 2024", valor: "7 mil", unidade: "pessoas", nota: "Base de comparação inicial[cite: 5]" },
          { indicador: "Edição 2025", valor: "10 mil", unidade: "pessoas", nota: "Crescimento de público[cite: 5]" },
          { indicador: "Edição 2026", valor: "12 mil+", unidade: "pessoas", nota: "Escala consolidada[cite: 5]" }
        ]
      },
      {
        id: "luau-do-armandinho",
        titulo: "Luau do Armandinho",
        descricao: "Coordenação completa de operações de bar, equipes e infraestrutura em evento de grande porte.",
        capa: "img/Luaucapa.jpg",
        contexto: "Garantir o atendimento ágil e o controle rigoroso de estoque e suprimentos em um evento praiano de grande escala[cite: 5].",
        publico: "Público amante de shows e grandes experiências musicais[cite: 5].",
        estrategia: "Alinhamento operacional com fornecedores e divisão tática de equipes de atendimento para eliminar gargalos de fluxo[cite: 5].",
        participacao: "Coordenação da operação de bar, gestão de equipes de atendimento e logística de insumos[cite: 5].",
        acoes: [
          "Gestão direta da equipe de bar[cite: 5]",
          "Controle logístico de suprimentos durante o evento[cite: 5]"
        ],
        formatos: ["Grandes Shows", "Operação de Bar", "Gestão de Logística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Luau do Armandinho ↗", url: "https://www.instagram.com/reel/DVMdzfqDkzn/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Público Atendido", valor: "10 mil", unidade: "pessoas", nota: "2ª Edição[cite: 5]" },
          { indicador: "Gestão", valor: "Equipe", unidade: "alinhada", nota: "Zero ruptura de estoque no evento[cite: 5]" }
        ]
      },
      {
        id: "rodeo-lucky-friends",
        titulo: "Rodeo Lucky Friends",
        descricao: "Produção e gestão de riders técnico e de camarim na IX edição de evento de grande porte com 15 mil pessoas.",
        capa: "img/Rodeo.jpg",
        contexto: "Atender com exatidão as exigências contratuais de artistas e equipes técnicas sob prazos estritos nos bastidores[cite: 5].",
        publico: "Artistas, equipes técnicas e público do rodeio[cite: 5].",
        estrategia: "Negociação direta com fornecedores, mediação de demandas contratuais e controle logístico de camarins[cite: 5].",
        participacao: "Produção e gestão de rider técnico e de camarim[cite: 5].",
        acoes: [
          "Curadoria e atendimento de exigências de camarim[cite: 5]",
          "Gestão de fornecedores para suporte ao rider técnico[cite: 5]"
        ],
        formatos: ["Eventos Country", "Rodeio", "Produção Artística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Rodeo Lucky Friends ↗", url: "https://www.instagram.com/reel/Cyr0bO8sruC/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Público", valor: "15 mil", unidade: "pessoas", nota: "IX Edição[cite: 5]" },
          { indicador: "Entrega", valor: "100%", unidade: "contrato", nota: "Riders cumpridos sem desvios[cite: 5]" }
        ]
      },
      {
        id: "eventos-particulares",
        titulo: "Eventos Corporativos, Casamentos e Festas",
        descricao: "Atuação personalizada em eventos sociais e corporativos, garantindo excelência de ponta a ponta.",
        capa: "img/evento.jpg",
        contexto: "Gerenciar expectativas sensíveis de clientes corporativos e particulares, alinhando cronogramas e entregas sem margem para falhas[cite: 5].",
        publico: "Empresas, noivos e organizadores de festas e comemorações exclusivas[cite: 5].",
        estrategia: "Atendimento consultivo desde o briefing inicial até a supervisão in loco no dia do evento[cite: 5].",
        participacao: "Atendimento ponta a ponta, gestão de cronogramas, alinhamento de fornecedores e supervisão de equipe[cite: 5].",
        acoes: [
          "Briefing e alinhamento de expectativas com o cliente[cite: 5]",
          "Supervisão de montagem e condução no dia do evento[cite: 5]"
        ],
        formatos: ["Casamentos", "Eventos Corporativos", "Festas Particulares"],
        galeria: [],
        conteudos: [],
        resultados: [
          { indicador: "Acompanhamento", valor: "Ponta a ponta", unidade: "", nota: "Do contrato ao pós-evento[cite: 5]" }
        ]
      }
    ]
  }
];
