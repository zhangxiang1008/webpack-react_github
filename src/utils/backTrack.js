function backtrack(path,nums,selected,res=[]){
    if(path.length === nums.length){
        res.push([...path])
        return
    }
    const duplicated = new Set()
    nums.forEach((element,i) => {
        if(!selected[i] && !duplicated.has(element)){
            path.push(element)
            selected[i] = true
            duplicated.add(element)
            backtrack(path,nums,selected,res)
            selected[i] = false
            path.pop()
        }
    });
}

function allComposition(nums){
    const res = [];
    backtrack([], nums, Array(nums.length).fill(false), res);
    return res;
}

console.log(allComposition([1,1,3]))

console.log("====子集和====")

function getSubSum(nums,target){
    const res = []
    nums.sort((a,b)=>a-b)
    const path = []
    backtrackSum(path,nums,0,target,res)
    return res
}

function backtrackSum(path,nums,index,target,res){
    if(path.length > 3){
        return
    }
    if(target === 0 && path.length === 3){
        res.push([...path])
        return
    }

    for(let i = index;i < nums.length;i++){
        if(target - nums[i] < 0){
            break;
        }
        if(i > index && nums[i] === nums[i-1]){
            continue
        }
        path.push(nums[i])
        backtrackSum(path,nums,i+1,target - nums[i],res)
        path.pop()
    }
}



console.log(getSubSum([
    -4, -3, -2, -1, -1,
     0,  0,  1,  2,  3,
     4
  ],0)) 