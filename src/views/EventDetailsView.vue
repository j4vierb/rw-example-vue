<script setup>
import EventService from '@/services/EventService';
import { ref, onMounted } from 'vue';

const event = ref(null);

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

onMounted(() => {
  EventService.getEvent(props.id)
    .then((res) => res.json())
    .then((json) => event.value = json)
    .catch((err) => console.error(err));
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>