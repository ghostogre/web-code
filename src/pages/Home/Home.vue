<template>
  <main>
    <home-head></home-head>
    <section class="banner">
      <swiper :options="swiperOptions">
        <template v-for="(img, index) in banner">
          <swiper-slide :key="index">
            <img class="swiper-img" :src="img"/>
          </swiper-slide>
        </template>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </section>
  </main>
</template>

<script>
import HomeHead from '@/components/HomeHead.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    HomeHead,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 3000,
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      banner: [
        'https://wx2.sinaimg.cn/mw690/7147f80aly1fy8wi6p3fqj22402tc7wl.jpg',
        'https://wx3.sinaimg.cn/mw690/7147f80aly1fy8wi8iauaj22402tce85.jpg',
        'https://wx2.sinaimg.cn/mw690/7147f80aly1fy8wi9rvxgj22402tce83.jpg',
        'https://wx4.sinaimg.cn/mw690/7147f80aly1fy8wibrgl7j22tc240qv8.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main, section {
  width: 100%;
  height: 100%;
}

.swiper-img {
  width: 100%;
  height: 100%;
}

.banner {
  width: 100%;
  height: 320px;
}
</style>
