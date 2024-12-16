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

function binarySearch(arr,target){
  if(arr.length <= 1 && arr[0] !== target) return -1

  let right = arr.length - 1
  let left = 0
  while(left <= right){
    let middle = Math.floor((right + left) / 2)
    if(target < arr[middle]){
      right = middle - 1
    }else if(target > arr[middle]){
      left = middle + 1;
    }else{
      return middle
    }
  }
  return -1
}

console.log(binarySearch([],4))