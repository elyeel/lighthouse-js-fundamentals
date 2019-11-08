function lastIndexOf(numberArr,number){
  let i = numberArr.length;
  if (i===undefined||i===0){
    return -1;
  }
  for (let j = i-1 ; j >= 0 ; j--){
    if (numberArr[j] === number){
      return j;
    }
    if (j<=0){
      return -1
    }  
    
  } 
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);