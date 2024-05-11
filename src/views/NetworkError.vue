<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div>
    <h1>Uh-Oh!</h1>

    <h3>Plase take a breath and <a href="#" @click="$router.go(-1)">Click here</a> to try again.</h3>
  </div>
</template>