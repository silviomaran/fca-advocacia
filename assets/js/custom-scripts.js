/* Lógica para o menu de navegação mobile (Vanilla JS) */
document.addEventListener('DOMContentLoaded', function() {
  const openMenuButton = document.querySelector('.open-menu span');
  const closeMenuButton = document.querySelector('.sidenav .closebtn');

  function openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) sidenav.style.width = "250px";
  }

  function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) sidenav.style.width = "0";
  }

  if (openMenuButton) {
    openMenuButton.addEventListener('click', openNav);
  }

  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', closeNav);
  }
  
  // Inicialização das animações WOW.js
  if (typeof WOW === 'function') {
    new WOW().init();
  }
});


jQuery(document).ready(function($) {

    // --- ATIVAÇÃO DO CARROSSEL DE SERVIÇOS ---
    if ($('.services-carousel').length) {
        $('.services-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
			autoplay: true, // ADICIONADO: Ativa o autoplay
			autoplayTimeout: 6000, // ADICIONADO: Define o tempo para 6 segundos
			autoplayHoverPause: true, // ADICIONADO: Pausa ao passar o mouse por cima
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 }
            }
        });

        // --- INÍCIO DA CORREÇÃO DE ACESSIBILIDADE ---
        // Adiciona um rótulo descritivo para os botões de navegação
        $('.services-carousel .owl-prev').attr('aria-label', 'Anterior');
        $('.services-carousel .owl-next').attr('aria-label', 'Próximo');
        // --- FIM DA CORREÇÃO DE ACESSIBILIDADE ---
    }

    // --- ROLAGEM SUAVE PARA ÂNCORAS DO CARROSSEL DE SERVIÇOS ---
    $('.carousel-anchor').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 120 // -120px para compensar o cabeçalho fixo
            }, 800, function() {
                // Opcional: Adiciona a âncora à URL quando a animação terminar
                // window.location.hash = hash;
            });
        }
    });

    // --- LÓGICA DO FORMULÁRIO DE CONTATO PARA GMAIL ---
    const form = document.getElementById('form-contato-gmail');
    if (form) {
        const DESTINATARIO = 'franciscocardoso@adv.oabsp.org.br';

        function enc(s) {
            return encodeURIComponent(s || '');
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assunto = document.getElementById('assunto').value.trim() || 'Contato via site';
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha os campos obrigatórios: Nome, E-mail e Mensagem.');
                return;
            }

            const corpo = `Olá, Dr. Francisco!\n\nAcessei o site e gostaria de entrar em contato.\nSou ${nome}, e meu e-mail para retorno é ${email}.\n\n📌 Dados do contato:\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone || '-'}\nAssunto: ${assunto}\n\n📝 Mensagem:\n${mensagem}\n\n—\nEnviado automaticamente pelo formulário do site.`;

            const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1' +
                             '&to=' + enc(DESTINATARIO) +
                             '&su=' + enc(assunto) +
                             '&body=' + enc(corpo);

            const win = window.open(gmailUrl, '_blank');
            if (!win) window.location.href = gmailUrl;
        });
    }
    
});
