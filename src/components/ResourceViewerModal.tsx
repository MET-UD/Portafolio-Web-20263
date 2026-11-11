import React, { useState } from 'react';
import {
  X,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BookOpen,
  FileText,
  Video,
  GitFork,
  Image as ImageIcon,
  Presentation,
  PlayCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { EducationalResource } from '../types/portfolio';
import { THEMATIC_MODULES } from '../data/modules';

interface ResourceViewerModalProps {
  resource: EducationalResource | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResourceViewerModal: React.FC<ResourceViewerModalProps> = ({
  resource,
  isOpen,
  onClose,
}) => {
  // PDF state
  const [currentPdfPage, setCurrentPdfPage] = useState(1);
  const [pdfZoom, setPdfZoom] = useState(100);

  // Presentation state
  const [currentSlide, setCurrentSlide] = useState(1);

  // Interactive Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Map / Infographic Zoom state
  const [imageZoom, setImageZoom] = useState(100);

  // Reset internal states on open
  React.useEffect(() => {
    if (resource) {
      setCurrentPdfPage(1);
      setCurrentSlide(1);
      setUserAnswers({});
      setQuizSubmitted(false);
      setImageZoom(100);
      setPdfZoom(100);
    }
  }, [resource]);

  if (!isOpen || !resource) return null;

  const moduleData = THEMATIC_MODULES.find((m) => m.id === resource.moduleId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl border-4 border-[#0897B4] flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#0897B4] text-white flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white shrink-0">
              {resource.type === 'pdf' && <FileText className="w-5 h-5 text-[#FFCA05]" />}
              {resource.type === 'video' && <Video className="w-5 h-5 text-[#FFCA05]" />}
              {resource.type === 'concept_map' && <GitFork className="w-5 h-5 text-[#FFCA05]" />}
              {resource.type === 'infographic' && <ImageIcon className="w-5 h-5 text-[#FFCA05]" />}
              {resource.type === 'presentation' && <Presentation className="w-5 h-5 text-[#FFCA05]" />}
              {resource.type === 'interactive' && <PlayCircle className="w-5 h-5 text-[#FFCA05]" />}
              {resource.type === 'link' && <ExternalLink className="w-5 h-5 text-[#FFCA05]" />}
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#B9E6EF] block truncate">
                {moduleData?.code}: {moduleData?.shortTitle}
              </span>
              <h3 className="font-display font-black text-base sm:text-lg text-white truncate">
                {resource.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar visor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* 1. VISOR DE PDF INTEGRADO */}
          {resource.type === 'pdf' && resource.pdfPreview && (
            <div className="space-y-4">
              {/* PDF Toolbar */}
              <div className="bg-neutral-100 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-neutral-700">
                <div className="flex items-center gap-2">
                  <span>Página</span>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl shadow-inner border border-neutral-200">
                    <button
                      onClick={() => setCurrentPdfPage((p) => Math.max(1, p - 1))}
                      disabled={currentPdfPage === 1}
                      className="p-1 hover:bg-neutral-100 rounded disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-2">
                      {currentPdfPage} / {resource.pdfPreview.totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentPdfPage((p) =>
                          Math.min(resource.pdfPreview!.totalPages, p + 1)
                        )
                      }
                      disabled={currentPdfPage === resource.pdfPreview.totalPages}
                      className="p-1 hover:bg-neutral-100 rounded disabled:opacity-30 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPdfZoom((z) => Math.max(80, z - 10))}
                    className="p-1.5 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                    title="Reducir zoom"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-12 text-center text-[11px] font-mono">{pdfZoom}%</span>
                  <button
                    onClick={() => setPdfZoom((z) => Math.min(140, z + 10))}
                    className="p-1.5 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                    title="Aumentar zoom"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                    `${resource.title}\n\n${resource.description}\n\nAutor: ${resource.author}`
                  )}`}
                  download={`${resource.id}.txt`}
                  className="btn-toy-yellow px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar Documento</span>
                </a>
              </div>

              {/* PDF Document Canvas View */}
              {(() => {
                const activePage =
                  resource.pdfPreview.pages.find((p) => p.pageNum === currentPdfPage) ||
                  resource.pdfPreview.pages[0];
                return (
                  <div
                    className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-inner min-h-[360px] transition-transform origin-top"
                    style={{ transform: `scale(${pdfZoom / 100})` }}
                  >
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow border border-neutral-200">
                      <div className="border-b-2 border-[#0897B4] pb-3 mb-6 flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase text-[#0897B4] tracking-widest">
                          DOCUMENTO DIDÁCTICO · TECNOLO ED
                        </span>
                        <span className="text-xs font-bold text-neutral-400">
                          Pág. {activePage.pageNum}
                        </span>
                      </div>

                      <h4 className="font-display font-black text-xl text-[#25251E] mb-4">
                        {activePage.heading}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                        {activePage.summary}
                      </p>

                      <div className="space-y-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                        <span className="text-xs font-black uppercase text-neutral-500 block">
                          Puntos Clave Desarrollados:
                        </span>
                        {activePage.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0897B4] mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* 2. REPRODUCTOR DE VIDEO EDUCATIVO */}
          {resource.type === 'video' && resource.videoData && (
            <div className="space-y-6">
              {/* Responsive Video Screen Container */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-lg border-2 border-neutral-800 flex flex-col justify-between p-4 sm:p-6 text-white">
                
                {/* Simulated Screen Overlay */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-[10px] uppercase tracking-wider">
                    REPRODUCTOR HD
                  </span>
                  <span className="text-xs font-bold text-neutral-300">
                    Duración: {resource.videoData.duration}
                  </span>
                </div>

                {/* Central Play Badge */}
                <div className="flex flex-col items-center justify-center text-center z-10">
                  <div className="w-16 h-16 rounded-full bg-[#FFCA05] text-[#25251E] flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform mb-3">
                    <PlayCircle className="w-9 h-9" />
                  </div>
                  <h4 className="font-display font-black text-lg text-white max-w-md">
                    {resource.title}
                  </h4>
                  <span className="text-xs text-neutral-300 mt-1">
                    Haga clic para reproducir en pantalla completa
                  </span>
                </div>

                {/* Simulated Progress bar */}
                <div className="w-full space-y-1.5 z-10">
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0897B4] h-full w-[35%] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                    <span>04:12</span>
                    <span>{resource.videoData.duration}</span>
                  </div>
                </div>

                {/* Dark ambient background gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
              </div>

              {/* Video Highlights & Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <span className="text-xs font-black uppercase text-[#0897B4] block mb-2">
                    Marcadores y Momentos Clave:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {resource.videoData.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-[#FFCA05] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  <span className="text-xs font-black uppercase text-[#0897B4] block mb-2">
                    Resumen Pedagógico:
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {resource.videoData.transcriptSummary}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. MAPAS CONCEPTUALES */}
          {resource.type === 'concept_map' && resource.conceptMapData && (
            <div className="space-y-6">
              {/* Map Toolbar */}
              <div className="bg-neutral-100 rounded-2xl p-3 flex items-center justify-between text-xs font-bold text-neutral-700">
                <span className="font-display font-extrabold text-[#0897B4]">
                  TEMA CENTRAL: {resource.conceptMapData.centralTheme}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setImageZoom((z) => Math.max(70, z - 10))}
                    className="p-1.5 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono">{imageZoom}%</span>
                  <button
                    onClick={() => setImageZoom((z) => Math.min(150, z + 10))}
                    className="p-1.5 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Visual Concept Map Nodes Grid */}
              <div
                className="bg-neutral-50 border-2 border-dashed border-[#0897B4]/40 rounded-3xl p-6 sm:p-8 transition-transform origin-top"
                style={{ transform: `scale(${imageZoom / 100})` }}
              >
                {/* Central Root Node */}
                <div className="max-w-md mx-auto bg-[#0897B4] text-white p-4 rounded-2xl text-center shadow-lg mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFCA05]">
                    NÚCLEO CONCEPTUAL
                  </span>
                  <h4 className="font-display font-black text-lg">
                    {resource.conceptMapData.centralTheme}
                  </h4>
                </div>

                {/* Subnodes Tree */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {resource.conceptMapData.nodes.map((node, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-2xl border-2 border-neutral-200 shadow-sm hover:border-[#0897B4] transition-colors"
                    >
                      <h5 className="font-display font-extrabold text-sm text-[#0897B4] mb-1">
                        {node.title}
                      </h5>
                      <p className="text-xs text-neutral-600 mb-3">
                        {node.description}
                      </p>
                      <div className="space-y-1 bg-neutral-50 p-2.5 rounded-xl">
                        <span className="text-[10px] font-black uppercase text-neutral-400 block">
                          Conceptos Derivados:
                        </span>
                        {node.subtopics.map((sub, j) => (
                          <div key={j} className="text-xs text-neutral-700 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. INFOGRAFÍAS INTERACTIVAS */}
          {resource.type === 'infographic' && resource.infographicData && (
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-black uppercase text-[#0897B4] tracking-widest">
                  INFOGRAFÍA EDUCATIVA DE ALTA RESOLUCIÓN
                </span>
                <h4 className="font-display font-black text-2xl text-[#25251E] mt-1">
                  {resource.title}
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  {resource.infographicData.subtitle}
                </p>
              </div>

              {/* Key Quantitative Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {resource.infographicData.keyStats.map((st, i) => (
                  <div key={i} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center">
                    <span className="font-display font-black text-2xl text-[#0897B4]">
                      {st.value}
                    </span>
                    <span className="text-xs font-black uppercase text-[#25251E] block mt-0.5">
                      {st.label}
                    </span>
                    <span className="text-[11px] text-neutral-500 mt-0.5 block">
                      {st.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sequential Steps in Infographic */}
              <div className="space-y-3">
                {resource.infographicData.steps.map((st) => (
                  <div
                    key={st.step}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-neutral-100 hover:border-[#0897B4]/40 transition-colors shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-2xl bg-[#FFCA05] text-[#25251E] font-display font-black text-base flex items-center justify-center shrink-0 shadow-sm">
                      {st.step}
                    </div>
                    <div>
                      <h5 className="font-display font-extrabold text-sm text-[#25251E]">
                        {st.title}
                      </h5>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-0.5">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PRESENTACIONES / DIAPOSITIVAS */}
          {resource.type === 'presentation' && resource.presentationData && (
            <div className="space-y-4">
              {/* Slide Navigator Controls */}
              <div className="bg-neutral-100 rounded-2xl p-3 flex items-center justify-between text-xs font-bold text-neutral-700">
                <span className="font-display font-bold">
                  Diapositiva {currentSlide} de {resource.presentationData.totalSlides}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentSlide((s) => Math.max(1, s - 1))}
                    disabled={currentSlide === 1}
                    className="btn-toy-yellow px-3 py-1.5 rounded-xl disabled:opacity-30 cursor-pointer flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((s) =>
                        Math.min(resource.presentationData!.totalSlides, s + 1)
                      )
                    }
                    disabled={currentSlide === resource.presentationData.totalSlides}
                    className="btn-toy-yellow px-3 py-1.5 rounded-xl disabled:opacity-30 cursor-pointer flex items-center gap-1"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Slide Canvas */}
              {(() => {
                const slide =
                  resource.presentationData.slides.find(
                    (s) => s.slideNumber === currentSlide
                  ) || resource.presentationData.slides[0];
                return (
                  <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl min-h-[380px] flex flex-col justify-between border-4 border-neutral-800">
                    <div>
                      <div className="flex justify-between items-center text-xs font-mono text-[#FFCA05] mb-6 border-b border-neutral-800 pb-3">
                        <span>TECNOLO SLIDE DECK</span>
                        <span>0{slide.slideNumber} / 0{resource.presentationData.totalSlides}</span>
                      </div>

                      <h4 className="font-display font-black text-2xl sm:text-3xl text-white mb-6">
                        {slide.title}
                      </h4>

                      <div className="space-y-3.5 max-w-xl">
                        {slide.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                            <span className="w-2 h-2 rounded-full bg-[#0897B4] mt-2 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {slide.note && (
                      <div className="mt-8 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 italic">
                        💡 Notas del orador: {slide.note}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {/* 6. RECURSOS INTERACTIVOS / SIMULADOR / QUIZ */}
          {resource.type === 'interactive' && resource.interactiveData && (
            <div className="space-y-6">
              <div className="bg-[#B9E6EF]/20 border border-[#0897B4]/30 rounded-2xl p-4">
                <span className="text-xs font-black uppercase text-[#0897B4] block mb-1">
                  Instrucciones de la Actividad:
                </span>
                <p className="text-xs text-neutral-700">
                  {resource.interactiveData.instructions}
                </p>
              </div>

              {/* Questions */}
              {resource.interactiveData.questions?.map((q, qIndex) => {
                const selectedOption = userAnswers[qIndex];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.answerIndex;

                return (
                  <div
                    key={qIndex}
                    className="bg-white p-5 rounded-2xl border-2 border-neutral-200 shadow-sm space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-[#0897B4] text-white font-display font-black text-xs flex items-center justify-center shrink-0">
                        Q{qIndex + 1}
                      </span>
                      <h5 className="font-display font-extrabold text-sm text-[#25251E]">
                        {q.question}
                      </h5>
                    </div>

                    {/* Options list */}
                    <div className="space-y-2 pt-1 pl-10">
                      {q.options.map((option, optIndex) => {
                        const isChosen = selectedOption === optIndex;
                        return (
                          <button
                            key={optIndex}
                            onClick={() => {
                              setUserAnswers((prev) => ({
                                ...prev,
                                [qIndex]: optIndex,
                              }));
                            }}
                            className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                              isChosen
                                ? 'bg-[#0897B4] text-white border-[#0897B4] shadow-sm'
                                : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                            }`}
                          >
                            <span className="font-bold mr-2">
                              {String.fromCharCode(65 + optIndex)})
                            </span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Instant Feedback if answered */}
                    {isAnswered && (
                      <div
                        className={`mt-3 p-3 rounded-xl text-xs flex items-start gap-2 ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        )}
                        <span>{q.explanation}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* 7. ENLACES DE INTERÉS EXTERNO */}
          {resource.type === 'link' && (
            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0897B4]/10 text-[#0897B4] flex items-center justify-center mx-auto">
                <ExternalLink className="w-8 h-8" />
              </div>
              <h4 className="font-display font-black text-xl text-[#25251E]">
                Herramienta Externa Verificada
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                {resource.description}
              </p>
              {resource.externalUrl && (
                <div className="pt-2">
                  <a
                    href={resource.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-toy-yellow inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider shadow-md"
                  >
                    <span>ABRIR HERRAMIENTA OFICIAL</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Resource Details Metadata Box */}
          <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
            <div>
              <span className="font-bold text-[#25251E]">Autor:</span> {resource.author}
              <span className="mx-2">·</span>
              <span className="font-bold text-[#25251E]">Fecha:</span> {resource.date}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-[#25251E]">Categoría:</span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-neutral-200 font-bold uppercase text-[10px]">
                {resource.type}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
