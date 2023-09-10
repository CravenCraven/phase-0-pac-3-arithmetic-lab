function add() {
    // we'll fill this in shortly
  }
  function subtract() {
    // we'll fill this in shortly
  }
  function multiply() {
    // we'll fill this in shortly
  }
  function divide() {
    // we'll fill this in shortly
  }  
  function add() {
    return "something";
  } 
  function add(a, b) {
    return "something";
  }
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function increment(number){
    return number+=1

  }
  function decrement(number){
    return number-=1

  }
 
  function makeInt(n) {
    const parsedInt = parseInt(n, 10); 
    if (!isNaN(parsedInt)) {
        return parsedInt;
    } else {
        
        return null; 

    }

}
function makeInt(string) {
    const parsedInt = parseInt(string, 10);
    
    if (!isNaN(parsedInt)) {
        return parsedInt;
    } else {
        return null; 
    }
}

function preserveDecimal(string) {
    const parsedFloat = parseFloat(string);
    
    if (!isNaN(parsedFloat)) {
        return parsedFloat;
    } else {
        return null;
    }
}

function makeInt(n) {
    const parsedInt = parseInt(n, 10);
    
    if (!isNaN(parsedInt)) {
        return parsedInt;
    } else {
        return NaN;
    }
}



function preserveDecimal(n) {
    return parseFloat(n);
}

 

  
  
  
  
  

