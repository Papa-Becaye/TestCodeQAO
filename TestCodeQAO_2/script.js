function solution(number){
  if(number < 0){
    return(0)
  }
  let tabNaturalNumber = [];
  let i = 1 ;
  let j = 0, sum = 0;
  while(i <= number){
    if(i % 3 === 0 || i % 5 === 0){
      tabNaturalNumber[j] = i
      sum += i
      j += 1;
    }
    i += 1;
  }
  return(sum)
}

let tabNaturalNumber = solution(100)
console.log(tabNaturalNumber)