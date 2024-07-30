
// 1. Ejercicio de la clase
//Crear una función que busque el número más grande en un arreglo.
// const b = [1,4,80,7,2,4,1,9,4,0,2,4,5,12]
// //Salida -> 80

// function maxNumber(arreglo) {
//   console.log(arreglo)
//   // evaluar por pares // TimSort
//   // se crear numeros random 
//   const r = arreglo.sort((current, next) => current - next)
//   // return r[arreglo.length - 1]
//   // at es un metodo que regresa el ultimo elemento
//   // return r.at(-1)  

//   return r.at(-1)
// }

// maxNumber(b)



// 2. Con método sort
// function encontrarMaximo(arr) {
//     let maximo = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maximo) {
//             maximo = arr[i]
//         }
//     }
//     return maximo;
// }


//3. Con método sort y .at 

const numeros = [1,4,80,7,2,4,1,9,4,0,2,4,5,12];
function encontrarMaximo(arr){
    arr.sort((a , b) => a-b);
    return arr.at(-1);
}

const maximoNumero = encontrarMaximo (numeros);
console.log(maximoNumero);
