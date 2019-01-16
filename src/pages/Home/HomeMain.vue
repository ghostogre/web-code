<template>
  <section class="floor love-floor">
    <div class="gray-text relative">
      <div class="gray-layout flex-row align-center"><div class="gray-text-img relative"></div>为您推荐</div>
    </div>
    <ul>
      <template v-for="n in goods">
        <li class="similar-li relative" :key="n.id">
          <div class="similar-good floor">
            <img class="similar-posre" :src="n.img_url"/>
            <span class="similar-product-text ellipsis-2">
              {{n.title}}
            </span>
            <p class="similar-product-info relative">
              <span class="similar-product-price">
                ¥<span class="big-price">{{n.price || 0}}</span>
              </span>
              <span class="guess-button">看相似</span>
            </p>
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.love-floor {
  background-color: #f0f2f5;
  overflow: hidden;
}

.gray-text {
  @include h5();
  color: #848689;
  text-align: center;
  margin: 28px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    height: 2px;/*no*/
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #cbcbcb;
    transform: scaleY(.5);
  }
}

.gray-layout {
  padding: 0 20px;
  z-index: 10;
  background-color: #f0f2f5;
}

.gray-text-img {
  width: 26px;
  height: 26px;
  margin-right: 20px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYjlhMDE1Yi1jNGYwLTU5NDgtYTQyYy00ZDk4ZmUzYTA4ZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjY4MTczRTVCODQwMTFFNTk3OTNDNzU1NUY2Nzg4RUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjY4MTczRTRCODQwMTFFNTk3OTNDNzU1NUY2Nzg4RUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTVEOUJGMEFBMjJFMTFFNUE1NzZDRjhDNjkxNzhBQzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTVEOUJGMEJBMjJFMTFFNUE1NzZDRjhDNjkxNzhBQzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nDNBbAAAB00lEQVR42qyVvUtCURiH71XXQqFoajFqlqSliCbBIBwCh4yC/gJDCyKoqS9KLNuaw9oUxME1okAwawwhFykIBKOxxX6v/G7c7J6rkgcezrnn4/F4Pt6j7x8ea4rkAytgBoyCIVAHNXAHLsHT9tbmn4EOC5kXZEAZvIIomAIDzKOsl/bMwdGJt5M0yM73wAmSoAjewBfzIuud7FeGOKiShkAerIIEaGr2qcl+0j8PcahdOg7SYAHktB4S1jTHcWmIJ6TOxbZzsAsKps6/BieSKZmZvhGL/tRBYvQtoLyDYgrMy0z9YBicqmZDYesvo6ya8Zl4IPeLdJl/3U6o81O3EyNdgYhIp7mLnYRaF+IbMOfgwa51KfwltqivyjkX6Qh4VwxsJfPmmMq6xbo2kHlE+gkGVYtkFtrV8TR4kDVE+gLGrAaqBtuI5cpWRXoLZrX+pDnZLIdxDPokXQLXIi0xpK3/x4b1lPF1bFbJuKayQA/g2biqxhVsPw0W9Rqj1B6YNAeUCm+WRKlAjzMMcFwEs6y0hz6JNmEG6HiXzjj7hxmtLIN0ls+IPCGPIMaA42a7m98xtks/H4RZs8Rl8etybhdNb9QFz7EIP9gud3xN9UZ9CzAA+QmWuz+ZcigAAAAASUVORK5CYII=);
  background-size: 26px 26px;
  background-repeat: no-repeat;
}

.similar-li {
  float: left;
  width: 50%;
  padding-bottom: 8px;
  &:nth-child(2n + 1) {
    padding-right: 4px;
  }
}

.similar-good {
  background-color: white;
}

.similar-posre {
  width: 100%;
  height: 373px;
  clip: rect(0, 373px, 375px, 0);
}

.similar-product-info {
  font-size: 26px;
}

.similar-product-text {
  height: 64px;
  font-size: 26px;
  padding: 0 8px;
  line-height: 32px;
  margin: 10px 0 6px 0;
  color: #232326;
}

.similar-product-price {
  color: #f23030;
  display: inline-block;
  padding: 0 10px;
  position: relative;
  height: 50px;
  line-height: 50px;
  .big-price {
    @include h4();
    color: #f23030;
  }
}

.guess-button {
  display: block;
  position: absolute;
  top: 0;
  right: 16px;
  text-align: center;
  color: #686868;
  @include h6();
  width: 100px;
  height: 48px;
  line-height: 48px;

  &:after {
    // 处理1px问题
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #bfbfbf;/*no*/
    border-radius: 8px;
    transform: scale(.5, .5);
    transform-origin: top left;
  }
}

</style>
