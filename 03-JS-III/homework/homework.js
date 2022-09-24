// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var imprimirSumaNumeros = numeros.reduce(function(acc, elemento){
      return acc + elemento;
    });
    return imprimirSumaNumeros;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código: 
  var pares =[];

  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      pares.push(array[i]);
    }
  }
  return pares;
}  

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
/*
  return array.map (function(valor){
    return valor ** 2;
  });
  */

  var elevaAlCuadrado = array.map(function(elemento){
    return elemento ** 2;
  });
  return elevaAlCuadrado;
}


function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
/*
var acumulador = 0;

for(var i = 0; i < array.length; i++){
  acumulador = acumulador + array[i];
}
return acumulador
*/
  var total = array.reduce(function(acc, elemento){
    return acc + elemento;
  });
  return total;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
/*var num = num + '';
return num.length; */

return num.toString().length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
