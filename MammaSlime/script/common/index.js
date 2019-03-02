// var name = "Alisher"
// var name = ['Alisher', 'Alisher', 0, true];
// var last = name[3];
// console.log(last)


var city = "Yellow blue green";

//charAt  
console.log(city.charAt(0));

//indexOf
console.log(city.indexOf('a'))

//lastIndexOf
console.log(city.lastIndexOf('a'))

//includes
console.log(city.includes('lmaty'))
console.log(city.includes('z'))

//length
console.log(city.length)

//substring
console.log(city.substring(0, 4));

//substr
console.log(city.substr(1, 10));

//toLowerCase
//toUpperCase
city.toLowerCase()
console.log(city);

//split
console.log(city.split(''))
city = city.split('')

//join
console.log(city.join(''))

//reverse
console.log(city.reverse().join(''))


var number = 1;
var str = "2";
console.log((+str) + number)

//string to number
console.log(+str)//cast "2" to number 2
console.log(str*1)//cast "2" to number 2
console.log(str-0)//cast "2" to number 2

//number to string
console.log(number+'') //cast number to string


//data types
//boolean, number, string, undefined, null, object, ArraY

console.log(typeof(number)) //number
console.log(typeof(str)) //str



if('string' === 'string') {
  console.log(true);
} else {
  console.log(false)
}


number = 20;
number = number + 10;
number += 10;
number++;
++number;

number = 20;
number = number - 10;
number -= 10;
number--;
--number;

number = 100;
var stepen = 2;
number **= stepen;


var year = 2000;
if(year > 2001) {
  result = 1;
} else if (year == 2001) {
  result = 2;
} else {
  result = 3;
}

//ternary operator
var result = year > 2001
              ? 1 :
                year == 2001
                  ? 2 : 3

// while(true) {
//   var  counter = 1;
//   // if(counter == 200) {
//   //   break;
//   // }
//   counter++;
// }
//forik
for (var i = 0; i < 3; i++) {

}

function toggleAside() {

  return "";
}

toggleAside();

//this

var car = {
  model: 'Camry',
  mark: 'Toyota',
  year: 2017,
  price: 10,
  "My name is ALISHER": "aslsdadasd",
}

console.log(car.model);
car.color = 'White';
console.log(car);

console.log(car['model'])
console.log(car["My name is ALISHER"])

function addPropertyToObject(value, prop, object) {
  object[prop] = value
}

function deletePropertyFromObject(object, prop) {
  delete object[prop]
}

function showObjectProps(object) {
  return Object.keys(object)
}

function calcObjectProps(object) {
  return Object.keys(object).length
}

addPropertyToObject('Alisher', 'name', car)
deletePropertyFromObject(car, 'name')

console.log(car);

console.log(showObjectProps(car));
console.log(calcObjectProps(car));
