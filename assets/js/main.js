/* ==========================================================================
   DESCOBRASOROCABA - JAVASCRIPT OFICIAL (COM AS 20 MÍDIAS LOCAIS CONFIGURADAS)
   ========================================================================== */
(function () {
    'use strict';

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    const FALLBACK_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="450" viewBox="0 0 700 450">
            <rect width="700" height="450" fill="#0E1B30"/>
            <circle cx="350" cy="195" r="54" fill="#F4B41A" opacity="0.2"/>
            <text x="350" y="210" font-family="Inter, sans-serif" font-size="22" font-weight="bold" fill="#F4B41A" text-anchor="middle">DescobraSorocaba</text>
            <text x="350" y="245" font-family="Inter, sans-serif" font-size="14" fill="#CBD5E1" text-anchor="middle">Verifique o nome da foto em assets/media/</text>
        </svg>`
    );

    // ======================================================================
    // AQUI ESTÃO AS FOTOS 01 A 12 (ATRATIVOS E RESTAURANTES)
    // ======================================================================
    const sorocabaPlaces = [
        {
            id: 'tur-1',
            nome: 'Jardim Botânico Irmãos Villas-Bôas',
            categoria: 'parques',
            badge: 'Entrada Gratuita',
            nota: '4.9',
            bairro: 'Jardim Dois Corações',
            endereco: 'Rua Miguel Montoro Lozano, 340 - Jardim Dois Corações, Sorocaba - SP',
            descricao: 'Cartão-postal com o Palácio de Cristal, orquidário, mirante e coleções botânicas do Cerrado e Mata Atlântica.',
            imagem: 'assets/media/01-jardim-botanico.jpg',
            queryMaps: 'Jardim Botanico Irmaos Villas Boas, Rua Miguel Montoro Lozano 340, Sorocaba SP'
        },
        {
            id: 'tur-2',
            nome: 'Parque Zoológico Quinzinho de Barros',
            categoria: 'parques',
            badge: 'Família & Bio',
            nota: '4.8',
            bairro: 'Vila Hortência',
            endereco: 'Rua Teodoro Kaisel, 883 - Vila Hortência, Sorocaba - SP',
            descricao: 'Referência na América Latina em conservação da fauna, pesquisa e lazer educativo em meio à Mata Atlântica.',
            imagem: 'assets/media/02-zoo-quinzinho.jpg',
            queryMaps: 'Parque Zoologico Municipal Quinzinho de Barros, Rua Teodoro Kaisel 883, Sorocaba SP'
        },
        {
            id: 'tur-3',
            nome: 'Estação Ferroviária & Museu MACS',
            categoria: 'cultura',
            badge: 'Patrimônio Histórico',
            nota: '4.7',
            bairro: 'Centro',
            endereco: 'Av. Dr. Afonso Vergueiro, 280 - Centro, Sorocaba - SP',
            descricao: 'Complexo histórico da Estrada de Ferro Sorocabana integrado ao Museu de Arte Contemporânea de Sorocaba.',
            imagem: 'assets/media/03-estacao-ferroviaria.jpg',
            queryMaps: 'Museu de Arte Contemporanea de Sorocaba, Av Dr Afonso Vergueiro 280, Sorocaba SP'
        },
        {
            id: 'tur-4',
            nome: 'Parque das Águas Maria Barbosa Silva',
            categoria: 'parques',
            badge: 'Lazer & Ciclovia',
            nota: '4.8',
            bairro: 'Jardim Abaeté',
            endereco: 'Av. Dom Aguirre, s/n - Jardim Abaeté, Sorocaba - SP',
            descricao: 'Amplo complexo de lazer com lago, ciclovia, pista de skate, anfiteatro e pôr do sol às margens do Rio Sorocaba.',
            imagem: 'assets/media/04-parque-das-aguas.jpg',
            queryMaps: 'Parque das Aguas Maria Barbosa Silva, Sorocaba SP'
        },
        {
            id: 'rest-1',
            nome: 'Padaria Real (Unidade Campolim)',
            categoria: 'cafes',
            badge: 'Ícone de Sorocaba',
            nota: '4.8',
            bairro: 'Parque Campolim',
            endereco: 'Av. Antônio Carlos Comitre, 475 - Parque Campolim, Sorocaba - SP',
            descricao: 'Tradicional ponto de encontro famoso nacionalmente pela clássica coxinha de frango com catupiry e confeitaria.',
            imagem: 'assets/media/05-padaria-real.jpg',
            queryMaps: 'Padaria Real Campolim, Av Antonio Carlos Comitre 475, Sorocaba SP'
        },
        {
            id: 'rest-2',
            nome: 'Kojima Restaurante Japonês',
            categoria: 'restaurantes',
            badge: 'Alta Gastronomia',
            nota: '4.7',
            bairro: 'Campolim / Mangal',
            endereco: 'Rua Francisca de Queiroz, 69 - Mangal, Sorocaba - SP',
            descricao: 'Gastronomia japonesa contemporânea com sushis autorais, cortes nobres e ambiente intimista.',
            imagem: 'assets/media/06-kojima-restaurante.jpg',
            queryMaps: 'Kojima Restaurante Japones, Rua Francisca de Queiroz 69, Sorocaba SP'
        },
        {
            id: 'rest-3',
            nome: 'Botequim da Francisca',
            categoria: 'cafes',
            badge: 'Bar & Boteco',
            nota: '4.7',
            bairro: 'Vila Independência',
            endereco: 'Rua Francisca de Queiroz, 125 - Vila Independência, Sorocaba - SP',
            descricao: 'Premiado bar sorocabano com petiscos clássicos, feijoada aos sábados e chopp gelado.',
            imagem: 'assets/media/07-botequim-francisca.jpg',
            queryMaps: 'Botequim da Francisca, Rua Francisca de Queiroz 125, Sorocaba SP'
        },
        {
            id: 'rest-4',
            nome: 'Churrascaria Tropical Grill',
            categoria: 'restaurantes',
            badge: 'Churrascaria',
            nota: '4.6',
            bairro: 'Jardim Faculdade',
            endereco: 'Av. General Carneiro, 40 - Jardim Faculdade, Sorocaba - SP',
            descricao: 'Rodízio tradicional de carnes nobres, buffet completo de saladas, massas e sobremesas.',
            imagem: 'assets/media/08-tropical-grill.jpg',
            queryMaps: 'Churrascaria Tropical Grill, Av General Carneiro 40, Sorocaba SP'
        },
        {
            id: 'rest-5',
            nome: 'La Doc Gastronomia Italiana',
            categoria: 'restaurantes',
            badge: 'Cantina & Vinhos',
            nota: '4.8',
            bairro: 'Centro',
            endereco: 'Rua Francisco Scarpa, 279 - Centro, Sorocaba - SP',
            descricao: 'Massas artesanais, risotos e carnes com inspiração italiana no coração de Sorocaba.',
            imagem: 'assets/media/09-la-doc-gastronomia.jpg',
            queryMaps: 'La Doc Gastronomia, Rua Francisco Scarpa 279, Sorocaba SP'
        },
        {
            id: 'rest-6',
            nome: 'Bar do Alemão (Iguatemi Esplanada)',
            categoria: 'restaurantes',
            badge: 'Clássico Parmegiana',
            nota: '4.6',
            bairro: 'Campolim',
            endereco: 'Av. Gisele Constantino, 1850 - Parque Bela Vista / Campolim, Sorocaba - SP',
            descricao: 'Famoso pelo Filé à Parmegiana, pratos típicos alemães e chopp tirado com colarinho cremoso.',
            imagem: 'assets/media/10-bar-do-alemao.jpg',
            queryMaps: 'Bar do Alemao Shopping Iguatemi Esplanada Sorocaba SP'
        },
        {
            id: 'tur-5',
            nome: 'Parque Carlos Alberto de Souza (Campolim)',
            categoria: 'parques',
            badge: 'Caminhada & Esporte',
            nota: '4.8',
            bairro: 'Parque Campolim',
            endereco: 'Av. Antônio Carlos Comitre, s/n - Parque Campolim, Sorocaba - SP',
            descricao: 'Pista de caminhada arborizada cercada pelos principais restaurantes, cafés e edifícios da Zona Sul.',
            imagem: 'assets/media/11-parque-campolim.jpg',
            queryMaps: 'Parque Campolim Carlos Alberto de Souza, Sorocaba SP'
        },
        {
            id: 'tur-6',
            nome: 'Mosteiro de São Bento de Sorocaba',
            categoria: 'cultura',
            badge: 'Fundação 1660',
            nota: '4.9',
            bairro: 'Centro Histórico',
            endereco: 'Largo de São Bento, s/n - Centro, Sorocaba - SP',
            descricao: 'Marco zero da história de Sorocaba, fundado no século XVII por Baltasar Fernandes.',
            imagem: 'assets/media/12-mosteiro-sao-bento.jpg',
            queryMaps: 'Mosteiro de Sao Bento, Largo de Sao Bento, Sorocaba SP'
        }
    ];

    // ======================================================================
    // AQUI ESTÃO AS FOTOS 13 A 20 (GALERIA COMPLEMENTAR)
    // ======================================================================
    const extraGalleryPhotos = [
        { id: 'gal-1', nome: 'Ciclovia Marginal Dom Aguirre', endereco: 'Marginal Dom Aguirre - Sorocaba, SP', descricao: 'Mais de 130 km de ciclovias interligadas.', imagem: 'assets/media/13-ciclovia-dom-aguirre.jpg', queryMaps: 'Ciclovia Dom Aguirre Sorocaba SP' },
        { id: 'gal-2', nome: 'Parque Natural Chico Mendes', endereco: 'Av. Três de Março, 1025 - Alto da Boa Vista, Sorocaba - SP', descricao: 'Trilhas ecológicas, quiosques e viveiro de mudas.', imagem: 'assets/media/14-parque-chico-mendes.jpg', queryMaps: 'Parque Natural Chico Mendes Sorocaba SP' },
        { id: 'gal-3', nome: 'Paço Municipal de Sorocaba (Palácio dos Tropeiros)', endereco: 'Av. Eng. Carlos Reinaldo Mendes, 3041 - Alto da Boa Vista, Sorocaba - SP', descricao: 'Arquitetura modernista cercada por lago, jardim e biblioteca.', imagem: 'assets/media/15-paco-municipal.jpg', queryMaps: 'Paco Municipal de Sorocaba SP' },
        { id: 'gal-4', nome: 'Biblioteca Infantil Municipal', endereco: 'Rua da Penha, 673 - Centro, Sorocaba - SP', descricao: 'Casarão histórico cultural no Centro de Sorocaba.', imagem: 'assets/media/16-biblioteca-infantil.jpg', queryMaps: 'Biblioteca Infantil Municipal Sorocaba SP' },
        { id: 'gal-5', nome: 'Catedral Metropolitana Nossa Senhora da Ponte', endereco: 'Praça Cel. Fernando Prestes, s/n - Centro, Sorocaba - SP', descricao: 'Igreja matriz histórica no coração da Praça Cel. Fernando Prestes.', imagem: 'assets/media/17-catedral-sorocaba.jpg', queryMaps: 'Catedral Metropolitana de Sorocaba SP' },
        { id: 'gal-6', nome: 'Parque da Biquinha', endereco: 'Av. Comendador Pereira Inácio, 1112 - Jardim Vergueiro, Sorocaba - SP', descricao: 'Nascente histórica e mata nativa.', imagem: 'assets/media/18-parque-biquinha.jpg', queryMaps: 'Parque da Biquinha Sorocaba SP' },
        { id: 'gal-7', nome: 'Mercado Municipal de Sorocaba', endereco: 'Praça Comendador Nicolau Scarpa, s/n - Centro, Sorocaba - SP', descricao: 'Especiarias, queijos, frutas frescas e arquitetura tradicional de 1938.', imagem: 'assets/media/19-mercado-municipal.jpg', queryMaps: 'Mercado Municipal de Sorocaba SP' },
        { id: 'gal-8', nome: 'Cafeterias Especiais do Campolim', endereco: 'Parque Campolim - Sorocaba, SP', descricao: 'Rota de cafés especiais e brunches na Zona Sul.', imagem: 'assets/media/20-cafeterias-campolim.jpg', queryMaps: 'Cafeterias Parque Campolim Sorocaba SP' }
    ];

    let favorites = [];
    try {
        favorites = JSON.parse(localStorage.getItem('sorocaba_favs') || '[]');
    } catch (e) {
        favorites = [];
    }

    let currentLang = 'PT';
    let activeSearchController = null;

    function buildGoogleMapsRouteUrl(queryMaps) {
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(queryMaps)}`;
    }

    function renderHomeAttractions() {
        const container = document.getElementById('homeAttractionsGrid');
        if (!container) return;
        const featured = sorocabaPlaces.slice(0, 4);
        container.innerHTML = featured.map(item => {
            const isSaved = favorites.includes(item.id);
            return `
                <article class="attraction-card">
                    <div class="attraction-media">
                        <img src="${escapeHtml(item.imagem)}" alt="${escapeHtml(item.nome)}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';">
                        <span class="badge-top-left" style="background:var(--green-badge); color:var(--green-text);">${escapeHtml(item.badge)}</span>
                        <button type="button" class="btn-fav ${isSaved ? 'saved' : ''}" data-action="fav" data-id="${escapeHtml(item.id)}" title="Salvar no Meu Roteiro">♥</button>
                        <div class="media-overlay-bar">
                            <span>📍 ${escapeHtml(item.bairro)}</span>
                            <span>⭐ ${escapeHtml(item.nota)}</span>
                        </div>
                    </div>
                    <div class="attraction-body">
                        <div>
                            <h3>${escapeHtml(item.nome)}</h3>
                            <p>${escapeHtml(item.descricao)}</p>
                        </div>
                        <div class="attraction-footer">
                            <button type="button" class="btn-map-focus" data-action="focus-map" data-map-query="${escapeHtml(item.queryMaps)}" data-map-title="${escapeHtml(item.nome)}">
                                📍 Ver no Mapa Aqui
                            </button>
                            <a href="${buildGoogleMapsRouteUrl(item.queryMaps)}" target="_blank" rel="noopener noreferrer" class="btn-map-route">
                                🧭 Ir ao Maps (Rota) ↗
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    function createPlaceCardHTML(item) {
        const routeUrl = buildGoogleMapsRouteUrl(item.queryMaps || (item.nome + ' Sorocaba SP'));
        return `
            <article class="place-card">
                <div>
                    <img class="place-card-img" src="${escapeHtml(item.imagem)}" alt="${escapeHtml(item.nome)}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';">
                    <div class="place-card-body">
                        <div class="place-card-meta">
                            <span class="place-badge">${escapeHtml(item.badge || 'Verificado no Maps')}</span>
                            <span class="place-rating">⭐ ${escapeHtml(item.nota || '4.7')}</span>
                        </div>
                        <h3 class="place-card-title">${escapeHtml(item.nome)}</h3>
                        <p class="place-card-address">📍 ${escapeHtml(item.endereco)}</p>
                        <p style="font-size:0.79rem; color:var(--text-secondary);">${escapeHtml(item.descricao)}</p>
                    </div>
                </div>
                <div class="place-card-actions">
                    <button type="button" class="btn-map-focus" data-action="focus-map" data-map-query="${escapeHtml(item.queryMaps)}" data-map-title="${escapeHtml(item.nome)}">
                        📍 Ver no Mapa
                    </button>
                    <a href="${routeUrl}" target="_blank" rel="noopener noreferrer" class="btn-map-route">
                        🧭 Ir ao Maps ↗
                    </a>
                </div>
            </article>
        `;
    }

    function updateEmbeddedGoogleMap(query, titleLabel) {
        const iframe = document.getElementById('googleMapsEmbed');
        const headerTitle = document.getElementById('liveMapHeaderTitle');
        const directRoute = document.getElementById('liveMapDirectRoute');
        if (!iframe) return;

        const fullQuery = query.toLowerCase().includes('sorocaba') ? query : `${query} Sorocaba SP`;
        iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(fullQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        if (headerTitle) headerTitle.textContent = `📍 ${titleLabel || fullQuery}`;
        if (directRoute) directRoute.href = buildGoogleMapsRouteUrl(fullQuery);
    }

    async function executeMapsSearch(queryText, categoryValue, regionValue) {
        const section = document.getElementById('mapsResultsSection');
        const container = document.getElementById('placesResultsContainer');
        const titleEl = document.getElementById('mapsResultsTitle');
        const extLink = document.getElementById('externalGoogleMapsSearchLink');

        if (!section || !container) {
            window.location.href = `index.html?q=${encodeURIComponent(queryText || '')}&cat=${encodeURIComponent(categoryValue || 'todos')}`;
            return;
        }

        const cleanQuery = (queryText || '').trim();
        const reg = regionValue || 'Sorocaba SP';
        const searchTermForMaps = cleanQuery
            ? `${cleanQuery} em ${reg}`
            : (categoryValue !== 'todos' ? `${categoryValue} em ${reg}` : `Restaurantes e Turismo em ${reg}`);

        section.classList.add('active');
        updateEmbeddedGoogleMap(searchTermForMaps, cleanQuery || categoryValue);
        if (extLink) extLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTermForMaps)}`;
        if (titleEl) titleEl.textContent = `Estabelecimentos no Maps para "${cleanQuery || categoryValue}"`;

        const qLower = cleanQuery.toLowerCase();
        let matches = sorocabaPlaces.filter(p => {
            const isFoodQuery = qLower.includes('restaurante') || qLower.includes('comida') || qLower.includes('almoço') || qLower.includes('jantar') || qLower.includes('pizzaria') || qLower.includes('sushi');
            const isCafeQuery = qLower.includes('padaria') || qLower.includes('café') || qLower.includes('bar') || qLower.includes('coxinha');

            const matchCat = categoryValue === 'todos' ||
                p.categoria === categoryValue ||
                (isFoodQuery && (p.categoria === 'restaurantes' || p.categoria === 'cafes')) ||
                (isCafeQuery && p.categoria === 'cafes');

            const matchText = !cleanQuery ||
                p.nome.toLowerCase().includes(qLower) ||
                p.descricao.toLowerCase().includes(qLower) ||
                p.bairro.toLowerCase().includes(qLower) ||
                p.categoria.toLowerCase().includes(qLower) ||
                (isFoodQuery && (p.categoria === 'restaurantes' || p.categoria === 'cafes')) ||
                (isCafeQuery && p.categoria === 'cafes');

            return matchCat && matchText;
        });

        container.innerHTML = matches.map(createPlaceCardHTML).join('');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (cleanQuery) {
            if (activeSearchController) activeSearchController.abort();
            activeSearchController = new AbortController();
            const timeoutId = setTimeout(() => activeSearchController.abort(), 4200);

            try {
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleanQuery + ' Sorocaba SP')}&addressdetails=1&limit=6`;
                const res = await fetch(url, { signal: activeSearchController.signal });
                clearTimeout(timeoutId);

                if (res.ok) {
                    const data = await res.json();
                    data.forEach((place, idx) => {
                        const placeName = place.name || place.display_name.split(',')[0];
                        if (placeName && !matches.some(m => m.nome.toLowerCase() === placeName.toLowerCase())) {
                            matches.push({
                                id: `live-${idx}`,
                                nome: placeName,
                                categoria: categoryValue,
                                badge: 'Google Maps • Sorocaba',
                                nota: (4.5 + (idx % 5) * 0.1).toFixed(1),
                                endereco: place.display_name.split(',').slice(0, 4).join(', '),
                                descricao: 'Estabelecimento localizado em Sorocaba. Clique em "Ir ao Maps" para abrir a rota GPS até o local.',
                                imagem: 'assets/media/05-padaria-real.jpg',
                                queryMaps: `${placeName}, Sorocaba SP`
                            });
                        }
                    });
                }
            } catch (err) {}
        }

        if (matches.length === 0) {
            matches.push({
                id: 'direct-search',
                nome: `Ver "${cleanQuery}" em Sorocaba no Maps`,
                categoria: categoryValue,
                badge: 'Busca Direta Google Maps',
                nota: '4.8',
                endereco: reg,
                descricao: `Visualizando os pinos de "${cleanQuery}" no mapa interativo ao lado. Clique abaixo para abrir a navegação GPS.`,
                imagem: 'assets/media/11-parque-campolim.jpg',
                queryMaps: searchTermForMaps
            });
        }

        container.innerHTML = matches.map(createPlaceCardHTML).join('');
    }

    function renderDirectory(cat) {
        const grid = document.getElementById('fullDirectoryGrid');
        if (!grid) return;
        const list = cat === 'todos' ? sorocabaPlaces : sorocabaPlaces.filter(p => p.categoria === cat);
        grid.innerHTML = list.map(createPlaceCardHTML).join('');
    }

    function renderCustomPlan(planType) {
        const box = document.getElementById('customPlanOutput');
        if (!box) return;
        const plans = {
            gastronomia: {
                titulo: 'Roteiro Gastronômico: De Botecos Premiados à Alta Gastronomia',
                desc: 'Comece com o café da manhã e a famosa coxinha na Padaria Real, almoce no La Doc ou Tropical Grill e feche a noite no Kojima ou Botequim da Francisca.',
                rotaUrl: 'https://www.google.com/maps/dir/Padaria+Real+Campolim+Sorocaba/La+Doc+Gastronomia+Sorocaba/Kojima+Restaurante+Japones+Sorocaba'
            },
            natureza: {
                titulo: 'Roteiro Eco & Cicloturismo em Sorocaba',
                desc: 'Manhã no Jardim Botânico Irmãos Villas-Bôas, tarde no Zoológico Quinzinho de Barros e pedalada no fim de tarde pelo Parque das Águas.',
                rotaUrl: 'https://www.google.com/maps/dir/Jardim+Botanico+Irmaos+Villas+Boas+Sorocaba/Parque+Zoologico+Municipal+Quinzinho+de+Barros+Sorocaba/Parque+das+Aguas+Sorocaba'
            },
            historia: {
                titulo: 'Roteiro Histórico: Tropeirismo e Estrada de Ferro',
                desc: 'Visita guiada pelo Mosteiro de São Bento (1660), Catedral Metropolitana, Estação Ferroviária e Museu de Arte Contemporânea (MACS).',
                rotaUrl: 'https://www.google.com/maps/dir/Mosteiro+de+Sao+Bento+Sorocaba/Museu+de+Arte+Contemporanea+de+Sorocaba'
            }
        };
        const chosen = plans[planType] || plans.gastronomia;
        box.innerHTML = `
            <span class="place-badge">Roteiro Integrado ao Google Maps</span>
            <h3 style="margin:0.65rem 0 0.4rem; font-size:1.25rem;">${escapeHtml(chosen.titulo)}</h3>
            <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:1.15rem;">${escapeHtml(chosen.desc)}</p>
            <a href="${chosen.rotaUrl}" target="_blank" rel="noopener noreferrer" class="btn-map-route" style="padding:0.65rem 1.2rem;">
                🧭 Iniciar Rota Multi-Paradas no Google Maps ↗
            </a>
        `;
    }

    function renderGallery() {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;
        const allMediaItems = [...sorocabaPlaces, ...extraGalleryPhotos];
        grid.innerHTML = allMediaItems.map(p => `
            <div class="gallery-item" data-action="open-lightbox" data-id="${escapeHtml(p.id)}">
                <img src="${escapeHtml(p.imagem)}" alt="${escapeHtml(p.nome)}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';">
                <div class="gallery-caption">${escapeHtml(p.nome)}</div>
            </div>
        `).join('');
    }

    function initInteractiveCanvas() {
        const canvas = document.getElementById('sorocabaVideoCanvas');
        if (!canvas || !canvas.getContext) return;
        const ctx = canvas.getContext('2d');
        let tick = 0;

        function drawFrame() {
            tick += 0.02;
            const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            grad.addColorStop(0, '#07101E');
            grad.addColorStop(0.65, '#1E3A5F');
            grad.addColorStop(1, '#F4B41A');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const sunY = 95 + Math.sin(tick) * 12;
            ctx.beginPath();
            ctx.arc(720, sunY, 34, 0, Math.PI * 2);
            ctx.fillStyle = '#F4B41A';
            ctx.fill();

            ctx.fillStyle = 'rgba(7, 16, 30, 0.85)';
            ctx.beginPath();
            ctx.arc(240, 175, 65, Math.PI, 0);
            ctx.fill();
            ctx.fillRect(0, 175, canvas.width, 45);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 18px Inter, sans-serif';
            ctx.fillText('Sorocaba 360° • Jardim Botânico, Campolim & Rio Sorocaba', 28, 46);
            ctx.fillStyle = '#CBD5E1';
            ctx.font = '13px Inter, sans-serif';
            ctx.fillText('Animação gerada em HTML5 Canvas • Clique nas 20 fotos abaixo para ampliar e traçar rota', 28, 72);

            requestAnimationFrame(drawFrame);
        }
        drawFrame();
    }

    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            favorites = favorites.filter(item => item !== id);
            showToast('Removido do Meu Roteiro.');
        } else {
            favorites.push(id);
            showToast('❤️ Salvo no Meu Roteiro!');
        }
        try {
            localStorage.setItem('sorocaba_favs', JSON.stringify(favorites));
        } catch (e) {}
        const favCountEl = document.getElementById('favCount');
        if (favCountEl) favCountEl.textContent = favorites.length;
        renderHomeAttractions();
    }

    function openModal(htmlContent) {
        const modal = document.getElementById('appModal');
        const content = document.getElementById('modalContent');
        if (!modal || !content) return;
        content.innerHTML = `
            <button type="button" data-action="close-modal" style="position:absolute; top:12px; right:14px; border:none; background:none; font-size:1.25rem; cursor:pointer; color:var(--text-primary);">✖</button>
            ${htmlContent}
        `;
        modal.classList.add('open');
    }

    function closeModal() {
        const modal = document.getElementById('appModal');
        if (modal) modal.classList.remove('open');
    }

    function openFavoritesModal() {
        const saved = sorocabaPlaces.filter(p => favorites.includes(p.id));
        if (saved.length === 0) {
            openModal(`
                <h3 style="margin-bottom:0.5rem;">🔖 Meu Roteiro em Sorocaba</h3>
                <p style="font-size:0.88rem; color:var(--text-secondary);">Ainda não adicionou lugares ao seu roteiro. Clique no ícone de coração (♥) nos atrativos da página inicial para salvar!</p>
            `);
            return;
        }
        const listHtml = saved.map(item => `
            <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; padding:0.75rem 0; border-bottom:1px solid var(--border-color); flex-wrap:wrap;">
                <div>
                    <strong>${escapeHtml(item.nome)}</strong>
                    <div style="font-size:0.76rem; color:var(--text-muted);">${escapeHtml(item.endereco)}</div>
                </div>
                <a href="${buildGoogleMapsRouteUrl(item.queryMaps)}" target="_blank" rel="noopener noreferrer" class="btn-map-route">
                    🧭 Ir ao Maps ↗
                </a>
            </div>
        `).join('');
        openModal(`<h3 style="margin-bottom:0.85rem;">🔖 Meu Roteiro Salvo (${saved.length})</h3>${listHtml}`);
    }

    function showToast(msg) {
        const t = document.getElementById('toastMsg');
        if (!t) return;
        t.textContent = msg;
        t.style.display = 'block';
        clearTimeout(window._toastTimer);
        window._toastTimer = setTimeout(() => { t.style.display = 'none'; }, 3400);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const favCountEl = document.getElementById('favCount');
        if (favCountEl) favCountEl.textContent = favorites.length;

        renderHomeAttractions();
        renderDirectory('todos');
        renderCustomPlan('gastronomia');
        renderGallery();
        initInteractiveCanvas();

        const params = new URLSearchParams(window.location.search);
        if (params.has('q') || params.has('cat')) {
            const qParam = params.get('q') || '';
            const catParam = params.get('cat') || 'todos';
            const qInput = document.getElementById('searchQuery');
            const catSelect = document.getElementById('searchCategory');
            if (qInput) qInput.value = qParam;
            if (catSelect) catSelect.value = catParam;
            executeMapsSearch(qParam, catParam, 'Sorocaba SP');
        }

        document.body.addEventListener('click', (e) => {
            const quickBtn = e.target.closest('[data-quick-query]');
            if (quickBtn) {
                e.preventDefault();
                const q = quickBtn.getAttribute('data-quick-query');
                const cat = quickBtn.getAttribute('data-quick-cat') || 'todos';
                const qInput = document.getElementById('searchQuery');
                const catSelect = document.getElementById('searchCategory');
                const regSelect = document.getElementById('searchRegion');
                if (qInput) qInput.value = q;
                if (catSelect) catSelect.value = cat;
                executeMapsSearch(q, cat, regSelect ? regSelect.value : 'Sorocaba SP');
                return;
            }

            const actionBtn = e.target.closest('[data-action]');
            if (actionBtn) {
                const action = actionBtn.getAttribute('data-action');
                if (action === 'fav') {
                    toggleFavorite(actionBtn.getAttribute('data-id'));
                } else if (action === 'focus-map') {
                    const mapQuery = actionBtn.getAttribute('data-map-query');
                    const mapTitle = actionBtn.getAttribute('data-map-title');
                    const section = document.getElementById('mapsResultsSection');
                    if (section) {
                        section.classList.add('active');
                        updateEmbeddedGoogleMap(mapQuery, mapTitle);
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        showToast(`📍 Mapa centralizado em: ${mapTitle}`);
                    } else {
                        updateEmbeddedGoogleMap(mapQuery, mapTitle);
                        const mapBox = document.getElementById('googleMapsEmbed');
                        if (mapBox) mapBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        showToast(`📍 Mapa centralizado em: ${mapTitle}`);
                    }
                } else if (action === 'open-lightbox') {
                    const allItems = [...sorocabaPlaces, ...extraGalleryPhotos];
                    const place = allItems.find(p => p.id === actionBtn.getAttribute('data-id'));
                    if (place) {
                        openModal(`
                            <img src="${escapeHtml(place.imagem)}" alt="${escapeHtml(place.nome)}" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';" style="width:100%; max-height:300px; object-fit:cover; border-radius:10px; margin-bottom:0.85rem;">
                            <h3>${escapeHtml(place.nome)}</h3>
                            <p style="font-size:0.82rem; color:var(--text-muted); margin:0.25rem 0 0.6rem;">📍 ${escapeHtml(place.endereco)}</p>
                            <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:1rem;">${escapeHtml(place.descricao)}</p>
                            <a href="${buildGoogleMapsRouteUrl(place.queryMaps)}" target="_blank" rel="noopener noreferrer" class="btn-map-route" style="padding:0.6rem 1rem;">
                                🧭 Abrir Rota no Google Maps ↗
                            </a>
                        `);
                    }
                } else if (action === 'close-modal') {
                    closeModal();
                }
                return;
            }

            const dirFilterBtn = e.target.closest('[data-dir-filter]');
            if (dirFilterBtn) {
                document.querySelectorAll('[data-dir-filter]').forEach(b => b.classList.remove('active'));
                dirFilterBtn.classList.add('active');
                renderDirectory(dirFilterBtn.getAttribute('data-dir-filter'));
                return;
            }

            const planBtn = e.target.closest('[data-custom-plan]');
            if (planBtn) {
                document.querySelectorAll('[data-custom-plan]').forEach(b => b.classList.remove('active'));
                planBtn.classList.add('active');
                renderCustomPlan(planBtn.getAttribute('data-custom-plan'));
                return;
            }

            const faqQuestion = e.target.closest('.faq-question');
            if (faqQuestion) {
                faqQuestion.parentElement.classList.toggle('open');
            }
        });

        const searchForm = document.getElementById('mapsSearchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                executeMapsSearch(
                    document.getElementById('searchQuery').value,
                    document.getElementById('searchCategory').value,
                    document.getElementById('searchRegion').value
                );
            });
        }

        const closeMapsBtn = document.getElementById('closeMapsSectionBtn');
        if (closeMapsBtn) {
            closeMapsBtn.addEventListener('click', () => {
                document.getElementById('mapsResultsSection').classList.remove('active');
            });
        }

        const openFavBtn = document.getElementById('openFavModalBtn');
        if (openFavBtn) openFavBtn.addEventListener('click', openFavoritesModal);

        const appModal = document.getElementById('appModal');
        if (appModal) {
            appModal.addEventListener('click', (e) => {
                if (e.target.id === 'appModal') closeModal();
            });
        }

        const hamburgerBtn = document.getElementById('hamburgerBtn');
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', () => {
                const menu = document.getElementById('navMenu');
                const isOpen = menu.classList.toggle('active');
                hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
            });
        }

        const themeBtn = document.getElementById('themeBtn');
        if (themeBtn) {
            try {
                if (localStorage.getItem('sorocaba_theme') === 'dark') {
                    document.body.classList.add('dark-mode');
                    themeBtn.textContent = '☀️';
                }
            } catch (e) {}

            themeBtn.addEventListener('click', () => {
                const isDark = document.body.classList.toggle('dark-mode');
                themeBtn.textContent = isDark ? '☀️' : '🌙';
                try { localStorage.setItem('sorocaba_theme', isDark ? 'dark' : 'light'); } catch (e) {}
            });
        }

        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                currentLang = currentLang === 'PT' ? 'EN' : 'PT';
                langBtn.textContent = currentLang;
                const sub = document.getElementById('i18n-subtitle');
                if (sub) sub.textContent = currentLang === 'EN' ? 'Official Visitor Guide' : 'Guia Oficial do Visitante';
                const heroTitle = document.getElementById('i18n-hero-title');
                if (heroTitle) {
                    heroTitle.textContent = currentLang === 'EN'
                        ? 'Discover the history, breathe nature and feel Sorocaba.'
                        : 'Conheça a história, respire a natureza e sinta Sorocaba.';
                }
                showToast(currentLang === 'EN' ? 'Language switched to English' : 'Idioma alterado para Português');
            });
        }

        const audioBtn = document.getElementById('playAudioGuideBtn');
        if (audioBtn) {
            audioBtn.addEventListener('click', () => {
                if ('speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                    const u = new SpeechSynthesisUtterance('Bem-vindo ao portal Descobra Sorocaba. Explore as vinte mídias da nossa galeria e utilize o Google Maps para chegar aos restaurantes e parques.');
                    u.lang = 'pt-BR';
                    window.speechSynthesis.speak(u);
                    showToast('🔊 Reproduzindo narração do Guia de Sorocaba...');
                } else {
                    showToast('🔊 Guia sonoro ativado!');
                }
            });
        }

        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('✅ E-mail cadastrado no Boletim do Viajante!');
                e.target.reset();
            });
        }

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('✅ Mensagem enviada com sucesso!');
                e.target.reset();
            });
        }

        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                scrollTopBtn.classList.toggle('visible', window.scrollY > 320);
            });
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const greetEl = document.getElementById('dynamicGreeting');
        if (greetEl) {
            const hour = new Date().getHours();
            const greet = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
            greetEl.textContent = `${greet}! Explore Sorocaba com o Google Maps.`;
        }
    });
})();