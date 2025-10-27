import { topics } from './data/topics.js';

// Elementos del DOM
const topicsList = document.getElementById('topics-list');
const welcomeMessage = document.getElementById('welcome-message');
const topicContent = document.getElementById('topic-content');
const topicTitle = document.getElementById('topic-title');
const topicDescription = document.getElementById('topic-description');
const sectionNav = document.querySelector('.section-nav');
const sectionsContainer = document.querySelector('.sections-container');

// Clases CSS
const HIDDEN_CLASS = 'hidden';
const ACTIVE_CLASS = 'active';

// Cargar la lista de temas
function loadTopics() {
    if (!topicsList) return;
    
    topicsList.innerHTML = Object.values(topics).map(topic => `
        <li>
            <a href="#" class="nav-link" data-topic="${topic.id}">
                <i class="fas fa-${topic.icon || 'folder'}"></i> ${topic.title}
            </a>
        </li>
    `).join('');

    // Establecer el primer tema como activo por defecto
    if (Object.keys(topics).length > 0) {
        const firstTopic = Object.values(topics)[0];
        loadTopic(firstTopic.id);
        const firstLink = document.querySelector('.nav-link');
        if (firstLink) firstLink.classList.add(ACTIVE_CLASS);
    }
}

// Cargar un tema específico
function loadTopic(topicId) {
    const topic = topics[topicId];
    if (!topic) return;

    // Actualizar la interfaz
    if (welcomeMessage) welcomeMessage.classList.add(HIDDEN_CLASS);
    if (topicContent) topicContent.classList.remove(HIDDEN_CLASS);
    if (topicTitle) topicTitle.textContent = topic.title;
    if (topicDescription) topicDescription.textContent = topic.description;

    // Cargar las secciones del tema
    loadSections(topic.sections);
}

// Cargar las secciones de un tema
function loadSections(sections) {
    if (!sectionsContainer || !sectionNav) return;

    // Limpiar contenido existente
    sectionNav.innerHTML = '';
    sectionsContainer.innerHTML = '';

    // Convertir a array si es un objeto
    const sectionsArray = Array.isArray(sections) ? sections : Object.values(sections);
    
    // Crear botones de navegación
    sectionsArray.forEach((section, index) => {
        const sectionId = section.id || `section-${index}`;
        // Crear botón de navegación
        const button = document.createElement('button');
        button.className = `section-btn ${index === 0 ? ACTIVE_CLASS : ''}`;
        button.innerHTML = `<i class="fas fa-${section.icon}"></i> ${section.title}`;
        button.dataset.section = sectionId;
        sectionNav.appendChild(button);

        // Crear sección de contenido
        const sectionElement = document.createElement('div');
        sectionElement.id = `section-${sectionId}`;
        sectionElement.className = `section ${index === 0 ? '' : HIDDEN_CLASS}`;

        // Agregar contenido a la sección según el tipo
        if (sectionId === 'teoria' && section.content) {
            // Sección de teoría
            sectionElement.innerHTML = `
                <div class="theory-content">
                    <h2><i class="fas fa-${section.icon}"></i> ${section.title}</h2>
                    <div class="theory-text">
                        ${section.content}
                    </div>
                </div>
            `;
        } else if (sectionId === 'ejemplos' && section.items) {
            // Sección de ejemplos
            sectionElement.innerHTML = `
                <div class="section-header">
                    <h2><i class="fas fa-${section.icon}"></i> ${section.title}</h2>
                    <p>${section.items.length} ${section.items.length === 1 ? 'ejemplo' : 'ejemplos'} disponibles</p>
                </div>
                <div class="examples-container">
                    ${section.items.map((example, index) => `
                        <div class="example-card">
                            <div class="example-header">
                                <span class="example-number">Ejemplo ${index + 1}</span>
                                <h3>${example.title}</h3>
                            </div>
                            ${example.description ? `
                                <div class="example-description">
                                    <p>${example.description}</p>
                                </div>
                            ` : ''}
                            <div class="example-code">
                                <h4>Código:</h4>
                                <pre><code class="language-javascript">${example.code}</code></pre>
                            </div>
                            ${example.result ? `
                                <div class="example-result">
                                    <div class="result-header">
                                        <i class="fas fa-chevron-down"></i> Ver resultado
                                    </div>
                                    <div class="result-content">
                                        <h4>Resultado:</h4>
                                        <pre><code class="language-javascript">${example.result}</code></pre>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (section.items) {
            // Otras secciones (ejercicios)
            sectionElement.innerHTML = `
                <div class="section-header">
                    <h2><i class="fas fa-${section.icon}"></i> ${section.title}</h2>
                    <p>${section.items.length} ${section.items.length === 1 ? 'ejercicio' : 'ejercicios'} para practicar</p>
                </div>
                <div class="exercises-container">
                    ${section.items.map((exercise, index) => `
                        <div class="exercise-card">
                            <div class="exercise-header">
                                <span class="exercise-number">Ejercicio ${index + 1}</span>
                                <h3>${exercise.title}</h3>
                            </div>
                            <p>${exercise.description}</p>
                            ${exercise.solution ? `
                                <div class="exercise-actions">
                                    <button class="btn" data-solution="${exercise.id}">
                                        <i class="fas fa-lightbulb"></i> Mostrar solución
                                    </button>
                                </div>
                                <div class="solution-container" id="solution-${exercise.id}" style="display: none;">
                                    <h4>Solución:</h4>
                                    <pre><code class="language-javascript">${exercise.solution}</code></pre>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        sectionsContainer.appendChild(sectionElement);
    });

    // Configurar eventos de navegación
    setupSectionNavigation();
    
    // Configurar botones de solución
    setupSolutionButtons();
    
    // Configurar botones de resultados de ejemplos
    setupExampleResults();
    
    // Resaltar la sintaxis del código
    if (window.hljs) {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
}

// Configurar navegación entre secciones
function setupSectionNavigation() {
    const buttons = document.querySelectorAll('.section-btn');
    const sections = document.querySelectorAll('.section');

    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Actualizar botones activos
            buttons.forEach(btn => btn.classList.remove(ACTIVE_CLASS));
            button.classList.add(ACTIVE_CLASS);

            // Mostrar sección correspondiente
            sections.forEach(section => section.classList.remove(ACTIVE_CLASS));
            if (sections[index]) {
                sections[index].classList.add(ACTIVE_CLASS);
            }
        });
    });
}

// Configurar botones de solución
function setupSolutionButtons() {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.btn[data-solution]');
        if (!target) return;
        
        e.preventDefault();
        const solutionId = target.getAttribute('data-solution');
        const solutionContainer = document.getElementById(`solution-${solutionId}`);
        
        if (!solutionContainer) return;
        
        if (solutionContainer.style.display === 'block') {
            solutionContainer.style.display = 'none';
            target.innerHTML = '<i class="fas fa-eye"></i> Mostrar solución';
        } else {
            solutionContainer.style.display = 'block';
            target.innerHTML = '<i class="fas fa-eye-slash"></i> Ocultar solución';
            
            // Resaltar la sintaxis del código en la solución
            if (window.hljs) {
                const codeBlock = solutionContainer.querySelector('code');
                if (codeBlock) hljs.highlightBlock(codeBlock);
            }
        }
    });
}

// Configurar la funcionalidad de mostrar/ocultar resultados de ejemplos
function setupExampleResults() {
    document.addEventListener('click', (e) => {
        const header = e.target.closest('.result-header');
        if (!header) return;
        
        e.preventDefault();
        const content = header.nextElementSibling;
        
        if (!content) return;
        
        // Alternar clases para la animación
        header.classList.toggle('collapsed');
        content.classList.toggle('expanded');
        
        // Cambiar el ícono
        const icon = header.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
        
        // Resaltar la sintaxis del código en el resultado
        if (window.hljs && content.classList.contains('expanded')) {
            const codeBlocks = content.querySelectorAll('code');
            codeBlocks.forEach(block => {
                if (!block.classList.contains('hljs')) {
                    hljs.highlightBlock(block);
                }
            });
        }
    });
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Cargar temas
    loadTopics();

    // Configurar eventos de navegación de temas
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (!link) return;
        
        e.preventDefault();
        const topicId = link.dataset.topic;
        if (!topicId) return;
        
        // Actualizar navegación
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove(ACTIVE_CLASS));
        link.classList.add(ACTIVE_CLASS);
        
        // Cargar tema seleccionado
        loadTopic(topicId);
    });
});
