var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a,b){
  return [...a,b];
}

function destructivelyAddElementToBeginningOfArray(a,b){
  return a.unshift(b);
}

function addElementToEndOfArray(){
  return [b,...a]; 
}

function destructivelyAddElementToEndOfArray(){
  return a.push(b);
}

function 