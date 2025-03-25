


function binarySearch(l:number, r:number, items:number[], target:number){
    if(l > r) return -1

    const m = l + Math.floor((r-l)/2)

    if (items[m]===target){
        return m
    }
    (items[m] < target) ?
        binarySearch(m+1, r, items, target) :
        binarySearch(l, m-1, items, target)
}