<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
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
