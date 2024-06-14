import { once } from 'lodash'
export default once(function fpsWatcher() {
  let lastTime = performance.now()
  let frames = 0
  let lastFrameTime = performance.now()
  console.log('🚀======fpsWatcher start')

  function loop() {
    let now = performance.now()
    let fs = now - lastTime
    lastFrameTime = now
    let fps = Math.floor(1000 / fs)
    frames++
    if (now > 1000 + lastTime) {
      fps = Math.floor((frames * 1000) / (now - lastTime))
      frames = 0
      console.log('🚀======performance.now', fps, frames)
      lastTime = now
    }
    window.requestAnimationFrame(loop)
  }
  window.requestAnimationFrame(loop)
})
