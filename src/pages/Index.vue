<template>
  <div>
    <m-head></m-head>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHead from '../components/MHead.vue'
import MFooter from '../components/MFooter.vue'
import MScroll from '../components/MScroll.vue'
export default {
  name: 'Index',
  components: {
    MHead,
    MFooter,
    MScroll
  }
}
</script>

<style lang="scss" scoped>

</style>
