// Content loader module
export async function loadSectionContent(section, subsection) {
    const contentArea = document.getElementById('content-area');
    
    try {
        // In a real app, you might fetch this content from a server
        const content = await getContent(section, subsection);
        contentArea.innerHTML = content;
        
        // If there are any interactive elements in the content, initialize them here
        initializeInteractiveElements(section, subsection);
    } catch (error) {
        console.error('Error loading content:', error);
        contentArea.innerHTML = `
            <div class="error">
                <h3>Error al cargar el contenido</h3>
                <p>No se pudo cargar el contenido solicitado. Por favor, inténtalo de nuevo más tarde.</p>
            </div>
        `;
    }
}

async function getContent(section, subsection) {
    // This would typically be an API call in a real application
    // For now, we'll use a simple object with our content
    const contentMap = {
        'fundamentos': {
            'teoria': getFundamentosTeoria(),
            'ejemplos': getFundamentosEjemplos(),
            'ejercicios': getFundamentosEjercicios()
        }
        // Add more sections here as we create them
    };
    
    return contentMap[section]?.[subsection] || '<p>Contenido no disponible.</p>';
}

function initializeInteractiveElements(section, subsection) {
    // This function can be used to initialize any interactive elements
    // in the loaded content, like code editors, buttons, etc.
    
    // Example: Initialize Run buttons for code examples
    document.querySelectorAll('.run-code').forEach(button => {
        button.addEventListener('click', (e) => {
            const codeBlock = e.target.closest('.code-example').querySelector('code');
            executeCode(codeBlock.textContent);
        });
    });
}

function executeCode(code) {
    try {
        // Create a function from the code and execute it
        // This is a simplified version - in a real app, you'd want to use a sandbox
        // or iframe for security
        const result = new Function(code)();
        return result;
    } catch (error) {
        console.error('Error executing code:', error);
        return `Error: ${error.message}`;
    }
}

// Content for the Fundamentos section
function getFundamentosTeoria() {
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

function getFundamentosEjemplos() {
    return `
        <h2>Ejemplos de Fundamentos de JavaScript</h2>
        
        <div class="code-example">
            <h3>1. Calculadora simple</h3>
            <p>Ejemplo de una calculadora que suma dos números:</p>
            <pre><code>function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // 8</code></pre>
            <button class="btn run-code">Ejecutar</button>
        </div>
        
        <div class="code-example">
            <h3>2. Verificar si un número es par o impar</h3>
            <pre><code>function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4));  // true
console.log(esPar(7));  // false</code></pre>
            <button class="btn run-code">Ejecutar</button>
        </div>
        
        <div class="code-example">
            <h3>3. Convertir grados Celsius a Fahrenheit</h3>
            <pre><code>function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusAFahrenheit(25)); // 77</code></pre>
            <button class="btn run-code">Ejecutar</button>
        </div>
        
        <div class="code-example">
            <h3>4. Generar un número aleatorio en un rango</h3>
            <pre><code>function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genera un número entre 1 y 100
console.log(numeroAleatorio(1, 100));</code></pre>
            <button class="btn run-code">Ejecutar</button>
        </div>
        
        <div class="code-example">
            <h3>5. Contar vocales en una cadena</h3>
            <pre><code>function contarVocales(texto) {
    const vocales = texto.match(/[aeiouáéíóú]/gi);
    return vocales ? vocales.length : 0;
}

console.log(contarVocales('Hola Mundo')); // 4</code></pre>
            <button class="btn run-code">Ejecutar</button>
        </div>
    `;
}

function getFundamentosEjercicios() {
    return `
        <h2>Ejercicios de Fundamentos de JavaScript</h2>
        
        <div class="exercise">
            <h3>Ejercicio 1: Calculadora de IMC</h3>
            <p>Escribe una función que calcule el Índice de Masa Corporal (IMC) a partir del peso (en kg) y la altura (en metros).</p>
            <p>Fórmula: IMC = peso / (altura * altura)</p>
            <p>La función debe devolver un mensaje indicando la categoría según el IMC:</p>
            <ul>
                <li>Bajo peso: IMC < 18.5</li>
                <li>Normal: 18.5 ≤ IMC < 25</li>
                <li>Sobrepeso: 25 ≤ IMC < 30</li>
                <li>Obesidad: IMC ≥ 30</li>
            </ul>
            
            <div class="solution">
                <button class="btn btn-primary" onclick="mostrarSolucion('ej1')">Mostrar solución</button>
                <div id="ej1" class="solution-code" style="display: none;">
                    <pre><code>function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        return \`IMC: \${imc.toFixed(1)} - Bajo peso\`;
    } else if (imc < 25) {
        return \`IMC: \${imc.toFixed(1)} - Peso normal\`;
    } else if (imc < 30) {
        return \`IMC: \${imc.toFixed(1)} - Sobrepeso\`;
    } else {
        return \`IMC: \${imc.toFixed(1)} - Obesidad\`;
    }
}

// Ejemplo de uso:
console.log(calcularIMC(70, 1.75)); // Muestra el IMC y categoría</code></pre>
                </div>
            </div>
        </div>
        
        <div class="exercise">
            <h3>Ejercicio 2: Contador de palabras</h3>
            <p>Escribe una función que cuente cuántas veces aparece cada palabra en un texto y devuelva un objeto con las palabras como claves y el número de ocurrencias como valores.</p>
            <p>Considera que las palabras no distinguen entre mayúsculas y minúsculas y que no deben incluirse signos de puntuación.</p>
            
            <div class="solution">
                <button class="btn btn-primary" onclick="mostrarSolucion('ej2')">Mostrar solución</button>
                <div id="ej2" class="solution-code" style="display: none;">
                    <pre><code>function contarPalabras(texto) {
    // Eliminar signos de puntuación y convertir a minúsculas
    const textoLimpio = texto.toLowerCase().replace(/[^\w\s]/g, '');
    const palabras = textoLimpio.split(/\s+/);
    const contador = {};
    
    for (const palabra of palabras) {
        if (palabra) { // Ignorar cadenas vacías
            contador[palabra] = (contador[palabra] || 0) + 1;
        }
    }
    
    return contador;
}

// Ejemplo de uso:
const texto = "Hola, hola, ¿cómo estás? Hola, estoy bien, ¿y tú?";
console.log(contarPalabras(texto));
// Resultado: { hola: 2, cómo: 1, estás: 1, estoy: 1, bien: 1, y: 1, tú: 1 }</code></pre>
                </div>
            </div>
        </div>
    `;
}

// Helper function to show/hide solutions
window.mostrarSolucion = function(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
};
