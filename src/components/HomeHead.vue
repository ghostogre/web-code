<template>
  <header class="h-header">
    <i class="fa fa-navicon navicon white"></i>
    <div class="h-header-box">
      <a href="#" class="icon-logo"></a>
      <form action="#">
        <span class="icon-search"></span>
        <input type="search" class="search" placeholder="点击搜索" @click="search">
      </form>
    </div>
    <router-link to="/login" class="login-btn" tag="div">登录</router-link>
  </header>
</template>

<script>
export default {
  name: 'mhead',
  methods: {
    search (e) {
    }
  }
}
</script>

<style lang="scss" scoped>
.h-header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;

  .login-btn {
    color: white;
    position: absolute;
    top: 32px;
    right: 30px;
  }
}

.h-header-box {
  min-width: 300px;
  max-width: 500px;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: rgba(201, 21, 35, 0);

  form {
    flex: 1;
    height: 80px;
    padding: 0 40px;
    position: relative;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: white;

    .search {
      width: 100%;
      height: 60px;
      margin-top: 5px;
      border: none;
      outline: none;
    }
  }
}

.navicon {
  position: absolute;
  top: 26px;
  left: 30px;
  font-size: 48px;
}

.icon-logo {
  width: 60px;
  height: 36px;
  position: absolute;
  top: 22px;
  left: 10px;
  background-position: 0 -100px;
  display: block;
}
</style>
