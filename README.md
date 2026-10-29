# Descubra Sorocaba

Projeto acadêmico de **Web Design (Facens)** — Portal turístico, cultural e gastronômico da cidade de Sorocaba (SP), desenvolvido para conectar moradores e visitantes aos principais parques, centros históricos, padarias e restaurantes da cidade com rotas integradas ao **Google Maps**.

---

## 📌 Sobre o Projeto

O **Descubra Sorocaba** foi idealizado para oferecer uma navegação rápida, limpa e intuitiva pelos principais pontos de interesse de Sorocaba. Assim como uma plataforma de catálogo moderna, o site organiza os estabelecimentos e atrações por categorias, apresenta informações essenciais de endereço e avaliação, e permite traçar rotas diretas ou salvar locais favoritos na barra de tarefas do topo.

- **Repositório:** `https://github.com/gabrielgrazioliantunes-prog/DescubraSorocaba`
- **Instituição:** Centro Universitário Facens – Web Design (2026)
- **Autor:** Gabriel Grazioli Antunes

---

## 🖥️ Páginas do Site

1. **Início (`index.html`):**
   - Destaque principal com chamada para ação e fotografia do Jardim Botânico Irmãos Villas-Bôas.
   - Bloco de citação institucional e seção **Experiências** dividida nos três pilares da cidade (*Parques & Ciclovias*, *Gastronomia & Bares* e *Cultura & Memória*).
   - Grade com os **12 locais em destaque** de Sorocaba com botão de favoritos (`♥`), visualização ampliada (*Lightbox*) e link direto de rota no Google Maps.
   - Seção de suporte ao visitante (*"Estamos aqui para ajudar"*) com atalhos para WhatsApp e página de atendimento.
2. **Explorar (`explorar.html`):**
   - Barra de pesquisa em tempo real por nome, bairro ou especialidade.
   - Filtros dinâmicos por categoria (*Todos*, *Restaurantes*, *Padarias & Bares*, *Parques* e *História & Museus*).
   - Mapa interativo do Google Maps integrado que centraliza automaticamente no estabelecimento selecionado.
3. **Roteiros (`roteiros.html`):**
   - Sugestões de itinerários prontos para o fim de semana (*Sorocaba em 48 Horas*, *Caminho dos Tropeiros*, *Dia Verde & Ciclovias* e *Rota Gastronômica*) com múltiplas paradas configuradas no Google Maps.
4. **Galeria (`galeria.html`):**
   - Catálogo visual com **20 fotografias** dos pontos turísticos, parques, arquitetura e gastronomia de Sorocaba, com abertura em modal *Lightbox*.
5. **Sobre Nós (`info.html`):**
   - Informações institucionais do projeto, endereço da **Casa do Turista (Av. Antônio Carlos Comitre, Parque Campolim, 50 – Sorocaba/SP)**, telefones úteis de emergência, perguntas frequentes (FAQ) e formulário de contato/sugestões.

---

## ⚙️ Funcionalidades e Interatividade

- **Barra de Tarefas no Topo:** Integrada ao canto superior direito do cabeçalho, permitindo:
  - Gerenciar um **Checklist de Tarefas do Passeio** (`✅ Tarefas`) com adição, conclusão e exclusão de itens salvos em `localStorage`.
  - Consultar a lista rápida de **Lugares Salvos** (`♥ Salvos`) com link direto para o GPS.
  - Alternar entre **Tema Claro e Tema Escuro** (`🌓 Tema`) com persistência no navegador.
- **Transições em CSS:**
  - Navegação fluida entre páginas (`@view-transition` e `@keyframes pageFadeIn`).
  - Entrada em cascata das seções e cartões (`@keyframes sectionOpen` e `@keyframes cardOpen`) e revelação progressiva na rolagem (*Scroll Reveal* via `IntersectionObserver`).
- **Integração com Google Maps:**
  - Atualização dinâmica do `iframe` do mapa na página *Explorar* e geração automática de rotas (`https://www.google.com/maps/dir/`).
- **Modal Lightbox:**
  - Ampliação interativa ao clicar na fotografia de qualquer cartão do site.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação acessível com `<header>`, `<nav>`, `<section>`, `<article>` e `<footer>`.
- **CSS3:** Variáveis customizadas (`:root`), *CSS Grid*, *Flexbox*, *Media Queries* para responsividade completa, animações (`@keyframes`) e paleta temática de turismo.
- **JavaScript (ES6+):** Manipulação de DOM, filtros de busca em tempo real, gerenciamento de estado no `localStorage` (favoritos, tarefas e tema) e integração com mapas.
- **Google Fonts:** Tipografias `Montserrat` e `Poppins`.

---

## 📂 Estrutura de Pastas

```text
DescubraSorocaba/
├── index.html
├── explorar.html
├── roteiros.html
├── galeria.html
├── info.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── media/
        ├── 01-jardim-botanico.jpg
        ├── 02-zoo-quinzinho.jpg
        ├── 03-estacao-ferroviaria.jpg
        ├── 04-parque-das-aguas.jpg
        ├── 05-padaria-real.jpg
        ├── 06-Hioki-restaurante.jpg
        ├── 07-botequim-francisca.jpg
        ├── 08-tropical-grill.jpg
        ├── 09-la-doc-gastronomia.jpg
        ├── 10-bar-do-alemao.jpg
        ├── 11 -parque-campolim-sorocaba.jpg
        ├── 11-parque-campolim.jpg
        ├── 12-mosteiro-sao-bento.jpg
        ├── 13-ciclovia-dom-aguirre.jpg
        ├── 14-parque-chico-mendes.jpg
        ├── 15-paco-municipal.jpg
        ├── 16-biblioteca-infantil.jpg
        ├── 17-catedral-sorocaba.jpg
        ├── 18-parque-biquinha.jpg
        ├── 19-mercado-municipal.jpg
        └── 20-cafeterias-campolim.jpg
```

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/gabrielgrazioliantunes-prog/DescubraSorocaba.git
   ```
2. Abra a pasta do projeto no **VS Code**.
3. Execute com a extensão **Live Server** ou abra o arquivo `index.html` diretamente no navegador.

---

© 2026 Projeto acadêmico de Web Design – **Descubra Sorocaba** • Facens
