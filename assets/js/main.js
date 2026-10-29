(function () {
    'use strict';

    const sorocabaPlaces = [
        {
            id: 'tur-1',
            nome: 'Jardim Botânico Irmãos Villas-Bôas',
            categoria: 'parques',
            bairro: 'Jardim Dois Corações',
            nota: '4.9',
            endereco: 'Rua Miguel Montoro Lozano, 340',
            descricao: 'Cartão-postal com o Palácio de Cristal, orquidário, mirante e coleções botânicas do Cerrado e Mata Atlântica.',
            imagem: 'assets/media/01-jardim-botanico.jpg',
            queryMaps: 'Jardim Botanico Irmaos Villas Boas, Sorocaba SP'
        },
        {
            id: 'tur-2',
            nome: 'Parque Zoológico Quinzinho de Barros',
            categoria: 'parques',
            bairro: 'Vila Hortência',
            nota: '4.8',
            endereco: 'Rua Teodoro Kaisel, 883',
            descricao: 'Referência na América Latina em conservação da fauna, pesquisa e lazer educativo em meio à Mata Atlântica.',
            imagem: 'assets/media/02-zoo-quinzinho.jpg',
            queryMaps: 'Parque Zoologico Municipal Quinzinho de Barros, Sorocaba SP'
        },
        {
            id: 'tur-3',
            nome: 'Estação Ferroviária & Museu MACS',
            categoria: 'cultura',
            bairro: 'Centro',
            nota: '4.7',
            endereco: 'Av. Dr. Afonso Vergueiro, 280',
            descricao: 'Complexo histórico da Estrada de Ferro Sorocabana integrado ao Museu de Arte Contemporânea.',
            imagem: 'assets/media/03-estacao-ferroviaria.jpg',
            queryMaps: 'Museu de Arte Contemporanea de Sorocaba, Sorocaba SP'
        },
        {
            id: 'tur-4',
            nome: 'Parque das Águas Maria Barbosa Silva',
            categoria: 'parques',
            bairro: 'Jardim Abaeté',
            nota: '4.8',
            endereco: 'Av. Dom Aguirre, s/n',
            descricao: 'Amplo complexo de lazer com lago, ciclovia, pista de skate e pôr do sol às margens do Rio Sorocaba.',
            imagem: 'assets/media/04-parque-das-aguas.jpg',
            queryMaps: 'Parque das Aguas Maria Barbosa Silva, Sorocaba SP'
        },
        {
            id: 'rest-1',
            nome: 'Padaria Real (Unidade Campolim)',
            categoria: 'cafes',
            bairro: 'Parque Campolim',
            nota: '4.8',
            endereco: 'Av. Antônio Carlos Comitre, 475',
            descricao: 'Tradicional ponto de encontro famoso nacionalmente pela clássica coxinha de frango com catupiry.',
            imagem: 'assets/media/05-padaria-real.jpg',
            queryMaps: 'Padaria Real Campolim, Sorocaba SP'
        },
        {
            id: 'rest-2',
            nome: 'Kojima Restaurante Japonês',
            categoria: 'restaurantes',
            bairro: 'Campolim / Mangal',
            nota: '4.7',
            endereco: 'Rua Francisca de Queiroz, 69',
            descricao: 'Gastronomia japonesa contemporânea com sushis autorais, cortes nobres e ambiente intimista.',
            imagem: 'assets/media/06-Hioki-restaurante.jpg',
            altImagem: 'assets/media/06-kojima-restaurante.jpg',
            queryMaps: 'Kojima Restaurante Japones, Sorocaba SP'
        },
        {
            id: 'rest-3',
            nome: 'Botequim da Francisca',
            categoria: 'cafes',
            bairro: 'Vila Independência',
            nota: '4.7',
            endereco: 'Rua Francisca de Queiroz, 125',
            descricao: 'Premiado bar sorocabano com petiscos clássicos, feijoada aos sábados e chope gelado.',
            imagem: 'assets/media/07-botequim-francisca.jpg',
            queryMaps: 'Botequim da Francisca, Sorocaba SP'
        },
        {
            id: 'rest-4',
            nome: 'Churrascaria Tropical Grill',
            categoria: 'restaurantes',
            bairro: 'Jardim Faculdade',
            nota: '4.6',
            endereco: 'Av. General Carneiro, 40',
            descricao: 'Rodízio tradicional de carnes nobres, buffet completo de saladas, massas e sobremesas.',
            imagem: 'assets/media/08-tropical-grill.jpg',
            queryMaps: 'Churrascaria Tropical Grill, Sorocaba SP'
        },
        {
            id: 'rest-5',
            nome: 'La Doc Gastronomia Italiana',
            categoria: 'restaurantes',
            bairro: 'Centro',
            nota: '4.8',
            endereco: 'Rua Francisco Scarpa, 279',
            descricao: 'Massas artesanais, risotos e carnes com inspiração italiana no coração de Sorocaba.',
            imagem: 'assets/media/09-la-doc-gastronomia.jpg',
            queryMaps: 'La Doc Gastronomia, Sorocaba SP'
        },
        {
            id: 'rest-6',
            nome: 'Bar do Alemão (Iguatemi Esplanada)',
            categoria: 'restaurantes',
            bairro: 'Campolim',
            nota: '4.6',
            endereco: 'Av. Gisele Constantino, 1850',
            descricao: 'Famoso pelo Filé à Parmegiana, pratos típicos alemães e chope tirado com colarinho cremoso.',
            imagem: 'assets/media/10-bar-do-alemao.jpg',
            queryMaps: 'Bar do Alemao Shopping Iguatemi Esplanada Sorocaba SP'
        },
        {
            id: 'tur-5',
            nome: 'Parque Carlos Alberto de Souza (Campolim)',
            categoria: 'parques',
            bairro: 'Parque Campolim',
            nota: '4.8',
            endereco: 'Av. Antônio Carlos Comitre, s/n',
            descricao: 'Pista de caminhada arborizada cercada pelos principais restaurantes, cafés e edifícios da Zona Sul.',
            imagem: 'assets/media/11 -parque-campolim-sorocaba.jpg',
            altImagem: 'assets/media/11-parque-campolim.jpg',
            queryMaps: 'Parque Campolim Carlos Alberto de Souza, Sorocaba SP'
        },
        {
            id: 'tur-6',
            nome: 'Mosteiro de São Bento de Sorocaba',
            categoria: 'cultura',
            bairro: 'Centro Histórico',
            nota: '4.9',
            endereco: 'Largo de São Bento, s/n',
            descricao: 'Marco zero da história de Sorocaba, fundado em 1660 por Baltasar Fernandes.',
            imagem: 'assets/media/12-mosteiro-sao-bento.jpg',
            queryMaps: 'Mosteiro de Sao Bento, Sorocaba SP'
        }
    ];

    let currentCategory = 'todos';
    let currentSearch = '';

    let favPlaces = [];
    let tripTasks = [
        { text: 'Conhecer o Jardim Botânico', done: false },
        { text: 'Provar a coxinha da Padaria Real', done: false },
        { text: 'Caminhar no Parque das Águas', done: false },
        { text: 'Visitar o Zoo Quinzinho de Barros', done: false }
    ];

    try {
        favPlaces = JSON.parse(localStorage.getItem('ds_favs') || '[]');
        const savedTasks = localStorage.getItem('ds_tasks');
        if (savedTasks) tripTasks = JSON.parse(savedTasks);
    } catch (e) {}

    function saveState() {
        try {
            localStorage.setItem('ds_favs', JSON.stringify(favPlaces));
            localStorage.setItem('ds_tasks', JSON.stringify(tripTasks));
        } catch (e) {}
        updateTaskbarBadges();
    }

    function updateTaskbarBadges() {
        const pendingCount = tripTasks.filter(t => !t.done).length;
        const badgeTasks = document.getElementById('taskbarTasksCount');
        if (badgeTasks) badgeTasks.textContent = pendingCount;

        const badgeFavs = document.getElementById('taskbarFavsCount');
        if (badgeFavs) badgeFavs.textContent = favPlaces.length;
    }

    function renderDirectory() {
        const grid = document.getElementById('fullDirectoryGrid');
        if (!grid) return;

        const q = currentSearch.trim().toLowerCase();
        const list = sorocabaPlaces.filter(item => {
            const matchCat = currentCategory === 'todos' || item.categoria === currentCategory;
            const matchText = !q ||
                item.nome.toLowerCase().includes(q) ||
                item.bairro.toLowerCase().includes(q) ||
                item.descricao.toLowerCase().includes(q);
            return matchCat && matchText;
        });

        grid.innerHTML = list.map((item, idx) => {
            const onErr = item.altImagem ? `onerror="this.onerror=null;this.src='${item.altImagem}';"` : '';
            const isFav = favPlaces.includes(item.nome);
            return `
                <article style="animation-delay: ${idx * 0.04}s;">
                    <button type="button" class="card-fav-btn ${isFav ? 'active' : ''}" data-fav-name="${item.nome}" title="Salvar nos Favoritos">♥</button>
                    <img src="${item.imagem}" alt="${item.nome}" loading="lazy" ${onErr}>
                    <h3>${item.nome}</h3>
                    <p>${item.bairro} · ★ ${item.nota}<br>
                        <strong>${item.endereco}<br></strong>
                        ${item.descricao}
                    </p>
                    <button type="button" class="card-link" style="border:none; cursor:pointer; font-family:inherit;" data-focus-map="${item.queryMaps}">Localizar no Mapa</button>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.queryMaps)}" target="_blank" rel="noopener noreferrer" class="card-link">Ver rota no Google Maps</a>
                </article>
            `;
        }).join('');
    }

    function enhanceStaticCards() {
        document.querySelectorAll('.cards-grid article').forEach(card => {
            if (card.querySelector('.card-fav-btn')) return;
            const titleEl = card.querySelector('h3');
            if (!titleEl) return;
            const placeName = titleEl.textContent.trim();
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'card-fav-btn' + (favPlaces.includes(placeName) ? ' active' : '');
            btn.setAttribute('data-fav-name', placeName);
            btn.title = 'Salvar nos Favoritos';
            btn.textContent = '♥';
            card.appendChild(btn);
        });
    }

    function initScrollReveal() {
        const targets = document.querySelectorAll('.hero-container, .quote-block, .pillar-card, .cards-grid article, .contact-card, .banner-link, .faq-item');
        targets.forEach(el => el.classList.add('reveal-item'));

        if (!('IntersectionObserver' in window)) {
            targets.forEach(el => el.classList.add('revealed'));
            return;
        }

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        targets.forEach(el => obs.observe(el));
    }

    // Insere a Barra de Tarefas no Topo Direito (dentro do Header) e o Modal Lightbox
    function initTopTaskbarAndLightbox() {
        const headerEl = document.querySelector('header');
        if (headerEl) {
            const existingBtn = headerEl.querySelector('.btn-header');
            const toolsWrapper = document.createElement('div');
            toolsWrapper.className = 'header-right-tools';
            toolsWrapper.innerHTML = `
                <div class="taskbar-top" role="toolbar" aria-label="Barra de Tarefas Rápidas">
                    <button type="button" class="taskbar-item" id="openTasksBtn" title="Abrir Checklist de Tarefas">
                        ✅ Tarefas <span class="taskbar-badge" id="taskbarTasksCount">0</span>
                    </button>
                    <button type="button" class="taskbar-item" id="openFavsBtn" title="Ver Lugares Salvos">
                        ♥ Salvos <span class="taskbar-badge" id="taskbarFavsCount">0</span>
                    </button>
                    <button type="button" class="taskbar-item" id="toggleThemeTaskBtn" title="Alternar Tema Claro/Escuro">
                        🌓 Tema
                    </button>
                </div>
            `;
            if (existingBtn) {
                headerEl.replaceChild(toolsWrapper, existingBtn);
                toolsWrapper.appendChild(existingBtn);
            } else {
                headerEl.appendChild(toolsWrapper);
            }
        }

        const overlaysHTML = `
            <div class="taskbar-drawer" id="taskbarDrawer" role="dialog" aria-label="Painel da Barra de Tarefas">
                <div class="drawer-header">
                    <h4 id="drawerTitle">Tarefas do Passeio</h4>
                    <button type="button" class="drawer-close" id="closeDrawerBtn">✕</button>
                </div>
                <div id="drawerBody"></div>
            </div>

            <div class="modal-overlay" id="lightboxModal">
                <div class="modal-box" id="lightboxBox"></div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', overlaysHTML);
        updateTaskbarBadges();

        try {
            if (localStorage.getItem('ds_theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        } catch (e) {}
    }

    function renderTasksDrawer() {
        const drawer = document.getElementById('taskbarDrawer');
        const title = document.getElementById('drawerTitle');
        const body = document.getElementById('drawerBody');
        if (!drawer || !body) return;

        title.textContent = 'Checklist de Tarefas em Sorocaba';
        body.innerHTML = `
            <ul class="task-list">
                ${tripTasks.map((t, i) => `
                    <li class="${t.done ? 'done' : ''}">
                        <label style="display:flex; align-items:center; gap:8px; cursor:pointer; flex:1;">
                            <input type="checkbox" data-task-idx="${i}" ${t.done ? 'checked' : ''}>
                            <span>${t.text}</span>
                        </label>
                        <button type="button" data-del-task="${i}" style="border:none; background:none; color:#E11D48; cursor:pointer; font-weight:700;">✕</button>
                    </li>
                `).join('')}
            </ul>
            <form class="task-add-row" id="addTaskForm">
                <input type="text" id="newTaskInput" placeholder="Nova tarefa (ex: Almoçar no La Doc)..." required>
                <button type="submit">Adicionar</button>
            </form>
        `;
        drawer.classList.add('open');
    }

    function renderFavsDrawer() {
        const drawer = document.getElementById('taskbarDrawer');
        const title = document.getElementById('drawerTitle');
        const body = document.getElementById('drawerBody');
        if (!drawer || !body) return;

        title.textContent = `Lugares Salvos (${favPlaces.length})`;
        if (favPlaces.length === 0) {
            body.innerHTML = `<p style="font-size:0.88rem; color:var(--text-muted);">Clique no botão ♥ em qualquer cartão para salvar seus lugares favoritos na barra do topo.</p>`;
        } else {
            body.innerHTML = `
                <ul class="task-list">
                    ${favPlaces.map(name => `
                        <li>
                            <span><strong>${name}</strong></span>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(name + ' Sorocaba SP')}" target="_blank" rel="noopener noreferrer" style="color:var(--primary); font-weight:600; font-size:0.82rem;">Abrir Rota ↗</a>
                        </li>
                    `).join('')}
                </ul>
            `;
        }
        drawer.classList.add('open');
    }

    document.addEventListener('DOMContentLoaded', () => {
        initTopTaskbarAndLightbox();
        renderDirectory();
        enhanceStaticCards();
        initScrollReveal();

        const searchInput = document.getElementById('directorySearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value || '';
                renderDirectory();
            });
        }

        document.body.addEventListener('change', (e) => {
            if (e.target.matches('[data-task-idx]')) {
                const idx = Number(e.target.getAttribute('data-task-idx'));
                if (tripTasks[idx]) {
                    tripTasks[idx].done = e.target.checked;
                    saveState();
                    renderTasksDrawer();
                }
            }
        });

        document.body.addEventListener('submit', (e) => {
            if (e.target.id === 'addTaskForm') {
                e.preventDefault();
                const inp = document.getElementById('newTaskInput');
                if (inp && inp.value.trim()) {
                    tripTasks.push({ text: inp.value.trim(), done: false });
                    saveState();
                    renderTasksDrawer();
                }
            }
        });

        document.body.addEventListener('click', (e) => {
            const filterBtn = e.target.closest('[data-dir-filter]');
            if (filterBtn) {
                document.querySelectorAll('[data-dir-filter]').forEach(b => b.classList.remove('active'));
                filterBtn.classList.add('active');
                currentCategory = filterBtn.getAttribute('data-dir-filter');
                renderDirectory();
                return;
            }

            const favBtn = e.target.closest('[data-fav-name]');
            if (favBtn) {
                const name = favBtn.getAttribute('data-fav-name');
                if (favPlaces.includes(name)) {
                    favPlaces = favPlaces.filter(n => n !== name);
                    favBtn.classList.remove('active');
                } else {
                    favPlaces.push(name);
                    favBtn.classList.add('active');
                }
                saveState();
                return;
            }

            const delTaskBtn = e.target.closest('[data-del-task]');
            if (delTaskBtn) {
                const idx = Number(delTaskBtn.getAttribute('data-del-task'));
                tripTasks.splice(idx, 1);
                saveState();
                renderTasksDrawer();
                return;
            }

            if (e.target.closest('#openTasksBtn')) {
                renderTasksDrawer();
                return;
            }

            if (e.target.closest('#openFavsBtn')) {
                renderFavsDrawer();
                return;
            }

            if (e.target.closest('#closeDrawerBtn')) {
                const dr = document.getElementById('taskbarDrawer');
                if (dr) dr.classList.remove('open');
                return;
            }

            if (e.target.closest('#toggleThemeTaskBtn')) {
                const isDark = document.body.classList.toggle('dark-theme');
                try { localStorage.setItem('ds_theme', isDark ? 'dark' : 'light'); } catch (err) {}
                return;
            }

            const mapBtn = e.target.closest('[data-focus-map]');
            if (mapBtn) {
                const query = mapBtn.getAttribute('data-focus-map');
                const iframe = document.getElementById('googleMapsEmbed');
                if (iframe) {
                    iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
                    iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            const cardImg = e.target.closest('.cards-grid article img');
            if (cardImg) {
                const card = cardImg.closest('article');
                const title = card.querySelector('h3') ? card.querySelector('h3').textContent : '';
                const desc = card.querySelector('p') ? card.querySelector('p').innerHTML : '';
                const modal = document.getElementById('lightboxModal');
                const box = document.getElementById('lightboxBox');
                if (modal && box) {
                    box.innerHTML = `
                        <button type="button" id="closeLightboxBtn" style="position:absolute; top:12px; right:16px; background:none; border:none; font-size:1.3rem; cursor:pointer; color:var(--text-main);">✕</button>
                        <img src="${cardImg.src}" alt="${title}">
                        <h3 style="font-family:'Montserrat', sans-serif; margin-bottom:6px;">${title}</h3>
                        <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">${desc}</p>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(title + ' Sorocaba SP')}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display:block; text-align:center;">Abrir rota no Google Maps</a>
                    `;
                    modal.classList.add('open');
                }
                return;
            }

            if (e.target.id === 'lightboxModal' || e.target.id === 'closeLightboxBtn') {
                const modal = document.getElementById('lightboxModal');
                if (modal) modal.classList.remove('open');
            }
        });
    });
})();

// Atalho de teclado: fechar modal com a tecla ESC
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const m = document.getElementById('appModal'); if (m) m.classList.remove('open'); } });
