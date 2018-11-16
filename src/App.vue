<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>

    <footer class="footer">
      <router-link tag="div" to="/" class="footer-item column" exact>
        <p class="icon">
          <span class="iconfont icon-shouye"></span>
        </p>
        <p class="name">首页</p>
      </router-link>

      <router-link tag="div" to="categories" class="footer-item column">
        <p class="icon">
          <span class="iconfont icon-fenlei"></span>
        </p>
        <p class="name">分类</p>
      </router-link>

      <router-link tag="div" to="cart" class="footer-item column">
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
      </router-link>

      <router-link tag="div" to="mine" class="footer-item column">
        <p class="icon">
          <span class="iconfont icon-smile"></span>
        </p>
        <p class="name">我的</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  }
}
</script>

<style lang="scss">
@import './sass/common.scss';
@import './assets/font/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  color: #666;
}

.footer {
  position: fixed;
  z-index: 999;
  background-color: #fff;
  bottom: 0px;
  width: 100%;
  height: $footerHeight;
  left: 0;
  transform: translateY(0);
  transition: transform .4s cubic-bezier(.55,0,.1,1);
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  display: flex;

  .footer-item {
    flex: 1;
    color: #999;
    font-size: 24px;
    text-align: center;
    justify-content: center;
  }

  .router-link-active {
    color: #ff6700;
  }

  .name {
    font-size: 16px;
  }
}

</style>
