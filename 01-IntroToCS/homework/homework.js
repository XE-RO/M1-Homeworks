'use strict';


function BinarioADecimal(num) {
   let array1=num.toString().split('').reverse()
   let resultado=0
   for(let i=0 ; i < array1.length ; i++){
      resultado+=Math.pow(2,i)*array1[i]
   }
return resultado

}

function DecimalABinario(num) {
   let binario = []
   while(num>=1){
      binario.unshift(num%2)
      num=Math.floor(num/2)
   }
   return binario.join("")
   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
