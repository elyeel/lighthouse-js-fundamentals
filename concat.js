function concat(person1,person2){
  if (person2.length === 0 || person2 === undefined){
    return person1;
  } else {
    for (i = 0 ; i < person2.length ; i++){
      person1.push(person2[i])
    } return person1;
  }
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);