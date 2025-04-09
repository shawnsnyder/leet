
function numIslands(grid: string[][]): number {

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

  const ROWS = grid.length
  const COLS = grid[0].length

  let islands = 0;

  function dfs(r, c) {
      if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0') {
          return
      }
      grid[r][c] = '0'
      for (const [dr, dc] of directions) {
          dfs(r+dr, c+dc)
      }
  }

  for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
          if (grid[row][col] === '1') {
              islands++
              dfs(row, col)
          }
      }
  }
  return islands
};

//O(m*n)
//O(m*n)