(function () {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function slugLabel(value) {
    return String(value || "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function getProjectById(id) {
    return portfolioData.projetos.find((item) => item.id === id);
  }

  function getCompetenceById(id) {
    return portfolioData.competencias.find((item) => item.id === id);
  }

  function initMenu() {
    const toggle = $("#menuToggle");
    const links = $("#navLinks");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    $$("a", links).forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReveal() {
    const elements = $$(".reveal");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  function initBackToTop() {
    const button = $("#backToTop");
    if (!button) return;

    window.addEventListener("scroll", () => {
      button.classList.toggle("show", window.scrollY > 600);
    });

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function tagsHtml(tags = [], limit = 4) {
    return tags.slice(0, limit).map((tag) => `<span class="tag">${escapeHtml(slugLabel(tag))}</span>`).join("");
  }

  function openModal(html) {
    const modal = $("#infoModal");
    const content = $("#modalContent");
    if (!modal || !content) return;

    content.innerHTML = html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = $("#infoModal");
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initModal() {
    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-close-modal]")) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });
  }

  function competenceModalHtml(competence) {
    const relatedProjects = competence.relacionados
      .map(getProjectById)
      .filter(Boolean)
      .map(
        (project) => `
          <button class="related-card" data-project-id="${project.id}" type="button">
            <strong>${escapeHtml(project.titulo)}</strong>
            <span>${escapeHtml(project.ano)} • ${escapeHtml(project.tipoNome)}</span>
          </button>`
      )
      .join("");

    return `
      <div class="modal-title">
        <p class="eyebrow">Competência aplicada</p>
        <h2>${escapeHtml(competence.nome)}</h2>
        <p class="section-subtitle">${escapeHtml(competence.resumo)}</p>
      </div>

      <div class="modal-section">
        <h3>Onde essa competência aparece</h3>
        <ul class="evidence-list">
          ${competence.evidencias.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Ferramentas e ambientes</h3>
        <div class="timeline-tags">
          ${competence.ferramentas.map((tool) => `<span class="tag">${escapeHtml(tool)}</span>`).join("")}
        </div>
      </div>

      <div class="modal-section">
        <h3>Projetos e evidências relacionadas</h3>
        <div class="related-grid">
          ${relatedProjects || '<p class="empty-state">Ainda sem projeto relacionado cadastrado.</p>'}
        </div>
      </div>
    `;
  }

  function projectModalHtml(project) {
    const competenceTags = project.competencias
      .map(getCompetenceById)
      .filter(Boolean)
      .map((competence) => `<button class="filter-btn" type="button" data-competence-id="${competence.id}">${escapeHtml(competence.nome)}</button>`)
      .join("");

    const links = (project.links || [])
      .map((link) => `<a class="btn btn-secondary" target="_blank" rel="noopener" href="${escapeHtml(link.url)}">${escapeHtml(link.texto)}</a>`)
      .join("");

    return `
      <div class="modal-title">
        <p class="eyebrow">${escapeHtml(project.tipoNome)} • ${escapeHtml(project.ano)}</p>
        <h2>${escapeHtml(project.titulo)}</h2>
        <p class="section-subtitle">${escapeHtml(project.descricao)}</p>
      </div>

      <div class="modal-section">
        <h3>Tecnologias / métodos</h3>
        <div class="timeline-tags">
          ${project.tecnologias.map((tool) => `<span class="tag">${escapeHtml(tool)}</span>`).join("")}
        </div>
      </div>

      <div class="modal-section">
        <h3>Evidências de competência</h3>
        <ul class="evidence-list">
          ${project.evidencias.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Competências conectadas</h3>
        <div class="filter-bar" style="justify-content:flex-start;margin:12px 0 0;">
          ${competenceTags || '<p class="empty-state">Sem competência cadastrada.</p>'}
        </div>
      </div>

      ${links ? `<div class="modal-section"><h3>Links</h3><div class="hero-actions">${links}</div></div>` : ""}
    `;
  }

  function initModalInternalNavigation() {
    document.addEventListener("click", (event) => {
      const projectButton = event.target.closest("[data-project-id]");
      if (projectButton) {
        const project = getProjectById(projectButton.dataset.projectId);
        if (project) openModal(projectModalHtml(project));
      }

      const competenceButton = event.target.closest("[data-competence-id]");
      if (competenceButton) {
        const competence = getCompetenceById(competenceButton.dataset.competenceId);
        if (competence) openModal(competenceModalHtml(competence));
      }
    });
  }

  function renderCompetencies() {
    const grid = $("#competenceGrid");
    if (!grid) return;

    grid.innerHTML = portfolioData.competencias
      .map(
        (item) => `
        <article class="competence-card reveal" tabindex="0" role="button" data-competence-id="${item.id}" aria-label="Abrir evidências de ${escapeHtml(item.nome)}">
          <span class="competence-icon">${escapeHtml(item.icone)}</span>
          <h3>${escapeHtml(item.nome)}</h3>
          <p>${escapeHtml(item.resumo)}</p>
        </article>`
      )
      .join("");

    $$(".competence-card", grid).forEach((card) => {
      const open = () => {
        const competence = getCompetenceById(card.dataset.competenceId);
        if (competence) openModal(competenceModalHtml(competence));
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    });
  }

  function renderFilterBar(containerId, filters, onSelect) {
    const container = $(containerId);
    if (!container) return;

    container.innerHTML = filters
      .map(
        (filter, index) => `
          <button class="filter-btn ${index === 0 ? "active" : ""}" type="button" data-filter="${filter.id}">
            <span>${escapeHtml(filter.icone)}</span>${escapeHtml(filter.nome)}
          </button>`
      )
      .join("");

    $$(".filter-btn", container).forEach((button) => {
      button.addEventListener("click", () => {
        $$(".filter-btn", container).forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        onSelect(button.dataset.filter);
      });
    });
  }

  function filterProjects(filter) {
    if (!filter || filter === "todos") return portfolioData.projetos;
    return portfolioData.projetos.filter((project) => project.categorias.includes(filter) || project.tipo === filter);
  }

  function renderTimeline(filter = "todos") {
    const timeline = $("#timelineList");
    if (!timeline) return;

    const items = filterProjects(filter).sort((a, b) => String(b.ano).localeCompare(String(a.ano)));

    if (!items.length) {
      timeline.innerHTML = `<div class="empty-state">Nenhum item encontrado para este filtro.</div>`;
      return;
    }

    timeline.innerHTML = items
      .map(
        (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-card">
            <span class="timeline-year">${escapeHtml(item.ano)}</span>
            <span class="timeline-type">${escapeHtml(item.tipoNome)}</span>
            <h3>${escapeHtml(item.titulo)}</h3>
            <p>${escapeHtml(item.descricao)}</p>
            <div class="timeline-tags">${tagsHtml(item.categorias, 4)}</div>
            <button class="btn btn-secondary" type="button" data-project-id="${item.id}">Ver evidências</button>
          </div>
        </article>`
      )
      .join("");

    initReveal();
  }

  function renderHomeProjects() {
    const grid = $("#homeProjectGrid");
    if (!grid) return;

    const projects = portfolioData.projetos.filter((project) => project.destaque).slice(0, 6);
    grid.innerHTML = projects.map(projectCardHtml).join("");
  }

  function projectCardHtml(project) {
    return `
      <article class="project-card reveal">
        <div class="project-cover">
          <img src="${escapeHtml(project.imagem)}" alt="Imagem ilustrativa do projeto ${escapeHtml(project.titulo)}" loading="lazy" />
        </div>
        <div class="project-content">
          <div class="project-meta"><span>${escapeHtml(project.tipoNome)}</span><span>${escapeHtml(project.ano)}</span></div>
          <h3>${escapeHtml(project.titulo)}</h3>
          <p>${escapeHtml(project.descricao)}</p>
          <div class="project-tags">${tagsHtml(project.categorias, 4)}</div>
          <button class="btn btn-secondary" type="button" data-project-id="${project.id}">Abrir detalhes</button>
        </div>
      </article>`;
  }

  function renderProjectPage(filter = "todos") {
    const grid = $("#projectGrid");
    if (!grid) return;

    const items = filterProjects(filter);
    if (!items.length) {
      grid.innerHTML = `<div class="empty-state">Nenhum projeto encontrado para este filtro.</div>`;
      return;
    }

    grid.innerHTML = items.map(projectCardHtml).join("");
    initReveal();
  }

  function renderServices() {
    const grid = $("#serviceGrid");
    if (!grid) return;

    grid.innerHTML = portfolioData.servicos
      .map(
        (service) => `
        <article class="service-card reveal">
          <span class="service-icon">${escapeHtml(service.icone)}</span>
          <h3>${escapeHtml(service.nome)}</h3>
          <p>${escapeHtml(service.descricao)}</p>
          <ul class="service-list">
            ${service.entregas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>`
      )
      .join("");
  }

  function initPageRenders() {
    renderCompetencies();

    renderFilterBar("#timelineFilters", portfolioData.filtros, renderTimeline);
    renderTimeline();

    renderHomeProjects();

    renderFilterBar("#projectFilters", portfolioData.filtros, renderProjectPage);
    renderProjectPage();

    renderServices();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initModal();
    initModalInternalNavigation();
    initPageRenders();
    initReveal();
    initBackToTop();
  });
})();
