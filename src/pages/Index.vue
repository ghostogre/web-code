<template>
  <div>
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import Scroll from '@/components/Scroll.vue'
export default {
  name: 'Index',
  components: {
    Tabbar,
    Scroll
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
