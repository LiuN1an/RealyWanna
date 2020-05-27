let Loading = {}

Loading.installed = false
Loading.install = function (Vue, options) {
  if (Loading.installed) {
    return
  }
  let container = document.createElement('div')
  let box = document.createElement('div')
  let ball = document.createElement('div')
  let cover = document.createElement('div')
  container.setAttribute('class', 'loading-container')
  box.setAttribute('class', 'loading-box')
  ball.setAttribute('class', 'loading-ball')
  cover.setAttribute('class', 'loading-cover')
  Vue.prototype.$showLoading = function () {
    container.appendChild(box)
    box.appendChild(ball)
    document.body.appendChild(container)
    // document.body.appendChild(cover)
  }
  Vue.prototype.$hideLoading = function () {
    // https://www.jb51.net/article/155393.htm 检测animation和transition结束
    container.setAttribute('class', 'loading-container op') // 开始离场动画
    container.addEventListener('animationend', function () {
      document.body.removeChild(container)
    })
    // document.body.removeChild(cover)
  }
}

export default Loading
