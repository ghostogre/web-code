(function (doc, win) {
  let dpr = window.devicePixelRatio || 1
  let scale = 1 / dpr
  let meta = doc.createElement('meta')
  meta.setAttribute('name', 'viewport')
  meta.setAttribute('content', `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, width=device-width, user-scalable=no`)
  let docEl = doc.documentElement
  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(meta)
  } else {
    var wrap = doc.createElement('div')
    wrap.appendChild(meta)
    document.write(wrap.innerHTML)
  }
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = clientWidth / 10 + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
