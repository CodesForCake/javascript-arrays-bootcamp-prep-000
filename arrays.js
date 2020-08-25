var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a,b){
  [...a,b]
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b);
}