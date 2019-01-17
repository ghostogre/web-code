<template>
  <main class="fit column">
    <header class="search-land align-center flex-row">
      <i class="header-left-icon"></i>
      <div class="header-search"></div>
      <i class="header-right-icon"></i>
    </header>
    <section class="flex-1 list">
      <div class="first-list">
        <scroll class="fit">
          <ul>
            <li class="ellipsis"></li>
          </ul>
        </scroll>
      </div>
      <div class="second-list">
        <scroll class="fit">
          <ul>
            <li></li>
          </ul>
        </scroll>
      </div>
    </section>
  </main>
</template>

<script>
import Scroll from '@/components/Scroll.vue'
export default {
  name: 'type',
  components: {
    Scroll
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.search-land {
  width: 100%;
  height: 90px;
  position: relative;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;/*no*/
}

.header-search {
  flex: 1;
  height: 60px;
  margin: 0 20px;
  background-color: #f7f7f7;
  border-radius: 30px;
}

.list {
  width: 100%;
}

.first-list {
  width: 172px;
  height: 100%;
  font-size: 0;
  float: left;
  overflow: hidden;
  background-color: #f8f8f8;
}

.second-list {
  width: 100%;
  height: 100%;
  padding-left: 172px;
}
</style>
