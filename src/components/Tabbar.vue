<template>
  <footer id="commonNav">
    <template v-for="n in tabbar">
      <router-link :to="n.path" :key="n.path">
        <div class="icon-center">
          <img class="nav-img" :src="$route.name === n.name && n.img1? n.img1: n.img"/>
        </div>
      </router-link>
    </template>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      tabbar: [
        {
          path: 'home',
          name: 'home',
          img: require('../assets/images/tabbar/home.png'),
          img1: require('../assets/images/tabbar/home-2.png')
        },
        {
          path: 'type',
          name: 'type',
          img: require('../assets/images/tabbar/type.png'),
          img1: require('../assets/images/tabbar/type-2.png')
        },
        {
          path: 'discover',
          name: 'discover',
          img: require('../assets/images/tabbar/discover.png')
        },
        {
          path: 'cart',
          name: 'cart',
          img: require('../assets/images/tabbar/cart.png')
        },
        {
          path: 'login',
          name: 'login',
          img: require('../assets/images/tabbar/login.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#commonNav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 32px;
  width: 100%;
  height: 100px;
  display: flex;
  user-select: none;
  background-color: rgb(213, 20, 51);
  box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
}

.icon-center {
  width: 150px;
  height: 100px;
  img {
    height: 100%;
    display: block;
    margin: 0 auto;
  }
}

.nav-img {
  vertical-align: bottom;
}
</style>
