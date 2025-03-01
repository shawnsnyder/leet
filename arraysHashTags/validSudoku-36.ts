/*
This solution uses the Hash Set Validation algorithm to ensure that each row, column, and 3x3 sub-box in the Sudoku board contains unique numbers from 1 to 9. By utilizing hash sets, we can efficiently track and verify the uniqueness of numbers in constant time.
*/

function isValidSudoku(board: string[][]): boolean {

  const rows: Set<string>[] = Array.from({length:9}, ()=>new Set());
  const columns: Set<string>[] = Array.from({length:9}, ()=>new Set());
  const boxes: Set<string>[] = Array.from({length:9}, ()=>new Set());

  console.log(rows);
  for(let r=0;r<9;r++){
      for(let c=0;c<9;c++){
          const cellValue = board[r][c];

          // Skip empty cells
          if (cellValue === '.') continue;

          const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
          if(rows[r].has(cellValue)){
              return false;
          } 
          if(columns[c].has(cellValue)){
              return false;
          } 
          if(boxes[boxIndex].has(cellValue)){
              return false;
          }
          rows[r].add(cellValue);
          columns[c].add(cellValue);
          boxes[boxIndex].add(cellValue);
      }
  }
  return true
};

/*
Time Complexity
The time complexity of the isValidSudoku function is O(1).

Explanation:
The function iterates over a fixed 9x9 Sudoku board, which contains a constant number of cells (81 cells).
Each cell is processed in constant time, involving operations such as checking and adding elements to hash sets.
Since the number of operations is constant and does not depend on any variable input size, the overall time complexity is O(1).

Space Complexity
The space complexity of the isValidSudoku function is O(1).

Explanation:
The function uses three arrays of sets (rows, columns, and boxes), each containing 9 sets.
Each set can hold at most 9 elements (the numbers 1-9), which is a constant space requirement.
Since the space used does not grow with the input size (as the board size is fixed), the space complexity is O(1).
*/