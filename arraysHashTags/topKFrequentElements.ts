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

function topKFrequent2(nums: number[], k: number): number[] {
    const freq: { [key: number]: number } = {};
    for (const n of nums) {
        if (freq[n] === undefined) freq[n] = 0;
        freq[n] += 1;
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(v => Number(v[0]));
};

function topKFrequentFAV(nums: number[], k: number): number[] {
    const numMap:Map<number, number> = new Map();
    for(const num of nums){
     console.log(num)
     numMap.set(num, (numMap.get(num) || 0)+1)
    }
     const result = [...numMap.entries()]
         .sort((a,b)=> b[1] - a[1])
         .slice(0, k)
         .map(v => v[0])
     console.log(result)
     return result
 };