interface IOperatorSets {
    [key: string] : (a: number, b: number) => number;
}

function evalRPN(tokens: string[]): number {
     const operatorSets: IOperatorSets = {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
        '/': (a: number, b: number) => a / b | 0, // truncate toward zero
    };

    const stack: number[]= [];

    tokens.forEach(r => {
        console.log('token', r)
        if (operatorSets[r] != null) {
            console.log('operator')
            const b = Number(stack.pop());
            const a = Number(stack.pop());
            console.log('operator set', a, b);
            
            stack.push(operatorSets[r](a, b));
        } else {
            stack.push(Number(r));
            console.log('stack', stack)
        }
    });
    return stack.pop() as number;

    


};