<script setup>
import { ref, onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js'

const events = ref(null);
onMounted(() => {
  EventService.getEvents()
    .then((res) => res.json())
    .then((json) => events.value = json)
    .catch((err) => console.error(err));
})
</script>

<template>
  <h1>Events!</h1>
  <div class="events">
    <EventCard :event="event" v-for="event in events" :key="event.id"/>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>