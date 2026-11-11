import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consulta Pedagógica',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMsg('El mensaje debe contener al menos 10 caracteres.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative w-full bg-[#F9F8F6] py-16 md:py-24 border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0897B4]/10 text-[#0897B4] text-xs font-black uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>CANAL DIRECTO DE COMUNICACIÓN</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#25251E] uppercase tracking-tight">
            CONTACTO & <span className="text-[#0897B4]">COLABORACIONES</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600">
            ¿Deseas proponer un nuevo recurso pedagógico, realizar una consulta o colaborar con el proyecto de Tecnolo?
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-neutral-200/80">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display font-black text-2xl text-[#25251E]">
                ¡MENSAJE ENVIADO CON ÉXITO!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md">
                Gracias por comunicarte con <strong>Aprendiendo con Tecnolo</strong>. 
                Hemos recibido tu consulta y te responderemos a la brevedad posible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Consulta Pedagógica', message: '' });
                }}
                className="mt-6 btn-toy-yellow px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. María González"
                    className="w-full px-4 py-3 bg-neutral-50 rounded-2xl text-xs sm:text-sm font-semibold text-[#25251E] border border-neutral-200 focus:outline-none focus:border-[#0897B4] focus:ring-2 focus:ring-[#0897B4]/15"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 bg-neutral-50 rounded-2xl text-xs sm:text-sm font-semibold text-[#25251E] border border-neutral-200 focus:outline-none focus:border-[#0897B4] focus:ring-2 focus:ring-[#0897B4]/15"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                  Motivo de Contacto
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50 rounded-2xl text-xs sm:text-sm font-semibold text-[#25251E] border border-neutral-200 focus:outline-none focus:border-[#0897B4] cursor-pointer"
                >
                  <option value="Consulta Pedagógica">Consulta sobre Materiales Didácticos</option>
                  <option value="Aporte de Recurso">Propuesta de Nuevo Recurso Educativo</option>
                  <option value="Colaboración Institucional">Convenio o Taller Escolar</option>
                  <option value="Reporte Técnico">Sugerencia de Mejora Técnica</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                  Mensaje o Consulta *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe aquí tu consulta, propuesta o sugerencia..."
                  className="w-full px-4 py-3 bg-neutral-50 rounded-2xl text-xs sm:text-sm font-semibold text-[#25251E] border border-neutral-200 focus:outline-none focus:border-[#0897B4] focus:ring-2 focus:ring-[#0897B4]/15 resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-xs font-bold text-red-500">{errorMsg}</p>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="btn-toy-yellow px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>ENVIAR MENSAJE</span>
                  <Send className="w-4 h-4 text-[#25251E]" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
