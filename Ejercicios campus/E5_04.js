// Crear una función que busque el número más pequeño en el arreglo.
// Ejemplo input - > [1,4,5,-1,-7,2,3,9]
// Salida -> -7


const numeros = [1, 4, 5, -1, -7, 2, 3, 9];

function encontrarMinimo(arr) {
    let minimo = arr[0]; 

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < minimo) { 
            minimo = arr[i]; 
        }
    }

    return minimo; 
}

const minimoNumero = encontrarMinimo(numeros);
console.log(minimoNumero);