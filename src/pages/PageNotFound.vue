<template>
  <div class="col-full centered">
    <h1 class="heading-large">Not Found</h1>
    <p class="text-large">Oooops, we couldn't find what you were looking for. Why don't you
      <router-link :to="{name: 'PageForum'}">
        go home instead?
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound'
  }
</script>

<style scoped>

.heading-large {
  font-size: 100px;
}

.text-large {
  font-size: 50px;
  font-weight: 100;
}

.centered {
  text-align: center;
}

</style>