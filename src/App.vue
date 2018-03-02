<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TheItems/>
  </div>
</template>

<script>
import HelloWorld from './components/TheItems.vue'

export default {
  name: 'App',
  components: {
    TheItems
  },
  data() {
    return {
      msg: "Hello Galvanize"
      }
  }
}
</script>

<style>
</style>
