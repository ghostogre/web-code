<template>
  <div id="pages">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'Index',
  components: {
    Tabbar
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#pages {
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;
}
</style>
