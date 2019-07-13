function howManyHundreds (number){
  let remainder = number % 100;
  let many = 0
  if (remainder === 0) {
    many = number / 100;
  } else {
    many = (number - remainder) / 100;
  }
  return many;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
