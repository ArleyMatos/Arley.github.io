# Portfólio Arley Matos — Esboço para GitHub Pages

Este é um esboço inicial de portfólio estático, pensado para rodar direto no **GitHub Pages** com **HTML + CSS + JavaScript puro**.

A proposta do site é fugir do modelo de currículo online tradicional. Ele organiza a trajetória em três camadas:

1. **Quem sou** — apresentação curta e posicionamento profissional.
2. **Competências aplicadas** — cards clicáveis com evidências, ferramentas e projetos relacionados.
3. **Linha do tempo** — experiências, projetos, publicações e serviços filtráveis.

## Estrutura dos arquivos

```txt
portfolio-arley-esboco/
├── index.html
├── projetos.html
├── servicos.html
├── contato.html
├── README.md
└── assets/
    ├── css/
    │   ├── style.css
    │   └── responsive.css
    ├── js/
    │   ├── data.js
    │   └── main.js
    ├── img/
    │   ├── decoracao/
    │   ├── perfil/
    │   ├── projetos/
    │   └── icones/
    └── docs/
        └── certificados/
```

## Onde editar o conteúdo

O principal arquivo para editar é:

```txt
assets/js/data.js
```

Nele estão cadastrados:

- competências;
- evidências;
- projetos;
- linha do tempo;
- serviços;
- tecnologias;
- relações entre competências e projetos.

Na prática, você cadastra uma vez no `data.js`, e o site reaproveita essas informações na Home, Projetos, Linha do tempo e Popups.

## Onde editar o visual

Os arquivos de estilo estão em:

```txt
assets/css/style.css
assets/css/responsive.css
```

A paleta principal está no início de `style.css`, dentro do `:root`.

```css
:root {
  --navy-950: #031b36;
  --navy-900: #052f5f;
  --blue-600: #005b96;
  --cyan-500: #00a8e8;
  --orange-500: #f59e0b;
}
```

## Como trocar sua foto

O site está usando um avatar provisório em:

```txt
assets/img/perfil/arley-placeholder.svg
```

Para usar sua foto real:

1. Coloque a imagem em `assets/img/perfil/`.
2. Exemplo: `arley-perfil.png`.
3. No `index.html`, troque:

```html
<img src="assets/img/perfil/arley-placeholder.svg" alt="Foto ou avatar de Arley Matos" />
```

por:

```html
<img src="assets/img/perfil/arley-perfil.png" alt="Foto de Arley Matos" />
```

## Como publicar no GitHub Pages

### Opção 1 — Repositório com nome comum

1. Crie um repositório no GitHub, por exemplo:

```txt
portfolio-arley
```

2. Envie todos os arquivos desta pasta para o repositório.
3. No GitHub, entre em:

```txt
Settings > Pages
```

4. Em **Build and deployment**, selecione:

```txt
Source: Deploy from a branch
Branch: main
Folder: /root
```

5. Salve e aguarde o link ser gerado.

### Opção 2 — Site principal do usuário

Crie um repositório com o formato:

```txt
seuusuario.github.io
```

Nesse caso, o site ficará disponível em:

```txt
https://seuusuario.github.io
```

## O que ajustar depois

Sugestões de evolução:

- substituir imagens SVG provisórias por fotos reais dos projetos;
- adicionar links reais para GitHub, LinkedIn, artigos e certificados;
- conectar o formulário da página de contato com Formspree ou Google Forms;
- criar páginas individuais para os projetos mais fortes;
- melhorar animações da linha do tempo;
- criar uma versão com domínio próprio.

## Observação

Este é um esboço funcional. A arquitetura já foi pensada para crescer sem virar bagunça: dados centralizados, visual separado e componentes reaproveitados.
