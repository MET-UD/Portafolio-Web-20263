import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  FileText,
  Video,
  GitFork,
  Image as ImageIcon,
  Presentation,
  PlayCircle,
  ExternalLink,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Check,
  Clock,
  Sparkles,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { EducationalResource, ResourceType } from '../types/portfolio';
import { THEMATIC_MODULES } from '../data/modules';

interface ResourceExplorerProps {
  resources: EducationalResource[];
  onSelectResource: (resource: EducationalResource) => void;
  selectedModuleId?: string | null;
  onClearModuleFilter?: () => void;
}

export const ResourceExplorer: React.FC<ResourceExplorerProps> = ({
  resources,
  onSelectResource,
  selectedModuleId,
  onClearModuleFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all');
  const [activeModuleFilter, setActiveModuleFilter] = useState<string>(
    selectedModuleId || 'all'
  );
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedModuleId) {
      setActiveModuleFilter(selectedModuleId);
    }
  }, [selectedModuleId]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories: {
    type: ResourceType | 'all';
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    count: number;
  }[] = [
    { type: 'all', label: 'Todos los Recursos', icon: Layers, count: resources.length },
    {
      type: 'pdf',
      label: 'Documentos PDF',
      icon: FileText,
      count: resources.filter((r) => r.type === 'pdf').length,
    },
    {
      type: 'video',
      label: 'Videos Educativos',
      icon: Video,
      count: resources.filter((r) => r.type === 'video').length,
    },
    {
      type: 'concept_map',
      label: 'Mapas Conceptuales',
      icon: GitFork,
      count: resources.filter((r) => r.type === 'concept_map').length,
    },
    {
      type: 'infographic',
      label: 'Infografías',
      icon: ImageIcon,
      count: resources.filter((r) => r.type === 'infographic').length,
    },
    {
      type: 'presentation',
      label: 'Presentaciones',
      icon: Presentation,
      count: resources.filter((r) => r.type === 'presentation').length,
    },
    {
      type: 'interactive',
      label: 'Recursos Interactivos',
      icon: PlayCircle,
      count: resources.filter((r) => r.type === 'interactive').length,
    },
    {
      type: 'link',
      label: 'Enlaces de Interés',
      icon: ExternalLink,
      count: resources.filter((r) => r.type === 'link').length,
    },
  ];

  // Filtered resources
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      // Type filter
      if (selectedType !== 'all' && item.type !== selectedType) return false;
      // Module filter
      if (activeModuleFilter !== 'all' && item.moduleId !== activeModuleFilter) return false;
      // Bookmark filter
      if (onlyBookmarks && !bookmarkedIds.includes(item.id)) return false;
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesAuthor = item.author.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesAuthor) {
          return false;
        }
      }
      return true;
    });
  }, [resources, selectedType, activeModuleFilter, onlyBookmarks, bookmarkedIds, searchTerm]);

  const getTypeBadge = (type: ResourceType) => {
    switch (type) {
      case 'pdf':
        return { label: 'PDF', bg: 'bg-rose-50 text-rose-700 border-rose-200', icon: FileText };
      case 'video':
        return { label: 'VIDEO', bg: 'bg-sky-50 text-sky-700 border-sky-200', icon: Video };
      case 'concept_map':
        return { label: 'MAPA CONCEPTUAL', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: GitFork };
      case 'infographic':
        return { label: 'INFOGRAFÍA', bg: 'bg-amber-50 text-amber-700 border-amber-200', icon: ImageIcon };
      case 'presentation':
        return { label: 'DIAPOSITIVAS', bg: 'bg-purple-50 text-purple-700 border-purple-200', icon: Presentation };
      case 'interactive':
        return { label: 'INTERACTIVO', bg: 'bg-lime-50 text-lime-800 border-lime-300', icon: PlayCircle };
      case 'link':
        return { label: 'ENLACE WEB', bg: 'bg-cyan-50 text-cyan-800 border-cyan-200', icon: ExternalLink };
    }
  };

  return (
    <section id="recursos" className="relative w-full bg-[#F9F8F6] py-16 md:py-24 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0897B4]/10 text-[#0897B4] text-xs font-black uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>BIBLIOTECA DIGITAL MULTIMEDIA</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#25251E] uppercase tracking-tight">
              EXPLORA LOS <span className="text-[#0897B4]">RECURSOS</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Consulta documentos, videos, mapas conceptuales, infografías y experiencias 
              interactivas organizadas por áreas de conocimiento.
            </p>
          </div>

          {/* Quick Notice for Demonstrative Template Extensibility */}
          <div className="bg-[#B9E6EF]/40 border border-[#0897B4]/30 rounded-2xl p-3.5 max-w-sm flex items-start gap-2.5 text-xs text-neutral-700">
            <HelpCircle className="w-4 h-4 text-[#0897B4] shrink-0 mt-0.5" />
            <span>
              <strong>Arquitectura Modular:</strong> Todos los contenidos son de muestra 
              y pueden reemplazarse fácilmente en <code className="bg-white px-1 py-0.5 rounded font-mono text-[10px]">resources.ts</code>.
            </span>
          </div>
        </div>

        {/* SEARCH AND CONTROL BAR */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-neutral-200/80 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por título, temática, palabra clave o autor..."
                className="w-full pl-12 pr-4 py-3 bg-neutral-50 rounded-2xl text-xs sm:text-sm font-semibold text-[#25251E] placeholder:text-neutral-400 border border-neutral-200 focus:outline-none focus:border-[#0897B4] focus:ring-2 focus:ring-[#0897B4]/15"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-neutral-600"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Filter by Module Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-500 shrink-0" />
              <select
                value={activeModuleFilter}
                onChange={(e) => {
                  setActiveModuleFilter(e.target.value);
                  if (onClearModuleFilter && e.target.value === 'all') {
                    onClearModuleFilter();
                  }
                }}
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs font-bold rounded-2xl px-4 py-3 focus:outline-none focus:border-[#0897B4] cursor-pointer"
              >
                <option value="all">Todos los Módulos Temáticos</option>
                {THEMATIC_MODULES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.code}: {m.shortTitle}
                  </option>
                ))}
              </select>

              {/* Bookmark Toggle */}
              <button
                onClick={() => setOnlyBookmarks(!onlyBookmarks)}
                className={`p-3 rounded-2xl border transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer ${
                  onlyBookmarks
                    ? 'bg-[#FFCA05] text-[#25251E] border-[#C99E00]'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border-neutral-200'
                }`}
                title="Ver sólo guardados"
              >
                <Bookmark className="w-4 h-4" />
                <span className="hidden sm:inline">Guardados ({bookmarkedIds.length})</span>
              </button>
            </div>

          </div>

          {/* CATEGORY FILTER TABS (7 Category Pills) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none border-t border-neutral-100">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedType === cat.type;
              return (
                <button
                  key={cat.type}
                  onClick={() => setSelectedType(cat.type)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black tracking-wide whitespace-nowrap cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#0897B4] text-white shadow-sm'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FFCA05]' : 'text-neutral-500'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE FILTER SUMMARY BAR */}
        {(activeModuleFilter !== 'all' || selectedType !== 'all' || searchTerm !== '' || onlyBookmarks) && (
          <div className="flex items-center justify-between bg-[#B9E6EF]/25 border border-[#0897B4]/20 rounded-2xl px-4 py-2.5 mb-6 text-xs text-neutral-700">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold">Filtros aplicados:</span>
              {selectedType !== 'all' && (
                <span className="bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 text-[#0897B4] font-bold">
                  Tipo: {categories.find((c) => c.type === selectedType)?.label}
                </span>
              )}
              {activeModuleFilter !== 'all' && (
                <span className="bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 text-neutral-800 font-bold">
                  Módulo: {THEMATIC_MODULES.find((m) => m.id === activeModuleFilter)?.shortTitle}
                </span>
              )}
              {onlyBookmarks && (
                <span className="bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 text-amber-700 font-bold">
                  Sólo marcados ({bookmarkedIds.length})
                </span>
              )}
              {searchTerm && (
                <span className="bg-white px-2.5 py-0.5 rounded-full border border-neutral-200 text-neutral-700 font-medium">
                  Búsqueda: "{searchTerm}"
                </span>
              )}
            </div>
            <button
              onClick={() => {
                setSelectedType('all');
                setActiveModuleFilter('all');
                setSearchTerm('');
                setOnlyBookmarks(false);
                if (onClearModuleFilter) onClearModuleFilter();
              }}
              className="text-xs font-black text-[#0897B4] hover:underline cursor-pointer ml-3 shrink-0"
            >
              Restablecer todos
            </button>
          </div>
        )}

        {/* RESOURCE CARDS GRID */}
        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200/80 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-neutral-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-lg text-[#25251E]">
              No se encontraron recursos
            </h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              Prueba cambiando la palabra clave o limpiando los filtros temáticos para ver más materiales.
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setActiveModuleFilter('all');
                setSearchTerm('');
                setOnlyBookmarks(false);
              }}
              className="mt-5 btn-toy-yellow px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider"
            >
              Ver todos los recursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredResources.map((item) => {
              const badge = getTypeBadge(item.type);
              const BadgeIcon = badge.icon;
              const moduleData = THEMATIC_MODULES.find((m) => m.id === item.moduleId);
              const isBookmarked = bookmarkedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectResource(item)}
                  className="relative group bg-white rounded-[2rem] p-5 shadow-[0_10px_30px_rgba(37,37,30,0.05)] hover:shadow-[0_20px_45px_rgba(37,37,30,0.1)] border border-neutral-200/80 hover:border-[#0897B4]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                >
                  {/* Card Header: Type Badge & Bookmark */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border ${badge.bg}`}
                        >
                          <BadgeIcon className="w-3 h-3" />
                          <span>{badge.label}</span>
                        </span>
                        {item.difficulty && (
                          <span className="text-[10px] font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                            {item.difficulty}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-1.5 rounded-full transition-colors ${
                          isBookmarked
                            ? 'text-amber-500 bg-amber-50'
                            : 'text-neutral-400 hover:text-neutral-700 bg-neutral-50 hover:bg-neutral-100'
                        }`}
                        title={isBookmarked ? 'Quitar de guardados' : 'Guardar recurso'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 fill-amber-400 text-amber-500" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Module kicker */}
                    {moduleData && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0897B4] block mb-1">
                        {moduleData.code} · {moduleData.shortTitle}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#25251E] group-hover:text-[#0897B4] transition-colors leading-snug mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer: Metadata & Button Action */}
                  <div className="pt-4 border-t border-neutral-100">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Metadata line and Launch Button */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-neutral-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.durationOrPages || 'Recurso'}</span>
                      </div>

                      <button
                        onClick={() => onSelectResource(item)}
                        className="btn-toy-yellow px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm group-hover:scale-105 transition-transform"
                      >
                        <span>ABRIR RECURSO</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
