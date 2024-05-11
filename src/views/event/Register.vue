<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
});
const router = useRouter();

const register = () => {
  // RouterLink uses router.push to navigate to
  // other view
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
