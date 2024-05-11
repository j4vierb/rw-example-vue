# Vue Router in VueJS

1. How to read **query parameters** off the URL?

From the html template we can use `$route.query.page`. From the component code we can use `useRoute` from `vue-router` and for example `const page = computed(() => route.query.page)`. 

2. How to read parameters from the URL?

Using `Route Parameter`:

```js
const routes = [
  {
    path: '/events/:page',
    component: Events,
    props: true // (2) define props 
  }
]
```

```vue
<script>
const props = defineProps({
  page: {
    required: true,
    type: String
  }
});
</script>

<template>
<!-- (1) in the template we can use -->
<h1>{{ $route.params.page }}</h1>
<!-- (2) using props -->
<h1>{{ page }}</h1>
</template>
```


3. Is posible to configure the component from the router?

Yes, for example:

```js
const routes = [
  {
    path: '/events/:page',
    component: Events,
    props: { showExtra: true }
  }
]
```

```vue
<script>
const props = defineProps({
  showExtra: {
    required: true,
    type: Boolean
  }
});
</script>

<template>
<h1 v-if="showExtra">Hello!</h1>
</template>
```

4. How to transform query parameters?

For example, if you have `http://localhost:8080/?e=true` the query parameter is `e=true` but you want to send `showExtra=true` to the component you can do this:

```js
const routes = [
  {
    path: '/events/:page',
    component: Events,
    props: (route) => ({ showExtra: route.query.e })
  }
]
```
