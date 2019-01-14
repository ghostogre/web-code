<template>
  <section class="swiper">
    <swiper :options="swiperOptions">
      <template v-for="(img, index) in banner">
        <swiper-slide :key="index">
          <img class="swiper-img" :src="img"/>
        </swiper-slide>
      </template>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 3000,
        speed: 300,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      banner: [
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/22486/38/5073/95281/5c38399bEfcfd0471/e002793c9a9ab2c4.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/30541/14/156/203904/5c383679E2a053ad1/3332d6abdfc705cb.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/28584/19/4576/303484/5c32f79fE17ef226c/1c66236c7ee7164f.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/20914/23/4868/62295/5c36ef19Ef8025984/4e602a08012db246.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-img {
  width: 750px;
  height: 360px;
  clip: rect(00px, 750px, 360px, 0px); // 一般设计师不会给你需要裁剪大小的图
  // object-fit: cover;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background-color: white;
}

.swiper-pagination {
  margin-bottom: 28px;
}
</style>
