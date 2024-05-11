<script setup>
import EventService from '@/services/EventService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const event = ref(null);
const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

onMounted(() => {
  EventService.getEvent(props.id)
    .then((res) => res.json())
    .then((json) => event.value = json)
    .catch((error) => {
      console.log('i\'m in the catch');
      if(error.response && error.reponse.status == 404) {
        router.push({
          name: '404-resource',
          params: {
            resource: 'event'
          }
        });
      } else {
        router.push({ name: 'network-error'});
      }
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>

    <RouterLink
      :to="{ name: 'event-details', params: { id }}"
    >
      Details
    </RouterLink> |

    <RouterLink
      :to="{ name: 'event-register', params: { id }}"
    >
      Register
    </RouterLink> |
    
    <RouterLink
      :to="{ name: 'event-edit', params: { id }}"
    >
      Edit
    </RouterLink>

    <RouterView :event="event" />
  </div>
</template>