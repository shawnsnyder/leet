function dailyTemperatures(temperatures: number[]): number[] {
    let result = new Array(temperatures.length).fill(0)
    for(let i=0;i<temperatures.length;i++){
        let dayWait = 0
        for(let j=i+1;j<temperatures.length;j++){
            dayWait++; 
            if(temperatures[j]>temperatures[i]){
                result[i] = dayWait
                break;
            }
        }
    }
    return result;
}

//o(n)
//o(1)

/*
could do this as stack , research later
*/

function dailyTemperatures2(temperatures: number[]): number[] {
    const stack: number[] = []
    const ans: number[] = Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];

        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop() as number;
            ans[j] = i - j;
        }

        stack.push(i)
    }

    return ans;
};