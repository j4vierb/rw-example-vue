<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { inject } from 'vue';

const globalStore = inject('globalStore');
</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="globalStore.flashMessage">
      {{ globalStore.flashMessage }}
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{name: 'event-list'}">Events</RouterLink> |
          <RouterLink :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
  </div>

  <RouterView />
</template>

<style>
* {
  font-family: sans-serif;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

h1 {
  text-align: center;
}

#layout {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
