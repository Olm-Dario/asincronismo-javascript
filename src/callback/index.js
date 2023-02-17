function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

//No se le pasan los argumentos debido a que sino se estara llamando 
//de manera inmediata y esto generara un error
console.log(calc(1, 2, sum));


/*------------------------------*/
setTimeout(() => {
  console.log('Hola JavaScript');
}, 2000);


/*------------------------------*/
function grettin(name) {
  console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, 'Dario');