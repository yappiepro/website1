<template>
  <div :class="['body', theme ? `theme-${theme}` : '']">
    <div class="noise-overlay"></div>
    <div class="background-branding">СЕЛИВАНОВ</div>

    <main class="main-grid">
      <div class="header-top-left">
        <h1 class="logo-text">АРТЕМ.С</h1>
        <p class="logo-subtitle">ЦИФРОВАЯ ВИЗИТКА</p>
      </div>

      <div class="header-top-right">
        <p class="est-text">ОСН. 2024</p>
        <p class="vol-text">Т. 01</p>
      </div>

      <div class="hero-image-container">
        <img
          src="/images/artem.jpg"
          alt="Артем Селиванов"
          class="hero-image"
        />
      </div>

      <nav class="nav-links">
        <div 
          class="nav-item"
          @mouseenter="handleMouseEnter('training')"
          @mouseleave="handleMouseLeave"
        >
          <span>01. ОБРАЗОВАНИЕ</span>
          ОБУЧЕНИЕ
        </div>
        <div 
          class="nav-item"
          @mouseenter="handleMouseEnter('yappie')"
          @mouseleave="handleMouseLeave"
        >
          <span>02. ВЕБ & ВАЙБ</span>
          ЯППИ
        </div>
        <div 
          class="nav-item"
          @mouseenter="handleMouseEnter('business')"
          @mouseleave="handleMouseLeave"
        >
          <span>03. МАСТЕРМАЙНД</span>
          ПОРТАЛ
        </div>
      </nav>

      <nav class="secondary-links">
        <div 
          class="nav-item"
          @mouseenter="handleMouseEnter('brand')"
          @mouseleave="handleMouseLeave"
        >
          <span>04. НЕТВОРКИНГ</span>
          БРЕНД
        </div>
        <div 
          class="nav-item blog-item"
          @mouseenter="handleMouseEnter('blog')"
          @mouseleave="handleMouseLeave"
        >
          <span>05. ЧИТАТЬ</span>
          БЛОГ
        </div>
      </nav>

      <div class="meta-block">
        <strong>ЦИФРОВОЙ АРХИТЕКТОР</strong>
        Создаю системы, разбираю алгоритмы и расшифровываю бизнес креаторов.
        <br><br>
        БАЗА: ГЛОБАЛ<br>
        СТАТУС: ОНЛАЙН
      </div>

      <svg class="star-icon" viewBox="0 0 24 24">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
      </svg>

      <footer class="footer-socials">
        <ul class="social-list">
          <li><a href="#" class="social-link">TWITTER / X</a></li>
          <li><a href="#" class="social-link">TELEGRAM</a></li>
          <li><a href="#" class="social-link">INSTAGRAM</a></li>
          <li><a href="#" class="social-link">ПОЧТА</a></li>
        </ul>
        <div class="barcode"></div>
        <div class="id-text">ID: 884-291-00</div>
      </footer>
    </main>
  </div>
</template>

<script setup>
const theme = ref(null)

const handleMouseEnter = (color) => {
  if (color === 'blog') {
    theme.value = 'brand'
  } else {
    theme.value = color
  }
}

const handleMouseLeave = () => {
  theme.value = null
}

// Добавляем шрифты
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600&display=swap'
    }
  ]
})
</script>

<style scoped>
:root {
  --color-bg: #050505;
  --color-text: #FFFFFF;
  --color-accent-training: #D0EE75;
  --color-accent-yappie-1: #38178F;
  --color-accent-yappie-2: #C363A2;
  --color-accent-business: #7501FF;
  --color-accent-brand: #FFFFFF;

  --font-display: 'Anton', sans-serif;
  --font-body: 'Inter', sans-serif;

  --spacing-unit: 1rem;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s var(--ease-out);
  position: relative;
}

.body.theme-training {
  background-color: var(--color-accent-training);
}
.body.theme-training .nav-item {
  color: #000;
}
.body.theme-training .background-branding {
  -webkit-text-stroke: 2px rgba(0,0,0,0.1);
}
.body.theme-training .hero-image {
  filter: grayscale(100%) contrast(100%);
  mix-blend-mode: multiply;
}

.body.theme-yappie {
  background: linear-gradient(135deg, var(--color-accent-yappie-1), var(--color-accent-yappie-2));
}

.body.theme-business {
  background-color: var(--color-accent-business);
}

.body.theme-brand {
  background-color: #FFFFFF;
  color: #000;
}
.body.theme-brand .nav-item,
.body.theme-brand .social-link,
.body.theme-brand .meta-block {
  color: #000;
}
.body.theme-brand .background-branding {
  -webkit-text-stroke: 2px rgba(0,0,0,0.1);
}
.body.theme-brand .barcode {
  background: linear-gradient(
    to right,
    black 2px, transparent 2px,
    transparent 4px, black 4px,
    black 8px, transparent 8px,
    transparent 9px, black 9px,
    black 12px, transparent 12px,
    transparent 14px, black 14px,
    black 18px, transparent 18px,
    transparent 22px, black 22px,
    black 24px, transparent 24px,
    transparent 26px, black 26px,
    black 30px, transparent 30px,
    transparent 34px, black 34px,
    black 36px, transparent 36px,
    transparent 40px, black 40px,
    black 42px, transparent 42px,
    transparent 44px, black 44px,
    black 50px, transparent 50px,
    transparent 54px, black 54px,
    black 58px, transparent 58px
  );
}
.body.theme-brand .star-icon {
  fill: black;
}

.body.theme-blog {
  background-color: #D0EE75;
}
.body.theme-blog .nav-item {
  color: #000;
}
.body.theme-blog .background-branding {
  -webkit-text-stroke: 2px rgba(0,0,0,0.1);
}
.body.theme-blog .hero-image {
  filter: grayscale(100%) contrast(100%);
  mix-blend-mode: multiply;
}

.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr 40vw 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  padding: 2rem;
  position: relative;
  z-index: 10;
}

.background-branding {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: 35vw;
  line-height: 0.8;
  white-space: nowrap;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15);
  z-index: 1;
  pointer-events: none;
  width: 100%;
  text-align: center;
}

.hero-image-container {
  grid-column: 2;
  grid-row: 1 / -1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.hero-image {
  width: 100%;
  height: 85vh;
  object-fit: cover;
  filter: grayscale(100%) contrast(120%);
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  transition: filter 0.5s ease;
}

.header-top-left {
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: 1px;
}

.logo-subtitle {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  opacity: 0.7;
}

.header-top-right {
  grid-column: 3;
  grid-row: 1;
  text-align: right;
  z-index: 20;
}

.est-text {
  font-family: var(--font-body);
  font-weight: 600;
}

.vol-text {
  font-size: 0.7rem;
  opacity: 0.6;
}

.nav-links {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  z-index: 20;
}

.secondary-links {
  grid-column: 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  z-index: 20;
  text-align: right;
}

.nav-item {
  font-family: var(--font-display);
  font-size: 3.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  line-height: 0.9;
  position: relative;
  transition: transform 0.3s var(--ease-out), color 0.3s;
  mix-blend-mode: difference;
  display: block;
}

.nav-item span {
  display: block;
  font-size: 0.8rem;
  font-family: var(--font-body);
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-bottom: 0.2rem;
  opacity: 0.7;
}

.nav-item:hover {
  transform: translateX(20px);
  font-style: italic;
}

.blog-item {
  font-size: 2.5rem;
  opacity: 0.5;
}

.meta-block {
  grid-column: 1;
  grid-row: 3;
  font-size: 0.75rem;
  line-height: 1.4;
  opacity: 0.8;
  max-width: 200px;
  letter-spacing: 0.02em;
}

.meta-block strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.footer-socials {
  grid-column: 3;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
}

.social-list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.social-link {
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.social-link:hover {
  border-bottom: 1px solid white;
}

.barcode {
  width: 200px;
  height: 40px;
  background: linear-gradient(
    to right,
    white 2px, transparent 2px,
    transparent 4px, white 4px,
    white 8px, transparent 8px,
    transparent 9px, white 9px,
    white 12px, transparent 12px,
    transparent 14px, white 14px,
    white 18px, transparent 18px,
    transparent 22px, white 22px,
    white 24px, transparent 24px,
    transparent 26px, white 26px,
    white 30px, transparent 30px,
    transparent 34px, white 34px,
    white 36px, transparent 36px,
    transparent 40px, white 40px,
    white 42px, transparent 42px,
    transparent 44px, white 44px,
    white 50px, transparent 50px,
    transparent 54px, white 54px,
    white 58px, transparent 58px
  );
}

.id-text {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  margin-top: 0.5rem;
}

.star-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  fill: white;
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from { transform: translateX(-50%) rotate(0deg); }
  to { transform: translateX(-50%) rotate(360deg); }
}

@media (max-width: 1024px) {
  .main-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto auto;
    padding: 1.5rem;
  }
  .hero-image-container {
    grid-column: 1;
    grid-row: 2;
    opacity: 0.4;
  }
  .background-branding {
    font-size: 50vw;
    writing-mode: vertical-rl;
  }
  .nav-links, .secondary-links {
    grid-column: 1;
    align-items: flex-start;
    text-align: left;
  }
  .footer-socials {
    grid-column: 1;
    grid-row: 4;
    align-items: flex-start;
    margin-top: 2rem;
  }
  .header-top-right {
    grid-column: 1;
    grid-row: 1;
    text-align: left;
    margin-top: 1rem;
  }
  .header-top-left {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>
