<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {apiCommend,apiPersonalized } from '../api/api.js'
export default {
  created() {
    this.recommend()
  },
  data() {
    return {

    }
  },
  methods: {
    recommend() {
      apiPersonalized({

      }).then(res => {
        console.log(res);
        
      })
    }
  }
}
</script>
