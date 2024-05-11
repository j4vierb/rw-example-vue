<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <h1>Oops!</h1>
  <h2>The {{ resource }} you're looking for is not here.</h2>

  <RouterLink :to="{name: 'event-list'}">Back to the home page!</RouterLink>
</template>