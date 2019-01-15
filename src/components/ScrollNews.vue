<template>
  <div class="scroll_news flex-row align-center">
    <router-link class="jd-news-tit" to="/">
      <img src="http://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"/>
    </router-link>
    <div class="roll">
      <ul>
        <template v-for="(n, index) in news">
          <li class="flex-row align-center" :key="'new_' + index">
            <div class="jd-red label">{{(index + 1) % 2? 'HOT': '热门'}}</div>
            <div class="flex-1 ellipsis">{{n}}</div>
          </li>
        </template>
      </ul>
    </div>
    <div class="more">更多</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: [
        '红米note7发布',
        'RTX2060发售',
        '红米note7发布'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes ani {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: -45px;
  }
  100% {
    margin-top: -90px;
  }
}

.scroll_news {
  background-color: white;
  position: relative;
  margin: 0 0 16px 0;
  padding: 0 16px;
  font-size: 24px;
  height: 60px;
  overflow: hidden;

  .jd-news-tit {
    width: 140px;
    height: 32px;
    display: block;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .roll {
    flex: 1;
    font-size: 0;
    height: 45px;
    ul {
      width: 100%;
      font-size: 24px;
      margin: 16px 12px;
      animation: ani 8s linear infinite;
      li {
        height: 45px;
      }
      .label {
        width: 64px;
      }
    }
  }
  .more {
    padding: 0 0 0 12px;
    border-left: 1px solid #666;/*no*/
  }
}
</style>
