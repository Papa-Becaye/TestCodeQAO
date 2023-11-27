function createPhoneNumber(numbers){
  let phoneNumber = "(";
  if(numbers.length < 10 ){
    console.log("Nombre d'element trop petit !")
  }else{
    for(let i = 0; i < 10; i++){
      if(i===2){
        phoneNumber += (numbers[i]+") ")
      }else if(i===5){
        phoneNumber += (numbers[i]+"-")
      }else{
        phoneNumber += numbers[i]
      }
    }
  }
  return(phoneNumber)
}

let phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log(phoneNumber)