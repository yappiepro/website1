<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-group">
      <label for="name">Имя</label>
      <input 
        id="name" 
        v-model="form.name" 
        type="text" 
        placeholder="Ваше имя"
        name="name"
        required
      />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input 
        id="email" 
        v-model="form.email" 
        type="email" 
        placeholder="example@mail.ru"
        name="email"
        required
      />
    </div>

    <div class="form-group">
      <label for="message">Сообщение</label>
      <textarea 
        id="message" 
        v-model="form.message" 
        rows="5"
        placeholder="Ваше сообщение..."
        name="message"
        required
      ></textarea>
    </div>

    <button type="submit" :disabled="isSubmitting" class="submit-btn">
      {{ isSubmitting ? 'Отправка...' : 'Отправить заявку' }}
    </button>

    <div v-if="success" class="success-message">
      ✅ Заявка отправлена! Свяжусь в ближайшее время.
    </div>

    <div v-if="error" class="error-message">
      ❌ Ошибка: {{ error }}
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const success = ref(false)
const error = ref('')

// Formspark Form ID
const FORMSPARK_ID = 'fKhtz7o3v'
const FORMSPARK_URL = `https://submit.formspark.io/${FORMSPARK_ID}`

async function submitForm() {
  isSubmitting.value = true
  error.value = ''
  success.value = false

  try {
    // Отправляем как form data (не JSON)
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)

    const response = await fetch(FORMSPARK_URL, {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (response.ok || result.success !== undefined) {
      success.value = true
      form.value = { name: '', email: '', message: '' }
    } else {
      error.value = result.message || 'Ошибка отправки'
    }
  } catch (e) {
    console.error('Formspark error:', e)
    error.value = 'Ошибка соединения с сервером'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.95rem;
  color: #374151;
}

.form-group input,
.form-group textarea {
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 1rem 2rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
}

.submit-btn:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.success-message,
.error-message {
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
}

.success-message {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #86efac;
}

.error-message {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}
</style>
