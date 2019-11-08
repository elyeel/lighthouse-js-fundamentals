function merge(person1,person2){
  if (person2.length === 0 || person2 === undefined){
    return person1.sort();
  } else {
    for (i = 0 ; i < person2.length ; i++){
      person1.push(person2[i])
    } return person1.sort();
  }
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);