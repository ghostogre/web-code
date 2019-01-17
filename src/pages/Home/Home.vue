<template>
  <main class="fit relative">
    <!-- 头部 -->
    <home-header :opacity="navopacity"></home-header>
    <scroll
      :data="data"
      class="fit"
      ref="scroll"
      :probeType="2"
      :listenScroll="true"
      @scroll="scrollEvent">
      <div>
        <!-- 轮播图 -->
        <home-banner></home-banner>
        <!-- 导航 -->
        <home-guider></home-guider>
        <!-- 商品列表 -->
        <home-goods></home-goods>
        <!-- 为我推荐 -->
        <home-main :goods="data"></home-main>
      </div>
    </scroll>
    <back-top v-show="show" @backtop="scrollTop"></back-top>
  </main>
</template>

<script>
import BackTop from '@/components/BackTop.vue'
import Scroll from '@/components/Scroll.vue'
import HomeHeader from './HomeHeader.vue'
import HomeBanner from './HomeBanner.vue'
import HomeGuider from './HomeGuider.vue'
import HomeGoods from './HomeGoods.vue'
import HomeMain from './HomeMain.vue'
export default {
  components: {
    HomeHeader,
    HomeBanner,
    HomeGuider,
    HomeGoods,
    HomeMain,
    Scroll,
    BackTop
  },
  data () {
    return {
      data: [
        {
          id: 1,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          title: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          price: 269
        },
        {
          id: 2,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          title: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          price: 269
        },
        {
          id: 3,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          title: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          price: 269
        },
        {
          id: 4,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          title: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          price: 269
        }
      ],
      navopacity: 0,
      show: false
    }
  },
  methods: {
    // 滚动时的计算
    scrollEvent (pos) {
      let y = pos.y
      if (y < -30 && this.navopacity === 0) {
        this.navopacity = 1
      } else if (y >= -30 && this.navopacity === 1) {
        this.navopacity = 0
      }
      if (y < -30 && y >= -300 && this.show) {
        this.show = false
      } else if (y < -300 && (!this.show)) {
        this.show = true
      }
    },
    // 回到顶部
    scrollTop () {
      this.$nextTick(() => {
        this.show = false
        this.$refs.scroll.scrollTo(0, 0)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  z-index: 1;
}
</style>
