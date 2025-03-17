function searchMatrix(matrix: number[][], target: number): boolean {
    const findInArray = (arr: number[], target: number) => {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2)
            if (arr[mid] === target) return true
            if (arr[mid] > target) {
                low = mid + 1
            }
            if (arr[mid] < target) {
                high = mid - 1
            }
        }
        return false
    }

    const getHighestAndLowest = (arr: number[]) => {
        return [arr[0], arr[arr.length -1]]
    }

    let low=0;
    let high = matrix.length -1

    while (low <= high){
        const mid = Math.floor((low+high)/2)
        const [lowInSub, highInSub] = getHighestAndLowest(matrix[mid])
        if(target === lowInSub || target === highInSub) return true
        if(target < lowInSub){
            high = mid - 1;
        }
        if(target > highInSub){
            low = mid + 1
        }
        if(target > lowInSub && target < highInSub){
            return findInArray(matrix[mid], target)
        }
    }

    return false;
};

//O(logm+logn) or O(log(m*n))
//O(1)