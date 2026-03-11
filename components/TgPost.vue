<script setup>
defineProps({
  channelName: {
    type: String,
    default: 'Нескучный Нетворкинг'
  },
  channelImage: {
    type: String,
    default: '/reference/networking.jpg'
  },
  time: {
    type: String,
    default: '14:32'
  },
  content: {
    type: String,
    default: ''
  },
  reactions: {
    type: Array,
    default: () => [
      { emoji: '👍', count: 100 },
      { emoji: '🔥', count: 25 }
    ]
  }
})
</script>

<template>
  <div class="tg-post">
    <div class="tg-post-header">
      <div class="tg-post-avatar">
        <NuxtImg :src="channelImage" format="webp" quality="80" :alt="channelName" />
      </div>
      <div class="tg-post-author">
        <span class="tg-post-name">{{ channelName }}</span>
        <span class="tg-post-time">{{ time }}</span>
      </div>
    </div>
    <div class="tg-post-content" v-html="content"></div>
    <div class="tg-post-reactions">
      <div v-for="(reaction, index) in reactions" :key="index" class="tg-reaction">
        <span>{{ reaction.emoji }}</span>
        <span>{{ reaction.count }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tg-post {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.2rem;
  max-width: 340px;
  backdrop-filter: blur(10px);
}

.tg-post-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.tg-post-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.tg-post-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tg-post-author {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.tg-post-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
}

.tg-post-time {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
}

.tg-post-content {
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
}

.tg-post-content p {
  margin: 0.5rem 0;
}

.tg-post-content p:first-child {
  margin-top: 0;
}

.tg-post-content p:last-child {
  margin-bottom: 0;
}

.tg-link {
  color: #8b5cf6;
  text-decoration: none;
}

.tg-link:hover {
  text-decoration: underline;
}

.tg-post-reactions {
  display: flex;
  gap: 0.5rem;
}

.tg-reaction {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>
