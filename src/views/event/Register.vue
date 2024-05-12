<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const { event } = defineProps({
  event: {
    type: Object,
    required: true
  }
});
const router = useRouter();
// Make the globalStore object
// available for this component
const globalStore = inject('globalStore');

const register = () => {
  // RouterLink uses router.push to navigate to
  // other view
  globalStore.flashMessage = 'You are succesfully registered for ' + event.title;

  // reset the globalStore.flashMessage after 3s
  setTimeout(() => {
    globalStore.flashMessage = '';
  }, 3000);

  router.push({
    name: 'event-details',
    id: props.event.id
  })
};

</script>

<template>
  <p>Register</p>
  <button @click="register">Register me!</button>
</template>
