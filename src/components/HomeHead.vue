<template>
  <div class="home_h">
    <header class="m_header">
      <div class="m_header_box" id="my_search">
        <a href="#" class="icon_logo"></a>
        <form action="#">
          <span class="fa fa-search icon_search"></span>
          <input type="search" class="search" placeholder="点击搜索" @click="search($event)">
        </form>
        <router-link to="/login" class="logo_btn">登录</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'm-head',
  methods: {
    search (e) {
    }
  }
}
</script>

<style lang="scss" scoped>

.m_layout {
  min-width: 300px;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  height: 1000px;
}

.m_header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
}

.m_header .m_header_box {
  position: relative;
  min-width: 300px;
  max-width: 640px;
  height: 80px;
  margin: 0 auto;
  background: rgba(201, 21, 35, 0);
}

.m_header_box {
  .icon_logo {
    width: 60px;
    height: 72px;
    position: absolute;
    top: 4px;
    left: 10px;
    background-position: 0 -103px;
    display: block;
  }

  form {
    width: 100%;
    height: 80px;
    padding-left: 75px;
    padding-right: 60px;
    position: relative;
    .icon_search {
      display: block;
      font-size: 18px;
      position: absolute;
      left: 85px;
      top: 12px;
      background-position: -60px -109px;
    }
  }

  .search {
    width: 100%;
    height: 60px;
    border-radius: 15px;
    margin-top: 5px;
    padding-left: 30px;
  }

  .logo_btn {
    display: block;
    width: 30px;
    height: 40px;
    position: absolute;
    right: 8px;
    top: 0;
    color: #fff;
    line-height: 40px;
    font-weight: 400;
  }
}
</style>
