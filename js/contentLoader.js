// Importar módulos de secciones
import { getTeoria as getFundamentosTeoria, 
         getEjemplos as getFundamentosEjemplos, 
         getEjercicios as getFundamentosEjercicios } from './sections/fundamentos.js';

// Content loader module
export async function loadSectionContent(section, subsection) {
    const contentArea = document.getElementById('content-area');
    
    try {
        const content = await getContent(section, subsection);
        contentArea.innerHTML = content;
        
        // Si hay elementos interactivos en el contenido, inicializarlos
        initializeInteractiveElements(section, subsection);
    } catch (error) {
        console.error('Error loading content:', error);
        contentArea.innerHTML = `
            <div class="error">
                <h3>Error al cargar el contenido</h3>
                <p>No se pudo cargar el contenido solicitado. Por favor, inténtalo de nuevo más tarde.</p>
                <p>${error.message}</p>
            </div>
        `;
    }
}

async function getContent(section, subsection) {
    // Mapa de contenido que vincula cada sección con sus respectivas funciones
    const contentMap = {
        'fundamentos': {
            'teoria': getFundamentosTeoria(),
            'ejemplos': getFundamentosEjemplos(),
            'ejercicios': getFundamentosEjercicios()
        }
        // Se pueden agregar más secciones aquí a medida que se vayan creando
    };
    
    const content = contentMap[section]?.[subsection];
    
    if (!content) {
        throw new Error(`No se encontró el contenido para ${section}/${subsection}`);
    }
    
    return content;
}

function initializeInteractiveElements(section, subsection) {
    // Inicializar botones de ejecución de código
    document.querySelectorAll('.run-code').forEach(button => {
        // Si ya tiene un event listener, no lo volvemos a agregar
        if (button.getAttribute('data-initialized') === 'true') return;
        
        button.addEventListener('click', async (e) => {
            const codeExample = e.target.closest('.code-example');
            const codeBlock = codeExample.querySelector('code');
            const outputDiv = codeExample.querySelector('.output');
            
            // Deshabilitar el botón mientras se ejecuta
            const originalText = button.textContent;
            button.disabled = true;
            button.innerHTML = '<span class="spinner">⏳</span> Ejecutando...';
            
            // Limpiar salida anterior
            outputDiv.textContent = '';
            outputDiv.className = 'output';
            
            // Pequeño retraso para permitir que la interfaz se actualice
            await new Promise(resolve => setTimeout(resolve, 100));
            
            try {
                const result = executeCode(codeBlock.textContent);
                outputDiv.textContent = result !== undefined ? String(result) : '✓ Código ejecutado correctamente. Revisa la consola para más detalles.';
                outputDiv.classList.add('success');
            } catch (error) {
                console.error('Error al ejecutar el código:', error);
                outputDiv.textContent = `✗ Error: ${error.message}`;
                outputDiv.classList.add('error');
            } finally {
                // Mostrar la salida con animación
                outputDiv.classList.add('show');
                
                // Restaurar el botón
                button.disabled = false;
                button.textContent = 'Ejecutar de nuevo';
                button.setAttribute('data-initialized', 'true');
                
                // Desplazarse a la salida
                outputDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
    
    // Inicializar botones de mostrar/ocultar soluciones
    document.querySelectorAll('.solution button').forEach(button => {
        // Si ya tiene un event listener, no lo volvemos a agregar
        if (button.getAttribute('data-solution-initialized') === 'true') return;
        
        // Obtener el ID de la solución del atributo onclick o del data-attribute
        const solutionId = button.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 
                          button.getAttribute('data-solution-id');
        
        if (solutionId) {
            // Reemplazar el atributo onclick por un event listener
            button.removeAttribute('onclick');
            button.setAttribute('data-solution-id', solutionId);
            button.addEventListener('click', () => mostrarSolucion(solutionId));
            button.setAttribute('data-solution-initialized', 'true');
        }
    });
}

function executeCode(code) {
    try {
        // Crear una función anónima con el código y ejecutarla
        // En una aplicación real, deberías usar un sandbox o iframe por seguridad
        const wrappedCode = `
            (function() {
                ${code}
            })();
        `;
        
        // Usar Function para evaluar el código en el ámbito global
        const result = new Function(wrappedCode)();
        return result !== undefined ? result : 'Código ejecutado correctamente';
    } catch (error) {
        console.error('Error executing code:', error);
        throw error; // Relanzar el error para manejarlo en el llamador
    }
}

// Función auxiliar para mostrar/ocultar soluciones
function mostrarSolucion(id) {
    const element = document.getElementById(id);
    if (element) {
        const solutionDiv = element.closest('.solution');
        solutionDiv.classList.toggle('showing');
        
        // Alternar la visibilidad del contenido
        element.classList.toggle('hidden');
        
        // Actualizar el texto del botón
        const button = solutionDiv.querySelector('button');
        if (button) {
            button.textContent = element.classList.contains('hidden') ? 
                'Mostrar solución' : 'Ocultar solución';
            
            // Asegurarse de que el foco se mantenga en el botón para accesibilidad
            button.focus();
        }
        
        // Desplazarse suavemente al elemento para mejor experiencia de usuario
        solutionDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Hacer la función accesible globalmente
window.mostrarSolucion = mostrarSolucion;
