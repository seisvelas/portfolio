var {range} = require('range')
        
function isThreatened(board, pos) {
  return board.includes(pos) ||
         board.filter((e, i, a) =>
                   a.length - i === Math.abs(e - pos)
                 ).length
}
      
function nqueens(n, board=[]) {
  let moves = range(n).filter(e=>
    !isThreatened(board, e)
  )
        
  return board.length === n - 1
         ? moves
         : moves.map((m,i,a)=>
             nqueens(n, a.concat([m])).map(sol=>
               [m].concat(sol)
             )
           ).reduce((acc, cur) => acc.concat(cur), []);
}
console.log(nqueens(8))  
console.log(nqueens(8).length)  