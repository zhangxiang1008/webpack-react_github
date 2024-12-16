

function ListNode(val,left,right){
    this.val = val
    this.left = left
    this.right = right
    return this
}
const left11 = new  ListNode(4) 
const right12 =new  ListNode(5)
const left21 = new  ListNode(6) 
const right22 =new  ListNode(7)
const left1 =new  ListNode(2,left11,right12)
const right1 =new  ListNode(3,left21,right22)

const root = new ListNode(1,left1,right1)
const res = []
function preOrder(root){
    if(root === null || root === undefined){
        return 
    }
    res.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
}
preOrder(root)
console.log(res)


// 搜索树
function dfsWithPath(root,target,path=[]){
    if(!root) return null
    path = [...path,root.val]
    if(root.val === target){
        return path
    }
    let leftResult = dfsWithPath(root.left,target,path)
    if(!!leftResult){
        return leftResult
    }
    let rightResult = dfsWithPath(root.right,target,path)
    if(!!rightResult){
        return rightResult
    }
    return null
}

console.log(dfsWithPath(root,5))


function dfs(num){
    if(num > 1){
        return 
    }
    
}