<script setup>

defineProps({
  menus: Object
})

</script>
<template>
  <v-list density="compact" >
    <v-list-item-group color='primary' mandatory
      style="display:flex"
    >
      <v-list-item
        v-for="(menu, i) in menus"
        :key="i"
        link
        :title="menu.title"
        :to="{path:menu.to}"
      ></v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<style scoped>
</style>