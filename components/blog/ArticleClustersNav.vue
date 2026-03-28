<template>
  <aside class="article-clusters-nav">
    <div class="nav-header">
      <span class="nav-title">Разделы блога</span>
    </div>

    <nav class="clusters-list">
      <!-- Кнопка "Все статьи" -->
      <button
        @click="handleClick(null)"
        :class="['cluster-item', { 'cluster-item--active': activeCluster === null }]"
      >
        <div class="cluster-icon cluster-icon--gray">
          <Icon name="fa-solid:grid" class="w-4 h-4" />
        </div>
        <div class="cluster-info">
          <span class="cluster-name">Все статьи</span>
          <span class="cluster-count">{{ articles.length }} статей</span>
        </div>
        <Icon name="fa-solid:chevron-right" class="w-4 h-4 cluster-arrow" />
      </button>

      <button
        v-for="cluster in clusters"
        :key="cluster.key"
        @click="handleClick(cluster.key)"
        :class="['cluster-item', { 'cluster-item--active': activeCluster === cluster.key }]"
      >
        <div class="cluster-icon" :class="`cluster-icon--${cluster.color}`">
          <Icon :name="cluster.icon" class="w-4 h-4" />
        </div>
        <div class="cluster-info">
          <span class="cluster-name">{{ cluster.name }}</span>
          <span class="cluster-count">{{ cluster.count }} статей</span>
        </div>
        <Icon name="fa-solid:chevron-right" class="w-4 h-4 cluster-arrow" />
      </button>
    </nav>

    <!-- CTA блок внизу -->
    <div class="nav-cta">
      <p class="nav-cta-text">Нужна помощь с выбором?</p>
      <a
        href="https://t.me/artemselifanov"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-cta-button"
      >
        <Icon name="fa-brands:telegram" class="w-4 h-4" />
        <span>Связаться</span>
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { articles, getClusters, getClusterName, getClusterColor } from '~/data/blog.js'

const props = defineProps({
  currentCluster: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:cluster'])

const activeCluster = ref(props.currentCluster || null)

// Иконки для кластеров
const clusterIcons = {
  'razrabotka-saytov': 'fa-solid:code',
  'sozdanie-saytov': 'fa-solid:layer-group',
  'mobilnye-prilozheniya': 'fa-solid:mobile-screen',
  'veb-razrabotka': 'fa-solid:browser',
  'iskusstvennyy-intellekt': 'fa-solid:robot',
  'lichnyy-brend': 'fa-solid:user-tag',
  'kontent-marketing': 'fa-solid:pen-nib',
  'networking': 'fa-solid:users',
  'chat-boty': 'fa-solid:comment-dots',
  'telegram-marketing': 'fa-brands:telegram',
  'seo': 'fa-solid:magnifying-glass-chart',
  'monetizatsiya-ekspertnosti': 'fa-solid:chart-line'
}

// Формируем список кластеров с данными
const clusters = computed(() => {
  const clustersList = getClusters()
  
  return clustersList.map(key => ({
    key,
    name: getClusterName(key),
    color: getClusterColor(key),
    icon: clusterIcons[key] || 'fa-solid:folder',
    count: articles.filter(a => a.cluster === key).length
  }))
})

// Обработка клика
const handleClick = (clusterKey) => {
  activeCluster.value = clusterKey
  emit('update:cluster', clusterKey)
}

// Синхронизация с props
watch(() => props.currentCluster, (newVal) => {
  activeCluster.value = newVal || null
})
</script>

<style scoped>
.article-clusters-nav {
  position: fixed;
  top: 100px;
  left: 20px;
  width: 280px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 1.5rem 1.25rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 40;
}

.article-clusters-nav::-webkit-scrollbar {
  width: 6px;
}

.article-clusters-nav::-webkit-scrollbar-track {
  background: transparent;
}

.article-clusters-nav::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 3px;
}

.nav-header {
  padding: 0 0.75rem 1rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.nav-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
}

.clusters-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cluster-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.cluster-item:hover {
  background: #f9fafb;
}

.cluster-item--active {
  background: #f5f3ff;
}

.cluster-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cluster-icon--gray { background: #f9fafb; color: #6b7280; }
.cluster-icon--violet { background: #f5f3ff; color: #7c3aed; }
.cluster-icon--cyan { background: #ecfeff; color: #0891b2; }
.cluster-icon--emerald { background: #ecfdf5; color: #059669; }
.cluster-icon--orange { background: #fff7ed; color: #ea580c; }
.cluster-icon--fuchsia { background: #fdf4ff; color: #c026d3; }
.cluster-icon--purple { background: #faf5ff; color: #9333ea; }
.cluster-icon--red { background: #fef2f2; color: #dc2626; }
.cluster-icon--teal { background: #f0fdfa; color: #14b8a6; }
.cluster-icon--blue { background: #eff6ff; color: #2563eb; }
.cluster-icon--sky { background: #f0f9ff; color: #0284c7; }
.cluster-icon--green { background: #f0fdf4; color: #16a34a; }
.cluster-icon--amber { background: #fffbeb; color: #d97706; }

.cluster-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
}

.cluster-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cluster-count {
  font-size: 0.75rem;
  color: #6b7280;
}

.cluster-arrow {
  color: #9ca3af;
  opacity: 0;
  transform: translateX(-0.25rem);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.cluster-item:hover .cluster-arrow {
  opacity: 1;
  transform: translateX(0);
}

.cluster-item--active .cluster-arrow {
  color: #7c3aed;
  opacity: 1;
}

/* CTA блок */
.nav-cta {
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.nav-cta-text {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.nav-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: #2563eb;
  color: white;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
}

.nav-cta-button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}

/* Скрываем на экранах меньше 1440px */
@media (max-width: 1439px) {
  .article-clusters-nav {
    display: none;
  }
}
</style>
