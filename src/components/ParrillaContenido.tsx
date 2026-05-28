import { useState } from "react";

type Post = {
  semana: number;
  fecha: string;
  dia: string;
  red: "Instagram" | "Facebook" | "TikTok";
  formato: string;
  tema: string;
  copy: string;
  hashtags: string;
  fase: "Expectativa" | "Revelación" | "Lanzamiento" | "Post-Launch";
};

const POSTS: Post[] = [
  // SEMANA 1 — 18-24 Mayo (Expectativa)
  { semana: 1, fecha: "19 Mayo", dia: "Lun", red: "Instagram", formato: "Reel", tema: "Teaser #1 – Paisaje misterioso", copy: "Hay lugares que cambian la forma en que ves la vida. Uno de ellos está por llegar al Quindío. 🌿", hashtags: "#Armenia #Quindío #ProntolLega #Inmobiliaria", fase: "Expectativa" },
  { semana: 1, fecha: "21 Mayo", dia: "Mié", red: "TikTok", formato: "Video 15s", tema: "Cinque Terre vibes – Sin contexto", copy: "¿Y si pudieras vivir así... en Colombia? 👁️ Pronto.", hashtags: "#QuindíoLovers #Colombia #SoonColombia", fase: "Expectativa" },
  { semana: 1, fecha: "22 Mayo", dia: "Jue", red: "Facebook", formato: "Post imagen", tema: "Teaser texto: 'Algo llega'", copy: "Armenia, el Quindío y toda la región están a punto de conocer algo diferente. ¿Tienes curiosidad? Deja tu correo.", hashtags: "#Armenia #Quindío #BienesRaíces", fase: "Expectativa" },
  { semana: 1, fecha: "24 Mayo", dia: "Sáb", red: "Instagram", formato: "Carrusel", tema: "Por qué Armenia es el lugar ideal para vivir", copy: "5 razones por las que el Quindío es el destino de vida más envidiado de Colombia 🍃", hashtags: "#VivirEnArmenia #CalidadDeVida #Quindío", fase: "Expectativa" },

  // SEMANA 2 — 25-31 Mayo (Expectativa)
  { semana: 2, fecha: "26 Mayo", dia: "Lun", red: "TikTok", formato: "Reel 20s", tema: "Teaser #2 – 'El nombre tiene historia'", copy: "Su nombre viene de Italia. Su alma, del Quindío. 11 días. ⏳", hashtags: "#Teaser #ProyectoMisterioso #Armenia", fase: "Expectativa" },
  { semana: 2, fecha: "27 Mayo", dia: "Mar", red: "Instagram", formato: "Historia", tema: "Countdown 10 días + formulario link", copy: "10 días para el lanzamiento más esperado de Armenia. ¿Ya te registraste? Link en bio 👆", hashtags: "", fase: "Expectativa" },
  { semana: 2, fecha: "29 Mayo", dia: "Jue", red: "Facebook", formato: "Video", tema: "Testimonios vida en el Quindío", copy: "'Cuando llegué al Quindío, entendí que nunca más podría vivir en una ciudad gris.' — Historia de vida real.", hashtags: "#Quindío #Testimonios #ViveBienColombia", fase: "Expectativa" },
  { semana: 2, fecha: "31 Mayo", dia: "Sáb", red: "Instagram", formato: "Carrusel", tema: "La inversión más inteligente: finca raíz Quindío", copy: "El Quindío valoriza más rápido que Bogotá. Te mostramos los números 📊", hashtags: "#Inversión #FincaRaíz #Armenia", fase: "Expectativa" },

  // SEMANA 3 — 1-7 Junio (Revelación + Lanzamiento)
  { semana: 3, fecha: "2 Jun", dia: "Mar", red: "Instagram", formato: "Reel", tema: "REVEAL: Se llama Río Maggiore", copy: "Su nombre viene de Cinque Terre, Italia. Pero su corazón late en Armenia. 🏡 Bienvenidos a Río Maggiore.", hashtags: "#RíoMaggiore #Armenia #Lanzamiento", fase: "Revelación" },
  { semana: 3, fecha: "3 Jun", dia: "Mié", red: "TikTok", formato: "Video 30s", tema: "Tour virtual por el proyecto", copy: "Esto es lo que compraste cuando no sabías que existía. Río Maggiore, Armenia. 😮", hashtags: "#RíoMaggiore #TourVirtual #Quindío", fase: "Revelación" },
  { semana: 3, fecha: "5 Jun", dia: "Vie", red: "Facebook", formato: "Lead Ad", tema: "Últimas 48h: registro anticipado", copy: "El lanzamiento es mañana. Los que se registren HOY tendrán acceso prioritario y precio especial.", hashtags: "#Preventa #RíoMaggiore #Urgente", fase: "Revelación" },
  { semana: 3, fecha: "6 Jun", dia: "Sáb", red: "Instagram", formato: "Live + Reel", tema: "🔴 LANZAMIENTO EN VIVO", copy: "Hoy es el día. Únete al live y sé testigo del nacimiento de Río Maggiore. 🥂", hashtags: "#RíoMaggiore #Lanzamiento6Junio", fase: "Lanzamiento" },

  // SEMANA 4 — 8-14 Junio (Post-Launch)
  { semana: 4, fecha: "9 Jun", dia: "Lun", red: "Instagram", formato: "Carrusel", tema: "Resumen del evento de lanzamiento", copy: "Así vivimos el lanzamiento de Río Maggiore. Gracias a todos los que hicieron parte de esta noche 🙏", hashtags: "#RíoMaggiore #Lanzamiento #Armenia", fase: "Post-Launch" },
  { semana: 4, fecha: "11 Jun", dia: "Mié", red: "TikTok", formato: "Reel 20s", tema: "Reacciones del evento", copy: "Lo que la gente dijo al ver Río Maggiore por primera vez 😱", hashtags: "#RíoMaggiore #Reacciones", fase: "Post-Launch" },
  { semana: 4, fecha: "12 Jun", dia: "Jue", red: "Facebook", formato: "Post", tema: "Unidades disponibles tras lanzamiento", copy: "Solo quedan X unidades disponibles con el precio de lanzamiento. ¿Sigues esperando? 📞", hashtags: "#RíoMaggiore #Preventa #Quindío", fase: "Post-Launch" },
  { semana: 4, fecha: "14 Jun", dia: "Sáb", red: "Instagram", formato: "Reel", tema: "Lifestyle: mañanas en Río Maggiore", copy: "¿Cómo sería tu domingo en Río Maggiore? ☀️", hashtags: "#RíoMaggiore #Lifestyle #Quindío", fase: "Post-Launch" },

  // SEMANA 5
  { semana: 5, fecha: "16 Jun", dia: "Lun", red: "Instagram", formato: "Carrusel", tema: "Amenidades del proyecto en detalle", copy: "Todo lo que incluye Río Maggiore que no encontrarás en otro proyecto de Armenia 🏊", hashtags: "#RíoMaggiore #Amenidades #Armenia", fase: "Post-Launch" },
  { semana: 5, fecha: "18 Jun", dia: "Mié", red: "TikTok", formato: "Video 30s", tema: "El barrio que rodea Río Maggiore", copy: "¿Dónde queda exactamente? Te mostramos el sector y sus ventajas 📍", hashtags: "#Armenia #Ubicación #RíoMaggiore", fase: "Post-Launch" },
  { semana: 5, fecha: "19 Jun", dia: "Jue", red: "Facebook", formato: "Carrusel", tema: "Comparativa inversión: Armenia vs ciudades principales", copy: "Por el precio de un apartamento en Bogotá tienes esto en Armenia. Los números no mienten 📊", hashtags: "#Inversión #FincaRaíz #Quindío", fase: "Post-Launch" },
  { semana: 5, fecha: "21 Jun", dia: "Sáb", red: "Instagram", formato: "Reel", tema: "Familia feliz — storytelling emocional", copy: "Una familia buscaba un hogar. Encontraron un estilo de vida. Esta es su historia. ❤️", hashtags: "#RíoMaggiore #Familia #Hogar", fase: "Post-Launch" },

  // SEMANA 6
  { semana: 6, fecha: "23 Jun", dia: "Lun", red: "Instagram", formato: "Post", tema: "Avance de obra / renders 3D", copy: "Así luce Río Maggiore en su etapa de avance. La visión se hace realidad 🏗️", hashtags: "#RíoMaggiore #Construcción #Render", fase: "Post-Launch" },
  { semana: 6, fecha: "25 Jun", dia: "Mié", red: "TikTok", formato: "Reel 20s", tema: "FAQ: preguntas frecuentes del proyecto", copy: "¿Cuánto vale? ¿Cuándo se entrega? ¿Qué incluye? Te respondemos todo en 30 segundos ⚡", hashtags: "#RíoMaggiore #FAQ #Armenia", fase: "Post-Launch" },
  { semana: 6, fecha: "26 Jun", dia: "Jue", red: "Facebook", formato: "Post", tema: "Formas de pago y financiación", copy: "Sí, hay crédito hipotecario, leasing y cuotas directas. Te explicamos cómo funciona cada opción 💳", hashtags: "#RíoMaggiore #Financiación #Hipoteca", fase: "Post-Launch" },
  { semana: 6, fecha: "28 Jun", dia: "Sáb", red: "Instagram", formato: "Carrusel", tema: "Top 3: por qué elegir Río Maggiore", copy: "Si estás dudando entre proyectos en Armenia, aquí están las 3 razones que inclinan la balanza 🌿", hashtags: "#RíoMaggiore #Armenia #InvierteQuindío", fase: "Post-Launch" },
];

const FASE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Expectativa":  { bg: "#EBF0E8", text: "#3A5C36", border: "#7AA870" },
  "Revelación":   { bg: "#F5EDD8", text: "#7A5010", border: "#D4AF6A" },
  "Lanzamiento":  { bg: "#1C2B1A", text: "#D4AF6A", border: "#D4AF6A" },
  "Post-Launch":  { bg: "#EEF0F5", text: "#2A3A5C", border: "#7080AA" },
};

const RED_COLORS: Record<string, string> = {
  Instagram: "#C13584",
  Facebook: "#1877F2",
  TikTok: "#000000",
};

export default function ParrillaContenido() {
  const [filterRed, setFilterRed] = useState<string>("Todas");
  const [filterSemana, setFilterSemana] = useState<number>(0);

  const filtered = POSTS.filter(p =>
    (filterRed === "Todas" || p.red === filterRed) &&
    (filterSemana === 0 || p.semana === filterSemana)
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-[#9A8050] mb-1">4 posts por semana</p>
        <h2 className="text-2xl text-[#1C2B1A] tracking-wider uppercase font-light">Parrilla de Contenido</h2>
        <p className="text-sm text-[#7A6A4A] font-sans mt-1">19 Mayo – 28 Junio 2026 · 6 semanas</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex gap-0">
          {["Todas", "Instagram", "Facebook", "TikTok"].map(r => (
            <button
              key={r}
              onClick={() => setFilterRed(r)}
              className={`px-3 py-1.5 text-xs font-sans tracking-wide border border-[#C9B99A] transition-all ${
                filterRed === r
                  ? "bg-[#1C2B1A] text-[#D4AF6A] border-[#1C2B1A]"
                  : "bg-white text-[#5C4A2A] hover:bg-[#F5F0E8]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex gap-0">
          {[{ v: 0, l: "Todas" }, { v: 1, l: "S1" }, { v: 2, l: "S2" }, { v: 3, l: "S3" }, { v: 4, l: "S4" }, { v: 5, l: "S5" }, { v: 6, l: "S6" }].map(s => (
            <button
              key={s.v}
              onClick={() => setFilterSemana(s.v)}
              className={`px-3 py-1.5 text-xs font-sans tracking-wide border border-[#C9B99A] transition-all ${
                filterSemana === s.v
                  ? "bg-[#1C2B1A] text-[#D4AF6A] border-[#1C2B1A]"
                  : "bg-white text-[#5C4A2A] hover:bg-[#F5F0E8]"
              }`}
            >
              {s.l}
            </button>
          ))}
        </div>
        <span className="text-xs text-[#9A8050] font-sans ml-auto">{filtered.length} publicaciones</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-[#C9B99A]">
        <table className="w-full text-xs font-sans">
          <thead>
            <tr className="bg-[#1C2B1A] text-[#D4AF6A]">
              {["Fecha", "Red Social", "Formato", "Tema", "Copy sugerido", "Hashtags", "Fase"].map(h => (
                <th key={h} className="px-3 py-3 text-left tracking-wider uppercase font-medium text-xs whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => {
              const fc = FASE_COLORS[p.fase];
              return (
                <tr key={i} className={`border-b border-[#E8E0D0] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}`}>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span className="font-semibold text-[#1C2B1A]">{p.fecha}</span>
                    <span className="text-[#9A8050] ml-1">{p.dia}</span>
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className="px-2 py-0.5 text-white text-xs font-semibold"
                      style={{ background: RED_COLORS[p.red] }}
                    >
                      {p.red}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-[#5C4A2A] whitespace-nowrap">{p.formato}</td>
                  <td className="px-3 py-3 text-[#1C2B1A] font-medium max-w-[160px]">{p.tema}</td>
                  <td className="px-3 py-3 text-[#5C4A2A] max-w-[220px] leading-snug italic">&ldquo;{p.copy}&rdquo;</td>
                  <td className="px-3 py-3 text-[#7A6A4A] max-w-[160px] text-[10px] leading-snug">{p.hashtags}</td>
                  <td className="px-3 py-3">
                    <span
                      className="px-2 py-0.5 text-xs font-semibold tracking-wide border"
                      style={{ background: fc.bg, color: fc.text, borderColor: fc.border }}
                    >
                      {p.fase}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(FASE_COLORS).map(([fase, c]) => (
          <div key={fase} className="flex items-center gap-2">
            <div className="w-3 h-3 border" style={{ background: c.bg, borderColor: c.border }} />
            <span className="text-xs font-sans text-[#5C4A2A]">{fase}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
