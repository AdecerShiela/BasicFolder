var age = 15;
var pi = 3.1416;
var date = new Date ();
var computerArea = function(l,w){
    return l * w;
}
var name = "Shiela Adecer";
console.log('Age:' + age);
console.log('PI:' + pi.toFixed(2));
console.log(date);
console.log(name);
console.log(computerArea(10,60));

var x =1;
var y=null;
var waladiha=undefined;

if (x)
console.log('x is true' );

if (!y)
console.log('y is false' );

if (!waladiha)
console.log('Wala diha Undefined' );

//===========JSON is a javascript object notation;
var jsonObject = {
    name: 'Shiela',
    lastname: 'Adecer',
    address: 'Tagbilaran',

};
console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);


