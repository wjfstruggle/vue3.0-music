<template>
  <div id="app">
    <v-header></v-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script type="text/javascript">
import Tab from '@/components/tab/tab';
import VHeader from '@/components/header/header';
export default {
  components: {
    Tab,
    VHeader
  }
}
</script>
<style lang="scss">
</style>
