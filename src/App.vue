<template>
  <div id="app">
    <HelpCenter />
  </div>
</template>

<script>
import HelpCenter from '@/views/HelpCenter'

export default {
  name: 'App',
  components: {
    HelpCenter
  }
}
</script>

<style lang="less" scoped>
#app {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 100vw;
  min-height: 100vh;
  // overflow: hidden;
}
</style>
