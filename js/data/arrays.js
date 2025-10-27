const arrays = {
    id: 'arrays',
    title: 'Trabajando con Arrays',
    description: 'Aprende a manipular colecciones de datos en JavaScript',
    icon: 'layer-group',
    sections: {
        teoria: {
            title: 'Teoría',
            icon: 'book',
            content: `
                <h3>¿Qué son los arrays?</h3>
                <p>Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable.</p>
                
                <h4>Conceptos básicos:</h4>
                <ul>
                    <li><strong>Creación:</strong> <code>let frutas = ["manzana", "banana"];</code></li>
                    <li><strong>Acceso:</strong> <code>frutas[0]</code> devuelve "manzana"</li>
                    <li><strong>Longitud:</strong> <code>frutas.length</code> devuelve 2</li>
                </ul>
                
                <h4>Métodos básicos:</h4>
                <ul>
                    <li><code>push()</code>: Añade elementos al final</li>
                    <li><code>pop()</code>: Elimina el último elemento</li>
                    <li><code>unshift()</code>: Añade elementos al inicio</li>
                    <li><code>shift()</code>: Elimina el primer elemento</li>
                    <li><code>splice()</code>: Añade/elimina elementos en cualquier posición</li>
                    <li><code>slice()</code>: Copia una porción del array</li>
                    <li><code>concat()</code>: Une dos o más arrays</li>
                </ul>
                
                <h4>Métodos de transformación:</h4>
                <ul>
                    <li><code>map()</code>: Crea un nuevo array transformando cada elemento</li>
                    <li><code>filter()</code>: Filtra elementos que cumplan una condición</li>
                    <li><code>reduce()</code>: Reduce el array a un único valor</li>
                    <li><code>find()</code>: Busca el primer elemento que cumpla una condición</li>
                    <li><code>some()</code>/<code>every()</code>: Comprueba si algún/todos los elementos cumplen una condición</li>
                </ul>
            `
        },
        ejemplos: {
            title: 'Ejemplos',
            icon: 'laptop-code',
            items: [
                {
                    title: 'Creación y modificación',
                    code: '// Crear un array\nlet colores = ["rojo", "verde", "azul"];\n\n// Añadir al final\ncolores.push("amarillo");  // colores = ["rojo", "verde", "azul", "amarillo"]\n\n// Eliminar el último\nlet ultimo = colores.pop();  // ultimo = "amarillo", colores = ["rojo", "verde", "azul"]\n\n// Añadir al inicio\ncolores.unshift("blanco");  // colores = ["blanco", "rojo", "verde", "azul"]\n\n// Eliminar el primero\nlet primero = colores.shift();  // primero = "blanco", colores = ["rojo", "verde", "azul"]',
                    description: 'Operaciones básicas con arrays',
                    result: '// Estado final de las variables:\n// colores = ["rojo", "verde", "azul"]\n// ultimo = "amarillo"\n// primero = "blanco"'
                },
                {
                    title: 'Recorrer un array',
                    code: 'let numeros = [1, 2, 3, 4, 5];\n\n// Con for clásico\nfor (let i = 0; i < numeros.length; i++) {\n    console.log(numeros[i]);  // Imprime: 1, 2, 3, 4, 5\n}\n\n// Con for...of\nfor (let numero of numeros) {\n    console.log(numero);  // Imprime: 1, 2, 3, 4, 5\n}\n\n// Con forEach\nnumeros.forEach(numero => {\n    console.log(numero * 2);  // Imprime: 2, 4, 6, 8, 10\n});',
                    description: 'Diferentes formas de recorrer un array',
                    result: '// Salida en consola:\n// 1, 2, 3, 4, 5 (for clásico)\n// 1, 2, 3, 4, 5 (for...of)\n// 2, 4, 6, 8, 10 (forEach)'
                },
                {
                    title: 'Métodos de transformación',
                    code: 'const numeros = [1, 2, 3, 4, 5];\n\n// map: duplicar cada número\nconst duplicados = numeros.map(num => num * 2);\n\n// filter: obtener números pares\nconst pares = numeros.filter(num => num % 2 === 0);\n\n// reduce: sumar todos los números\nconst suma = numeros.reduce((total, num) => total + num, 0);\n\n// find: encontrar el primer número mayor que 3\nconst mayorQueTres = numeros.find(num => num > 3);\n\n// some: verificar si hay algún número par\nconst hayPares = numeros.some(num => num % 2 === 0);\n\n// every: verificar si todos son menores que 10\nconst todosMenores = numeros.every(num => num < 10);',
                    description: 'Ejemplos de métodos de transformación de arrays',
                    result: '// Resultados de las operaciones:\n// duplicados = [2, 4, 6, 8, 10]\n// pares = [2, 4]\n// suma = 15\n// mayorQueTres = 4\n// hayPares = true\n// todosMenores = true'
                }
            ]
        },
        ejercicios: {
            title: 'Ejercicios',
            icon: 'tasks',
            items: [
                {
                    id: 'ejercicio1',
                    title: 'Suma de elementos',
                    description: 'Escribe una función que sume todos los elementos de un array de números usando reduce.',
                    solution: '// Suma todos los elementos de un array de números\n// @param {number[]} numeros - Array de números a sumar\n// @return {number} La suma de todos los elementos\nconst sumarArray = numeros => {\n    return numeros.reduce((acumulador, actual) => {\n        return acumulador + actual;\n    }, 0);\n};'
                },
                {
                    id: 'ejercicio2',
                    title: 'Buscar elemento',
                    description: 'Escribe una función que busque un elemento en un array y devuelva su índice, o -1 si no lo encuentra.',
                    solution: '// Busca un elemento en un array y devuelve su índice\n// @param {Array} array - Array donde buscar\n// @param {*} elemento - Elemento a buscar\n// @return {number} Índice del elemento o -1 si no se encuentra\nconst buscarElemento = (array, elemento) => {\n    return array.findIndex(item => item === elemento);\n};\n\n// Alternativa usando includes e indexOf\n// const buscarElemento = (array, elemento) => {\n//     return array.includes(elemento) \n//         ? array.indexOf(elemento) \n//         : -1;\n// };'
                },
                {
                    id: 'ejercicio3',
                    title: 'Filtrar palabras largas',
                    description: 'Escribe una función que tome un array de palabras y un número, y devuelva un nuevo array con las palabras que tengan una longitud mayor al número dado.',
                    solution: '// Filtra palabras según su longitud\n// @param {string[]} palabras - Array de palabras a filtrar\n// @param {number} longitudMinima - Longitud mínima requerida\n// @return {string[]} Array con las palabras que cumplen la condición\nconst filtrarPalabrasLargas = (palabras, longitudMinima) => {\n    return palabras.filter(palabra => {\n        return palabra.length > longitudMinima;\n    });\n};'
                },
                {
                    id: 'ejercicio4',
                    title: 'Suma de números pares',
                    description: 'Escribe una función que sume solo los números pares de un array de números usando filter y reduce.',
                    solution: '// Suma solo los números pares de un array\n// @param {number[]} numeros - Array de números\n// @return {number} Suma de los números pares\nconst sumarPares = numeros => {\n    return numeros\n        .filter(num => num % 2 === 0)\n        .reduce((suma, num) => suma + num, 0);\n};\n\n// Alternativa usando solo reduce\n// const sumarPares = numeros => {\n//     return numeros.reduce((suma, num) => {\n//         return num % 2 === 0 ? suma + num : suma;\n//     }, 0);\n// };'
                },
                {
                    id: 'ejercicio5',
                    title: 'Encontrar el mayor',
                    description: 'Escribe una función que encuentre el número mayor en un array de números.',
                    solution: '// Encuentra el número mayor en un array\n// @param {number[]} numeros - Array de números\n// @return {number} El número más grande\nconst encontrarMayor = numeros => {\n    return Math.max(...numeros);\n};\n\n// Alternativa usando reduce\n// const encontrarMayor = numeros => {\n//     return numeros.reduce((mayor, actual) => {\n//         return Math.max(mayor, actual);\n//     }, -Infinity);\n// };'
                },
                {
                    id: 'ejercicio6',
                    title: 'Aplanar arrays',
                    description: 'Escribe una función que tome un array de arrays y devuelva un solo array con todos los elementos.',
                    solution: '// Aplana un array de arrays en un solo array\n// @param {Array[]} arrays - Array de arrays a aplanar\n// @return {Array} Array aplanado\nconst aplanarArrays = arrays => {\n    return arrays.flat();\n};\n\n// Alternativa usando reduce\n// const aplanarArrays = arrays => {\n//     return arrays.reduce((resultado, array) => {\n//         return [...resultado, ...array];\n//     }, []);\n// };'
                },
                {
                    id: 'ejercicio7',
                    title: 'Contar ocurrencias',
                    description: 'Escribe una función que cuente cuántas veces aparece un elemento en un array.',
                    solution: '// Cuenta las ocurrencias de un elemento en un array\n// @param {Array} array - Array donde buscar\n// @param {*} elemento - Elemento a contar\n// @return {number} Número de ocurrencias\nconst contarOcurrencias = (array, elemento) => {\n    return array.reduce((contador, actual) => {\n        return actual === elemento ? contador + 1 : contador;\n    }, 0);\n};'
                },
                {
                    id: 'ejercicio8',
                    title: 'Promedio de edades',
                    description: 'Dado un array de objetos con una propiedad "edad", escribe una función que calcule el promedio de edades.',
                    solution: '// Calcula el promedio de edades en un array de personas\n// @param {Array<Object>} personas - Array de objetos con propiedad edad\n// @return {number} Promedio de edades\nconst promedioEdades = personas => {\n    const suma = personas.reduce((total, persona) => {\n        return total + persona.edad;\n    }, 0);\n    \n    return suma / personas.length;\n};'
                },
                {
                    id: 'ejercicio9',
                    title: 'Filtrar palabras que contengan una letra',
                    description: 'Escribe una función que tome un array de palabras y una letra, y devuelva un nuevo array con las palabras que contengan esa letra.',
                    solution: '// Filtra palabras que contengan una letra\n// @param {string[]} palabras - Array de palabras a filtrar\n// @param {string} letra - Letra a buscar\n// @return {string[]} Array con las palabras que cumplen la condición\nconst filtrarPalabrasConLetra = (palabras, letra) => {\n    return palabras.filter(palabra => {\n        return palabra.includes(letra);\n    });\n};'
                },
                {
                    id: 'ejercicio10',
                    title: 'Encontrar el primer elemento que cumpla una condición',
                    description: 'Escribe una función que tome un array y una condición, y devuelva el primer elemento que cumpla esa condición.',
                    solution: '// Encuentra el primer elemento que cumpla una condición\n// @param {Array} array - Array donde buscar\n// @param {Function} condicion - Condición a cumplir\n// @return {*} Primer elemento que cumple la condición\nconst encontrarPrimerElemento = (array, condicion) => {\n    return array.find(condicion);\n};'
                }
            ]
        }
    }
};

export { arrays };
