var value = 42;

if (value >= 53) {
  value+= 42;
} else {
  value-= 13;
}

value = value + "11";

var array = [];

function arrayCheck (a) {
  for (i=0; i < value.length; i++) {
    array.push(a.charAt(i))
  }
  return array;
}

array.shift();
array.pop();

console.log(value)

var prime = [];

function backwards (b) {
  for (i= value.length; i > 0; i--) {
    prime.push(b[i-1])
  }
}

backwards(value);
console.log(prime)

value = value.join('');
prime = prime.join('');

//Step 7
value = parseInt(value);
prime = parseInt(prime);

console.log(value);
console.log(prime);

//Step 8
value += prime;

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
//Step 11
function makeString (val) {
  val = val.toString();
  if (val.length > 1) {
    val.slice(0);
  }
  value = val;
  return val;
};

//step 12
makeString(value);

//step 13
console.log(value);
