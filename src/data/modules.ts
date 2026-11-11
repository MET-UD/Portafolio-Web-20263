import { ThematicModule } from '../types/portfolio';

export const THEMATIC_MODULES: ThematicModule[] = [
  {
    id: 'computational_thinking',
    code: 'MOD-01',
    title: 'Pensamiento Computacional y Programación',
    shortTitle: 'Pensamiento Computacional',
    description:
      'Fundamentos de lógica algorítmica, descomposición de problemas y desarrollo creativo mediante código para el aula.',
    iconName: 'Cpu',
    color: '#0897B4',
    gradient: 'from-[#0897B4] to-[#0284C7]',
    resourceCount: 5,
  },
  {
    id: 'robotics',
    code: 'MOD-02',
    title: 'Robótica Educativa y Sistemas Físicos',
    shortTitle: 'Robótica Educativa',
    description:
      'Construcción y programación de robots pedagógicos, sensores, actuadores e integración del hardware con el aprendizaje maker.',
    iconName: 'Bot',
    color: '#84CC16',
    gradient: 'from-[#84CC16] to-[#65A30D]',
    resourceCount: 4,
  },
  {
    id: 'ai_education',
    code: 'MOD-03',
    title: 'Inteligencia Artificial y Analítica en Educación',
    shortTitle: 'IA en Educación',
    description:
      'Herramientas generativas, modelos éticos, personalización del aprendizaje y alfabetización crítica sobre IA.',
    iconName: 'Sparkles',
    color: '#F97316',
    gradient: 'from-[#F97316] to-[#EA580C]',
    resourceCount: 4,
  },
  {
    id: 'digital_multimedia',
    code: 'MOD-04',
    title: 'Diseño Multimedia y Recursos Interactivos',
    shortTitle: 'Recursos Multimedia',
    description:
      'Narrativas transmedia, producción audiovisual educativa, infografías pedagógicas y diseño centrado en el estudiante.',
    iconName: 'Layers',
    color: '#06B6D4',
    gradient: 'from-[#06B6D4] to-[#0891B2]',
    resourceCount: 4,
  },
  {
    id: 'cybersecurity',
    code: 'MOD-05',
    title: 'Ciberseguridad y Ciudadanía Digital',
    shortTitle: 'Ciudadanía Digital',
    description:
      'Privacidad en la red, huella digital, pensamiento crítico frente a la desinformación y convivencia escolar digital saludable.',
    iconName: 'ShieldCheck',
    color: '#6366F1',
    gradient: 'from-[#6366F1] to-[#4F46E5]',
    resourceCount: 3,
  },
  {
    id: 'steam_methodologies',
    code: 'MOD-06',
    title: 'Innovación Pedagógica y Metodologías STEAM',
    shortTitle: 'Metodologías STEAM',
    description:
      'Aprendizaje Basado en Proyectos (ABP), gamificación, diseño de retos educativos y evaluación formativa con tecnologías.',
    iconName: 'Lightbulb',
    color: '#EAB308',
    gradient: 'from-[#EAB308] to-[#CA8A04]',
    resourceCount: 4,
  },
];
