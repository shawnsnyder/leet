function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Map<string, string[]> = new Map();
  for (const str of strs) {
      console.log('begin str', str)
      // Sort the string to create a key
      const sortedStr = str.split('').sort().join('');
      console.log('sorted string', sortedStr)
      // If the sorted key is not in the map, add it with an empty array
      if (!anagramMap.has(sortedStr)) {
          anagramMap.set(sortedStr, []);
      }

      // Add the original string to the array corresponding to the sorted key
      anagramMap.get(sortedStr)!.push(str);
  }
  console.log('anagramMap', anagramMap);
  // Return the grouped anagrams as an array of arrays
  return Array.from(anagramMap.values());
}