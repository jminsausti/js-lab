// Contenido para la sección de Fundamentos
export function getTeoria() {
    return `
        <h2>Fundamentos de JavaScript</h2>
        
        <h3>Variables y Tipos de Datos</h3>
        <p>JavaScript es un lenguaje de programación dinámico y débilmente tipado. Aquí están los tipos de datos básicos:</p>
        
        <ul>
            <li><strong>Number</strong>: Números, tanto enteros como decimales. Ej: <code>42</code>, <code>3.14</code></li>
            <li><strong>String</strong>: Cadenas de texto. Ej: <code>'Hola'</code>, <code>"Mundo"</code></li>
            <li><strong>Boolean</strong>: Valores lógicos <code>true</code> o <code>false</code></li>
            <li><strong>null</strong>: Valor especial que representa "nada" o "vacío"</li>
            <li><strong>undefined</strong>: Variable que no ha sido asignada</li>
            <li><strong>Object</strong>: Estructura de datos compleja</li>
            <li><strong>Symbol</strong> (ES6): Valor único e inmutable</li>
        </ul>
        
        <h3>Declaración de Variables</h3>
        <pre><code>// Variables con let (ámbito de bloque)
let nombre = 'Juan';
let edad = 25;

// Constantes con const
const PI = 3.1416;

// Variable con ámbito de función (antiguo, no recomendado)
var apellido = 'Pérez';  // Evitar usar var en código moderno</code></pre>
        
        <h3>Operadores</h3>
        <p>JavaScript incluye varios tipos de operadores:</p>
        
        <h4>Aritméticos</h4>
        <pre><code>let suma = 5 + 3;      // 8
let resta = 10 - 2;    // 8
let multiplicacion = 4 * 2;  // 8
let division = 16 / 2; // 8
let modulo = 10 % 3;   // 1 (resto de la división)
let potencia = 2 ** 3; // 8 (2 elevado a 3)</code></pre>
        
        <h4>Comparación</h4>
        <pre><code>5 == '5'    // true (igualdad con conversión de tipo)
5 === '5'   // false (igualdad estricta)
5 != '5'    // false
5 !== '5'   // true
5 > 3       // true
5 < 10      // true
5 >= 5      // true</code></pre>
        
        <h4>Lógicos</h4>
        <pre><code>true && false  // AND lógico: false
true || false  // OR lógico: true
!true          // NOT lógico: false</code></pre>
        
        <h3>Estructuras de Control</h3>
        
        <h4>Condicionales</h4>
        <pre><code>// if-else
if (edad >= 18) {
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad');
}

// Operador ternario
let mensaje = (edad >= 18) ? 'Mayor' : 'Menor';

// switch
switch(diaDeLaSemana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    // ...
    default:
        console.log('Día no válido');
}</code></pre>
        
        <h4>Bucles</h4>
        <pre><code>// for
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while
do {
    console.log(i);
    i++;
} while (i < 5);

// for...of (para arrays y strings)
for (let letra of 'Hola') {
    console.log(letra); // 'H', 'o', 'l', 'a'
}

// for...in (para propiedades de objetos)
const persona = { nombre: 'Juan', edad: 30 };
for (let propiedad in persona) {
    console.log(propiedad, persona[propiedad]);
}</code></pre>
        
        <h3>Funciones</h3>
        <pre><code>// Declaración de función
function saludar(nombre) {
    return \`Hola, \${nombre}!\`;
}

// Expresión de función
const sumar = function(a, b) {
    return a + b;
};

// Arrow function (ES6+)
const multiplicar = (a, b) => a * b;

// Características de las funciones flecha:
// 1. Sintaxis más concisa
const suma = (a, b) => a + b;

// 2. Si solo hay un parámetro, los paréntesis son opcionales
const cuadrado = x => x * x;

// 3. Sin parámetros requieren paréntesis vacíos
const saludo = () => '¡Hola!';

// 4. Cuerpo de función con múltiples líneas requiere llaves y 'return' explícito
const areaRectangulo = (base, altura) => {
    const area = base * altura;
    return area;  // 'return' es necesario con llaves
};

// 5. No tienen su propio 'this', heredan el del contexto léxico
function Persona() {
    this.edad = 0;
    
    // En una función tradicional, 'this' sería el del contexto de ejecución
    setInterval(() => {
        this.edad++; // 'this' se refiere correctamente a la instancia de Persona
    }, 1000);
}

// 6. No pueden ser usadas como constructores (no tienen propiedad prototype)
// const MiClase = () => {};
// const instancia = new MiClase(); // Error: MiClase no es un constructor

// 7. No tienen objeto 'arguments', pero pueden usar parámetros rest
const mostrarNumeros = (...args) => console.log(args);

// Parámetros por defecto
function crearUsuario(nombre, rol = 'usuario') {
    return { nombre, rol };
}

// Rest parameters
function sumarNumeros(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}</code></pre>
    `;
}

export function getEjemplos() {
    return `
        <h2>Ejemplos de Fundamentos de JavaScript</h2>
        
        <div class="code-example">
            <h3>Ejemplo 1: Variables y Operadores</h3>
            <pre><code class="javascript">// Declaración de variables
let nombre = 'Ana';
let edad = 25;
const ES_ADULTO = edad >= 18;

// Uso de template literals
console.log(\`\${nombre} tiene \${edad} años\`);

// Operadores aritméticos
let base = 5;
let altura = 3;
let area = (base * altura) / 2;
console.log(\`Área del triángulo: \${area}\`);</code></pre>
            <button class="run-code">Ejecutar</button>
            <div class="output"></div>
        </div>
        
        <div class="code-example">
            <h3>Ejemplo 2: Estructuras de Control</h3>
            <pre><code class="javascript">// Función para verificar si un número es par o impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

// Uso de switch
function diaDeLaSemana(numeroDia) {
    switch(numeroDia) {
        case 1: return 'Lunes';
        case 2: return 'Martes';
        case 3: return 'Miércoles';
        case 4: return 'Jueves';
        case 5: return 'Viernes';
        case 6: return 'Sábado';
        case 7: return 'Domingo';
        default: return 'Día no válido';
    }
}

// Bucle for
function contarHasta(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Ejemplos de uso
console.log(esPar(4)); // 'par'
console.log(diaDeLaSemana(3)); // 'Miércoles'
contarHasta(3); // Muestra 1, 2, 3</code></pre>
            <button class="run-code">Ejecutar</button>
            <div class="output"></div>
        </div>
        
        <div class="code-example">
            <h3>Ejemplo 3: Funciones y Arrays</h3>
            <pre><code class="javascript">// Función para calcular el promedio
function calcularPromedio(...numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}

// 1. Función para calcular el área de un círculo
const areaCirculo = radio => Math.PI * Math.pow(radio, 2);

// 2. Función para verificar si un número es primo
const esPrimo = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// 3. Función para convertir grados Celsius a Fahrenheit
const celsiusAFahrenheit = celsius => (celsius * 9/5) + 32;

// 4. Función para generar una contraseña aleatoria
const generarPassword = (longitud = 8) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(indice);
    }
    return password;
};

// 5. Función que devuelve otra función
const crearMultiplicador = factor => numero => numero * factor;
const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

// Ejecutando las funciones
console.log('Área de círculo (radio=5):', areaCirculo(5).toFixed(2));
console.log('¿Es 17 un número primo?', esPrimo(17) ? 'Sí' : 'No');
console.log('25°C a Fahrenheit:', celsiusAFahrenheit(25) + '°F');
console.log('Contraseña generada:', generarPassword(10));
console.log('Duplicar 5:', duplicar(5));
console.log('Triplicar 5:', triplicar(5));</code></pre>
            <button class="run-code">Ejecutar</button>
            <div class="output"></div>
        </div>
    `;
}

export function getEjercicios() {
    return `
        <h2>Ejercicios de Fundamentos de JavaScript</h2>
        
        <div class="exercise">
            <h3>Ejercicio 1: Calculadora de Edad</h3>
            <p>Crea una función que calcule la edad de una persona en base a su año de nacimiento.</p>
            <div class="solution">
                <button onclick="mostrarSolucion('ej1')">Mostrar solución</button>
                <div id="ej1" class="hidden">
                    <pre><code class="javascript">function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
}

// Ejemplo de uso:
console.log(calcularEdad(1990)); // Muestra la edad basada en el año actual</code></pre>
                </div>
            </div>
        </div>
        
        <div class="exercise">
            <h3>Ejercicio 2: Contador de Vocales</h3>
            <p>Escribe una función que cuente el número de vocales en una cadena de texto.</p>
            <div class="solution">
                <button onclick="mostrarSolucion('ej2')">Mostrar solución</button>
                <div id="ej2" class="hidden">
                    <pre><code class="javascript">function contarVocales(texto) {
    const vocales = texto.match(/[aeiouáéíóú]/gi);
    return vocales ? vocales.length : 0;
}

// Ejemplo de uso:
console.log(contarVocales('Hola Mundo')); // 4</code></pre>
                </div>
            </div>
        </div>
        
        <div class="exercise">
            <h3>Ejercicio 3: FizzBuzz</h3>
            <p>Escribe un programa que muestre los números del 1 al 100, pero para múltiplos de 3 muestra "Fizz", para múltiplos de 5 muestra "Buzz" y para múltiplos de ambos muestra "FizzBuzz".</p>
            <div class="solution">
                <button onclick="mostrarSolucion('ej3')">Mostrar solución</button>
                <div id="ej3" class="hidden">
                    <pre><code class="javascript">function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let resultado = '';
        if (i % 3 === 0) resultado += 'Fizz';
        if (i % 5 === 0) resultado += 'Buzz';
        console.log(resultado || i);
    }
}

// Ejecutar la función
fizzBuzz();</code></pre>
                </div>
            </div>
        </div>
        
        <div class="exercise">
            <h3>Ejercicio 4: Palíndromo</h3>
            <p>Escribe una función que determine si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda, ignorando espacios y signos de puntuación).</p>
            <div class="solution">
                <button onclick="mostrarSolucion('ej4')">Mostrar solución</button>
                <div id="ej4" class="hidden">
                    <pre><code class="javascript">function esPalindromo(texto) {
    // Eliminar espacios y signos de puntuación, y convertir a minúsculas
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Comparar con su versión invertida
    return textoLimpio === textoLimpio.split('').reverse().join('');
}

// Ejemplos de uso:
console.log(esPalindromo('Anita lava la tina')); // true
console.log(esPalindromo('Hola mundo')); // false</code></pre>
                </div>
            </div>
        </div>
        
        <div class="exercise">
            <h3>Ejercicio 5: Ordenar Números</h3>
            <p>Escribe una función que ordene un array de números de menor a mayor sin usar el método sort().</p>
            <div class="solution">
                <button onclick="mostrarSolucion('ej5')">Mostrar solución</button>
                <div id="ej5" class="hidden">
                    <pre><code class="javascript">function ordenarNumeros(numeros) {
    const ordenados = [...numeros]; // Crear una copia para no modificar el original
    
    // Implementación de Bubble Sort
    for (let i = 0; i < ordenados.length - 1; i++) {
        for (let j = 0; j < ordenados.length - 1 - i; j++) {
            if (ordenados[j] > ordenados[j + 1]) {
                // Intercambiar elementos
                [ordenados[j], ordenados[j + 1]] = [ordenados[j + 1], ordenados[j]];
            }
        }
    }
    
    return ordenados;
}

// Ejemplo de uso:
console.log(ordenarNumeros([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]</code></pre>
                </div>
            </div>
        </div>
    `;
}
