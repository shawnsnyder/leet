//mine
function singleNumber(nums: number[]): number {
    const numberMap:number[] = [];
    for(const num of nums) {
        let index = numberMap.indexOf(num);
        if (index > -1) {
            numberMap.splice(index, 1); // Removes 1 element at index
        }else{
            numberMap.push(num)
        }
    }

    return numberMap[0]
}

//not right! use bit manipulation
