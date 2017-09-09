<template lang="html">
  <div class="white elevation-2">

    <v-toolbar flat dense class="orange darken-2" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No Slot Content Define
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped lang="css">
</style>
