function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();
  for (const num of nums){
      frequencyMap.set(num, (frequencyMap.get(num)|| 0)+1);
  }
  console.log(frequencyMap.entries());
  // Create an array of buckets where index represents frequency
  const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, freq] of frequencyMap.entries()){
      console.log('num and freq', num, freq)
      buckets[freq].push(num)
  }
  const result: number[] = [];
  for(let i=buckets.length-1;i>=0 && result.length < k; i--){
      if (buckets[i].length > 0){
          result.push(...buckets[i]);
      }
  }
  return result.slice(0,k);
}