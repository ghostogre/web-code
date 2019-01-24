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
            <template v-for="(t, index) in category">
              <li :class="['ellipsis', {'cur': index === currentTab}]" :key="t.title" @touchstart="changeCategory(index)">
                {{t.title}}
              </li>
            </template>
          </ul>
        </scroll>
      </div>
      <div class="second-list">
        <scroll class="fit">
          <div class="promotion">
            <a :href="categoryItem.promotion_href">
              <img class="promotion-image" :src="categoryItem.promotion_image"/>
            </a>
            <template v-for="m in categoryItem.list">
              <div :key="m.title">
                <h4>{{m.title}}</h4>
                <ul>
                  <template v-for="c in m.list">
                    <li class="category_li" :key="c.name">
                      <a :href="c.category_href">
                        <img :src="c.category_image"/>
                        <span class="ellipsis-2">{{c.category_name}}</span>
                      </a>
                    </li>
                  </template>
                </ul>
              </div>
            </template>
          </div>
        </scroll>
      </div>
    </section>
  </main>
</template>

<script>
import category from '../../../data/category.json'
import Scroll from '@/components/Scroll.vue'
export default {
  name: 'type',
  components: {
    Scroll
  },
  data () {
    return {
      category,
      currentTab: 0,
      categoryItem: category[0]
    }
  },
  methods: {
    changeCategory (index) {
      this.currentTab = index
      this.categoryItem = this.category[index]
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
  display: flex;
  overflow: hidden;
}

.first-list {
  width: 172px;
  height: 100%;
  font-size: 0;
  float: left;
  overflow: hidden;
  background-color: #f8f8f8;
  li {
    text-align: center;
    line-height: 92px;
    height: 92px;
    @include h6();
  }
  .cur {
    background-color: white;
  }
}

.second-list {
  flex: 1;
  font-size: 0;
  height: 100%;
  overflow: hidden;
  .promotion {
    overflow: hidden;
    padding: 15px;
    .promotion-image {
      width: 100%;
      height: 210px;
    }
    h4 {
      color: #333;
      line-height: 75px;
      font-weight: 600;
      @include h5();
    }
  }
}

.category_li {
  width: 32.8%;
  float: left;
  text-align: center;
  img {
    width: 140px;
    height: 140px;
  }
  span {
    color: #333;
    height: 70px;
    margin-top: 4px;
    @include h6();
  }
}
</style>
