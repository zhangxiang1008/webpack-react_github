function ListNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
  return this;
}
const left11 = new ListNode(4);
const right12 = new ListNode(5);
const left21 = new ListNode(6);
const right22 = new ListNode(7);
const left1 = new ListNode(2, left11, right12);
const right1 = new ListNode(3, left21, right22);

const root = new ListNode(1, left1, right1);

function preOrderRecycle(root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const result = [];
  let node = root;
  while (node || stack.length > 0) {
    while (node) {
      result.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  console.log("preOrderRecycle", result);
}

preOrderRecycle(root);

function midOrderRecycle(root) {
  if (!root) {
    return [];
  }
  let curr = root;
  const stack = [];
  const result = [];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  console.log("midOrderRecycle", result);
}
midOrderRecycle(root);

function afterOrderRecycle(root) {
  if (!root) {
    return [];
  }
  const stack1 = [root];
  const stack2 = [];
  const result = [];
  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node);
    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right); // 右侧先入栈2，出战在后
    }
  }
  while (stack2.length) {
    const node = stack2.pop();
    result.push(node.val);
  }
  console.log("afterOrderRecycle", result);
}
afterOrderRecycle(root);

// 搜索树
function dfsWithPath(root, target, path = []) {
  if (!root) return null;
  path = [...path, root.val];
  if (root.val === target) {
    return path;
  }
  let leftResult = dfsWithPath(root.left, target, path);
  if (!!leftResult) {
    return leftResult;
  }
  let rightResult = dfsWithPath(root.right, target, path);
  if (!!rightResult) {
    return rightResult;
  }
  return null;
}

console.log(dfsWithPath(root, 5));
function TreeSearch(root, target) {
  const path = [];
  function dfs(node) {
    if (!node) {
      return false;
    }
    path.push(node.val);
    if (node.val === target) {
      return true;
    }
    if (dfs(node.left) || dfs(node.right)) {
      return true;
    }
    path.pop();
    return false;
  }
  if (dfs(root)) {
    return path;
  }
  return [];
}
console.log("TreeSearch", TreeSearch(root, 5));

// 将数组转化为树
const list = [
  { id: 4, pid: 3 },
  { id: 1, pid: null },
  { id: 2, pid: null },
  { id: 3, pid: 1 },
  { id: 5, pid: 1 },
  { id: 6, pid: 3 },
  { id: 7, pid: 2 },
  { id: 9, pid: 2 },
  { id: 10, pid: 7 },
];

function toTree(data) {
  let result = [];
  let obj = {};
  data.forEach((item) => {
    //遍历之前的pid可能已经将此次遍历到的数据id，放入map中，所以在此将obj[item.id]合入item 获得之前的push的children
    obj[item.id] = Object.assign(item, obj?.[item.id] || {});
    if (item.pid) {
      let parent = obj[item.pid] || {};
      parent.child = parent.child || [];
      parent.child.push(item);
      obj[item.pid] = parent;
    } else {
      result.push(obj[item.id]);
    }
  });
  return result;
}

// 递归使数组变成树
function buildTree(data=[],pid = null){
  const currentLevelDatas = data.filter(item=>item.pid === pid)
  currentLevelDatas.forEach(item=>{
    const children = buildTree(data,item.id)
    item.children = children
  })
  return currentLevelDatas.sort((a,b)=>a.id - b.id)
}

// 循环使数组变成树
function buildTree2(data=[],pid = null){
  const map = {}
  const res = []
  data.forEach(node=>{
    map[node.id] = Object.assign(node, map[node.id] || {})
    if(node.pid){
      const parent = map[node.pid] || {}
      parent.children = parent.children || []
      parent.children.push(node)
      map[node.pid] = parent
    }else{
      res.push(map[node.id])
    }
  })
  // console.log(data)
 return res
}
// console.log(JSON.stringify(buildTree(list)))
console.log("=====")
console.log(JSON.stringify(buildTree2(list)))
