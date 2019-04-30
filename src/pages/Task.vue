<template>
  <div>
    <ul class="task-container">
      <li class="task">{{taskList[curIndex]}}</li>
      <li class="task next-task">{{taskList[curIndex + 1]}}</li>
    </ul>
    <button class="next" @click="next">下一页</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curIndex: 0,
      taskList: ['a', 'b', 'c']
    }
  },
  methods: {
    // 切页
    next () {
      if (this.curIndex < 2) {
        this.curIndex++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.task-container {
  text-align: center;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

// BFC开启消除高度坍塌对absolute无效
.task {
  width: 100%;
  height: 400px;
}

.next-task {
  display: none;
  transform: translateX(100%);
  transition: transform .5s ease;
  background-color: turquoise;
}

.next {
  margin: 0 auto;
}
</style>
