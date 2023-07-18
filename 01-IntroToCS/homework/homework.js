'use strict';

function BinarioADecimal(num) {
   //var aString = num.toString();
   var suma = 0;
   for (let i = 0; i < num.length; i++) {
      if (num[i] === '1') { //se verifica si el dígito actual (num[i]) es igual a '1'. Si es así, significa que el dígito tiene un valor y debe contribuir al resultado decimal.
         suma = suma + Math.pow(2, num.length - 1 - i); // La potencia se obtiene restando 1 menos el índice i, para contar la posición desde la izquierda
      }   
   }
   return suma;
}

function DecimalABinario(num) {

   var numBinario = '';  //inicializamos una cadena vacía que contendrá el numero binario.
   //var numDiv = num;
   for (let i = 0; num > 0; i++) {
      var resto = num % 2 ; // Calculamos el resto de la división (modulo) y lo almacenamos en la variable resto.
      numBinario = resto + numBinario; // Agregamos el resto al principio de la cadena numBinario mediante concatenación (resto + numBinario).
      num = Math.floor(num/2); // Actualizamos el valor de num dividiéndolo entre 2: para obtener el entero 
   }
   return numBinario;
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
