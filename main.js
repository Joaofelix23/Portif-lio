/* Renderização — não precisa editar. Dados ficam em projects.js */
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.textContent = html; return e; };
const urlOk = u => typeof u === "string" && /^https?:\/\//i.test(u.trim());
const pad = n => String(n).padStart(2, "0");

function bloco(titulo, conteudo) {
  const b = el("div", "bloco"); b.append(el("h5", null, titulo));
  if (Array.isArray(conteudo) ? conteudo.length : conteudo) {
    if (Array.isArray(conteudo)) { const ul = el("ul"); conteudo.forEach(i => ul.append(el("li", null, i))); b.append(ul); }
    else b.append(el("p", null, conteudo));
  } else b.append(el("p", "vazio", "Em preenchimento."));
  return b;
}

function resultados(c) {
  const s = el("section", "res"); s.setAttribute("aria-label", "Resultados da campanha");
  s.append(el("h5", null, "O impacto em números"));
  const g = el("dl", "res-grid"); g.style.margin = 0;
  let algum = false;
  (c.resultados || []).forEach(r => {
    const has = r.valor !== "" && r.valor != null; algum ||= has;
    const i = el("div", "res-item");
    i.append(el("dt", null, r.indicador));
    const dd = el("dd"); const v = el("span", "v" + (has ? "" : " off"), has ? `${r.valor}${r.unidade ? " " + r.unidade : ""}` : "—");
    dd.append(v); if (r.nota) dd.append(el("small", null, r.nota)); i.append(dd); g.append(i);
  });
  s.append(g);
  if (!algum) s.append(el("p", "res-msg", "Resultados em atualização."));
  return s;
}

function galeria(c) {
  const wrap = el("section", "bloco"); wrap.append(el("h5", null, "Galeria"));
  const g = el("div", "galeria");
  if (c.galeria && c.galeria.length) c.galeria.forEach(f => {
    const fig = el("figure"); const im = el("img"); im.src = f.src; im.alt = f.alt || ""; im.loading = "lazy"; im.decoding = "async";
    fig.append(im); g.append(fig);
  });
  else [1, .75, 1.3].forEach(r => { const f = el("figure"); const p = el("div", "ph", "Espaço para imagem · galeria em projects.js"); p.style.setProperty("--r", r); f.append(p); g.append(f); });
  wrap.append(g); return wrap;
}

function renderCase(c, cliente, i) {
  const art = el("article", "case"); art.id = c.id; art.setAttribute("aria-labelledby", `t-${c.id}`);
  const capa = el("div", "capa");
  if (c.capa) { const im = el("img"); im.src = c.capa; im.alt = `Capa da campanha ${c.titulo}`; im.width = 800; im.height = 1000; im.loading = i ? "lazy" : "eager"; capa.append(im); }
  else { capa.innerHTML = ""; const b = el("b", null, c.titulo); capa.append(b, document.createTextNode("Espaço para a imagem de capa (4:5)")); }
  const info = el("div");
  info.append(el("div", "case-n", `Case ${pad(i + 1)}`), el("h4", null, c.titulo), el("p", "cli", `Cliente: ${cliente}`), el("p", "desc", c.descricao));
  info.firstChild.setAttribute("aria-hidden", "true"); info.querySelector("h4").id = `t-${c.id}`;
  const acoes = el("div", "acoes");
  const ver = el("button", "btn-line", "Ver detalhes +"); ver.type = "button"; ver.setAttribute("aria-expanded", "false"); ver.setAttribute("aria-controls", `d-${c.id}`);
  const ig = el("button", "btn", "VER CONTEÚDOS ↗"); ig.type = "button"; ig.dataset.abrir = c.id;
  acoes.append(ig, ver); info.append(acoes);

  const det = el("div", "detalhes"); det.id = `d-${c.id}`;
  const bl = el("div", "blocos");
  bl.append(bloco("Contexto e objetivo", c.contexto), bloco("Público-alvo", c.publico), bloco("Estratégia de comunicação", c.estrategia),
    bloco("Minha participação", c.participacao), bloco("Ações realizadas", c.acoes), bloco("Formatos e conteúdos produzidos", c.formatos));
  det.append(bl, galeria(c), resultados(c));
  ver.addEventListener("click", () => {
    const open = det.classList.toggle("open"); ver.setAttribute("aria-expanded", open);
    ver.textContent = open ? "Fechar detalhes −" : "Ver detalhes +";
  });
  art.append(capa, info, det); return art;
}

/* montagem */
const indice = $("#indice"), raiz = $("#clientes");
PROJETOS.forEach(p => {
  const sec = el("div", "cliente");
  const head = el("div", "cliente-head"); head.append(el("h3", null, `${p.cliente}.`), el("p", null, p.resumo)); sec.append(head);
  p.campanhas.forEach((c, i) => {
    sec.append(renderCase(c, p.cliente, i));
    const li = el("li"); const a = el("a", null, c.titulo); a.href = `#${c.id}`; a.append(el("small", null, `${p.cliente} · Case ${pad(i + 1)}`)); li.append(a); indice.append(li);
  });
  raiz.append(sec);
});

/* contato com ícones Font Awesome */
const L = $("#links-contato");
const icones = {
  "E-mail": "fa-regular fa-envelope",
  "Instagram": "fa-brands fa-instagram",
  "WhatsApp": "fa-brands fa-whatsapp",
  "LinkedIn": "fa-brands fa-linkedin-in"
};

[["E-mail", CONTATO.email && `mailto:${CONTATO.email}`], ["Instagram", CONTATO.instagram], ["WhatsApp", CONTATO.whatsapp], ["LinkedIn", CONTATO.linkedin]]
  .filter(([, u]) => u).forEach(([n, u]) => { 
    const a = el("a", "btn-line");
    a.href = u; 
    
    if (icones[n]) {
      const i = document.createElement("i");
      i.className = icones[n];
      a.append(i);
    }
    
    a.append(document.createTextNode(` ${n} ↗`));
    
    if (u.startsWith("http")) { 
      a.target = "_blank"; 
      a.rel = "noopener noreferrer"; 
    } 
    L.append(a); 
  });

/* revelar cases ao rolar */
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }) : null;
document.querySelectorAll(".case").forEach(c => io ? io.observe(c) : c.classList.add("in"));

/* modal de conteúdos */
const modal = $("#modal"); let gatilho = null;
function abrir(id, btn) {
  let camp, cli; PROJETOS.forEach(p => p.campanhas.forEach(c => { if (c.id === id) { camp = c; cli = p.cliente; } }));
  if (!camp) return; gatilho = btn;
  $("#m-cli").textContent = `Cliente: ${cli}`; $("#m-titulo").textContent = camp.titulo;
  const links = (camp.conteudos || []).filter(c => urlOk(c.url)), box = $("#m-links"); box.replaceChildren();
  $("#m-texto").textContent = links.length ? `Conteúdos publicados da campanha ${camp.titulo}.` : "Os conteúdos desta campanha serão disponibilizados em breve.";
  links.forEach(c => { const a = el("a", "btn", `${c.rotulo || "Abrir no Instagram"} ↗`); a.href = c.url; a.target = "_blank"; a.rel = "noopener noreferrer"; box.append(a); });
  modal.showModal();
}
document.addEventListener("click", e => { const b = e.target.closest("[data-abrir]"); if (b) abrir(b.dataset.abrir, b); });
$(".m-x").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });          // clique fora
modal.addEventListener("close", () => gatilho && gatilho.focus());                          // ESC e foco de volta
