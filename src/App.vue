<template>
  <!-- <Login/> -->
  <!-- <div id="app">
    <Login/>
  </div> -->
  <RouterView/>
</template>

<script>
  import Login from "./components/Login.vue"
  export default {
    name: "App",
    components: {Login}
  }
</script>