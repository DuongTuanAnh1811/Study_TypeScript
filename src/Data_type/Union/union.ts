let code: string | number;
code = 123; // OK
code = 'ABC'; // OK
//code = false; // Compiler Error

function displayType(value: string | number) {
  if (typeof value === 'number') {
    return console.log('value is number');
  }
  if (typeof value === 'string') {
    return console.log('value is string');
  }

}
displayType(123);
displayType('Tuan');
//displayType(true);  Compiler Error


