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
    // Limpiar navegación de secciones
    if (sectionNav) sectionNav.innerHTML = '';
    if (sectionsContainer) sectionsContainer.innerHTML = '';

    // Crear botones de navegación y secciones
    Object.entries(sections).forEach(([sectionId, section], index) => {
        if (!section) return;
        
        // Botón de navegación
        if (sectionNav) {
            const button = document.createElement('button');
            button.className = `section-btn ${index === 0 ? ACTIVE_CLASS : ''}`;
            button.innerHTML = section.icon ? 
                `<i class="fas fa-${section.icon}"></i> ${section.title || ''}` : 
                section.title || '';
            button.dataset.section = sectionId;
            sectionNav.appendChild(button);
        }

        // Contenido de la sección
        if (sectionsContainer) {
            const sectionElement = document.createElement('div');
            sectionElement.id = `section-${sectionId}`;
            sectionElement.className = `section ${index === 0 ? ACTIVE_CLASS : ''}`;
            
            if (section.content) {
                // Sección de teoría
                sectionElement.innerHTML = section.content;
            } else if (section.items) {
                // Sección de ejemplos o ejercicios
                sectionElement.innerHTML = section.items.map((item, i) => {
                    if (!item) return '';
                    return `
                        <div class="${sectionId.slice(0, -1)}">
                            ${item.title ? `<h3>${item.title}</h3>` : ''}
                            ${item.description ? `<p>${item.description}</p>` : ''}
                            ${item.code ? `<pre><code>${item.code}</code></pre>` : ''}
                            ${sectionId === 'ejercicios' && item.solution ? `
                                <button class="btn show-solution" data-solution="${(item.solution || '').replace(/'/g, "\\'")}">
                                    Mostrar solución
                                </button>
                                <div class="solution-container"></div>
                            ` : ''}
                        </div>
                    `;
                }).join('');
            }

            sectionsContainer.appendChild(sectionElement);
        }
    });

    // Configurar eventos de navegación
    setupSectionNavigation();
    
    // Configurar botones de solución
    setupSolutionButtons();
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
        const target = e.target.closest('.show-solution');
        if (!target) return;
        
        e.preventDefault();
        const solution = target.getAttribute('data-solution');
        const solutionContainer = target.nextElementSibling;
        
        if (!solutionContainer) return;
        
        if (solutionContainer.style.display === 'block') {
            solutionContainer.style.display = 'none';
            target.textContent = 'Mostrar solución';
        } else {
            solutionContainer.innerHTML = `
                <div class="solution-content">
                    <h4>Solución:</h4>
                    <pre><code>${(solution || '').replace(/\\n/g, '\n')}</code></pre>
                </div>
            `;
            solutionContainer.style.display = 'block';
            target.textContent = 'Ocultar solución';
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
