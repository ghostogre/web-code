<template>
  <main>
    <!-- 头部 -->
    <home-header :opacity="navopacity"></home-header>
    <scroll
      :data="data"
      class="fit"
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
  </main>
</template>

<script>
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
    Scroll
  },
  data () {
    return {
      data: [
        {
          id: 1,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          name: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          is_reduce: 1
        },
        {
          id: 2,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          name: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          is_reduce: 1
        },
        {
          id: 3,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          name: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          is_reduce: 1
        },
        {
          id: 4,
          img_url: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/27823/18/5000/325555/5c370577E8992b2f7/f4e27ce99a57d800.jpg!q70.dpg',
          name: '天艺液晶手写板 彩色光能小黑板 儿童涂鸦 电子手绘板 办公留言便签 手稿绘画板 草稿写字板 练字板 8.5英寸红色 单色笔触',
          is_reduce: 1
        }
      ],
      navopacity: 0
    }
  },
  methods: {
    scrollEvent (pos) {
      console.log(pos.y)
      if (pos.y > 0 || pos.y < 0) {
        this.navopacity = 1
      } else {
        this.navopacity = 0
      }
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
