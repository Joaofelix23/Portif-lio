/* ==========================================================
   JFELIX® — DADOS DOS PROJETOS (único arquivo que você edita)
   Campo vazio ("" ou []) = a página mostra um espaço reservado.
   Nada aqui é dado real além dos nomes de cliente e campanha.
   ========================================================== */

const CONTATO = {
  email: "Joao.vframalho@senacsp.edu.br", // vazio = botão oculto
  instagram: "https://instagram.com/jfeelix_",
  whatsapp: "https://wa.me/5515998057042",
  linkedin: "https://www.linkedin.com/in/jfeelix/"
};

const PROJETOS = [
  {
    cliente: "Namata",
    resumo: "Três campanhas, apresentadas individualmente para destacar seus objetivos, execução, conteúdos e resultados.",
    campanhas: [
      {
        id: "noite-das-mulheres",
        titulo: "Noite das Mulheres",
        descricao: "Campanha desenvolvida para o Namata, com foco na divulgação da Noite das Mulheres.",
        capa: "",              // ex.: "img/namata/noite-capa.jpg"  (proporção 4:5)
        contexto: "",          // contexto e objetivo da campanha
        publico: "",
        estrategia: "",
        participacao: "",      // o que VOCÊ fez no projeto
        acoes: [],             // ex.: ["Planejamento de pauta", "Atendimento"]
        formatos: [],          // ex.: ["Reels", "Carrossel", "Stories"]
        galeria: [],           // ex.: [{ src: "img/namata/noite-01.jpg", alt: "Descrição" }]
        conteudos: [],         // ex.: [{ rotulo: "Reel de lançamento", url: "https://www.instagram.com/p/..." }]
        resultados: [          // preencha "valor" (e "nota" se quiser). Pode trocar/remover/adicionar linhas.
          { indicador: "Alcance",      valor: "", unidade: "", nota: "" },
          { indicador: "Impressões",   valor: "", unidade: "", nota: "" },
          { indicador: "Visualizações",valor: "", unidade: "", nota: "" },
          { indicador: "Engajamento",  valor: "", unidade: "", nota: "" }
        ]
      },
      {
        id: "esquenta-nacopa",
        titulo: "Esquenta Nacopa",
        descricao: "Campanha de aquecimento e divulgação do Nacopa, desenvolvida para o Namata.",
        capa: "", contexto: "", publico: "", estrategia: "", participacao: "",
        acoes: [], formatos: [], galeria: [], conteudos: [],
        resultados: [
          { indicador: "Alcance",      valor: "", unidade: "", nota: "" },
          { indicador: "Impressões",   valor: "", unidade: "", nota: "" },
          { indicador: "Visualizações",valor: "", unidade: "", nota: "" },
          { indicador: "Engajamento",  valor: "", unidade: "", nota: "" }
        ]
      },
      {
        id: "nacopa",
        titulo: "Nacopa",
        descricao: "Campanha do Nacopa realizada para o Namata.",
        capa: "", contexto: "", publico: "", estrategia: "", participacao: "",
        acoes: [], formatos: [], galeria: [], conteudos: [],
        resultados: [
          { indicador: "Alcance",      valor: "", unidade: "", nota: "" },
          { indicador: "Impressões",   valor: "", unidade: "", nota: "" },
          { indicador: "Visualizações",valor: "", unidade: "", nota: "" },
          { indicador: "Engajamento",  valor: "", unidade: "", nota: "" }
        ]
      }
    ]
  }
  /* Novo cliente: copie o bloco acima, troque "cliente", "resumo" e as campanhas. */
];
