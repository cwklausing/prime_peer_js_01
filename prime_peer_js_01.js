var value = 42;

if (value >= 53) {
  value+= 42;
} else {
  value-= 13;
}

value = value + "11";

var array = [];

function arrayCheck (a) {
  for (var i=0; i < value.length; i++) {
    array.push(a.charAt(i))
  }
  return array;
}

array = arrayCheck(value);

array.shift();
array.pop();

console.log(array);

var prime = '';
//Step 6
for (var i = array.length; i > 0; i--) {
    prime += array[i - 1];
}

console.log(prime)

//Step 7
value = parseInt(value);
prime = parseInt(prime);

console.log(value);
console.log(prime);

//Step 8
value += prime;
console.log(value);
//Step 9
if (value < 60) {
  value = 14;
} else if (value === 2930){
  value = 27;
} else { 
  value = 2;
}

//Step 10
var i = 10;
while (i > 0) {
  value++;
  i--;
}
console.log(value);
//Step 11
function makeString (val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.slice(1, val.length);
  }
  return val;
};

//step 12
value = makeString(value);

//step 13
console.log(value);
