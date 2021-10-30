<script>
</script>

<template>
  <div class="divide-x divide-black">
    <router-link to="/" class="px-2">Go to Home</router-link>
    <router-link to="/about" class="px-2">Go to About</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
