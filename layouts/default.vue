<template>
  <div class="flex flex-col relative min-h-screen w-screen overflow-hidden">
    <layout-navbar />
    <Spotlight />
    <layout-navbar-Search />
    <Nuxt />  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
