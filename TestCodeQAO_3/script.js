// Return an array

function fizzbuzz(n)
{
  let tabResultNumber = [];
  let i = 1 ;
  let j = 0;
  while(i <= n){
    if(i % 3 === 0 && i % 5 === 0){
      tabResultNumber[j] =  "FizzBuzz";
      j += 1;
    }else if(i % 3 === 0){
      tabResultNumber[j] =  "Fizz";
      j += 1;
    }else if(i % 5 === 0){
      tabResultNumber[j] =  "Buzz";
      j += 1;
    }else{
      tabResultNumber[j] = i;
      j += 1;
    } 
    i += 1;
  }
  return(tabResultNumber)
}

let tabResult = fizzbuzz(3)
console.log(tabResult)