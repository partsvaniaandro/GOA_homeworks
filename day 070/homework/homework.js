function numRows(num, rows){
    let count = 0
      for(let i = 0; i < rows; i++){
          let row = []
          for(let j = 1; j < num+1; j++){
            count = count + 1
              row.push(count)
          }
          console.log(row)
      }
  }
  numRows(4, 2)