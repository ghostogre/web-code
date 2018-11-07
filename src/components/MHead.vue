<template>
  <header :class="['tabbar-theme', 'white', 'flex-row', 'align-center']" id="top-nav">
    <span></span>
    <form action="#">
      <div class="header-search-box"></div>
    </form>
    <div>登录</div>
  </header>
</template>

<script>
export default {
  name: 'm-head',
  props: {
    isScroll: Boolean,
    default: true
  }
}
</script>

<style lang="scss" scoped>
  #top-nav {
    height: 44px;
    font-size: 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 15;

    & > span {
      width: 20px;
      height: 18px;
      margin: 0 0 0 15px;
      background: url(../assets/common/bars.png) no-repeat;
      background-size: 100% 100%;
    }

    form {
      margin: 0 20px 0 50px;
    }
  }
</style>
