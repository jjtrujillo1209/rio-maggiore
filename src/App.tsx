import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistroForm from "@/components/RegistroForm";
import EstrategiaLanzamiento from "@/components/EstrategiaLanzamiento";
import ParrillaContenido from "@/components/ParrillaContenido";
import EstudioSegmentacion from "@/components/EstudioSegmentacion";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] font-serif">
      <header className="bg-[#1C2B1A] text-[#D4AF6A] py-6 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-1">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#D4AF6A]" />
            <h1 className="text-3xl tracking-[0.3em] uppercase font-light">
              Río Maggiore
            </h1>
            <div className="w-12 h-px bg-[#D4AF6A]" />
          </div>
          <p className="text-xs tracking-[0.35em] uppercase text-[#9A8050] font-sans mt-1">
            Donde la vida toma otro ritmo · Armenia, Quindío
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="registro" className="w-full">
          <TabsList className="w-full bg-[#E8E0D0] border border-[#C9B99A] rounded-none h-auto p-0 mb-8 grid grid-cols-4">
            {[
              { value: "registro", label: "Registro" },
              { value: "estrategia", label: "Estrategia" },
              { value: "parrilla", label: "Parrilla" },
              { value: "segmentacion", label: "Segmentación" },
            ].map((tab, i) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`rounded-none py-3 px-2 text-xs font-sans tracking-wider uppercase text-[#5C4A2A] ${i < 3 ? "border-r border-[#C9B99A]" : ""} data-[state=active]:bg-[#1C2B1A] data-[state=active]:text-[#D4AF6A] transition-all duration-200`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="registro"><RegistroForm /></TabsContent>
          <TabsContent value="estrategia"><EstrategiaLanzamiento /></TabsContent>
          <TabsContent value="parrilla"><ParrillaContenido /></TabsContent>
          <TabsContent value="segmentacion"><EstudioSegmentacion /></TabsContent>
        </Tabs>
      </div>

      <footer className="bg-[#1C2B1A] text-[#4A6B45] text-center text-xs font-sans tracking-widest uppercase py-4 mt-4">
        © 2026 Río Maggiore · Armenia, Quindío · Lanzamiento 6 de Junio
      </footer>
    </div>
  );
}
