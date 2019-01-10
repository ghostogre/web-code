<template>
  <section>
    <home-head></home-head>
    <div>
      <banner></banner>
    </div>
  </section>
</template>

<script>
import HomeHead from '@/components/HomeHead.vue'
import Banner from '@/components/HomeBanner.vue'
export default {
  components: {
    Banner,
    HomeHead
  }
}
</script>

<style lang="scss" scoped>

</style>
