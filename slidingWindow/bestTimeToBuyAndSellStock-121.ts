function maxProfit(prices: number[]): number {
    let l = 0;
    let r = 1; 
    let maxP = 0  
    while(r < prices.length){
        console.log('checking if l:'+l+'< r:'+r)
        console.log(prices[l],prices[r])
        if(prices[l]<prices[r]){
            maxP = Math.max(maxP, prices[r]-prices[l]);
        }else{
            l=r
            console.log('new l as r', r, l)
        }
        r++
        console.log('new r', r);
    }
    return maxP;
}

//O(n)
//O(1)