function combinationSum(candidates: number[], target: number): number[][] {
  const ans = []
  const curr = []
  backtrack(candidates, target, ans, curr, 0) 
  return ans


  function backtrack(candidates, target, ans, curr, index){
      console.log('curr', curr , 'index', index)
      console.log('ans', ans)
      if(target === 0){
          ans.push([...curr])
      }else if(target<0 || index >= candidates.length){
          return;
      }else{
          curr.push(candidates[index])
          backtrack(candidates,target-candidates[index], ans, curr,index)
          curr.pop(candidates[index])
          backtrack(candidates,target, ans, curr, index+1)
      }

  }
}
//O(2*(t/m))
//O(t/m)

//t is target and m is min value of candidates