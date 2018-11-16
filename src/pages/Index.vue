<template>
  <m-scroll class="column">
    <m-head></m-head>
    <div id="slide-wrapper" class="column inner-wrapper">
      <slide-card></slide-card>
    </div>
  </m-scroll>
</template>

<script>
import MHead from '../components/MHead.vue'
import MScroll from '../components/MScroll.vue'
import SlideCard from '../components/SlideCard.vue'
export default {
  name: 'Index',
  components: {
    MHead,
    MScroll,
    SlideCard
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  #slide-wrapper {
    width: 100%;
    height: 450px;
    justify-content: center;
    background-color: #565f77;
  }

  .inner-wrapper {
    overflow: hidden;
  }
</style>
