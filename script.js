// Dois comportamentos da página, cada um explicado no seu bloco abaixo:
// 1) animação de abrir e fechar as perguntas das Dúvidas frequentes;
// 2) botão flutuante do WhatsApp, que some perto dos botões verdes do topo e do Contato.
// Sem este script tudo continua funcionando: as perguntas abrem sem animação e o botão fica sempre visível.
// Ele fica num arquivo separado (e não dentro do index.html) para a regra de segurança
// do site (Content-Security-Policy, no arquivo _headers) poder bloquear scripts embutidos.

// --- 1) Dúvidas frequentes ---
document.querySelectorAll('.faq details').forEach(function (item) {
  var pergunta = item.querySelector('summary');
  var resposta = item.querySelector('.faq-resposta');
  var animando = false;

  pergunta.addEventListener('click', function (evento) {
    // Quem pediu ao sistema para reduzir animações vê a pergunta abrir na hora
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !resposta.animate) return;
    evento.preventDefault();
    if (animando) return;
    animando = true;

    if (item.open) {
      // Fechando: encolhe a resposta até zero e só então fecha
      item.classList.add('fechando');
      var altura = resposta.offsetHeight;
      resposta.animate(
        [{ height: altura + 'px', opacity: 1 }, { height: '0px', opacity: 0 }],
        { duration: 260, easing: 'ease' }
      ).onfinish = function () {
        item.open = false;
        item.classList.remove('fechando');
        animando = false;
      };
    } else {
      // Abrindo: abre e cresce a resposta a partir de zero
      item.open = true;
      var alturaFinal = resposta.offsetHeight;
      resposta.animate(
        [{ height: '0px', opacity: 0 }, { height: alturaFinal + 'px', opacity: 1 }],
        { duration: 260, easing: 'ease' }
      ).onfinish = function () { animando = false; };
    }
  });
});

// --- 2) Botão flutuante do WhatsApp ---
// Fica escondido enquanto os botões verdes do topo (hero) ou do Contato
// estão aparecendo na tela, para não ter dois botões iguais lado a lado. Aparece quando a pessoa rola para longe deles.
// Sem este script (ou em navegador antigo), o botão simplesmente fica sempre visível.
(function () {
  var flutuante = document.querySelector('.zap-flutuante');
  var alvos = document.querySelectorAll('.hero .botoes, .contato .botoes');
  if (!flutuante || !alvos.length || !('IntersectionObserver' in window)) return;

  var naTela = new Set();   // quais grupos de botões estão visíveis agora
  var observador = new IntersectionObserver(function (mudancas) {
    mudancas.forEach(function (m) {
      if (m.isIntersecting) naTela.add(m.target); else naTela.delete(m.target);
    });
    flutuante.classList.toggle('escondido', naTela.size > 0);
  });
  alvos.forEach(function (alvo) { observador.observe(alvo); });
})();

// --- 3) Animações de entrada ---
// Os blocos abaixo do topo aparecem suavemente (sobem um pouco e surgem) quando a pessoa rola até eles.
// Itens de uma mesma lista entram em cascata, um logo depois do outro.
// Quem pediu ao sistema para reduzir animações não vê efeito nenhum. Sem o script, tudo aparece normalmente,
// porque o CSS só esconde os blocos quando a página tem a classe "anima", que é colocada aqui.
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var seletores = [
    '.secao > h2', '.faixa-miolo > h2', '.quem-texto', '.duvidas-intro',   // títulos e textos de abertura
    '.lista li', '.etapas li', '.galeria .foto', '.quem-fatos li',        // listas: entram em cascata
    '.faq', '.contato-principal', '.contato-info'
  ];
  var blocos = document.querySelectorAll(seletores.join(','));
  document.documentElement.classList.add('anima');

  blocos.forEach(function (bloco) {
    // Atraso da cascata: a posição do item entre os irmãos (no máximo 3 passos de 0,05 s, quase imperceptível)
    var posicao = Array.prototype.indexOf.call(bloco.parentNode.children, bloco);
    bloco.style.setProperty('--atraso', (posicao % 3) * 0.05 + 's');
    bloco.classList.add('revela');
  });

  var observador = new IntersectionObserver(function (mudancas) {
    mudancas.forEach(function (m) {
      if (!m.isIntersecting) return;
      m.target.classList.add('visivel');
      observador.unobserve(m.target);   // anima uma vez só; depois fica sempre visível
    });
  }, { rootMargin: '0px 0px -2% 0px' });   // começa assim que o bloco encosta na tela
  blocos.forEach(function (bloco) { observador.observe(bloco); });
})();
