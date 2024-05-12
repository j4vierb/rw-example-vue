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

5. Is posible to do redirections using `useRouter` from `vue-router`. 

Using the path as string: `router.push('/about');`
Path with an object: `router.push({ path: '/about'});`
Named path: `router.push({ name: 'about-path'});`
Dynamic segment: `router.push({ name: 'event-details', params: { id: 3 } });`
Query parameter: `router.push({ name: 'event-details', query: { id: 3 } });` (`/?id=2`)

6. Route meta fields

Include extra information with the routes.

For example, to implement authorization:

```js
// routes.js
{
  path: 'edit',
  name: 'event-edit',
  component: EventEdit,
  meta: { requireAuth: true }
}

...

router.beforeEach((to, from) => {
  NProgress.start();

  const notAuthorized = true;
  if(to.meta.requireAuth && notAuthorized) {
    globalStorage.flashMessage = 'Sorry, you are not authorized to view this page';

    setTimeout(() => {
      globalStorage.flashMessage = '';
    }, 3000);

    // cancel the navegation
    return false;
  }
});
```

**note**: Meta property in route objects gets inherited by children routes. For example, if `/events/` has `authorizationRequired` as `meta` property, then `/events/edit/`, `/events/register/` and `/events/details/` will have that `meta` property.

7. Lazy loading routes

Split parts of our application into different JavaScript files.

Is possible that some routes have their own bundle files.

```js
// routes.js
{
  // route
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue');
}
```

8. Scroll behavior

Make the navigation more user-friendly.

```js
// router.js
const router = createRouter({
  // ...
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
```
