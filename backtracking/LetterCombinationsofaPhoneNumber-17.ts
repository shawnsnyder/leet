function letterCombinations(digits: string): string[] {
  if(!digits || digits.includes('1')) return []
  const combos:string[] = [];

  const codeMap = {
      "2": ["a","b","c"],
      "3": ["d","e","f"],
      "4": ["g","h","i"],
      "5": ["j","k","l"],
      "6": ["m","n","o"],
      "7": ["p","q","r","s"],
      "8": ["t","u","v"],
      "9": ["w","x","y","z"]
  }



  function backTrack(i:number, s:string, digits:string){
      if(i === digits.length){
          combos.push(s)
          return 
      } 

      const strI = digits[i];
      const code = codeMap[strI];
      const code2 = codeMap["2"];
      if(!code){ return;}
      for (const char of code){
          backTrack(i+1, s+char, digits)
      } 
  }
  backTrack(0, '', digits);

  return combos
};

//O(n∗4^n)
//O(n∗4^n)