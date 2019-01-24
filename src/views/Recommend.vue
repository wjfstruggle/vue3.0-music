<template>
  <div class="recommend">
  </div>
</template>

<script>
// @ is an alias to /src
import {apiPersonalized} from '@/api/api.js'
export default {
  created() {
    this.recommend()
  },
  methods: {
    recommend() {
      apiPersonalized({}).then(res => {
        console.log(res);
        
      }) 
    }
  },
}
</script>
