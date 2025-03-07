function generateParenthesis(n: number): string[] {

    const stack: string[] = []
    const result: string[] = []

    const backtrack = (openN:number, closedN:number)=> {
        console.log('backtrack', openN, closedN)
        if(openN === closedN && closedN === n){
            result.push(stack.join(''))
            return
        }
        if(openN < n){
            console.log('addingLeft', stack)
            stack.push('(');
            backtrack(openN+1, closedN)
            stack.pop();
            //return 
        }
        if(closedN < openN){
            stack.push(')');
            console.log('addingRight', stack)
            backtrack(openN, closedN+1);
            stack.pop();
            //return 
        }
    }
    backtrack(0,0);
    return result;
};


//like this way more 
function generateParenthesis2(n: number): string[] {
    // Define the result array to store valid combinations of parentheses.
    let result: string[] = [];

    // Define a depth-first search function to explore all possible combinations of parentheses.
    // l: count of left parentheses used, r: count of right parentheses used, currentString: current combination of parentheses
    function depthFirstSearch(leftCount: number, rightCount: number, currentString: string): void {
        // If the number of left or right parentheses exceeds n, or if the number of right parentheses
        // is greater than the left at any point, the current string is invalid.
        if (leftCount > n || rightCount > n || leftCount < rightCount) {
            return;
        }

        // If the current string uses all left and right parentheses correctly, add it to the result.
        if (leftCount === n && rightCount === n) {
            result.push(currentString);
            return;
        }

        // Explore further by adding a left parenthesis if it does not exceed the limit.
        depthFirstSearch(leftCount + 1, rightCount, currentString + '(');
      
        // Explore further by adding a right parenthesis if it does not exceed the limit.
        depthFirstSearch(leftCount, rightCount + 1, currentString + ')');
    }

    // Start the depth-first search with a count of 0 for both left and right parentheses and an empty string.
    depthFirstSearch(0, 0, '');

    // Return the array of valid combinations.
    return result;
}