const PRESUPUESTO_TOTAL = 550000;

const PLATAFORMAS = [
  {
    nombre: "Meta Ads",
    sub: "Instagram + Facebook",
    cop: 330000,
    pct: 60,
    color: "#1877F2",
    objetivo: "Awareness + Leads",
    formato: "Lead Ads + Reels Pauta",
    dias: "18 – 31 Mayo",
    alcance: "18.000 – 28.000",
    leads: "25 – 45",
    cpl: "~$7.300",
  },
  {
    nombre: "TikTok Ads",
    sub: "In-Feed Video",
    cop: 165000,
    pct: 30,
    color: "#000000",
    objetivo: "Alcance + Branding",
    formato: "TopView / In-Feed",
    dias: "18 – 31 Mayo",
    alcance: "10.000 – 20.000",
    leads: "10 – 20",
    cpl: "~$8.250",
  },
  {
    nombre: "WhatsApp / Boost",
    sub: "Conversión directa",
    cop: 55000,
    pct: 10,
    color: "#25D366",
    objetivo: "Cierres y citas",
    formato: "Click to WhatsApp",
    dias: "26 – 31 Mayo",
    alcance: "2.000 – 5.000",
    leads: "5 – 10",
    cpl: "~$5.500",
  },
];

const AUDIENCIAS = [
  {
    nombre: "Compradores Primarios",
    emoji: "🏠",
    edad: "28 – 42 años",
    genero: "Mixto",
    geo: "Armenia, Calarcá, Montenegro",
    intereses: ["Primera vivienda", "Familia", "Crédito hipotecario", "Lifestyle moderno"],
    ingreso: "Medio-alto ($4M – $8M/mes)",
    comportamiento: "Buscan en Properati, Metrocuadrado, grupos Facebook inmobiliarios",
    presupuesto: "$220.000 COP",
    meta: "30 leads calificados",
    color: "#3A5C36",
    bg: "#EBF0E8",
  },
  {
    nombre: "Inversionistas",
    emoji: "📈",
    edad: "35 – 55 años",
    genero: "Masculino 65%",
    geo: "Bogotá, Medellín, Cali + Armenia",
    intereses: ["Finca raíz como inversión", "Arriendos", "Valorización", "Portafolio"],
    ingreso: "Alto ($10M+/mes)",
    comportamiento: "Siguen páginas de economía, grupos de inversión, finanzas personales",
    presupuesto: "$180.000 COP",
    meta: "15 leads de alta calidad",
    color: "#7A5010",
    bg: "#F5EDD8",
  },
  {
    nombre: "Familias Quindío",
    emoji: "👨‍👩‍👧",
    edad: "30 – 50 años",
    genero: "Femenino 55%",
    geo: "Armenia, Salento, Filandia, La Tebaida",
    intereses: ["Calidad de vida", "Seguridad", "Colegios", "Naturaleza", "Espacios verdes"],
    ingreso: "Medio ($3M – $6M/mes)",
    comportamiento: "Activos en grupos locales, siguen influencers de lifestyle Quindío",
    presupuesto: "$150.000 COP",
    meta: "20 registros formulario",
    color: "#2A3A5C",
    bg: "#EEF0F5",
  },
];

const CRONOGRAMA = [
  { fecha: "18 May", accion: "Encender campaña Meta Awareness (alcance masivo Armenia)", plataforma: "Meta", presupuesto: "$20.000/día", tipo: "Awareness" },
  { fecha: "19 May", accion: "Activar TikTok In-Feed con video teaser #1 (15s)", plataforma: "TikTok", presupuesto: "$12.000/día", tipo: "Awareness" },
  { fecha: "22 May", accion: "Lanzar Lead Ads Meta segmento Compradores Primarios", plataforma: "Meta", presupuesto: "$15.000/día", tipo: "Leads" },
  { fecha: "25 May", accion: "Activar retargeting a quienes vieron videos >50%", plataforma: "Meta + TikTok", presupuesto: "$10.000/día", tipo: "Retargeting" },
  { fecha: "26 May", accion: "Click to WhatsApp para audiencia de más alto engagement", plataforma: "Meta → WA", presupuesto: "$8.000/día", tipo: "Conversión" },
  { fecha: "29 May", accion: "Aumentar budget Lead Ads con mejor creative (A/B)", plataforma: "Meta", presupuesto: "$18.000/día", tipo: "Leads" },
  { fecha: "31 May", accion: "Boost post Instagram con urgencia: 'Lanzamiento en 6 días'", plataforma: "Instagram", presupuesto: "$15.000/día", tipo: "Urgencia" },
];

const TIPO_COLORS: Record<string, string> = {
  Awareness: "#5C7A52",
  Leads: "#D4AF6A",
  Retargeting: "#7A5010",
  Conversión: "#25D366",
  Urgencia: "#C0392B",
};

export default function EstudioSegmentacion() {
  const alcanceMin = PLATAFORMAS.reduce((s, p) => s + parseInt(p.alcance.split(" – ")[0].replace(/\D/g, "")), 0);
  const alcanceMax = PLATAFORMAS.reduce((s, p) => s + parseInt(p.alcance.split(" – ")[1].replace(/\D/g, "")), 0);
  const leadsMin = PLATAFORMAS.reduce((s, p) => s + parseInt(p.leads.split(" – ")[0]), 0);
  const leadsMax = PLATAFORMAS.reduce((s, p) => s + parseInt(p.leads.split(" – ")[1]), 0);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-[#9A8050] mb-1">Pauta digital</p>
        <h2 className="text-2xl text-[#1C2B1A] tracking-wider uppercase font-light">Segmentación & Estudio de Pauta</h2>
        <p className="text-sm text-[#7A6A4A] font-sans mt-1">
          Budget: <strong className="text-[#1C2B1A]">${PRESUPUESTO_TOTAL.toLocaleString("es-CO")} COP</strong> · 18 – 31 Mayo 2026
        </p>
      </div>

      {/* KPIs globales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Presupuesto total", value: "$550.000", sub: "COP / 14 días" },
          { label: "Alcance estimado", value: `${(alcanceMin/1000).toFixed(0)}K – ${(alcanceMax/1000).toFixed(0)}K`, sub: "personas únicas" },
          { label: "Leads esperados", value: `${leadsMin} – ${leadsMax}`, sub: "contactos calificados" },
          { label: "CPL promedio estimado", value: "~$7.000", sub: "costo por lead COP" },
        ].map(k => (
          <div key={k.label} className="bg-[#1C2B1A] p-4 text-center">
            <p className="text-xs font-sans text-[#7A9670] tracking-wider uppercase mb-1">{k.label}</p>
            <p className="text-2xl font-light text-[#D4AF6A]">{k.value}</p>
            <p className="text-xs text-[#4A6B45] font-sans mt-1">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Distribución de presupuesto */}
      <div>
        <h3 className="text-sm font-sans tracking-[0.25em] uppercase text-[#5C4A2A] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#C9B99A]" />Distribución del Presupuesto<span className="flex-1 h-px bg-[#C9B99A]" />
        </h3>

        {/* Bar chart */}
        <div className="bg-white border border-[#E0D8C8] p-5 mb-4">
          <div className="space-y-3">
            {PLATAFORMAS.map(p => (
              <div key={p.nombre}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-sans font-semibold text-[#1C2B1A]">{p.nombre}</span>
                  <span className="text-xs font-sans text-[#7A6A4A]">${p.cop.toLocaleString("es-CO")} COP ({p.pct}%)</span>
                </div>
                <div className="w-full bg-[#F0EBE0] h-7 relative">
                  <div
                    className="h-full flex items-center pl-3 transition-all"
                    style={{ width: `${p.pct}%`, background: p.color }}
                  >
                    <span className="text-white text-xs font-bold font-sans">{p.pct}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {PLATAFORMAS.map(p => (
            <div key={p.nombre} className="border border-[#E0D8C8] bg-white p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3" style={{ background: p.color }} />
                <p className="font-sans font-semibold text-sm text-[#1C2B1A]">{p.nombre}</p>
                <p className="text-xs text-[#9A8050] font-sans ml-auto">{p.sub}</p>
              </div>
              <div className="space-y-1.5 text-xs font-sans">
                {[
                  ["Objetivo", p.objetivo],
                  ["Formato", p.formato],
                  ["Período", p.dias],
                  ["Alcance est.", p.alcance],
                  ["Leads est.", p.leads],
                  ["CPL est.", p.cpl],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-[#F0EBE0] pb-1">
                    <span className="text-[#9A8050]">{k}</span>
                    <span className="text-[#1C2B1A] font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audiencias segmentadas */}
      <div>
        <h3 className="text-sm font-sans tracking-[0.25em] uppercase text-[#5C4A2A] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#C9B99A]" />3 Audiencias Objetivo<span className="flex-1 h-px bg-[#C9B99A]" />
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {AUDIENCIAS.map(a => (
            <div key={a.nombre} className="border border-[#E0D8C8]" style={{ background: a.bg }}>
              <div className="px-4 pt-4 pb-3 border-b border-[#E0D8C8]" style={{ borderColor: `${a.color}30` }}>
                <p className="text-xl mb-1">{a.emoji}</p>
                <p className="font-sans font-semibold text-sm" style={{ color: a.color }}>{a.nombre}</p>
                <p className="text-xs text-[#7A6A4A] font-sans">{a.edad} · {a.genero}</p>
              </div>
              <div className="p-4 space-y-2 text-xs font-sans">
                <div>
                  <span className="text-[#9A8050] uppercase tracking-wide">Geo: </span>
                  <span className="text-[#1C2B1A]">{a.geo}</span>
                </div>
                <div>
                  <span className="text-[#9A8050] uppercase tracking-wide">Ingresos: </span>
                  <span className="text-[#1C2B1A]">{a.ingreso}</span>
                </div>
                <div>
                  <p className="text-[#9A8050] uppercase tracking-wide mb-1">Intereses:</p>
                  <div className="flex flex-wrap gap-1">
                    {a.intereses.map(i => (
                      <span key={i} className="bg-white border border-[#C9B99A] px-2 py-0.5 text-[10px] text-[#5C4A2A]">{i}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[#9A8050] uppercase tracking-wide">Comportamiento: </span>
                  <span className="text-[#5C4A2A]">{a.comportamiento}</span>
                </div>
                <div className="border-t border-[#C9B99A] pt-2 mt-2 flex justify-between">
                  <div>
                    <p className="text-[#9A8050] uppercase tracking-wide">Presupuesto asignado</p>
                    <p className="font-bold text-sm" style={{ color: a.color }}>{a.presupuesto}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#9A8050] uppercase tracking-wide">Meta</p>
                    <p className="font-semibold text-[#1C2B1A]">{a.meta}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cronograma de encendido */}
      <div>
        <h3 className="text-sm font-sans tracking-[0.25em] uppercase text-[#5C4A2A] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#C9B99A]" />Cronograma de Encendido de Campañas<span className="flex-1 h-px bg-[#C9B99A]" />
        </h3>
        <div className="border border-[#C9B99A] overflow-hidden">
          <table className="w-full text-xs font-sans">
            <thead>
              <tr className="bg-[#1C2B1A] text-[#D4AF6A]">
                {["Fecha", "Acción", "Plataforma", "Presupuesto / día", "Tipo"].map(h => (
                  <th key={h} className="px-3 py-3 text-left tracking-wider uppercase text-xs font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CRONOGRAMA.map((r, i) => (
                <tr key={i} className={`border-b border-[#E8E0D0] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}`}>
                  <td className="px-3 py-3 font-semibold text-[#1C2B1A] whitespace-nowrap">{r.fecha}</td>
                  <td className="px-3 py-3 text-[#5C4A2A] max-w-[240px] leading-snug">{r.accion}</td>
                  <td className="px-3 py-3 text-[#1C2B1A] whitespace-nowrap">{r.plataforma}</td>
                  <td className="px-3 py-3 text-[#1C2B1A] whitespace-nowrap font-medium">{r.presupuesto}</td>
                  <td className="px-3 py-3">
                    <span
                      className="px-2 py-0.5 text-white text-xs font-semibold"
                      style={{ background: TIPO_COLORS[r.tipo] ?? "#666" }}
                    >
                      {r.tipo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
