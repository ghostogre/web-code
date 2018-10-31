<template>
  <header :class="[isScroll && 'tabbar-theme', 'white', 'flex-row', 'align-center']" id="top-nav">
    <span></span>
    <form action="#"></form>
    <div>登录</div>
  </header>
</template>

<script>
export default {
  name: 'm-head',
  props: {
    isScroll: Boolean,
    default: false
  }
}
</script>

<style lang="scss" scoped>
  #top-nav {
    height: 44px;
    font-size: 14px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;

    & > span {
      width: 20px;
      height: 18px;
      margin: 0 0 0 15px;
      background: url(../assets/common/bars.png) no-repeat;
      background-size: 100% 100%;
    }

    form {

    }
  }
</style>
