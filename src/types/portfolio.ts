export type ResourceType =
  | 'pdf'
  | 'video'
  | 'concept_map'
  | 'infographic'
  | 'presentation'
  | 'interactive'
  | 'link';

export interface ThematicModule {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  color: string;
  gradient: string;
  resourceCount: number;
}

export interface ResourceSlide {
  slideNumber: number;
  title: string;
  bullets: string[];
  visualPrompt?: string;
  note?: string;
}

export interface ConceptNode {
  title: string;
  description: string;
  subtopics: string[];
}

export interface EducationalResource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  moduleId: string;
  tags: string[];
  author: string;
  date: string;
  durationOrPages?: string;
  difficulty?: 'Inicial' | 'Intermedio' | 'Avanzado';
  thumbnailUrl?: string;
  externalUrl?: string;
  downloadUrl?: string;
  // Specific preview content for real in-app viewing:
  pdfPreview?: {
    totalPages: number;
    pages: { pageNum: number; heading: string; summary: string; bullets: string[] }[];
  };
  videoData?: {
    duration: string;
    videoEmbedUrl?: string;
    highlights: string[];
    transcriptSummary: string;
  };
  conceptMapData?: {
    centralTheme: string;
    nodes: ConceptNode[];
  };
  infographicData?: {
    subtitle: string;
    keyStats: { label: string; value: string; desc: string }[];
    steps: { step: number; title: string; desc: string }[];
  };
  presentationData?: {
    totalSlides: number;
    slides: ResourceSlide[];
  };
  interactiveData?: {
    activityType: 'quiz' | 'drag_sort' | 'logic_lab';
    instructions: string;
    questions?: { question: string; options: string[]; answerIndex: number; explanation: string }[];
  };
}
