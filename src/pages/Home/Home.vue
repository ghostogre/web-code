<template>
  <main>
    <!-- 头部 -->
    <home-header></home-header>
    <!-- 轮播图 -->
    <home-banner></home-banner>
    <!-- 导航 -->
    <home-guider></home-guider>
    <!-- 商品列表 -->
    <home-goods></home-goods>
  </main>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeBanner from './HomeBanner.vue'
import HomeGuider from './HomeGuider.vue'
import HomeGoods from './HomeGoods.vue'
export default {
  components: {
    HomeHeader,
    HomeBanner,
    HomeGuider,
    HomeGoods
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
}

.swiper {
  z-index: 1;
}

</style>
