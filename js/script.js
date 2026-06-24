// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Navbar com sombra ao rolar =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ===== Link ativo conforme a seção visível =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(sec => observer.observe(sec));

// ===== Validação do formulário de contato =====
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  feedback.hidden = false;

  if (!nome || !emailOk) {
    feedback.style.color = '#d32f2f';
    feedback.textContent = 'Preencha seu nome e um e-mail válido.';
    return;
  }

  // PLACEHOLDER: aqui você integra com seu e-mail/serviço (ex: Formspree, EmailJS).
  // Por enquanto, abrimos o WhatsApp com a mensagem pré-preenchida.
  const msg = encodeURIComponent(
    `Olá! Meu nome é ${nome}. ${form.mensagem.value.trim()}`
  );
  feedback.style.color = '#1a8f3c';
  feedback.textContent = 'Redirecionando para o WhatsApp...';
  window.open(`https://wa.me/554291460261?text=${msg}`, '_blank');
  form.reset();
});

// ===== Lightbox da galeria =====
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');
const lbCounter = document.getElementById('lbCounter');

// Considera só as fotos que carregaram de verdade (ignora placeholders sem imagem)
const galeriaImgs = Array.from(document.querySelectorAll('.galeria-item img'));
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const img = galeriaImgs[index];
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.textContent = img.alt;
  lbCounter.textContent = `${index + 1} / ${galeriaImgs.length}`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showRelative(step) {
  currentIndex = (currentIndex + step + galeriaImgs.length) % galeriaImgs.length;
  openLightbox(currentIndex);
}

galeriaImgs.forEach((img, i) => {
  img.addEventListener('click', () => openLightbox(i));
});

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => showRelative(-1));
lbNext.addEventListener('click', () => showRelative(1));

// Fecha ao clicar no fundo escuro (fora da imagem/botões)
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Navegação por teclado
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showRelative(1);
  if (e.key === 'ArrowLeft') showRelative(-1);
});

// ===== Animação de entrada ao rolar =====
// Marca elementos-alvo e revela quando entram na tela.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.section-head, .escudo-text, .escudo-img, .programa-card, .tabela-wrap, .prof-hero-info, .galeria-item, .contato-info, .contato-form'
);

if (prefersReducedMotion) {
  // Sem animação: garante que tudo apareça normalmente
  revealTargets.forEach(el => el.classList.add('visible'));
} else {
  revealTargets.forEach(el => el.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // anima só uma vez
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => revealObserver.observe(el));
}

// ===== Ano dinâmico no rodapé =====
document.getElementById('year').textContent = new Date().getFullYear();
