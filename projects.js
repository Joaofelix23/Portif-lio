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
    resumo: "Campanhas estratégicas desenvolvidas para impulsionar o posicionamento, engajamento e faturamento do bar e restaurante.",
    campanhas: [
      {
        id: "noite-das-mulheres",
        titulo: "Noite das Mulheres",
        descricao: "Experiência exclusiva e evento-chave recorrente voltado ao público feminino, unindo arte, socialização e gastronomia.",
        capa: "",
        contexto: "Criar uma noite temática e exclusiva para o público feminino, incentivando reservas individuais e em grupo. O evento se tornou um dos pilares chave do estabelecimento, sendo realizado até os dias de hoje com diversas edições no ano e constante pedido de bis por clientes novas e recorrentes.",
        publico: "Mulheres que buscam momentos de lazer, conexão e entretenimento diferenciado.",
        estrategia: "Experiência all-inclusive com oficina de pintura em taças, acompanhada de boa música e ambiente acolhedor, fortalecendo a comunidade e o fluxo constante em dias de menor movimento.",
        participacao: "Concepção da experiência, curadoria dos materiais, atendimento e gestão da dinâmica do evento.",
        acoes: [
          "Planejamento e estruturação da experiência all-inclusive",
          "Montagem de kits personalizados (taça, mais de 20 cores, selante, pincéis, pano e ecobag)",
          "Gestão de reservas e atendimento personalizado",
          "Manutenção do calendário de edições recorrentes ao longo do ano"
        ],
        formatos: ["Experiência Presencial", "Divulgação em Redes Sociais", "Stories e Reels"],
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
        contexto: "Transformar a semana que antecede o torneio em um evento próprio, exibindo as reprises dos 3 últimos títulos do Brasil em Copas de terça a quinta.",
        publico: "Frequentadores do espaço e amantes de futebol em busca de entretenimento e aquecimento para o mundial.",
        estrategia: "Criar um aquecimento emocional através de exibições históricas e produção de conteúdo orgânico focado em atrair fluxo antecipado para o restaurante.",
        participacao: "Planejamento de pauta, estratégia de divulgação orgânica e operação de conteúdo.",
        acoes: [
          "Exibição de reprises históricas dos títulos do Brasil",
          "Campanha de vídeos orgânicos de aquecimento",
          "Atração de fluxo antecipado para o estabelecimento"
        ],
        formatos: ["Vídeos para Redes Sociais", "Cobertura Ao Vivo", "Stories"],
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
        descricao: "Cobertura completa e plataforma digital interativa para os jogos da Copa do Mundo no Namata.",
        capa: "",
        contexto: "Posicionar o Namata como o principal ponto de encontro da região para assistir aos jogos da Seleção Brasileira durante o torneio.",
        publico: "Torcedores e público geral em busca de uma experiência completa de transmissão de futebol com alta qualidade.",
        estrategia: "Diferenciação estrutural com telão de destaque, combinado com o lançamento de um site dedicado com tabela de jogos, pontuações ao vivo e game interativo para manter o engajamento digital.",
        participacao: "Desenvolvimento de plataforma digital, estratégia de experiência do torcedor e coordenação de divulgação.",
        acoes: [
          "Criação e lançamento do site oficial da campanha (nacopa-namata.vercel.app)",
          "Implementação de game de pontuação e painel de horários/jogos",
          "Estruturação de espaço com telão de alta qualidade"
        ],
        formatos: ["Plataforma Web / Site", "Conteúdo Digital", "Transmissão ao Vivo"],
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
        id: "rodeio-lucky-friends",
        titulo: "Rodeio Lucky Friends",
        descricao: "Produção e gestão de riders técnico e de camarim em evento de grande porte com 15 mil pessoas.",
        capa: "",
        contexto: "Garantir a retaguarda técnica e de hospitalidade artística com precisão e atendimento de alto nível.",
        publico: "Artistas, equipes técnicas e público do rodeio (15 mil pessoas).",
        estrategia: "Alinhamento minucioso de exigências técnicas, organização de camarins e suporte integral à produção artística.",
        participacao: "Produção e gestão de rider técnico e de camarim.",
        acoes: [
          "Gestão de rider técnico e atendimento a exigências de camarim",
          "Suporte direto à produção artística e operacional do evento"
        ],
        formatos: ["Eventos Country", "Rodeio", "Produção Artística"],
        galeria: [],
        conteudos: [
          { rotulo: "Ver Reel Rodeio Lucky Friends ↗", url: "https://www.instagram.com/reel/Cyr0bO8sruC/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" }
        ],
        resultados: [
          { indicador: "Público", valor: "15 mil", unidade: "pessoas", nota: "Rodeio Lucky Friends" },
          { indicador: "Operação", valor: "100%", unidade: "", nota: "Cumprimento rigoroso de riders e exigências" }
        ]
      },
      {
        id: "eventos-particulares",
        titulo: "Eventos Corporativos, Casamentos
