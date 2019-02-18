<template>
  <div class="TopList">
    <h1>This is an TopList page</h1>
    <div v-for="item in tracks" :key="item.id">{{item.name}}</div>
  </div>
</template>
<script>
import {apiTopList } from '../api/api.js'
export default {
  created() {
    this.recommend()
  },
  data() {
    return {
      tracks: [],
      playlist: []
    }
  },
  methods: {
    recommend() {
      apiTopList({
        idx: 1,
        offset: 0,
        limit: 3
      }).then(res => {
        console.log(res);
        this.playlist = res.playlist
        this.tracks = res.playlist.tracks
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .TopList {
    position: relative;
    top: 106px;
    z-index: 10;
    overflow: hidden;
  }
</style>
