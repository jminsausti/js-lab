/**
 * Fundamentos de JavaScript
 * Contenido para la sección de conceptos básicos de JavaScript
 */

export const fundamentosData = {
    id: 'fundamentos',
    title: 'Fundamentos de JavaScript',
    icon: 'book',
    description: 'Conceptos básicos de JavaScript, incluyendo variables, tipos de datos, funciones y más.',
    sections: [
        {
            id: 'teoria',
            title: 'Teoría',
            icon: 'book-reader',
            content: `
                <h3>Introducción a JavaScript</h3>
                <p>JavaScript es un lenguaje de programación interpretado que se utiliza principalmente en el desarrollo web para añadir interactividad a las páginas.</p>
                
                <h4>Variables</h4>
                <p>En JavaScript, las variables se pueden declarar de tres formas:</p>
                <ul>
                    <li><code>var</code> - Ámbito de función (evitar su uso en código moderno)</li>
                    <li><code>let</code> - Ámbito de bloque, permite reasignación</li>
                    <li><code>const</code> - Ámbito de bloque, no permite reasignación</li>
                </ul>

                <h4>Tipos de datos</h4>
                <p>JavaScript tiene varios tipos de datos primitivos:</p>
                <ul>
                    <li><code>string</code> - Cadenas de texto</li>
                    <li><code>number</code> - Números (enteros y decimales)</li>
                    <li><code>boolean</code> - Valores lógicos (true/false)</li>
                    <li><code>null</code> - Valor nulo intencional</li>
                    <li><code>undefined</code> - Variable no definida</li>
                    <li><code>symbol</code> - Valor único e inmutable</li>
                    <li><code>bigint</code> - Para números enteros muy grandes</li>
                </ul>

                <h3>Funciones en JavaScript</h3>
                <p>Las funciones son bloques de código reutilizables que realizan una tarea específica.</p>
                
                <h4>Declaración de funciones</h4>
                <p>Hay varias formas de declarar funciones en JavaScript:</p>
                
                <h5>1. Declaración de función</h5>
                <pre><code>function saludar(nombre) {
    return 'Hola ' + nombre;
}</code></pre>
                
                <h5>2. Expresión de función</h5>
                <pre><code>const saludar = function(nombre) {
    return 'Hola ' + nombre;
};</code></pre>
                
                <h5>3. Funciones flecha (Arrow functions)</h5>
                <p>Introducidas en ES6, proporcionan una sintaxis más concisa y manejan el contexto (<code>this</code>) de manera diferente.</p>
                <pre><code>// Forma básica
const sumar = (a, b) => {
    return a + b;
};

// Si solo tiene una expresión, se puede omitir las llaves y el return
const multiplicar = (a, b) => a * b;

// Si solo tiene un parámetro, se pueden omitir los paréntesis
const cuadrado = x => x * x;

// Sin parámetros
const holaMundo = () => '¡Hola Mundo!';</code></pre>

                <h4>Parámetros y argumentos</h4>
                <p>Las funciones pueden recibir parámetros con valores por defecto:</p>
                <pre><code>function saludar(nombre = 'Visitante', edad = 25) {
    return 'Hola ' + nombre + ', tienes ' + edad + ' años.';
}</code></pre>

                <h4>Retorno de funciones</h4>
                <p>Las funciones pueden devolver valores usando la palabra clave <code>return</code>.</p>
                <p>Si no se especifica un valor de retorno, la función devuelve <code>undefined</code>.</p>

                <h3>Ámbito (Scope) y Hoisting</h3>
                <p>El ámbito determina la accesibilidad de las variables en diferentes partes del código.</p>
                <p>El hoisting es un comportamiento de JavaScript que mueve las declaraciones al inicio del ámbito actual.</p>

                <h3>Closures</h3>
                <p>Un closure es una función que tiene acceso a su propio ámbito, al ámbito de la función externa y a las variables globales.</p>
                <pre><code>function contador() {
    let cuenta = 0;
    return function() {
        cuenta += 1;
        return cuenta;
    };
}

const miContador = contador();
console.log(miContador()); // 1
console.log(miContador()); // 2</code></pre>
            `
        },
        {
            id: 'ejemplos',
            title: 'Ejemplos',
            icon: 'laptop-code',
            items: [
                {
                    id: 'ejemplo-funciones',
                    title: 'Funciones básicas',
                    description: 'Diferentes formas de declarar y usar funciones en JavaScript.',
                    code: '// Declaración de función tradicional\nfunction sumar(a, b) {\n    return a + b;\n}\n\n// Expresión de función\nconst restar = function(a, b) {\n    return a - b;\n};\n\n// Función flecha\nconst multiplicar = (a, b) => a * b;\n\n// Uso de las funciones\nconsole.log(sumar(5, 3));\nconsole.log(restar(10, 4));\nconsole.log(multiplicar(3, 4));',
                    result: '8\n6\n12'
                },
                {
                    id: 'ejemplo-flechas',
                    title: 'Funciones flecha',
                    description: 'Ejemplos de funciones flecha y sus diferencias con las funciones tradicionales.',
                    code: '// Función tradicional\nconst numeros = [1, 2, 3, 4, 5];\n\n// Usando función tradicional\nconst cuadradosTradicional = numeros.map(function(num) {\n    return num * num;\n});\n\n// Usando función flecha\nconst cuadradosFlecha = numeros.map(num => num * num);\n\nconsole.log(\'Cuadrados (tradicional):\', cuadradosTradicional);\nconsole.log(\'Cuadrados (flecha):\', cuadradosFlecha);\n\n// Otra diferencia importante: manejo de \'this\'\nconst persona = {\n    nombre: \'Ana\',\n    saludarTradicional: function() {\n        console.log(\'Hola, soy \' + this.nombre);\n    },\n    saludarFlecha: () => {\n        console.log(\'Hola, soy \' + this.nombre); // \'this\' no está enlazado al objeto\n    }\n};\n\npersona.saludarTradicional(); // Funciona correctamente\npersona.saludarFlecha();      // No funciona como se espera',
                    result: 'Cuadrados (tradicional): [1, 4, 9, 16, 25]\nCuadrados (flecha): [1, 4, 9, 16, 25]\nHola, soy Ana\nHola, soy undefined'
                },
                {
                    id: 'ejemplo-parametros',
                    title: 'Parámetros y argumentos',
                    description: 'Uso de parámetros por defecto y argumentos en funciones.',
                    code: '// Función con parámetros por defecto\nfunction crearSaludo(saludo = \'Hola\', nombre = \'usuario\') {\n    return saludo + \', \' + nombre + \'!\';\n}\n\nconsole.log(crearSaludo());\nconsole.log(crearSaludo(\'Buenos días\', \'Carlos\'));\n\n// Usando el operador rest para manejar múltiples argumentos\nfunction sumar(...numeros) {\n    return numeros.reduce((total, num) => total + num, 0);\n}\n\nconsole.log(\'Suma de 1, 2, 3, 4, 5:\', sumar(1, 2, 3, 4, 5));\nconsole.log(\'Suma de 10, 20, 30:\', sumar(10, 20, 30));',
                    result: 'Hola, usuario!\nBuenos días, Carlos!\nSuma de 1, 2, 3, 4, 5: 15\nSuma de 10, 20, 30: 60'
                }
            ]
        },
        {
            id: 'ejercicios',
            title: 'Ejercicios',
            icon: 'tasks',
            items: [
                {
                    id: 'ejercicio-1',
                    title: 'Convertir a función flecha',
                    description: 'Convierte la siguiente función tradicional a una función flecha:',
                    code: 'function duplicar(numero) {\n    return numero * 2;\n}',
                    solution: '// Solución:\nconst duplicar = numero => numero * 2;'
                },
                {
                    id: 'ejercicio-2',
                    title: 'Calcular promedio',
                    description: 'Crea una función que calcule el promedio de un array de números. Usa funciones flecha y el método reduce().',
                    code: '// Tu código aquí\n// Ejemplo de uso:\n// const numeros = [5, 10, 15, 20];\n// console.log(calcularPromedio(numeros)); // 12.5',
                    solution: '// Solución:\nconst calcularPromedio = numeros => {\n    if (!Array.isArray(numeros) || numeros.length === 0) return 0;\n    const suma = numeros.reduce((total, num) => total + num, 0);\n    return suma / numeros.length;\n};\n\n// Versión más concisa:\n// const calcularPromedio = nums => nums.reduce((a, b) => a + b, 0) / nums.length || 0;'
                },
                {
                    id: 'ejercicio-3',
                    title: 'Filtrar números pares',
                    description: 'Crea una función que tome un array de números y devuelva un nuevo array solo con los números pares. Usa el método filter() con una función flecha.',
                    code: '// Tu código aquí\n// Ejemplo de uso:\n// const numeros = [1, 2, 3, 4, 5, 6, 7, 8];\n// console.log(filtrarPares(numeros)); // [2, 4, 6, 8]',
                    solution: '// Solución:\nconst filtrarPares = numeros => numeros.filter(num => num % 2 === 0);'
                },
                {
                    id: 'ejercicio-4',
                    title: 'Contador con closure',
                    description: 'Crea una función contador() que devuelva un objeto con métodos para incrementar, decrementar y obtener el valor actual. Usa closures para mantener el estado privado.',
                    code: '// Tu código aquí\n// Ejemplo de uso:\n// const miContador = contador(5);\n// miContador.incrementar();\n// console.log(miContador.valor()); // 6\n// miContador.decrementar();\n// console.log(miContador.valor()); // 5',
                    solution: '// Solución:\nfunction contador(valorInicial = 0) {\n    let contador = valorInicial;\n    \n    return {\n        incrementar: function() {\n            contador += 1;\n            return contador;\n        },\n        decrementar: function() {\n            contador -= 1;\n            return contador;\n        },\n        valor: function() {\n            return contador;\n        },\n        // Versión con funciones flecha:\n        // incrementar: () => ++contador,\n        // decrementar: () => --contador,\n        // valor: () => contador\n    };\n}'
                }
            ]
        }
    ]
};
