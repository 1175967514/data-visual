<template>
  <div id="app">
    <qcs />
  </div>
</template>

<script>
import qcs from './views/qcs'
export default {
  name: 'App',
  components: {
    qcs
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
