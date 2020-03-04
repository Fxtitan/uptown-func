/******************
 * YOUR CODE HERE *
 ******************/
const call = function(arr){
arr();
}//this is how I can callback the function.

const callTwice = function (twice){
  twice();
  twice();
}

const callXTimes = function (func, value){
  for(i = 0; i < value; i++ ) {
    func();
    }
} 

const returnFromFunc = function (func){
return func();
}

const modifyString = function (string, func){
return func(string);
} 

const modifyNumber = function (num, func){
return func(num);
}

const modifyAnything = function (value, func){
return func(value);
}

const twoFuncs = function (func1,func2){
return func2(func1());
}

const threeFuncs = function (func1,func2,func3){
return func3(func2(func1()));
}

const twoValues = function(value, value2, func){
return func(value, value2);
}

const twoValuesRTL = function (value, value2, func){
return func(value2, value);
}



/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  threeFuncs,
  twoValues,
  twoValuesRTL,
}
