function throttle(func, delay) {
  let timer = null;
  let lastExcuteTime = 0;

  return function (...args) {
    const now = Date.now();
    const remaminingTime = delay - (now - lastExcuteTime);
    if (!timer && remaminingTime <= 0) {
      func.apply(this, args);
      timer = null;
      lastExcuteTime = now;
    } else if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
        lastExcuteTime = Date.now();
      }, remaminingTime);
    }
  };
}

function debounce(func, delay, immediate = false) {
  let timer = null;
  let isInvoked = false; // 新增标志，记录是否已经立即执行过

  return function (...args) {
    const context = this;

    if (immediate && !isInvoked) {
      func.apply(context, args);
      isInvoked = true; // 标记已经立即执行
    } else {
      if (timer) {
        clearTimeout(timer);
      } else {
        timer = setTimeout(() => {
          if (!immediate || isInvoked) {
            func.apply(context, args);
            isInvoked = false; // 重置标记，允许下一次立即执行
          }
          timer = null;
        }, delay);
      }
    }
  };
}
// 示例使用
function logMessage(type) {
  console.log("Logging..." + type, Date.now());
}

const throttledLog = throttle(logMessage, 1000); // 创建一个节流后的logMessage函数，限制每1000毫秒执行一次
const debounceLog = debounce(logMessage, 1000);

// 即使连续快速调用，logMessage也只会按照限制的频率执行
let timer = setInterval(() => {
  throttledLog("throttle");
  debounceLog("debounce");
}, 500);

setTimeout(() => {
  clearInterval(timer);
  timer = null;
}, 5000);
