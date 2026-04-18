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
        <img src="/artem.jpg" alt="Артем Селиванов" class="hero-image" />
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
        <br /><br />
        БАЗА: ГЛОБАЛ<br />
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
</script>
