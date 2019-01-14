<template>
  <div class="scroll_news">
    <router-link class="jd-news-tit" to="/">
      <img src="http://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"/>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scroll_news {
  background-color: white;
  position: relative;
  margin: 0 0 16px 0;
  padding: 0 10px;
  font-size: 24px;
  height: 60px;

  .jd-news-tit {
    width: 146px;
    height: 32px;
    position: absolute;
    top: 14px;
    left: 16px;
    display: block;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
