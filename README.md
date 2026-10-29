# Descubra Sorocaba

Projeto acadêmico de Web Design – Guia turístico, gastronômico e cultural de Sorocaba (SP) com rotas integradas ao Google Maps.

## Estrutura do Projeto
- `index.html`: Página inicial com destaque principal, citação, eixos temáticos, catálogo de 12 locais e canais de contato.
- `explorar.html`: Catálogo com busca rápida, filtro por categorias e mapa interativo.
- `roteiros.html`: Sugestões de roteiros de fim de semana com rotas multi-paradas no Google Maps.
- `galeria.html`: Tour visual do pôr do sol em alta definição e galeria com as 20 fotografias de Sorocaba.
- `info.html`: Informações práticas ao visitante, dúvidas frequentes e formulário de contato.
- `assets/css/style.css`: Folha de estilos utilizando tipografia `Poppins` e `Montserrat`.
- `assets/js/main.js`: Script de filtros, integração com o mapa e renderização em alta definição do pôr do sol.

## Arquitetura de Diretorios
- index.html, explorar.html, oteiros.html, galeria.html, info.html`n- ssets/css/style.css: Folha de estilos modular
- ssets/js/main.js: Motor de busca, mapas e interatividade
- ssets/media/: Acervo com 20 fotografias locais de Sorocaba

## Integracao com Google Maps e Rotas GPS
O portal conta com atualizacao dinamica de iframe do Google Maps e links diretos para navegacao GPS ponto a ponto em Sorocaba.

## Acessibilidade e Usabilidade
- Alternancia de tema Claro/Escuro persistente via localStorage`n- Sintese de voz nativa (Web Speech API) para audio-guia
- Navegacao por teclado com suporte a tecla Escape e foco visivel

## Como Executar Localmente
1. Clone o repositorio: git clone https://github.com/gabrielgrazioliantunes-prog/DescubraSorocaba.git`n2. Abra a pasta no VS Code e inicie o arquivo index.html no navegador.
