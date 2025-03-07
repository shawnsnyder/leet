function isValid(s: string): boolean {

    if (s.length % 2 !== 0) {
        return false;
    }

    let stack: string[] = [];

    const charactersMap: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    const openCharacters: Set<string> = new Set(['(', '[', '{']);

    for (const char of s) {
        if (openCharacters.has(char)) {
            stack.push(char);
        } else if (stack.length > 0 && charactersMap[char] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};