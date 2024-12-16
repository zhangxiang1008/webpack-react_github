function upCost(nums,cost){
    const dp = new Array(nums.length+1)
    dp[0] = 0
    dp[1] = cost[0]
    dp[2] = cost[1]
    for(let i = 3;i <= nums.length;i++){
        dp[i] = Math.min(dp[i-1],dp[i-2]) +cost[i-1]
    }
    console.log(dp)
    return dp[nums.length]
}

console.log(upCost([1,2,3],[1,10,1]))

console.log("===========最大子序列============")

function maxSubstring(a,b){

    const len1 = a.length;
    const len2 = b.length;

    const dp = new Array(len1 + 1).fill(0).map(()=>new Array(len2+1).fill(0))
    
    for(let i = 1;i <=len1;i++){
        const char1 = a[i-1]
        for(let j = 1;j <=len2;j++){
            const char2 = b[j-1]
            if(char1 === char2){
                dp[i][j] = dp[i-1][j-1] + 1
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    return dp[len1][len2]
}

console.log(maxSubstring('abcdef','ace')) 

