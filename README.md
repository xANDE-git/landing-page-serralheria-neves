<picture>
  <source media="(prefers-color-scheme: dark)" srcset="img/logo-fundo-escuro.svg">
  <img src="img/logo-fundo-claro.svg" alt="Serralheria Neves" width="380">
</picture>

# Serralheria Neves — Landing page

Landing page da Serralheria Neves, de Marcelo Neves, serralheiro e soldador com mais de 20 anos de oficina em São José da Lapa/MG. O objetivo é simples: o cliente entender o que o serviço faz e pedir orçamento pelo WhatsApp ou por telefone.

Projeto feito como primeiro trabalho freelance, em HTML e CSS puros, sem framework e sem build.

## O que tem na página

- Topo com o nome e o telefone
- Apresentação com botões de WhatsApp e ligação
- Faixa com os pontos principais (tempo de oficina, orçamento sem custo, urgência, tipo de cliente)
- Lista de serviços
- Como funciona (chama, orçamento, feito)
- Galeria de trabalhos (ainda com espaços reservados para fotos)
- Sobre o Marcelo
- Dúvidas frequentes (visita para medir, tipos de portão, motor, pintura, cidades atendidas)
- Contato com endereço, região atendida, horário e forma de pagamento
- Botão flutuante de WhatsApp que acompanha a rolagem

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, flexbox, grid, `clamp()`, media query para celular)
- Fontes do Google Fonts: Oswald (títulos) e Archivo (texto)

JavaScript só num pequeno script no fim do `index.html`, que anima o abrir e fechar das Dúvidas frequentes. Sem ele, as perguntas continuam funcionando, só sem animação.

## Estrutura

```
.
├── index.html   # conteúdo da página
├── style.css    # todo o visual
├── img/
│   ├── logo-fundo-claro.svg    # logo para fundos claros
│   ├── logo-fundo-escuro.svg   # logo para fundos escuros (topo e rodapé do site)
│   ├── favicon.svg             # ícone da aba do navegador
│   └── compartilhar.png        # imagem de prévia ao compartilhar o link (1200x630)
└── README.md
```

## Como rodar no computador

1. Clone o repositório ou baixe o ZIP.
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server**, clique com o botão direito no `index.html` e escolha **Open with Live Server**.

Também funciona dando dois cliques no `index.html`, para abrir direto no navegador.

## Como editar

- **Textos, serviços, telefone, horário:** `index.html`
- **Dúvidas frequentes:** para acrescentar uma pergunta, copie um bloco `<details>` inteiro na seção "Dúvidas frequentes" do `index.html` e troque os textos.
- **Cores, fontes, espaçamentos:** `style.css`. As cores e medidas principais estão no bloco `:root` no começo do arquivo.
- **WhatsApp:** os botões usam o link `https://wa.me/5531995404419`. Para mudar o número, troque nos links do `index.html`.
- **Fotos:** em cada caixa de foto, troque o texto reservado (`<figcaption>`) por uma tag `<img>` com a foto e um `alt` descrevendo o que aparece. A foto preenche a caixa sozinha. Use fotos reais do trabalho do Marcelo.
- **Foto do Marcelo:** a seção "Marcelo Neves" está só com texto. Há um comentário no HTML explicando como adicionar uma foto, caso ele aceite.

## Publicação

O site está publicado no Cloudflare (Workers), ligado a este repositório: cada envio para a branch `main` atualiza o site sozinho em um ou dois minutos.

Endereço provisório: https://serralheria-neves.xandemartinsc.workers.dev

O domínio planejado é `serralherianeves.com.br` (Registro.br). Quando ele estiver no ar, trocar o endereço provisório nas tags `og:url`, `og:image` e no bloco `application/ld+json` do `index.html`.

## Pendências

- [ ] Fotos reais dos trabalhos
- [ ] Decidir se vai ter foto do Marcelo
- [ ] Registrar o domínio
- [ ] Depoimentos de clientes (prints de WhatsApp, com autorização)
- [ ] CNPJ no rodapé, se houver

## Contato

Serralheria Neves — Rua Padre José Dias, 350 – Centro, São José da Lapa/MG
WhatsApp e telefone: (31) 99540-4419
