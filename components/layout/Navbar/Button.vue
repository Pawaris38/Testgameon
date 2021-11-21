<template>
  <div 
   class="uppercase cursor-pointer text-white hover:text-blue-300"
   :class="{'bg-deep-primary p-2 px-6': !link}"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  @Prop({ default: true }) link!: boolean;
}
</script>
