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

function accessElementInArray(a,index) {
  return a[index];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(a){
  return a.pop();
}