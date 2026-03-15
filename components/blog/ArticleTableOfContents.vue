<template>
  <aside class="article-toc">
    <div class="toc-header">
      <span class="toc-title">Содержание</span>
    </div>
    
    <nav class="toc-nav">
      <ul class="toc-list">
        <li 
          v-for="item in items" 
          :key="item.id"
          :class="['toc-item', `toc-item--${item.level}`, { 'toc-item--active': activeId === item.id }]"
        >
          <a 
            :href="`#${item.id}`" 
            class="toc-link"
            @click="handleClick($event, item.id)"
          >
            {{ item.text }}
          </a>
          
          <ul v-if="item.children && item.children.length" class="toc-list toc-list--nested">
            <li 
              v-for="child in item.children" 
              :key="child.id"
              :class="['toc-item', 'toc-item--h3', { 'toc-item--active': activeId === child.id }]"
            >
              <a 
                :href="`#${child.id}`" 
                class="toc-link"
                @click="handleClick($event, child.id)"
              >
                {{ child.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const activeId = ref('')

let observer = null
const headingElements = ref([])

// Сбор всех заголовков с их ID
const collectHeadings = () => {
  const headings = []
  const content = document.querySelector('.article-content')
  if (!content) return
  
  const h2s = content.querySelectorAll('h2[id]')
  const h3s = content.querySelectorAll('h3[id]')
  
  h2s.forEach(h2 => {
    headings.push({ element: h2, id: h2.id, level: 'h2' })
  })
  
  h3s.forEach(h3 => {
    headings.push({ element: h3, id: h3.id, level: 'h3' })
  })
  
  // Сортировка по позиции в документе
  headings.sort((a, b) => a.element.offsetTop - b.element.offsetTop)
  headingElements.value = headings
}

// Intersection Observer для отслеживания видимого раздела
const setupObserver = () => {
  const options = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  }
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
      }
    })
  }, options)
  
  headingElements.value.forEach(({ element }) => {
    observer.observe(element)
  })
}

// Плавный скролл к якорю
const handleClick = (event, id) => {
  event.preventDefault()
  
  const element = document.getElementById(id)
  if (!element) return
  
  const headerOffset = 100
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
  
  // Обновляем активный ID сразу после клика
  activeId.value = id
  
  // Добавляем ID в URL без перезагрузки
  if (history.pushState) {
    history.pushState(null, null, `#${id}`)
  }
}

onMounted(() => {
  collectHeadings()
  
  // Небольшая задержка для установки Observer после рендера
  setTimeout(() => {
    setupObserver()
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.article-toc {
  position: fixed;
  top: 100px;
  left: 20px;
  width: 280px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
  font-size: 0.875rem;
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb transparent;
}

.article-toc::-webkit-scrollbar {
  width: 6px;
}

.article-toc::-webkit-scrollbar-track {
  background: transparent;
}

.article-toc::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 3px;
}

.article-toc::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

.toc-header {
  padding: 0 1rem 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.toc-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
}

.toc-nav {
  padding: 0;
}

.toc-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.toc-list--nested {
  margin-left: 0.75rem;
  margin-top: 0.25rem;
}

.toc-item {
  margin: 0;
}

.toc-item--h2 {
  margin-bottom: 0.25rem;
}

.toc-item--h3 {
  margin-bottom: 0.25rem;
}

.toc-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #4b5563;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  line-height: 1.4;
  font-weight: 400;
  word-break: break-word;
}

.toc-link:hover {
  color: #7c3aed;
  background: #f5f3ff;
}

.toc-item--active .toc-link {
  color: #7c3aed;
  font-weight: 500;
  background: #f5f3ff;
}

.toc-item--h3 .toc-link {
  padding-left: 1.5rem;
  font-size: 0.8125rem;
}

/* Скрываем на мобильных и планшетах */
@media (max-width: 1439px) {
  .article-toc {
    display: none;
  }
}
</style>
