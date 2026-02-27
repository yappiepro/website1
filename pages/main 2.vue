<template>
  <div ref="pageRoot" class="main-page">
    <div class="noise" aria-hidden="true"></div>
    <div class="halo halo-a" aria-hidden="true"></div>
    <div class="halo halo-b" aria-hidden="true"></div>

    <div class="scroll-progress" aria-hidden="true">
      <span :style="{ width: `${scrollProgress}%` }"></span>
    </div>

    <header class="site-header">
      <div class="container header-inner">
        <a href="/website1/main" class="brand" aria-label="Главная">
          <span class="brand-top">ARTEM SELIFANOV</span>
          <span class="brand-bottom">MEDIA HUB / STORY MODE</span>
        </a>

        <nav class="main-nav" aria-label="Навигация">
          <a href="#about" class="nav-link">Обо мне</a>
          <a href="#topics" class="nav-link">Маршруты</a>
          <a href="#highlights" class="nav-link">Форматы</a>
          <a href="#social" class="nav-link">Контакты</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="about" class="hero section reveal">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="hero-kicker">creative digital ecosystem</p>
            <h1 class="hero-title">
              Сайт, который
              <span>двигается вместе</span>
              <span class="accent">с вашей задачей</span>
            </h1>
            <p class="hero-text">
              Это не статичная визитка, а интерактивный медиахаб. Скролл раскрывает направления работы,
              показывает путь пользователя и ведет к нужному действию.
            </p>

            <div class="hero-actions">
              <a href="#topics" class="btn btn-primary">Начать маршрут</a>
              <a href="https://t.me/artemselifanov" target="_blank" rel="noopener" class="btn btn-ghost">Связаться</a>
            </div>
          </div>

          <div class="hero-stage" @mousemove="onHeroMove" @mouseleave="onHeroLeave">
            <div class="portrait-blob" :style="heroTiltStyle">
              <img src="/reference/main.jpg" alt="Артем Селифанов" class="portrait-image" />
            </div>
            <div class="floating-tag tag-a">Web Dev</div>
            <div class="floating-tag tag-b">Content</div>
            <div class="floating-tag tag-c">Education</div>
          </div>
        </div>
      </section>

      <section id="topics" ref="storySection" class="story section">
        <div class="container story-frame">
          <aside class="story-steps">
            <article
              v-for="(scene, index) in storyScenes"
              :key="scene.title"
              class="step-item"
              :class="{ active: activeScene === index }"
            >
              <p class="step-index">0{{ index + 1 }}</p>
              <h3 class="step-title">{{ scene.title }}</h3>
              <p class="step-text">{{ scene.short }}</p>
            </article>
          </aside>

          <div class="story-sticky">
            <div class="scene-card" :style="sceneStyle">
              <p class="scene-kicker">{{ currentScene.kicker }}</p>
              <h2 class="scene-title">{{ currentScene.title }}</h2>
              <p class="scene-description">{{ currentScene.description }}</p>

              <ul class="scene-points">
                <li v-for="point in currentScene.points" :key="point">{{ point }}</li>
              </ul>

              <div class="scene-actions">
                <a :href="currentScene.href" class="btn btn-primary">Открыть раздел</a>
                <span class="scene-hint">{{ currentScene.hint }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" class="section reveal">
        <div class="container">
          <div class="section-head">
            <p class="section-kicker">content formats</p>
            <h2 class="section-title">Как выглядит контент внутри</h2>
          </div>

          <div class="formats-grid">
            <article v-for="item in highlights" :key="item.title" class="format-card">
              <component :is="item.icon" class="format-icon" aria-hidden="true" />
              <h3 class="format-title">{{ item.title }}</h3>
              <p class="format-text">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="social" class="section reveal">
        <div class="container social-wrap">
          <div class="section-head">
            <p class="section-kicker">connect</p>
            <h2 class="section-title">Площадки и быстрый контакт</h2>
          </div>

          <div class="social-cloud" role="list">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="social-pill"
              role="listitem"
            >
              <component :is="social.icon" class="social-icon" aria-hidden="true" />
              <span>{{ social.name }}</span>
            </a>
          </div>

          <div class="stats-strip">
            <article v-for="fact in profileFacts" :key="fact.label" class="stat-chip">
              <p class="stat-value">{{ fact.value }}</p>
              <p class="stat-label">{{ fact.label }}</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer reveal">
      <div class="container footer-inner">
        <div>
          <p class="footer-name">Артем Селифанов</p>
          <p class="footer-copy">© 2026 Media Hub</p>
        </div>

        <div class="footer-links">
          <a href="mailto:artemselifanov23@gmail.com" class="footer-link">Email</a>
          <a href="https://t.me/artemselifanov" target="_blank" rel="noopener" class="footer-link">Telegram</a>
          <a href="https://github.com/artemselifanov" target="_blank" rel="noopener" class="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Megaphone,
  Newspaper,
  GraduationCap,
  Code2,
  Send,
  Globe,
  Youtube,
  Instagram,
  BookOpen,
  Briefcase,
  PenSquare,
  Layers3,
  Sparkles,
  Rocket
} from 'lucide-vue-next'

const pageRoot = ref(null)
const storySection = ref(null)
const heroTilt = ref({ x: 0, y: 0 })
const activeScene = ref(0)
const scrollProgress = ref(0)
let observer
let ticking = false

const storyScenes = [
  {
    kicker: '01 / PERSONAL BRAND',
    title: 'Личный бренд',
    short: 'Позиционирование и узнаваемость в digital.',
    description: 'Собираем визуальный и контентный каркас бренда, который работает на доверие и рост аудитории.',
    points: ['Формулировка ядра бренда', 'Тон и стиль коммуникации', 'План публикаций и площадок'],
    href: '/website1/blog',
    hint: 'Для экспертов и предпринимателей',
    color: '#ff6f3d'
  },
  {
    kicker: '02 / BLOG',
    title: 'Блог и контент',
    short: 'Гайды, разборы и практические материалы.',
    description: 'Публикации помогают пользователю пройти путь от вопроса к решению и повысить вовлеченность.',
    points: ['Контентные воронки', 'SEO-структура статей', 'Система рубрик'],
    href: '/website1/blog',
    hint: 'Для тех, кто хочет системный контент',
    color: '#2f6fed'
  },
  {
    kicker: '03 / EDUCATION',
    title: 'Обучение',
    short: 'Треки роста навыков с практикой.',
    description: 'Материалы и упражнения, которые дают не просто теорию, а прикладной результат.',
    points: ['Структурные модули', 'Чек-листы и задания', 'Поддержка в процессе'],
    href: '/website1/test',
    hint: 'Для новичков и специалистов',
    color: '#12a66b'
  },
  {
    kicker: '04 / WEB DEVELOPMENT',
    title: 'Веб-разработка',
    short: 'Сайты и веб-приложения под ключ.',
    description: 'От идеи и архитектуры до запуска и масштабирования продукта под задачи бизнеса.',
    points: ['UX/UI и фронтенд', 'Интеграции и автоматизация', 'Релиз и поддержка'],
    href: '/website1/blog/razrabotka-veb-prilozheniy',
    hint: 'Для бизнеса и продуктовых команд',
    color: '#9b4de0'
  }
]

const highlights = [
  { title: 'Глубокие разборы', text: 'Не поверхностные советы, а рабочие сценарии и примеры.', icon: PenSquare },
  { title: 'Системная архитектура', text: 'Связанные маршруты: контент, продукт, коммуникация.', icon: Layers3 },
  { title: 'Креатив + стратегия', text: 'Дизайн и смысл работают вместе, а не по отдельности.', icon: Sparkles },
  { title: 'Запуск в действие', text: 'Каждый раздел ведет к конкретному следующему шагу.', icon: Rocket }
]

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/artemselifanov', icon: Send },
  { name: 'Дзен', href: 'https://dzen.ru/artselifanov', icon: Globe },
  { name: 'YouTube', href: 'https://youtube.com/@artemselifanov?si=H5NozCKrxIhTGmRa', icon: Youtube },
  { name: 'Instagram', href: 'https://www.instagram.com/artselifanov', icon: Instagram },
  { name: 'TenChat', href: 'https://tenchat.ru/artselifanov', icon: BookOpen },
  { name: 'ВКонтакте', href: 'https://vkontakte.ru/karelbusiness', icon: Briefcase }
]

const profileFacts = [
  { value: '8+', label: 'лет в digital' },
  { value: '50+', label: 'реализованных проектов' },
  { value: '10+', label: 'медиаплощадок' },
  { value: '4', label: 'основных маршрута' }
]

const currentScene = computed(() => storyScenes[activeScene.value])

const sceneStyle = computed(() => ({
  '--scene-color': currentScene.value.color
}))

const heroTiltStyle = computed(() => ({
  transform: `rotateX(${heroTilt.value.x}deg) rotateY(${heroTilt.value.y}deg)`
}))

function onHeroMove(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  heroTilt.value = {
    x: (0.5 - y) * 8,
    y: (x - 0.5) * 10
  }
}

function onHeroLeave() {
  heroTilt.value = { x: 0, y: 0 }
}

function handleScroll() {
  const root = document.documentElement
  const maxScroll = root.scrollHeight - window.innerHeight
  scrollProgress.value = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0

  if (storySection.value) {
    const rect = storySection.value.getBoundingClientRect()
    const start = window.innerHeight * 0.15
    const end = window.innerHeight * -2
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
    const index = Math.min(storyScenes.length - 1, Math.floor(progress * storyScenes.length))
    activeScene.value = index
  }

  ticking = false
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll)
    ticking = true
  }
}

onMounted(() => {
  const elements = pageRoot.value?.querySelectorAll('.reveal') || []
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  elements.forEach((el) => observer.observe(el))

  window.addEventListener('scroll', onScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.main-page {
  --bg: #0d1015;
  --bg-soft: #141924;
  --text: #f5f7ff;
  --muted: #b6bfd2;
  --line: rgba(255, 255, 255, 0.15);
  --accent: #2f6fed;
  min-height: 100vh;
  background: radial-gradient(circle at 20% -10%, #24304a 0%, transparent 45%),
    radial-gradient(circle at 90% 10%, #3a2032 0%, transparent 40%),
    var(--bg);
  color: var(--text);
  font-family: 'Manrope', 'Segoe UI', sans-serif;
  position: relative;
  overflow-x: clip;
}

.noise {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.35) 0.4px, transparent 0.4px);
  background-size: 3px 3px;
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

.halo {
  position: fixed;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  filter: blur(96px);
  opacity: 0.22;
  pointer-events: none;
  z-index: 0;
}

.halo-a {
  background: #3c7bff;
  top: -150px;
  right: -100px;
}

.halo-b {
  background: #ff7b3d;
  bottom: -130px;
  left: -120px;
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 40;
  background: rgba(255, 255, 255, 0.08);
}

.scroll-progress span {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #2f6fed, #ff6f3d, #12a66b);
  transition: width 0.15s linear;
}

.container {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.site-header {
  position: sticky;
  top: 3px;
  z-index: 35;
  backdrop-filter: blur(14px);
  background: rgba(13, 16, 21, 0.65);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  min-height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand {
  text-decoration: none;
  color: inherit;
  display: grid;
  gap: 2px;
}

.brand-top {
  font-family: 'Syncopate', 'Avenir Next', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.11em;
}

.brand-bottom {
  font-size: 0.62rem;
  color: var(--muted);
  letter-spacing: 0.12em;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
}

.nav-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.86rem;
  padding: 8px 12px;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #fff;
  background: rgba(47, 111, 237, 0.24);
}

.section {
  padding: 84px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.hero-kicker {
  margin: 0;
  color: #8ec8ff;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.hero-title {
  margin: 14px 0 0;
  font-family: 'Syncopate', 'Avenir Next', sans-serif;
  font-size: clamp(1.75rem, 4.8vw, 3.8rem);
  line-height: 1.05;
}

.hero-title span {
  display: block;
  margin-top: 8px;
}

.hero-title .accent {
  background: linear-gradient(90deg, #ff6f3d, #ffc247);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  margin: 22px 0 0;
  color: #c9d1e2;
  max-width: 60ch;
  line-height: 1.7;
}

.hero-actions {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  min-height: 46px;
  padding: 0 18px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary {
  color: #fff;
  background: linear-gradient(130deg, #2f6fed, #5e90ff);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(47, 111, 237, 0.35);
}

.btn-ghost {
  color: #fff;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
}

.hero-stage {
  position: relative;
  min-height: 370px;
}

.portrait-blob {
  width: min(100%, 360px);
  margin-left: auto;
  border-radius: 34% 66% 64% 36% / 34% 29% 71% 66%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease;
  transform-style: preserve-3d;
}

.portrait-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center 18%;
  display: block;
}

.floating-tag {
  position: absolute;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(10, 13, 18, 0.72);
  backdrop-filter: blur(8px);
  color: #dbe2f2;
  font-size: 0.76rem;
  animation: float 4s ease-in-out infinite;
}

.tag-a {
  left: 6%;
  top: 16%;
}

.tag-b {
  right: 2%;
  top: 10%;
  animation-delay: .8s;
}

.tag-c {
  left: 10%;
  bottom: 14%;
  animation-delay: 1.6s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.story {
  padding-top: 40px;
  min-height: 280vh;
}

.story-frame {
  display: grid;
  grid-template-columns: 0.44fr 0.56fr;
  gap: 20px;
  align-items: start;
}

.story-steps {
  position: sticky;
  top: 110px;
  display: grid;
  gap: 12px;
}

.step-item {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  opacity: 0.55;
  transform: translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.step-item.active {
  opacity: 1;
  transform: translateX(6px);
  border-color: color-mix(in srgb, var(--scene-color, #2f6fed) 66%, #ffffff 34%);
}

.step-index {
  margin: 0;
  font-family: 'Syncopate', 'Avenir Next', sans-serif;
  font-size: 0.62rem;
  color: #8ea0bb;
}

.step-title {
  margin: 10px 0 0;
  font-size: 1.05rem;
}

.step-text {
  margin: 6px 0 0;
  color: #c9d1e2;
  line-height: 1.5;
}

.story-sticky {
  position: sticky;
  top: 110px;
}

.scene-card {
  --scene-color: #2f6fed;
  border: 1px solid color-mix(in srgb, var(--scene-color) 55%, rgba(255, 255, 255, 0.2));
  border-radius: 22px;
  padding: 24px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  box-shadow: 0 26px 42px rgba(0, 0, 0, 0.35);
  transition: border-color 0.45s ease, box-shadow 0.45s ease;
}

.scene-kicker {
  margin: 0;
  color: color-mix(in srgb, var(--scene-color) 70%, #ffffff 30%);
  font-size: 0.72rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.scene-title {
  margin: 12px 0 0;
  font-size: clamp(1.45rem, 2.6vw, 2.4rem);
  line-height: 1.1;
}

.scene-description {
  margin: 14px 0 0;
  color: #cad2e2;
  line-height: 1.66;
}

.scene-points {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.scene-points li {
  position: relative;
  padding-left: 16px;
  color: #e6ecf8;
}

.scene-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.58em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--scene-color);
}

.scene-actions {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.scene-hint {
  color: #ccd5e6;
}

.section-head {
  margin-bottom: 24px;
}

.section-kicker {
  margin: 0;
  color: #8ec8ff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.section-title {
  margin: 10px 0 0;
  font-size: clamp(1.45rem, 2.8vw, 2.35rem);
  line-height: 1.12;
}

.formats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.format-card {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.2s ease;
}

.format-card:hover {
  transform: translateY(-4px);
}

.format-icon {
  width: 20px;
  height: 20px;
  color: #8ec8ff;
}

.format-title {
  margin: 12px 0 0;
  font-size: 1.04rem;
}

.format-text {
  margin: 8px 0 0;
  color: #c9d1e2;
  line-height: 1.55;
}

.social-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.social-pill {
  min-height: 42px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  color: #e4ebf8;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.social-pill:hover {
  transform: translateY(-2px);
  border-color: #2f6fed;
}

.social-icon {
  width: 16px;
  height: 16px;
  color: #8ec8ff;
}

.stats-strip {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.stat-chip {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.03);
}

.stat-value {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 800;
  color: #8ec8ff;
}

.stat-label {
  margin: 8px 0 0;
  color: #c9d1e2;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 28px 0 36px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
}

.footer-name {
  margin: 0;
  font-weight: 700;
}

.footer-copy {
  margin: 6px 0 0;
  color: var(--muted);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.footer-link {
  color: var(--muted);
  text-decoration: none;
}

.footer-link:hover {
  color: #fff;
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid rgba(47, 111, 237, 0.46);
  outline-offset: 2px;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .hero-grid,
  .story-frame {
    grid-template-columns: 1fr;
  }

  .story {
    min-height: auto;
  }

  .story-steps,
  .story-sticky {
    position: static;
  }

  .formats-grid,
  .stats-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .container {
    width: min(1180px, calc(100% - 28px));
  }

  .header-inner {
    min-height: 68px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
  }

  .main-nav {
    justify-content: center;
  }

  .section {
    padding: 58px 0;
  }

  .hero-title {
    font-size: clamp(1.4rem, 10vw, 2.45rem);
  }

  .portrait-image {
    height: 330px;
  }

  .formats-grid,
  .stats-strip {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
