import { EducationalResource } from '../types/portfolio';

export const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  // 1. DOCUMENTOS PDF
  {
    id: 'pdf-01',
    title: 'Guía Pedagógica: Pensamiento Computacional en el Aula',
    description:
      'Manual integral con estrategias didácticas para desarrollar habilidades algorítmicas, descomposición y abstracción desde primaria hasta secundaria.',
    type: 'pdf',
    moduleId: 'computational_thinking',
    tags: ['Algoritmos', 'Lógica', 'Didáctica', 'Guía Docente'],
    author: 'Equipo Aprendiendo con Tecnolo',
    date: '2026-03-15',
    durationOrPages: '28 Páginas',
    difficulty: 'Intermedio',
    thumbnailUrl: '/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png',
    downloadUrl: '#download-pdf-01',
    pdfPreview: {
      totalPages: 4,
      pages: [
        {
          pageNum: 1,
          heading: 'Introducción al Pensamiento Computacional',
          summary:
            'El pensamiento computacional no se limita a aprender sintaxis de código; es una competencia transversal para resolver problemas complejos.',
          bullets: [
            'Los 4 pilares: Descomposición, Reconocimiento de patrones, Abstracción y Algoritmos.',
            'Actividades desenchufadas (CS Unplugged) para iniciar sin dispositivos.',
            'Vínculo curricular con matemáticas, ciencias y lenguaje.',
          ],
        },
        {
          pageNum: 2,
          heading: 'Estrategias Didácticas Desenchufadas',
          summary:
            'Dinámicas corporales, juegos de mesa y laberintos de papel para interiorizar la secuenciación lógica.',
          bullets: [
            'El juego del robot humano: instrucciones paso a paso.',
            'Codificación binaria con pulseras de cuentas de dos colores.',
            'Detección y depuración de errores (Debugging lúdico).',
          ],
        },
        {
          pageNum: 3,
          heading: 'Transición hacia la Programación en Bloques',
          summary:
            'Cómo guiar la primera experiencia en entornos como Scratch y MakeCode de manera constructivista.',
          bullets: [
            'Diseño de historias interactivas y videojuegos educativos.',
            'Estructuras de control: bucles, condicionales y variables.',
            'Evaluación auténtica basada en rúbricas de proyectos.',
          ],
        },
        {
          pageNum: 4,
          heading: 'Rúbricas de Evaluación y Conclusiones',
          summary:
            'Instrumentos formativos para valorar la perseverancia, creatividad y lógica en el proceso de resolución de problemas.',
          bullets: [
            'Escala de dominio competencial en 4 niveles.',
            'Portafolios reflexivos de aprendizaje tecnológico.',
            'Bibliografía y lecturas complementarias recomendadas.',
          ],
        },
      ],
    },
  },
  {
    id: 'pdf-02',
    title: 'Manual de Robótica Educativa y Prototipado Maker',
    description:
      'Guía técnica y pedagógica para ensamblar y programar prototipos interactivos con sensores de luz, temperatura y motores paso a paso.',
    type: 'pdf',
    moduleId: 'robotics',
    tags: ['Robótica', 'Arduino', 'Sensores', 'Cultura Maker'],
    author: 'Laboratorio STEAM Tecnolo',
    date: '2026-02-10',
    durationOrPages: '34 Páginas',
    difficulty: 'Avanzado',
    thumbnailUrl: '/src/assets/images/feature_toy_controller_1794357503275.jpg',
    downloadUrl: '#download-pdf-02',
    pdfPreview: {
      totalPages: 3,
      pages: [
        {
          pageNum: 1,
          heading: 'Fundamentos de Robótica Educativa',
          summary:
            'Integración de mecánica, electrónica y programación en proyectos del mundo real.',
          bullets: [
            'Diferencia entre automatización y sistema robótico adaptable.',
            'Seguridad básica en el manejo de componentes y baterías.',
            'Diseño de chasis con materiales reciclados.',
          ],
        },
        {
          pageNum: 2,
          heading: 'Sensores y Actuadores en Acción',
          summary:
            'Cómo conectar y calibrar sensores ultrasónicos, pulsadores y servomotores.',
          bullets: [
            'Lectura analógica vs. lectura digital.',
            'El robot sigue-líneas: algoritmo de calibración lumínica.',
            'Evitador de obstáculos con sensor de ultrasonido.',
          ],
        },
        {
          pageNum: 3,
          heading: 'Proyectos Aplicados a los ODS',
          summary:
            'Retos contextualizados: invernaderos inteligentes, clasificadores de residuos y boyas detectoras de calidad de agua.',
          bullets: [
            'Metodología Design Thinking aplicada a la robótica.',
            'Presentación y defensa pública de prototipos en ferias de ciencias.',
            'Guía rápida de solución de fallas electrónicas habituales.',
          ],
        },
      ],
    },
  },
  {
    id: 'pdf-03',
    title: 'Marco Ético y Pedagógico para la IA en el Aula',
    description:
      'Documento de directrices para integrar herramientas de IA generativa fomentando la integridad académica y el pensamiento crítico.',
    type: 'pdf',
    moduleId: 'ai_education',
    tags: ['IA Ética', 'Educación', 'Pensamiento Crítico', 'Políticas'],
    author: 'Comité de Innovación Tecnológica',
    date: '2026-01-20',
    durationOrPages: '18 Páginas',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/promo_card_character_1794357502555.jpg',
    downloadUrl: '#download-pdf-03',
    pdfPreview: {
      totalPages: 3,
      pages: [
        {
          pageNum: 1,
          heading: 'Principios Éticos de la IA en Entornos Educativos',
          summary:
            'La IA debe ser un andamiaje para potenciar el talento humano, no un atajo que sustituya el esfuerzo cognitivo.',
          bullets: [
            'Transparencia algorítmica y comprensión de sesgos.',
            'Protección de datos y privacidad de menores de edad.',
            'La regla del "humano en el bucle" (Human in the loop).',
          ],
        },
        {
          pageNum: 2,
          heading: 'Diseño de Actividades Resistentes al Copia y Pega',
          summary:
            'Estrategias para formular consignas que exijan reflexión personal, análisis local y contrastación de fuentes.',
          bullets: [
            'Uso de la IA como copiloto socrático de debate.',
            'Auditoría y verificación de respuestas generadas por modelos de lenguaje.',
            'Creación de prompts pedagógicos personalizados.',
          ],
        },
        {
          pageNum: 3,
          heading: 'Ruta de Implementación Institucional',
          summary:
            'Pasos para consensuar un código de honor digital con estudiantes, docentes y familias.',
          bullets: [
            'Talleres de sensibilización sobre sesgos y alucinaciones.',
            'Formatos de declaración transparente de uso de IA en tareas.',
            'Indicadores de impacto en la calidad del aprendizaje.',
          ],
        },
      ],
    },
  },

  // 2. VIDEOS EDUCATIVOS
  {
    id: 'video-01',
    title: 'Clase Maestra: Del Problema al Algoritmo con Tecnolo',
    description:
      'Video interactivo donde Tecnolo guía a los estudiantes paso a paso para resolver un desafío de laberinto mediante lógica secuencial y condicionales.',
    type: 'video',
    moduleId: 'computational_thinking',
    tags: ['Video', 'Secuenciación', 'Lógica', 'Animación 3D'],
    author: 'Prof. Tecnolo Digital',
    date: '2026-03-01',
    durationOrPages: '12:45 min',
    difficulty: 'Inicial',
    thumbnailUrl: '/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png',
    externalUrl: 'https://youtube.com',
    videoData: {
      duration: '12:45',
      videoEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      highlights: [
        '00:00 - Bienvenida de Tecnolo y planteamiento del reto',
        '03:20 - Identificación de patrones en el laberinto',
        '06:45 - Escritura del pseudocódigo paso a paso',
        '09:30 - Ejecución, depuración de errores y victoria',
      ],
      transcriptSummary:
        'En esta sesión interactiva, Tecnolo demuestra de forma amena cómo los grandes problemas se descomponen en pequeñas instrucciones lógicas que cualquier computadora o robot puede ejecutar sin equivocarse.',
    },
  },
  {
    id: 'video-02',
    title: 'Taller Práctico: Ensamblando un Robot Seguidor de Luz',
    description:
      'Demostración audiovisual paso a paso para cablear fotoceldas (LDR), transistores y motores DC sin necesidad de microcontrolador complejo.',
    type: 'video',
    moduleId: 'robotics',
    tags: ['Video', 'Electrónica', 'Makerspace', 'Robótica Básica'],
    author: 'Ing. Carlos Mendoza',
    date: '2026-02-18',
    durationOrPages: '16:20 min',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_toy_controller_1794357503275.jpg',
    externalUrl: 'https://youtube.com',
    videoData: {
      duration: '16:20',
      highlights: [
        '01:10 - Lista de materiales accesibles y herramientas',
        '04:30 - Diagrama esquemático en protoboard',
        '08:50 - Pruebas con linterna y calibración de sensibilidad',
        '13:15 - Consejos para mejorar la tracción de las ruedas',
      ],
      transcriptSummary:
        'Aprende a construir un autómata fototrópico que reacciona a la luz como una polilla. Ideal para introducir conceptos de circuitos analógicos y retroalimentación biológica.',
    },
  },
  {
    id: 'video-03',
    title: 'Prompt Engineering Educativo: IA para Profesores Innovadores',
    description:
      'Tutorial avanzado sobre técnicas de estructuración de prompts para generar rúbricas, casos de estudio y actividades multinivel con IA.',
    type: 'video',
    moduleId: 'ai_education',
    tags: ['Video', 'IA Generativa', 'Docencia', 'Productividad'],
    author: 'Dra. Elena Ruiz',
    date: '2026-02-02',
    durationOrPages: '14:10 min',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_mystery_box_1794357503691.jpg',
    externalUrl: 'https://youtube.com',
    videoData: {
      duration: '14:10',
      highlights: [
        '00:45 - La fórmula R-C-I-F (Rol, Contexto, Instrucción, Formato)',
        '04:15 - Ejemplos prácticos de rúbricas analíticas en tabla',
        '08:30 - Creación de simuladores de personajes históricos para debate',
        '11:50 - Criterios para auditar y verificar las fuentes citadas',
      ],
      transcriptSummary:
        'Domina el arte de comunicarte con modelos generativos para diseñar recursos educativos diferenciados en minutos, manteniendo siempre el rigor académico y pedagógico.',
    },
  },

  // 3. MAPAS CONCEPTUALES
  {
    id: 'map-01',
    title: 'Mapa Conceptual: Taxonomía de Bloom en la Era Digital',
    description:
      'Esquema visual jerárquico que conecta las habilidades cognitivas de orden superior e inferior con herramientas y acciones digitales del siglo XXI.',
    type: 'concept_map',
    moduleId: 'steam_methodologies',
    tags: ['Mapa Conceptual', 'Bloom', 'Pedagogía', 'Competencias Digitales'],
    author: 'Red de Innovación Tecnológica',
    date: '2026-03-10',
    durationOrPages: 'Esquema Interactivo',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_mystery_box_1794357503691.jpg',
    conceptMapData: {
      centralTheme: 'Taxonomía de Bloom Digital',
      nodes: [
        {
          title: '1. Recordar (Nivel Inferior)',
          description: 'Recuperar, reconocer y recordar conocimientos de memoria.',
          subtopics: ['Resaltar y marcar digitalmente', 'Buscar en motores web', 'Crear listas en wikis'],
        },
        {
          title: '2. Comprender',
          description: 'Construir significado a partir de mensajes instruccionales orales y escritos.',
          subtopics: ['Categorizar y etiquetar', 'Explicar con mapas mentales', 'Suscripción RSS y curación'],
        },
        {
          title: '3. Aplicar',
          description: 'Llevar a cabo o utilizar un procedimiento en una situación dada.',
          subtopics: ['Simulaciones digitales', 'Ejecución de algoritmos', 'Jugar simuladores educativos'],
        },
        {
          title: '4. Analizar',
          description: 'Descomponer el material en sus partes y determinar relaciones estructurales.',
          subtopics: ['Hojas de cálculo y gráficos', 'Validación de fuentes web', 'Ingeniería inversa'],
        },
        {
          title: '5. Evaluar',
          description: 'Emitir juicios basados en criterios y estándares establecidos.',
          subtopics: ['Revisión por pares en foros', 'Auditoría de respuestas de IA', 'Debates en podcast'],
        },
        {
          title: '6. Crear (Nivel Superior)',
          description: 'Juntar elementos para formar un todo coherente o un producto original.',
          subtopics: ['Programación de apps', 'Producción de video interactivo', 'Modelado e impresión 3D'],
        },
      ],
    },
  },
  {
    id: 'map-02',
    title: 'Mapa Conceptual: Ecosistema de la Inteligencia Artificial',
    description:
      'Diagrama conceptual interactivo que desglosa ramas, modelos, algoritmos y aplicaciones educativas de la IA moderna.',
    type: 'concept_map',
    moduleId: 'ai_education',
    tags: ['Mapa Conceptual', 'Machine Learning', 'Deep Learning', 'NLP'],
    author: 'Equipo Tecnolo AI',
    date: '2026-01-28',
    durationOrPages: 'Esquema Interactivo',
    difficulty: 'Avanzado',
    thumbnailUrl: '/src/assets/images/promo_card_character_1794357502555.jpg',
    conceptMapData: {
      centralTheme: 'Ecosistema de la Inteligencia Artificial',
      nodes: [
        {
          title: 'Machine Learning (Aprendizaje Automático)',
          description: 'Algoritmos que aprenden de datos sin ser programados explícitamente.',
          subtopics: ['Supervisado (Clasificación/Regresión)', 'No supervisado (Clustering)', 'Por refuerzo'],
        },
        {
          title: 'Deep Learning & Redes Neuronales',
          description: 'Modelos multicapa inspirados en la corteza cerebral humana.',
          subtopics: ['Redes Convolucionales (Visión por comp.)', 'Transformers (Atención)', 'Autoencoders'],
        },
        {
          title: 'IA Generativa & Modelos Masivos',
          description: 'Generación de texto, código, audio e imágenes multimodales.',
          subtopics: ['Grandes Modelos de Lenguaje (LLMs)', 'Modelos de Difusión', 'Modelos Multimodales'],
        },
        {
          title: 'Aplicaciones Educativas Reales',
          description: 'Sistemas que transforman la experiencia de aprendizaje y docencia.',
          subtopics: ['Tutorías adaptativas inteligentes', 'Detección temprana de rezago', 'Retroalimentación instantánea'],
        },
      ],
    },
  },

  // 4. INFOGRAFÍAS
  {
    id: 'info-01',
    title: 'Infografía: Los 5 Pilares de la Ciudadanía Digital Positiva',
    description:
      'Póster infográfico de alta resolución con pautas prácticas para navegar de forma ética, segura y productiva en internet.',
    type: 'infographic',
    moduleId: 'cybersecurity',
    tags: ['Infografía', 'Ciudadanía Digital', 'Privacidad', 'Ciberseguridad'],
    author: 'Área de Convivencia Digital',
    date: '2026-02-25',
    durationOrPages: 'Alta Resolución 4K',
    difficulty: 'Inicial',
    thumbnailUrl: '/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png',
    infographicData: {
      subtitle: 'Claves visuales para transformar la presencia online de los estudiantes en un motor de oportunidades',
      keyStats: [
        { label: '84%', value: 'Huella Digital', desc: 'de los reclutadores revisan perfiles públicos' },
        { label: '2FA', value: 'Doble Factor', desc: 'bloquea el 99.9% de ataques automatizados' },
        { label: '3x', value: 'Pensamiento Crítico', desc: 'reduce la propagación de fake news' },
      ],
      steps: [
        { step: 1, title: 'Protege tu Privacidad', desc: 'Configura contraseñas robustas y autenticación en dos pasos en todas tus cuentas.' },
        { step: 2, title: 'Cuida tu Huella Digital', desc: 'Pregúntate si lo que publicas hoy te representará con orgullo dentro de cinco años.' },
        { step: 3, title: 'Verifica antes de Compartir', desc: 'Aplica el método lateral: busca la fuente original y desconfía de títulos alarmistas.' },
        { step: 4, title: 'Empatía y Netiqueta', desc: 'Detrás de cada pantalla hay una persona real. Comunica con respeto y asertividad.' },
        { step: 5, title: 'Equilibrio y Bienestar', desc: 'Establece pausas visuales y momentos libres de pantallas para recargar tu energía.' },
      ],
    },
  },
  {
    id: 'info-02',
    title: 'Infografía: El Ciclo de Aprendizaje Basado en Proyectos (ABP)',
    description:
      'Guía visual paso a paso para estructurar proyectos educativos significativos integrando tecnología y trabajo colaborativo.',
    type: 'infographic',
    moduleId: 'steam_methodologies',
    tags: ['Infografía', 'ABP', 'Metodologías Activas', 'STEAM'],
    author: 'Observatorio Pedagógico STEAM',
    date: '2026-01-15',
    durationOrPages: 'Póster Didáctico',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_mystery_box_1794357503691.jpg',
    infographicData: {
      subtitle: 'De la pregunta desafiante al producto público que resuelve un problema comunitario real',
      keyStats: [
        { label: '40%+', value: 'Mayor Retención', desc: 'del conocimiento respecto a la clase expositiva' },
        { label: '100%', value: 'Autonomía', desc: 'los estudiantes lideran su propia investigación' },
      ],
      steps: [
        { step: 1, title: 'Pregunta Guía Desafiante', desc: 'Un detonador vinculado a la vida real que despierte la curiosidad intrínseca.' },
        { step: 2, title: 'Investigación Guiada', desc: 'Búsqueda de información, entrevistas a expertos y formulación de hipótesis.' },
        { step: 3, title: 'Diseño y Prototipado', desc: 'Creación del artefacto o solución utilizando herramientas analógicas y digitales.' },
        { step: 4, title: 'Evaluación y Crítica Formativa', desc: 'Rondas de retroalimentación constructiva entre pares para iterar la propuesta.' },
        { step: 5, title: 'Difusión a la Comunidad', desc: 'Presentación formal del proyecto ante una audiencia auténtica fuera del aula.' },
      ],
    },
  },

  // 5. PRESENTACIONES
  {
    id: 'pres-01',
    title: 'Presentación: Gamificación y Mecánicas de Juego en el Aula',
    description:
      'Diapositivas interactivas que exploran cómo utilizar puntos, insignias, niveles y narrativas inmersivas para elevar el compromiso escolar.',
    type: 'presentation',
    moduleId: 'steam_methodologies',
    tags: ['Presentación', 'Gamificación', 'Motivación', 'Diapositivas'],
    author: 'Tecnolo PlayLab',
    date: '2026-03-05',
    durationOrPages: '5 Diapositivas',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_toy_controller_1794357503275.jpg',
    presentationData: {
      totalSlides: 5,
      slides: [
        {
          slideNumber: 1,
          title: 'Gamificación Educativa: Mucho Más que Jugar',
          bullets: [
            '¿Qué es la gamificación? El uso de mecánicas de juego en contextos no lúdicos.',
            'Diferencia clave entre jugar en clase vs. gamificar el itinerario de aprendizaje.',
            'El modelo Octalysis de Yu-kai Chou: los 8 motores motivacionales humanos.',
          ],
          note: 'Introducción conceptual para motivar el cambio de paradigma docente.',
        },
        {
          slideNumber: 2,
          title: 'Mecánicas, Dinámicas y Estética (MDA Framework)',
          bullets: [
            'Mecánicas: Puntos, tablas de clasificación, insignias, misiones y barras de progreso.',
            'Dinámicas: Narrativa épica, cooperación, exploración, misterio y estatus.',
            'Estética: Sensaciones visuales, sonoras y táctiles de triunfo y logro.',
          ],
          note: 'Explicar cómo equilibrar la motivación extrínseca con la intrínseca.',
        },
        {
          slideNumber: 3,
          title: 'Tipos de Jugadores según Bartle',
          bullets: [
            'Logradores (Achievers): Motivan los puntos y alcanzar el 100% de logros.',
            'Exploradores (Explorers): Aman descubrir secretos, rutas alternativas y lore.',
            'Socializadores (Socializers): Valoran el trabajo en equipo, foros y empatía.',
            'Triunfadores/Competidores (Killers): Les entusiasma medir fuerzas y ganar.',
          ],
          note: 'Diseñar actividades para todos los perfiles de estudiantes.',
        },
        {
          slideNumber: 4,
          title: 'Herramientas Digitales Recomendadas',
          bullets: [
            'Classcraft y ClassDojo para gestión de misiones y comportamiento colaborativo.',
            'Genially y Canva para tableros interactivos y escape rooms digitales.',
            'Kahoot, Blooket y Quizizz para comprobaciones formativas instantáneas.',
          ],
          note: 'Herramientas gratuitas o freemium de fácil adopción escolar.',
        },
        {
          slideNumber: 5,
          title: 'Peligros y Buenas Prácticas',
          bullets: [
            'Cuidado con la trampa de la recompensa vacía (overjustification effect).',
            'Evitar rankings públicos punitivos que desmotiven a los rezagados.',
            'Siempre priorizar la retroalimentación cualitativa sobre la mera puntuación.',
          ],
          note: 'Reflexión final de cierre y conclusiones del módulo.',
        },
      ],
    },
  },
  {
    id: 'pres-02',
    title: 'Presentación: Diseño de Experiencias Educativas Multimedia',
    description:
      'Principios de Richard Mayer sobre aprendizaje multimedia, reducción de carga cognitiva y jerarquía visual en materiales pedagógicos.',
    type: 'presentation',
    moduleId: 'digital_multimedia',
    tags: ['Presentación', 'Multimedia', 'Carga Cognitiva', 'Diseño UX'],
    author: 'Prof. Gabriel Fonseca',
    date: '2026-02-12',
    durationOrPages: '4 Diapositivas',
    difficulty: 'Avanzado',
    thumbnailUrl: '/src/assets/images/how_it_works_character_1794357503540.jpg',
    presentationData: {
      totalSlides: 4,
      slides: [
        {
          slideNumber: 1,
          title: 'Teoría Cognitiva del Aprendizaje Multimedia',
          bullets: [
            'Canal dual: procesamos información auditiva y visual por vías independientes.',
            'Capacidad limitada: la memoria de trabajo no puede procesar exceso simultáneo.',
            'Procesamiento activo: organizar y estructurar para generar esquemas mentales.',
          ],
        },
        {
          slideNumber: 2,
          title: 'Principios Fundamentales de Richard Mayer',
          bullets: [
            'Principio de coherencia: elimina palabras, imágenes y sonidos irrelevantes.',
            'Principio de señalización: destaca con tipografía y color las ideas núcleo.',
            'Principio de contigüidad espacial: coloca las etiquetas cerca de las ilustraciones.',
          ],
        },
        {
          slideNumber: 3,
          title: 'Diseño Visual Aplicado al Aula',
          bullets: [
            'Contraste accesible (normas WCAG) para legibilidad óptima.',
            'Microinteracciones para mantener la atención del alumno sin saturar.',
            'El poder de los avatares como agentes pedagógicos de compañía.',
          ],
        },
        {
          slideNumber: 4,
          title: 'Checklist para Auditar Materiales Educativos',
          bullets: [
            '¿Se entiende la idea central en los primeros 5 segundos?',
            '¿Hay exceso de texto en bloques densos?',
            '¿Los gráficos aportan valor conceptual o son simple adorno distractor?',
          ],
        },
      ],
    },
  },

  // 6. RECURSOS INTERACTIVOS
  {
    id: 'inter-01',
    title: 'Simulador Interactivo: Laboratorio de Lógica y Algoritmos de Tecnolo',
    description:
      'Experiencia interactiva ejecutable directamente en el navegador: resuelve retos algorítmicos guiando a Tecnolo con instrucciones secuenciales.',
    type: 'interactive',
    moduleId: 'computational_thinking',
    tags: ['Interactivo', 'Simulador', 'Lógica', 'Ejercicios'],
    author: 'Tecnolo Interactive Labs',
    date: '2026-03-20',
    durationOrPages: 'Simulación En Vivo',
    difficulty: 'Inicial',
    thumbnailUrl: '/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png',
    interactiveData: {
      activityType: 'quiz',
      instructions:
        'Pon a prueba tus conocimientos sobre pensamiento computacional e inteligencia artificial interactuando con este cuestionario formativo inmediato.',
      questions: [
        {
          question: '¿Cuál de los siguientes NO es uno de los cuatro pilares del pensamiento computacional?',
          options: [
            'Descomposición de problemas',
            'Memorización mecánica de código fuente',
            'Reconocimiento de patrones',
            'Diseño de algoritmos secuenciales',
          ],
          answerIndex: 1,
          explanation:
            '¡Exacto! El pensamiento computacional promueve la abstracción y el razonamiento lógico, no la memorización mecánica de sintaxis.',
        },
        {
          question: 'En robótica educativa, ¿cuál es la función primordial de un sensor?',
          options: [
            'Brindar energía eléctrica a los motores',
            'Captar estímulos del entorno físico y convertirlos en datos procesables',
            'Sostener la estructura metálica del robot',
            'Almacenar el código fuente de forma permanente',
          ],
          answerIndex: 1,
          explanation:
            '¡Correcto! Los sensores son los "sentidos" del robot (luz, proximidad, temperatura) que le permiten reaccionar a su entorno.',
        },
        {
          question: '¿Qué es una "alucinación" en un modelo de inteligencia artificial generativa?',
          options: [
            'Un virus informático que infecta la memoria de la máquina',
            'Cuando el modelo genera información incorrecta o inventada con apariencia de verdad',
            'El proceso de renderizado 3D de alta definición',
            'Un apagado automático por sobrecalentamiento',
          ],
          answerIndex: 1,
          explanation:
            '¡Muy bien! Las alucinaciones ocurren cuando un modelo lingüístico predice secuencias de palabras convincentes pero factualmente falsas.',
        },
      ],
    },
  },
  {
    id: 'inter-02',
    title: 'Taller Interactivo: Laboratorio de Diagnóstico de Huella Digital',
    description:
      'Calculadora interactiva para evaluar el nivel de exposición y buenas prácticas de privacidad digital del estudiante.',
    type: 'interactive',
    moduleId: 'cybersecurity',
    tags: ['Interactivo', 'Diagnóstico', 'Autoevaluación', 'Ciberseguridad'],
    author: 'Cátedra de Seguridad Escolar',
    date: '2026-02-28',
    durationOrPages: 'Autoevaluación 5 min',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_mystery_box_1794357503691.jpg',
    interactiveData: {
      activityType: 'quiz',
      instructions: 'Evalúa tus hábitos de seguridad digital respondiendo con honestidad cada situación planteada.',
      questions: [
        {
          question: '¿Qué práctica es la más recomendada para administrar tus contraseñas escolares y personales?',
          options: [
            'Utilizar la misma contraseña con el nombre de tu mascota en todas las cuentas',
            'Anotarlas en una nota adhesiva pegada a la pantalla de la computadora',
            'Utilizar un gestor de contraseñas cifrado y claves únicas con frases de paso',
            'Compartirlas con tus amigos más cercanos por mensaje privado',
          ],
          answerIndex: 2,
          explanation:
            '¡Perfecto! Un gestor de contraseñas seguro evita que el compromiso de un solo sitio exponga todas tus cuentas en internet.',
        },
        {
          question: 'Si recibes un correo con el logotipo de tu escuela solicitando que verifiques tu contraseña en un enlace urgente:',
          options: [
            'Hacer clic de inmediato para no perder el acceso a tus clases',
            'Desconfiar, verificar la dirección del remitente y consultar directamente por un canal oficial (Phishing)',
            'Reenviarlo a todos tus compañeros de aula por si acaso',
            'Ignorarlo y borrar tu cuenta para siempre',
          ],
          answerIndex: 1,
          explanation:
            '¡Excelente reflejo crítico! La urgencia artificial y la solicitud de credenciales son los signos típicos de un intento de phishing.',
        },
      ],
    },
  },

  // 7. ENLACES DE INTERÉS
  {
    id: 'link-01',
    title: 'Scratch - Entorno de Programación Visual por Bloques (MIT)',
    description:
      'Plataforma oficial del MIT Media Lab para crear historias interactivas, animaciones y videojuegos educativos para todas las edades.',
    type: 'link',
    moduleId: 'computational_thinking',
    tags: ['Enlace', 'MIT', 'Scratch', 'Software Libre'],
    author: 'MIT Media Lab',
    date: '2026-03-01',
    durationOrPages: 'Plataforma Web Gratuita',
    difficulty: 'Inicial',
    thumbnailUrl: '/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png',
    externalUrl: 'https://scratch.mit.edu',
  },
  {
    id: 'link-02',
    title: 'PhET Interactive Simulations - Universidad de Colorado Boulder',
    description:
      'Repositorio de laboratorios virtuales interactivos de ciencias, física, química, circuitos eléctricos y matemáticas.',
    type: 'link',
    moduleId: 'steam_methodologies',
    tags: ['Enlace', 'Simuladores', 'Física', 'Ciencias STEAM'],
    author: 'University of Colorado Boulder',
    date: '2026-02-15',
    durationOrPages: 'Simulaciones HTML5',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/feature_toy_controller_1794357503275.jpg',
    externalUrl: 'https://phet.colorado.edu',
  },
  {
    id: 'link-03',
    title: 'Tinkercad - Diseño 3D, Circuitos y Simulación Arduino',
    description:
      'Herramienta gratuita basada en navegador de Autodesk para modelado 3D intuitivo y simulación virtual de circuitos con Arduino y micro:bit.',
    type: 'link',
    moduleId: 'robotics',
    tags: ['Enlace', 'Autodesk', 'Diseño 3D', 'Simulador Arduino'],
    author: 'Autodesk Education',
    date: '2026-01-10',
    durationOrPages: 'Herramienta en la Nube',
    difficulty: 'Intermedio',
    thumbnailUrl: '/src/assets/images/how_it_works_character_1794357503540.jpg',
    externalUrl: 'https://www.tinkercad.com',
  },
  {
    id: 'link-04',
    title: 'Teachable Machine - Inteligencia Artificial Fácil con Google',
    description:
      'Herramienta web interactiva para entrenar modelos de aprendizaje automático (imágenes, sonidos y posturas) de forma visual sin programar.',
    type: 'link',
    moduleId: 'ai_education',
    tags: ['Enlace', 'Google AI', 'Machine Learning', 'Educación'],
    author: 'Google Creative Lab',
    date: '2026-02-20',
    durationOrPages: 'Web App Interactiva',
    difficulty: 'Inicial',
    thumbnailUrl: '/src/assets/images/promo_card_character_1794357502555.jpg',
    externalUrl: 'https://teachablemachine.withgoogle.com',
  },
];
