function convertToHex(number){
  if(number > 255){
    number = 255
  }else if(number < 0){
    number = 0
  }
  let modul = [];
  let toHexa = "";
  let i = 0;
  quotient = parseInt(number/16)
  rest = number % 16;
  modul[i] = rest;
  while(quotient !== 0){
    modul[i+1] = quotient % 16;
    quotient = parseInt(quotient/16)
    i += 1;
  }
  if(modul.length === 1){
    toHexa = "0"
  }
  for(let i = modul.length-1; i >= 0 ; i--){
    if(modul[i] === 10){
      toHexa += "A"
    }else if(modul[i] === 11){
      toHexa += "B"
    }else if(modul[i] === 12){
      toHexa += "C"
    }else if(modul[i] === 13){
      toHexa += "D"
    }else if(modul[i] === 14){
      toHexa += "E"
    }else if(modul[i] === 15){
      toHexa += "F"
    }else{
      toHexa += modul[i]
    }
  }
  return(toHexa)
}

// let tab = convertToHex(0)
// console.log(tab)

function rgb(r, g, b) {
  let red = convertToHex(r), green = convertToHex(g), blue = convertToHex(b)
  return (red + green + blue);
}
let hexaColorConvert = rgb(173, 255,  47)
console.log(hexaColorConvert)