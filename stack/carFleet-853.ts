function carFleet(target: number, position: number[], speed: number[]): number {
    const n: number = speed.length;
    const v: [number, number][] = [];

    for (let i = 0; i < n; i++) {
      v.push([position[i], speed[i]]);
    }

    v.sort((a, b) => a[0] - b[0]);

    const time: number[] = [];

    for (let i = 0; i < n; i++) {
      time.push((target - v[i][0]) / v[i][1]);
    }

    let curr: number = Number.NEGATIVE_INFINITY;
    let res: number = 0;

    for (let i = n - 1; i >= 0; i--) {
      if (time[i] > curr) {
        curr = time[i];
        res++;
      }
    }

    return res;
    
};

//O(nlogn)
//O(n)
   


function carFleet2(target: number, position: number[], speed: number[]): number {
  const pairs:[number,number][] = position.map((item, index)=>  [position[index], speed[index]])
  pairs.sort( (a,b)=> b[0]-a[0])


  let fleets = 1 

  let prev = (target-pairs[0][0])/pairs[0][1];
  for(let i=1;i<pairs.length;i++){
      const current = (target-pairs[i][0])/pairs[i][1];
      if(current > prev){
          fleets++
          prev = current
      }
  } 
  return fleets 
};

//O(nlogn)
//O(n)