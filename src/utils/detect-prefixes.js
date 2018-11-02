// 检测浏览器支持的属性
export default function detectPrefixes () {
  let transform
  let transition
  let transitionEnd
  let hasTranslate3d
  // 立即执行函数可以避免内部的变量泄露
  (function () {
    let el = document.createElement('_')
    let style = el.style
    let prop
    if (style[prop = 'webkitTransition'] === '') {
      transitionEnd = 'webkitTransitionEnd'
      transition = prop
    }
    if (style[prop = 'transition'] === '') {
      transitionEnd = 'transitionend'
      transition = prop
    }
    if (style[prop = 'webkitTransform'] === '') {
      transform = prop
    }
    if (style[prop = 'msTransform'] === '') {
      transform = prop
    }
    if (style[prop = 'transform'] === '') {
      transform = prop
    }
    // 为null时其效果与appendChild一样
    document.body.insertBefore(el, null)
    // 是否支持3d变换
    style[transform] = 'translate3d(0, 0, 0)'
    hasTranslate3d = !!global.getComputedStyle(el).getPropertyValue(transform)
    document.body.removeChild(el)
  }())
  return {
    transform,
    transition,
    transitionEnd,
    hasTranslate3d
  }
}
