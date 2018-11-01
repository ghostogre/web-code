<template>
  <div class="column">
    <m-head></m-head>
    <div style="width: 300px; height: 300px;">
      <slide-card></slide-card>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHead from '../components/MHead.vue'
import MFooter from '../components/MFooter.vue'
import MScroll from '../components/MScroll.vue'
import SlideCard from '../components/SlideCard.vue'
export default {
  name: 'Index',
  components: {
    MHead,
    MFooter,
    MScroll,
    SlideCard
  }
}
</script>

<style lang="scss" scoped>

</style>
