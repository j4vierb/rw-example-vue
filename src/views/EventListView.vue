<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js'
import { RouterLink } from 'vue-router';

// define props component
// note: this prop is passed through the route
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
});

// initialize states
const events = ref(null);
const numEvents = ref(6);

// like computed in the first tutorial
const page = computed(() => props.page);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(numEvents.value / 2);
  return page.value < totalPages;
});

// once the component is mounted
onMounted(() => {
  // when reactive objects that are accessed inside
  // this function change, run this func. again
  watchEffect(() => {
    // clean events to each page
    // and avoid some server latency
    events.value = null;
    // note that page.value change
    EventService.getEvents(2, page.value)
      .then((res) =>  res.json())
      .then((json) => events.value = json)
      .catch((err) => console.error(err));
  });
});
</script>

<template>
  <h1>Events!</h1>
  <div class="events">
    <EventCard :event="event" v-for="event in events" :key="event.id"/>

    <div class="links">
      <RouterLink
        id="page-prev"
        :to="{name: 'event-list', query: { page: page - 1}}"
        rel="prev"
        v-if="page != 1"
      >
        &#60; Previous
      </RouterLink>

      <div>
        <RouterLink
          id="page"
          :to="{name: 'event-list', query: { page: pageNumber}}"
          :key="pageNumber"
          v-for="pageNumber in 3"
        >
          {{ pageNumber }}
        </RouterLink>
      </div>

      <RouterLink
        id="page-next"
        :to="{name: 'event-list', query: { page: page + 1}}"
        rel="next"
        v-if="hasNextPage"
      >
        Next &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links {
  display: flex;
  width: 290px;
}

.links a {
  text-decoration: none;
  flex: 1;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

#page {
  text-align: center;
  margin: 0 5px;
}
</style>