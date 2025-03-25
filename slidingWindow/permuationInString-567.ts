function checkInclusion(s1: string, s2: string): boolean {
    // // no - make permutations
    //sort s2

    const sortedS1 = s1.split('').sort().join('')
    console.log('sortedStLength', sortedS1.length);
    let l = 0;
    //r start at length of s2
    for(let r=sortedS1.length-1;r<s2.length;r++){
        //sort current chunk
        console.log(l, r);
        const candidate = s2.substring(l, r+1) 
        const sortedCandidate = candidate.split('').sort().join('')
        console.log('sortedCandidate', sortedCandidate)
        if(sortedS1===sortedCandidate){
            return true
        }else{
            l++
        }
    }
    return false;
};

//:)
//O(n) // :( actually n^3log n)
//O(n)

