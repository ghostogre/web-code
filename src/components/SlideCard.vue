<template>
  <ul class="stack">
    <li
      class="stack-item"
      v-for="(item, index) in pages"
      :key="index"
      :style="[transformIndex(index), transform(index)]"
      @touchstart.stop.capture.prevent="touchstart"
      @touchmove.stop.capture.prevent="touchmove"
      @touchend.stop.capture.prevent="touchend"
      @touchcancel.stop.capture.prevent="touchend"
      @mousedown.stop.capture.prevent="touchstart"
      @mouseup.stop.capture.prevent="touchend"
      @mousemove.stop.capture.prevent="touchmove"
      @mouseout.stop.capture.prevent="touchend"
      @webkit-transition-end="onTransitionEnd"
      @transitionend="onTransitionEnd">
      <img :src="item">
    </li>
  </ul>
</template>

<script>
import detectPrefixes from '../utils/detect-prefixes.js'
export default {
  name: 'slide-card',
  props: {
    init: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      pages: [
        'http://loftcn.com/wp-content/uploads/2018/10/modern-cafe-1.jpg',
        'http://loftcn.com/wp-content/uploads/2018/10/modern-cafe-2.jpg',
        'http://loftcn.com/wp-content/uploads/2018/10/modern-cafe-3.jpg',
        'http://loftcn.com/wp-content/uploads/2018/10/modern-cafe-4.jpg',
        'http://loftcn.com/wp-content/uploads/2018/10/modern-cafe-5.jpg'
      ],
      // basicdata数据包含组件基本数据
      basicdata: {
        start: {}, // 起始位置
        end: {}, // 结束位置
        currentPage: 0 // 默认首图的序列
      },
      // temporaryData数据包含组件临时数据
      temporaryData: {
        prefixes: detectPrefixes(),
        offsetY: '',
        poswidth: '', // 记录位移
        posheight: '', // 记录位移
        lastPosWidth: '', // 记录上次最终位移
        lastPosHeight: '', // 记录上次最终位移
        lastZindex: '',
        rotate: 0,
        lastRotate: 0,
        visible: this.init.visible || 3, // 显示层级
        tracking: false, // 是否在滑动，防止多次操作，影响体验
        animation: false, // 首图是否启用动画效果，默认为否
        opacity: 1, // 首图透明度
        swipe: false, // onTransition判定条件
        currentPage: this.init.currentPage || 0,
        lastOpacity: 0,
        zIndex: 10
      }
    }
  },
  computed: {
    // 划出面积比例 $el: Vue 实例使用的根 DOM 元素。
    offsetRatio () {
      let width = this.$el.offsetWidth
      let height = this.$el.offsetHeight
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      let offsetHeight = height - Math.abs(this.temporaryData.posheight)
      let ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0
      return ratio > 1 ? 1 : ratio
    },
    // 划出宽度比例
    offsetWidthRatio () {
      let width = this.$el.offsetWidth
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      let ratio = 1 - offsetWidth / width || 0
      return ratio
    }
  },

  mounted () {
    // 绑定事件
    this.$on('next', () => {
      this.next()
    })
    this.$on('prev', () => {
      this.prev()
    })
    document.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })
  },

  methods: {
    // 变换卡片
    transform (index) {
      // let currentPage = this.basicdata.currentPage
      // if (index > currentPage) {
      //   let style = {}
      //   let visible = 3
      //   let perIndex = index - currentPage
      //   // visible可见数量前滑块的样式
      //   if (index <= currentPage + visible - 1) {
      //     style['opacity'] = '1'
      //     style['transform'] = `translate3D(0, 0, ${-1 * perIndex * 60}px)`
      //     style['zIndex'] = visible - index + currentPage
      //     style['transitionTimingFunction'] = 'ease'
      //     style['transitionDuration'] = 300 + 'ms'
      //   } else {
      //     style['zIndex'] = '-1'
      //     style['transform'] = `translate3D(0, 0, ${-1 * visible * 60}px)`
      //   }
      //   return style
      // } else if (index === currentPage - 1) {
      //   // 已滑动模块释放后
      //   let style = {}
      //   // 继续执行动画
      //   style['transform'] = `translate3D(${this.temporaryData.lastPosWidth}px, ${this.temporaryData.lastPosHeight}px, 0px)`
      //   style['opacity'] = '0'
      //   style['zIndex'] = '-1'
      //   style['transitionTimingFunction'] = 'ease'
      //   style['transitionDuration'] = 300 + 'ms'
      //   return style
      // } else if (index === currentPage) {
      //   // 首页，处理3D效果
      //   let style = {}
      //   style['transform'] = `translate3D(${this.temporaryData.poswidth}px, ${this.temporaryData.posheight}px, 0px)`
      //   style['opacity'] = this.temporaryData.opacity
      //   style['zIndex'] = 10
      //   if (this.temporaryData.animation) {
      //     style['transitionTimingFunction'] = 'ease'
      //     style['transitionDuration'] = 300 + 'ms'
      //   }
      //   return style
      // }
      let currentPage = this.temporaryData.currentPage
      let length = this.pages.length
      let lastPage = currentPage === 0 ? this.pages.length - 1 : currentPage - 1
      let style = {}
      let visible = this.temporaryData.visible
      if (index === this.temporaryData.currentPage) {
        return
      }
      if (this.inStack(index, currentPage)) {
        let perIndex = index - currentPage > 0 ? index - currentPage : index - currentPage + length
        style['opacity'] = '1'
        style['transform'] = 'translate3D(0,0,' + -1 * 60 * (perIndex - this.offsetRatio) + 'px' + ')'
        style['zIndex'] = visible - perIndex
        if (!this.temporaryData.tracking) {
          style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.temporaryData.prefixes.transition + 'Duration'] = 300 + 'ms'
        }
      } else if (index === lastPage) {
        style['transform'] = 'translate3D(' + this.temporaryData.lastPosWidth + 'px' + ',' + this.temporaryData.lastPosHeight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.lastRotate + 'deg)'
        style['opacity'] = this.temporaryData.lastOpacity
        style['zIndex'] = this.temporaryData.lastZindex
        style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
        style[this.temporaryData.prefixes.transition + 'Duration'] = 300 + 'ms'
      } else {
        style['zIndex'] = '-1'
        style['transform'] = 'translate3D(0,0,' + -1 * visible * 60 + 'px' + ')'
      }
      return style
    },

    touchmove (e) {
      // 记录滑动位置
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === 'touchmove') {
          e.preventDefault()
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        } else {
          e.preventDefault()
          this.basicdata.end.x = e.clientX
          this.basicdata.end.y = e.clientY
        }
        // 计算滑动值
        this.temporaryData.poswidth = this.basicdata.end.x - this.basicdata.start.x
        this.temporaryData.posheight = this.basicdata.end.y - this.basicdata.start.y
        let rotateDirection = this.rotateDirection()
        let angleRatio = this.angleRatio()
        this.temporaryData.rotate = rotateDirection * this.offsetWidthRatio * 15 * angleRatio
      }
    },

    touchstart (e) {
      if (this.temporaryData.tracking) {
        return
      }
      // 是否为touch
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false
          return
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime()
          this.basicdata.start.x = e.targetTouches[0].clientX
          this.basicdata.start.y = e.targetTouches[0].clientY
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
          // offsetY在touch事件中没有，只能自己计算
          this.temporaryData.offsetY = e.targetTouches[0].pageY - this.$el.offsetParent.offsetTop
        }
      // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime()
        this.basicdata.start.x = e.clientX
        this.basicdata.start.y = e.clientY
        this.basicdata.end.x = e.clientX
        this.basicdata.end.y = e.clientY
        this.temporaryData.offsetY = e.offsetY
      }
      this.temporaryData.tracking = true
      this.temporaryData.animation = false
    },

    touchend (e) {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // // 滑动结束，触发判断
      // // 简单判断滑动宽度/高度超出100像素时触发滑出
      // if (Math.abs(this.temporaryData.poswidth) >= 100 || Math.abs(this.temporaryData.posheight) >= 100) {
      //   // 最终位移简单设定为x轴1200像素的偏移
      //   let ratio = Math.abs(this.temporaryData.posheight / this.temporaryData.poswidth)
      //   this.temporaryData.poswidth = this.temporaryData.poswidth >= 0 ? 1980 : -1980
      //   this.temporaryData.posheight = this.temporaryData.posheight >= 0 ? Math.abs(this.temporaryData.poswidth * ratio) : -Math.abs(this.temporaryData.poswidth * ratio)

      //   this.temporaryData.opacity = 0
      //   this.temporaryData.swipe = true
      //   // 记录最终滑动距离
      //   this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      //   this.temporaryData.lastPosHeight = this.temporaryData.posheight
      //   // currentPage+1 引发排序变化
      //   this.basicdata.currentPage += 1
      //   // currentPage切换，整体dom进行变化，把第一层滑动置零
      //   this.$nextTick(() => {
      //     this.temporaryData.poswidth = 0
      //     this.temporaryData.posheight = 0
      //     this.temporaryData.opacity = 1
      //   })
      // // 不满足条件则滑入
      // } else {
      //   this.temporaryData.poswidth = 0
      //   this.temporaryData.posheight = 0
      //   this.temporaryData.swipe = false
      // }
      // 滑动结束，触发判断
      // 判断划出面积是否大于0.4
      if (this.offsetRatio >= 0.4) {
        // 计算划出后最终位置
        let ratio = Math.abs(this.temporaryData.posheight / this.temporaryData.poswidth)
        this.temporaryData.poswidth = this.temporaryData.poswidth >= 0 ? this.temporaryData.poswidth + 200 : this.temporaryData.poswidth - 200
        this.temporaryData.posheight = this.temporaryData.posheight >= 0 ? Math.abs(this.temporaryData.poswidth * ratio) : -Math.abs(this.temporaryData.poswidth * ratio)
        this.temporaryData.opacity = 0
        this.temporaryData.swipe = true
        this.nextTick()
      // 不满足条件则滑入
      } else {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.swipe = false
        this.temporaryData.rotate = 0
      }
    },

    nextTick () {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      this.temporaryData.lastPosHeight = this.temporaryData.posheight
      this.temporaryData.lastRotate = this.temporaryData.rotate
      this.temporaryData.lastZindex = 20
      // 循环currentPage
      this.temporaryData.currentPage = this.temporaryData.currentPage === this.pages.length - 1 ? 0 : this.temporaryData.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.opacity = 1
        this.temporaryData.rotate = 0
      })
    },

    onTransitionEnd (index) {
      let lastPage = this.temporaryData.currentPage === 0 ? this.pages.length - 1 : this.temporaryData.currentPage - 1
      // dom发生变化正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === lastPage) {
        this.temporaryData.animation = true
        this.temporaryData.lastPosWidth = 0
        this.temporaryData.lastPosHeight = 0
        this.temporaryData.lastOpacity = 0
        this.temporaryData.lastRotate = 0
        this.temporaryData.swipe = false
        this.temporaryData.lastZindex = -1
      }
    },

    prev () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = -width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '-3'
      this.temporaryData.swipe = true
      this.nextTick()
    },

    next () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '3'
      this.temporaryData.swipe = true
      this.nextTick()
    },

    rotateDirection () {
      if (this.temporaryData.poswidth <= 0) {
        return -1
      } else {
        return 1
      }
    },

    angleRatio () {
      let height = this.$el.offsetHeight
      let offsetY = this.temporaryData.offsetY
      let ratio = -1 * (2 * offsetY / height - 1)
      return ratio || 0
    },

    inStack (index, currentPage) {
      let stack = []
      let visible = this.temporaryData.visible
      let length = this.pages.length
      for (let i = 0; i < visible; i++) {
        if (currentPage + i < length) {
          stack.push(currentPage + i)
        } else {
          stack.push(currentPage + i - length)
        }
      }
      return stack.indexOf(index) >= 0
    },

    // 首页样式切换
    transformIndex (index) {
      if (index === this.temporaryData.currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = this.temporaryData.opacity
        style['zIndex'] = 10
        if (this.temporaryData.animation) {
          style[this.temporaryData.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.temporaryData.prefixes.transition + 'Duration'] = (this.temporaryData.animation ? 300 : 0) + 'ms'
        }
        return style
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .stack {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 1000px; //子元素视距
    perspective-origin: 50% 150%; //子元素透视位置
    margin: 0;
    padding: 0;
  }

  .stack-item{
    position: absolute;
    top: 0;
    background: #fff;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    }
  }

</style>
