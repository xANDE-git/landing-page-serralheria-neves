// Animação de abrir e fechar as perguntas das Dúvidas frequentes.
// Sem este script, as perguntas continuam funcionando, só que sem animação.
// Ele fica num arquivo separado (e não dentro do index.html) para a regra de segurança
// do site (Content-Security-Policy, no arquivo _headers) poder bloquear scripts embutidos.
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
