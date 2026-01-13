import { once } from "lodash";
export default once(function fpsWatcher() {
  let lastTime = performance.now();
  let frames = 0;
  console.log("🚀======fpsWatcher start");

  function loop() {
    let now = performance.now();
    let fps = 0;
    frames++;
    if (now > 1000 + lastTime) {
      fps = Math.floor((frames * 1000) / (now - lastTime));
      frames = 0;
      console.log("🚀======performance.now", fps, frames);
      lastTime = now;
    }
    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
});


function fpsWatcher2(){
  const lastTime = performance.now()
  let frames = 0
  function loop(){
    let now = performance.now()
    frames++;
    let fps = 0
    if(now - lastTime > 1000){
      fps = frames * 1000 / (now - lastTime)
      frames = 0;
      lastTime = now
    }
    window.requestAnimationFrame(loop)
  }

  window.requestAnimationFrame(loop)
}