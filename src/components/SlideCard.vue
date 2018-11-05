<template>
  <ul class="stack" ref="slideUI" :style="{width: width + 'px', height: height + 'px'}">
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
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
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
        currentPage: 0 // 当前展示的第一张图片
      },
      // tempdata数据包含组件临时数据
      tempdata: {
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

  created () {
    // 初始化大小
  },

  computed: {
    // 划出面积 比例
    offsetRatio () {
      let width = this.$parent.offsetWidth
      let height = this.$parent.offsetHeight
      let offsetWidth = width - Math.abs(this.tempdata.poswidth)
      let offsetHeight = height - Math.abs(this.tempdata.posheight)
      let ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0
      return ratio > 1 ? 1 : ratio
    },
    // 划出宽度 比例
    offsetWidthRatio () {
      let width = this.$parent.offsetWidth
      let offsetWidth = width - Math.abs(this.tempdata.poswidth)
      let ratio = 1 - offsetWidth / width || 0
      return ratio
    }
  },

  mounted () {
    // 绑定提供给外部调用的事件
    this.$on('next', () => {
      this.next()
    })
    this.$on('prev', () => {
      this.prev()
    })
  },

  methods: {
    // 变换卡片
    transform (index) {
      let currentPage = this.tempdata.currentPage
      let length = this.pages.length
      // 设置上一张
      let lastPage = currentPage === 0 ? length - 1 : currentPage - 1
      let style = {}
      let visible = this.tempdata.visible // 可见层数
      if (index === this.tempdata.currentPage) {
        return
      }
      if (this.findStack(index, currentPage)) { // 显示中图片
        let perIndex = index - currentPage > 0 ? index - currentPage : index - currentPage + length // 和前面间隔层数
        style['opacity'] = '1'
        style['transform'] = `translate3D(0, 0, ${-1 * 60 * (perIndex - this.offsetRatio)}px)`
        style['zIndex'] = visible - perIndex
        if (!this.tempdata.tracking) {
          // 兼容前缀
          style[this.tempdata.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.tempdata.prefixes.transition + 'Duration'] = 300 + 'ms'
        }
      } else if (index === lastPage) { // 设置翻过去的页
        style['transform'] = `translate3D(${this.tempdata.lastPosWidth}px, ${this.tempdata.lastPosHeight}px, 0px) rotate(${this.tempdata.lastRotate}deg)`
        style['opacity'] = this.tempdata.lastOpacity
        style['zIndex'] = this.tempdata.lastZindex
        style[this.tempdata.prefixes.transition + 'TimingFunction'] = 'ease'
        style[this.tempdata.prefixes.transition + 'Duration'] = 300 + 'ms'
      } else {
        style['zIndex'] = '-1'
        style['transform'] = `translate3D(0, 0, ${-1 * visible * 60}px)`
      }
      return style
    },

    touchmove (e) {
      // 记录滑动位置
      if (this.tempdata.tracking && !this.tempdata.animation) {
        if (e.type === 'touchmove') { // 判断电脑和手机
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        } else {
          this.basicdata.end.x = e.clientX
          this.basicdata.end.y = e.clientY
        }
        // 计算滑动值
        this.tempdata.poswidth = this.basicdata.end.x - this.basicdata.start.x
        this.tempdata.posheight = this.basicdata.end.y - this.basicdata.start.y
        // 计算翻转角度
        let rotateDirection = this.rotateDirection()
        let angleRatio = this.angleRatio()
        this.tempdata.rotate = rotateDirection * this.offsetWidthRatio * 15 * angleRatio
      }
    },

    touchstart (e) {
      if (this.tempdata.tracking) {
        return
      }
      // 是否为touch
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.tempdata.tracking = false
          return
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime()
          this.basicdata.start.x = e.targetTouches[0].clientX
          this.basicdata.start.y = e.targetTouches[0].clientY
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
          // offsetY在touch事件中没有，只能自己计算
          this.tempdata.offsetY = e.targetTouches[0].pageY - this.$refs.slideUI.offsetTop
          console.log(this.tempdata.offsetY)
        }
      // pc操作
      } else {
        this.basicdata.start.t = new Date().getTime()
        this.basicdata.start.x = e.clientX
        this.basicdata.start.y = e.clientY
        this.basicdata.end.x = e.clientX
        this.basicdata.end.y = e.clientY
        this.tempdata.offsetY = e.offsetY
      }
      this.tempdata.tracking = true
      this.tempdata.animation = false
    },

    touchend (e) {
      this.tempdata.tracking = false
      this.tempdata.animation = true
      if (this.offsetRatio >= 0.4) {
        // 计算划出后最终位置
        let ratio = Math.abs(this.tempdata.posheight / this.tempdata.poswidth)
        this.tempdata.poswidth = this.tempdata.poswidth >= 0 ? this.tempdata.poswidth + 200 : this.tempdata.poswidth - 200
        this.tempdata.posheight = this.tempdata.posheight >= 0 ? Math.abs(this.tempdata.poswidth * ratio) : -Math.abs(this.tempdata.poswidth * ratio)
        this.tempdata.opacity = 0
        this.tempdata.swipe = true
        this.nextTick()
      // 不满足条件则滑入
      } else {
        this.tempdata.poswidth = 0
        this.tempdata.posheight = 0
        this.tempdata.swipe = false
        this.tempdata.rotate = 0
      }
    },

    nextTick () {
      // 记录最终滑动距离
      this.tempdata.lastPosWidth = this.tempdata.poswidth
      this.tempdata.lastPosHeight = this.tempdata.posheight
      this.tempdata.lastRotate = this.tempdata.rotate
      this.tempdata.lastZindex = 20
      // 循环currentPage
      this.tempdata.currentPage = this.tempdata.currentPage === this.pages.length - 1 ? 0 : this.tempdata.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.tempdata.poswidth = 0
        this.tempdata.posheight = 0
        this.tempdata.opacity = 1
        this.tempdata.rotate = 0
      })
    },

    onTransitionEnd (index) {
      let lastPage = this.tempdata.currentPage === 0 ? this.pages.length - 1 : this.tempdata.currentPage - 1
      // dom发生变化正在执行的动画滑动序列已经变为上一层
      if (this.tempdata.swipe && index === lastPage) {
        this.tempdata.animation = true
        this.tempdata.lastPosWidth = 0
        this.tempdata.lastPosHeight = 0
        this.tempdata.lastOpacity = 0
        this.tempdata.lastRotate = 0
        this.tempdata.swipe = false
        this.tempdata.lastZindex = -1
      }
    },

    prev () {
      this.tempdata.tracking = false
      this.tempdata.animation = true
      // 计算划出后最终位置
      let width = this.$parent.offsetWidth
      this.tempdata.poswidth = -width
      this.tempdata.posheight = 0
      this.tempdata.opacity = 0
      this.tempdata.rotate = '-3'
      this.tempdata.swipe = true
      this.nextTick()
    },

    next () {
      this.tempdata.tracking = false
      this.tempdata.animation = true
      // 计算划出后最终位置
      let width = this.$parent.offsetWidth
      this.tempdata.poswidth = width
      this.tempdata.posheight = 0
      this.tempdata.opacity = 0
      this.tempdata.rotate = '3'
      this.tempdata.swipe = true
      this.nextTick()
    },

    // 翻转方向
    rotateDirection () {
      if (this.tempdata.poswidth <= 0) {
        return -1
      } else {
        return 1
      }
    },

    // 翻转角度
    angleRatio () {
      let height = this.$parent.offsetHeight
      let offsetY = this.tempdata.offsetY
      let ratio = -1 * (2 * offsetY / height - 1)
      return ratio || 0
    },

    // 判断当前是否在显示中
    findStack (index, currentPage) {
      let stack = []
      let visible = this.tempdata.visible
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
      if (index === this.tempdata.currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.tempdata.poswidth + 'px' + ',' + this.tempdata.posheight + 'px' + ',0px) ' + 'rotate(' + this.tempdata.rotate + 'deg)'
        style['opacity'] = this.tempdata.opacity
        style['zIndex'] = 10
        if (this.tempdata.animation) {
          style[this.tempdata.prefixes.transition + 'TimingFunction'] = 'ease'
          style[this.tempdata.prefixes.transition + 'Duration'] = (this.tempdata.animation ? 300 : 0) + 'ms'
        }
        return style
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .stack {
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
