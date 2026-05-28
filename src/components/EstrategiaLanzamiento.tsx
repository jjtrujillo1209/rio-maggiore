const FASES = [
  {
    id: 1,
    nombre: "FASE EXPECTATIVA",
    rango: "18 – 31 Mayo",
    color: "#5C7A52",
    accent: "#A8C4A0",
    bg: "#EBF0E8",
    icon: "◎",
    objetivo: "Generar intriga y construir audiencia",
    descripcion: "El proyecto no tiene nombre. Solo hay señales. Armenia empieza a preguntarse qué llega.",
    acciones: [
      "Publicaciones teaser sin revelar el nombre: 'Algo diferente llega al Quindío'",
      "Videos cortos en TikTok e Instagram Reels mostrando imágenes de Cinque Terre",
      "Cuenta de Instagram creada con primeros 3 posts en negro / sin contexto",
      "Activación de pauta Meta Ads: awareness en Armenia, Calarcá, Montenegro",
      "Formulario de pre-registro: 'Sé el primero en enterarte'",
      "WhatsApp Business configurado con respuesta automática de bienvenida",
    ],
    meta: "500 registros pre-lanzamiento · 2.000 seguidores IG",
    kpi: "Costo por registro objetivo: $1.100 COP",
  },
  {
    id: 2,
    nombre: "FASE REVELACIÓN",
    rango: "1 – 5 Junio",
    color: "#8B6914",
    accent: "#D4AF6A",
    bg: "#F5EDD8",
    icon: "◈",
    objetivo: "Revelar la identidad y crear urgencia real",
    descripcion: "Río Maggiore se presenta al mundo. Nombre, concepto, propuesta de valor y primeras unidades.",
    acciones: [
      "Reveal post: 'Se llama Río Maggiore' — carrusel con la historia del nombre",
      "Video de presentación del proyecto (arquitectura, render, ubicación)",
      "Reels con el estilo de vida: 'Vivir en Armenia como en Italia'",
      "Email blast a todos los pre-registrados con acceso anticipado",
      "Historias con cuenta regresiva al 6 de junio",
      "Pauta de retargeting a quienes interactuaron con los teasers",
    ],
    meta: "1.000 nuevos seguidores en 5 días · 50% apertura de emails",
    kpi: "CTR objetivo en pauta: 2.5%+",
  },
  {
    id: 3,
    nombre: "FASE LANZAMIENTO",
    rango: "6 Junio",
    color: "#1C2B1A",
    accent: "#D4AF6A",
    bg: "#1C2B1A",
    icon: "◆",
    objetivo: "Evento, ventas y consolidar la marca",
    descripcion: "El gran día. Contenido en vivo, apertura de listas de espera y primeras reservas.",
    acciones: [
      "Live en Instagram y TikTok desde el evento de lanzamiento",
      "Post oficial: apertura de preventa con precios especiales por 48h",
      "Stories en tiempo real: asistentes, renders, testimonios",
      "Activación de pauta de conversión: 'Agenda tu cita ahora'",
      "Cierre de lista de espera pública — acceso solo por referidos",
      "WhatsApp broadcast a toda la base de datos registrada",
    ],
    meta: "10+ reservas el día del lanzamiento · 5.000 alcance orgánico",
    kpi: "Costo por cita agendada: $10.000 COP",
  },
];

const CANALES = [
  { red: "Instagram", rol: "Canal principal de marca y lifestyle", formato: "Reels + Carruseles + Stories", freq: "5x semana" },
  { red: "Facebook", rol: "Pauta y audiencias mayores de 35", formato: "Posts + Lead Ads", freq: "3x semana" },
  { red: "TikTok", rol: "Viralidad y alcance joven 25-38", formato: "Reels cortos 15-30 seg", freq: "3x semana" },
  { red: "WhatsApp", rol: "Cierre y atención personalizada", formato: "Broadcast + Chatbot", freq: "Diario" },
];

export default function EstrategiaLanzamiento() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-[#9A8050] mb-1">Plan completo</p>
        <h2 className="text-2xl text-[#1C2B1A] tracking-wider uppercase font-light">
          Estrategia de Lanzamiento
        </h2>
        <p className="text-sm text-[#7A6A4A] font-sans mt-2">
          18 Mayo → 6 Junio 2026 · 3 Fases · 4 Canales
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connector line */}
        <div className="absolute top-8 left-0 right-0 h-px bg-[#C9B99A] hidden md:block" />

        <div className="grid md:grid-cols-3 gap-6">
          {FASES.map((fase) => (
            <div
              key={fase.id}
              className="relative"
              style={{ background: fase.id === 3 ? "#1C2B1A" : fase.bg }}
            >
              {/* Phase number */}
              <div
                className="absolute -top-3 left-6 w-6 h-6 flex items-center justify-center text-xs font-sans font-bold"
                style={{ background: fase.color, color: fase.id === 3 ? "#D4AF6A" : "#F5F0E8" }}
              >
                {fase.id}
              </div>

              <div className="p-6 pt-8">
                <div className="mb-4">
                  <p
                    className="text-xs font-sans tracking-[0.25em] uppercase mb-1"
                    style={{ color: fase.accent }}
                  >
                    {fase.nombre}
                  </p>
                  <p
                    className="text-lg font-light tracking-wide"
                    style={{ color: fase.id === 3 ? "#F5F0E8" : "#1C2B1A" }}
                  >
                    {fase.rango}
                  </p>
                  <p
                    className="text-xs font-sans mt-2 leading-relaxed"
                    style={{ color: fase.id === 3 ? "#7A9670" : "#7A6A4A" }}
                  >
                    {fase.descripcion}
                  </p>
                </div>

                <div className="space-y-1.5 mb-5">
                  {fase.acciones.map((a, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span style={{ color: fase.accent }} className="text-xs mt-0.5 shrink-0">→</span>
                      <p
                        className="text-xs font-sans leading-snug"
                        style={{ color: fase.id === 3 ? "#C9D9C6" : "#5C4A2A" }}
                      >
                        {a}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="border-t pt-3 mt-3"
                  style={{ borderColor: fase.id === 3 ? "#2E4A2C" : "#C9B99A" }}
                >
                  <p className="text-xs font-sans font-semibold" style={{ color: fase.accent }}>
                    Meta: <span className="font-normal" style={{ color: fase.id === 3 ? "#A8C4A0" : "#5C4A2A" }}>{fase.meta}</span>
                  </p>
                  <p className="text-xs font-sans font-semibold mt-1" style={{ color: fase.accent }}>
                    KPI: <span className="font-normal" style={{ color: fase.id === 3 ? "#A8C4A0" : "#5C4A2A" }}>{fase.kpi}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Canales */}
      <div>
        <h3 className="text-sm font-sans tracking-[0.25em] uppercase text-[#5C4A2A] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#C9B99A]" />
          Mix de Canales
          <span className="flex-1 h-px bg-[#C9B99A]" />
        </h3>
        <div className="grid md:grid-cols-4 gap-3">
          {CANALES.map((c) => (
            <div key={c.red} className="bg-white border border-[#E0D8C8] p-4">
              <p className="text-sm font-sans font-semibold text-[#1C2B1A] tracking-wide mb-1">{c.red}</p>
              <p className="text-xs text-[#7A6A4A] font-sans mb-2 leading-snug">{c.rol}</p>
              <p className="text-xs text-[#9A8050] font-sans">{c.formato}</p>
              <div className="mt-3 bg-[#F5F0E8] px-2 py-1 inline-block">
                <p className="text-xs font-sans font-semibold text-[#5C4A2A]">{c.freq}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mensaje de marca */}
      <div className="bg-[#1C2B1A] p-8 text-center">
        <p className="text-[#9A8050] font-sans text-xs tracking-[0.3em] uppercase mb-3">Propuesta de valor central</p>
        <blockquote className="text-[#F5F0E8] text-xl font-light tracking-wide leading-relaxed">
          "Río Maggiore no es solo un proyecto inmobiliario.<br />
          <span className="text-[#D4AF6A]">Es la decisión de vivir diferente en el corazón del Quindío."</span>
        </blockquote>
      </div>
    </div>
  );
}
