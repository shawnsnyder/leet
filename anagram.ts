function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const charCountMap: Map<string, number> = new Map();
    for(const char of s){
        const currentCount = charCountMap.get(char) || 0;
        charCountMap.set(char, currentCount+1);
    }
    for(const char of t){
        const currentCount = charCountMap.get(char);
        if(!currentCount){
            return false;
        }
        charCountMap.set(char, currentCount-1);
    }
    return true;
}
