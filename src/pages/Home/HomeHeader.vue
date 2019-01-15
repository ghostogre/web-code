<template>
  <header :class="['h-header', opacity? 'header-1': 'header-2']">
    <i class="fa fa-navicon navicon white"></i>
    <div class="h-header-box">
      <i class="jd-header"></i>
      <!-- form的用途 -->
      <i class="fa fa-search icon-search"></i>
      <input type="search" class="search" name="search" placeholder="点击搜索" @click="search">
    </div>
    <router-link to="/login" class="login-btn" tag="div">登录</router-link>
  </header>
</template>

<script>
export default {
  name: 'mhead',
  props: {
    opacity: Number,
    default: 0
  },
  methods: {
    search (e) {
    }
  }
}
</script>

<style lang="scss" scoped>
.h-header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;

  .login-btn {
    color: white;
    position: absolute;
    top: 26px;
    right: 30px;
  }
}

.header-1 {
  background: #e43130;
}

.header-2 {
  background: transparent;
}

.jd-header {
  width: 40px;
  height: 30px;
  position: relative;
  z-index: 1;
  background-size: 40px 30px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTOk7Puo7PfE+SP9SUuo7Peo8Pu0/Qeo7Peo7Peo7Pek7Peo7Pes8Pus8P+k7PaLYf6IAAAAPdFJOUwCjwREGj1sg9Hrd6bFINxDM6d8AAAD3SURBVCjPY2AAAv3/nxnk////sUo1nQEOoIIgoOaARfD/WmyC/wNQBL+lzZQCCn5FEfwCZJX2//8/AV2Qoej//3YMQWb9/x8xBBkq/v8vwBBk/f8/AUOQ/f9/AQxBhvX/N2AKnv//AVMwHsjBEJz//zs2lVgE5bFpx2pR//8FUMEvcEE+mOPX/2+AC/JAvcnyH6gDJvj+/w8DEM0G0gEVZN8PDfpqkA6o4O3//5tBtGX//98OEEHmJGAkXWBgCNQC0t9Abv4aKrMewmYAR6sAAzyKfydABX8yIASFGSCCjQ/ggr+mg61WOjgXnHwmKSnpiM4FO5EBAIlo6/K7pNY1AAAAAElFTkSuQmCC) no-repeat;
}

.h-header-box {
  min-width: 300px;
  max-width: 500px;
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  padding: 0 30px;
  border-radius: 30px;
  background-color: white;

  .search {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
  }

  .icon-search {
    font-size: 32px;
    margin-left: 8px;
    padding: 0 15px 0 8px;
    border-left: 1px solid #666;/*no*/
  }
}

.navicon {
  position: absolute;
  top: 16px;
  left: 30px;
  font-size: 48px;
}

</style>
