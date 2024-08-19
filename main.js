
const example = [
  ["A","A","A"],["A","A","A"],["B","A","A"]
];


const whereIsWaldo = (matrix) => {
  const result = [];
  for(let x =0; x< matrix.length; x++)
  {
    for(let y=0; y< matrix[x].length; y++)
 {
      if(matrix[x][y] !== matrix[0][0])
        {
          return [x+1,y+1];
          break
        }   
  }

}
return null;
}

console.log(whereIsWaldo(example))
// should output [3,1]

