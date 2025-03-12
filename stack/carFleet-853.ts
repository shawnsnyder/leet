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
    