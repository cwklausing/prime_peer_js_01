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

value = arrayCheck(value);

value.shift();
value.pop();

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

value = parseInt(value);
prime = parseInt(prime);

console.log(value)
console.log(prime)
