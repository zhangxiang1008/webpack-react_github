console.log("start");

setTimeout(() => {
  console.log("timeout");
  process.nextTick(() => {
    console.log("nextTick in timeOut");
  });
}, 100);

setImmediate(() => {
  console.log("immediate");
});

const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("readFile");
   setTimeout(() => {
    console.log("timeout in readFile callback");
  }, 0);
  setImmediate(() => {
    console.log("immediate in readFile callback");
  });
 
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("end");
