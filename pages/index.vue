<template>
  <div class="flex flex-col container mx-auto mt-10 px-4 md:px-0 gap-6 md:gap-10">
    <!-- <card-news 
      v-for="blog in blogs"
      :key="blog"
    /> -->
    <div class="animate-pulse flex space-x-4 w-full">
      <div class="bg-blue-100 h-screen w-full mx-auto mb-10"></div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      blogs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }
})
</script>
