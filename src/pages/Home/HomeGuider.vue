<template>
  <section>
    <section class="graphic-wrapper">
      <ul class="graphic-item floor floor-item">
        <template v-for="(item, index) in floors">
          <li class="graphic-col-3 graphic-item" :key="'graphic_' + index">
            <img :src="item"/>
          </li>
        </template>
      </ul>
      <div>
        <!-- 后台生成的优惠券图片 -->
        <img src="http://m.360buyimg.com/mobilecms/s750x230_jfs/t1/22611/26/4960/50312/5c3848fdEc2fb2101/4d818b0b63928ad1.png!q70.jpg.dpg"/>
      </div>
    </section>

    <section class="relative box-wrapper">
      <div class="container-bg"></div>
      <div class="box-list absolute">
        <template v-for="(item, index) in boxList">
          <div :key="'box_' + index">
            <router-link tag="div" class="box" to="/">
              <img :src="item.icon"/>
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </template>
      </div>
    </section>

    <scroll-news></scroll-news>
  </section>
</template>

<script>
import ScrollNews from '@/components/ScrollNews.vue'
export default {
  components: {
    ScrollNews
  },
  data () {
    return {
      floors: [
        'http://m.360buyimg.com/mobilecms/jfs/t1/26631/34/4984/201770/5c384b9cE3ddce987/3dad6864d45a2ecc.gif',
        'http://m.360buyimg.com/mobilecms/jfs/t1/7860/38/12639/173916/5c384c7bE2f324b22/2421f0d6738d9f4c.gif',
        'http://m.360buyimg.com/mobilecms/jfs/t1/16954/3/4994/199546/5c384d10Ed3e558e8/5bb739290795535b.gif'
      ],
      boxList: [
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp',
          name: '京东超市'
        },
        {
          icon: require('../../assets/images/dpg/haitunquanqiu.png'),
          name: '海屯全球'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
          name: '京东服饰'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp',
          name: '京东生鲜'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
          name: '京东到家'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
          name: '充值缴费'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
          name: '9.9拼购'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
          name: '领券'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
          name: '赚钱'
        },
        {
          icon: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp',
          name: '全部'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.graphic-wrapper {
  z-index: 2;
  margin-top: -28px;
  overflow: hidden;
  position: relative; // Z-index 仅能在定位元素上奏效（例如 position:absolute;）！
  border-radius: 20px 20px 0 0;

  .graphic-item {
    width: 100%;
    display: flex;
    overflow: hidden;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .graphic-col-3 {
    flex: 1;
    height: 200px;
    overflow: hidden;
  }
}

.box-wrapper {
  width: 100%;
  height: 325px;
}

.box-list {
  width: 100%;
  height: 325px;

  .box {
    width: 20%;
    float: left;
    display: block;
    text-align: center;
    img {
      margin-top: 20px;
      height: 80px;
    }
    span {
      display: block;
      margin-top: 12px;
      font-size: 24px;
      color: #666;
    }
  }
}
</style>
