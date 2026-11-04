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
- Como funciona (pedido, orçamento, instalação)
- Trabalhos realizados (ainda com espaços reservados para fotos)
- Sobre o Marcelo
- Dúvidas frequentes (visita para medir, tipos de portão, motor, pintura, cidades atendidas)
- Contato com endereço, região atendida, horário e forma de pagamento
- Botão flutuante de WhatsApp que acompanha a rolagem

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, flexbox, grid, `clamp()`, media query para celular)
- Fontes Oswald (títulos) e Archivo (texto), hospedadas no próprio site (licença livre SIL OFL). Não depende do Google Fonts, então o IP de quem visita não é enviado ao Google.

JavaScript só no `script.js`, que anima o abrir e fechar das Dúvidas frequentes. Sem ele, as perguntas continuam funcionando, só sem animação. Ele fica num arquivo separado para a regra de segurança do site (CSP) poder bloquear qualquer script embutido no HTML.

## Estrutura

```
.
├── index.html            # conteúdo da página
├── style.css             # todo o visual
├── script.js             # animação das Dúvidas frequentes
├── 404.html              # página de "endereço não encontrado"
├── fonts/
│   ├── oswald.woff2      # fonte dos títulos
│   └── archivo.woff2     # fonte do texto
├── img/
│   ├── logo-fundo-claro.svg    # logo para fundos claros
│   ├── logo-fundo-escuro.svg   # logo para fundos escuros (topo e rodapé do site)
│   ├── favicon.svg             # ícone da aba do navegador
│   └── compartilhar.png        # imagem de prévia ao compartilhar o link (1200x630)
├── favicon.ico           # ícone da aba para navegadores antigos (32 e 48 px)
├── apple-touch-icon.png  # ícone do atalho na tela do iPhone (180x180)
├── robots.txt            # avisa aos buscadores que podem ler o site
├── sitemap.xml           # lista das páginas para os buscadores
├── _headers              # regras de segurança e cache enviadas pelo Cloudflare
├── wrangler.jsonc        # configuração de publicação no Cloudflare
├── .assetsignore         # arquivos do projeto que NÃO vão para o site público
└── README.md
```

> A `404.html` usa caminhos que começam com `/`, então aberta direto no computador ela aparece sem estilo. Online fica normal.

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
- **Fotos:** coloque os arquivos numa pasta `fotos/` e, em cada caixa de foto, troque o texto reservado (`<figcaption>`) por uma tag `<img>`. A foto preenche a caixa sozinha. Use fotos reais do trabalho do Marcelo. Exemplo:

  ```html
  <figure class="foto foto-grande">
    <img src="fotos/portao-correr-preto.jpg"
         alt="Portão de correr preto, com grade vertical, instalado na frente de uma casa"
         width="1200" height="800" loading="lazy">
  </figure>
  ```

  O `alt` descreve o que aparece na foto, para quem usa leitor de tela e para o Google. Evite "foto 1" ou "imagem". `width` e `height` (o tamanho real da foto) evitam que a página "pule" enquanto carrega. `loading="lazy"` só baixa a foto quando a pessoa chega perto dela. Não use `lazy` na foto do topo (hero). Prefira fotos em `.jpg` ou `.webp` com até uns 300 KB cada.
- **Trocar uma foto ou a imagem de compartilhamento:** use um nome de arquivo novo (ex.: `portao-2.jpg`). Os navegadores guardam imagens por 7 dias e o WhatsApp guarda a prévia do link por bastante tempo. Para a imagem de compartilhamento, também dá para mudar o final do endereço em `og:image` para `compartilhar.png?v=2`.
- **Foto do Marcelo:** a seção "Marcelo Neves" está só com texto. Há um comentário no HTML explicando como adicionar uma foto, caso ele aceite.

## Publicação

O site está publicado no Cloudflare (Workers), ligado a este repositório: cada envio para a branch `main` atualiza o site sozinho em um ou dois minutos.

Endereço provisório: https://serralheria-neves.xandemartinsc.workers.dev

O domínio planejado é `serralherianeves.com.br` (Registro.br). Quando ele estiver no ar, procure por `TODO (domínio)` no projeto. Ele aparece em:

- `index.html`: `canonical`, `og:url`, `og:image` e o bloco `application/ld+json`
- `robots.txt` e `sitemap.xml`
- `_headers`: apagar o `#` das linhas do `X-Robots-Tag`, para o endereço provisório sair do Google

A configuração de publicação fica no `wrangler.jsonc`. Se o Cloudflare um dia der erro no build, a versão anterior do site continua no ar. Confira em **Workers & Pages → serralheria-neves → Deployments**.

Se um dia entrar alguma ferramenta de fora (Google Analytics, Cloudflare Web Analytics, mapa embutido, vídeo), o endereço dela precisa ser liberado na linha `Content-Security-Policy` do `_headers`. Senão, o navegador bloqueia.

## Pendências

Antes de divulgar:

- [ ] Trocar as caixas "Foto: portão", "Foto: grade", "Foto: corrimão" e "Foto: portão ou oficina" por fotos reais
- [ ] Rodar o [PageSpeed Insights](https://pagespeed.web.dev/) no endereço publicado (modo celular) e conferir as notas

Quando der:

- [ ] Decidir se vai ter foto do Marcelo
- [ ] Registrar o domínio e seguir os `TODO (domínio)` acima
- [ ] Depoimentos de clientes (prints de WhatsApp, com autorização, sem número nem foto do cliente)
- [ ] CNPJ no rodapé, se houver (procure `TODO (CNPJ)` no `index.html`)
- [ ] Perfil no Google Meu Negócio e link dele no `sameAs` (procure `TODO (Google Meu Negócio)`)
- [ ] Confirmar com o Marcelo os materiais (alumínio, metalon etc.) e virar pergunta nas Dúvidas
- [ ] Atualizar o "© 2026" do rodapé em janeiro de 2027

## Contato

Serralheria Neves — Rua Padre José Dias, 350 – Centro, São José da Lapa/MG
WhatsApp e telefone: (31) 99540-4419
