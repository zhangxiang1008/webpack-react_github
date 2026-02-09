// scripts/constant.js

const path = require("path");

const PROJECT_PATH = path.resolve(__dirname, "../"); // 项目根路径

const SERVER_HOST = "127.0.0.1";
const SERVER_PORT = 3000;

module.exports = { PROJECT_PATH, SERVER_HOST, SERVER_PORT };

var counter = require("./lib").counter;
var incCounter = require("./lib").incCounter;
var getCounter = require("./lib").getCounter;

console.log(counter); // 3
incCounter();
console.log(counter); // 3
console.log(getCounter()); // 4

// 输入: array = [1, 2, 5, 2, -1, 3, 1, 2], sum = 4
// 输出: [[1,3], [1,3], [5,-1], [2,2], [2,2], [2,2]]

function twoSum(nums = [], target) {
  const res = [];
  const seen = new Map();
  for (let left = 0; left < nums.length; left++) {
    const completement = target - nums[left];
    if (seen.has(completement)) {
      const ocurrences = seen.get(completement);
      for (let index = 0; index < ocurrences.length; index++) {
        res.push([completement, nums[left]]);
      }
    }
    if(!seen.has(nums[left])){
        seen.set(nums[left],[])
    }
    seen.get(nums[left]).push(left)
  }
  return res;
}

console.log(twoSum([1, 2, 5, 2, -1, 3, 1, 2], 4));
