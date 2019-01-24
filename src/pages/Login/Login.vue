<template>
  <main>
    <!-- 禁止chrome自动填充，会自动填充到隐藏的input里面 -->
    <input style="display:none;" type="text" name="username"/>
    <input style="display:none;" type="password" name="password"/>
    <header class="navigation relative">
      <i class="fa fa-angle-left back-icon"></i>
      <span class="title">京东登录</span>
    </header>
    <section class="page">
    </section>
  </main>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: 90px;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  @include h4();
  transform: translate(-50%, -50%);
}

.back-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 50px;
}

.page {
  width: 100%;
  padding: 0 50px 50px;
}
</style>
