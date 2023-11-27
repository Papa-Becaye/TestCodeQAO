class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest_Int = args[0];
      for(let i = 1; i < args.length; i++){
        if(smallest_Int > args[i]){
            smallest_Int = args[i];
        }
      }
      return(smallest_Int)
    }
  }
  let smallestInt = new SmallestIntegerFinder();
  let tabInteger = [34, 15, 88, 2,1]
  console.log(smallestInt.findSmallestInt(tabInteger))