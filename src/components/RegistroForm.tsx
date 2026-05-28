import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PRESUPUESTOS = ["200M – 300M", "300M – 500M", "500M+", "Quisiera consultoría"];
const INMUEBLES = ["Apartamento", "Casa", "Lote", "Inversión"];

export default function RegistroForm() {
  const [form, setForm] = useState({
    nombre: "", whatsapp: "", email: "", ciudad: "",
    inmueble: "", presupuesto: "", exclusivo: false,
  });
  const [enviado, setEnviado] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.whatsapp.trim() || !/^\d{7,15}$/.test(form.whatsapp.replace(/\s/g, "")))
      e.whatsapp = "Ingresa un número válido";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email inválido";
    if (!form.inmueble) e.inmueble = "Selecciona una opción";
    if (!form.presupuesto) e.presupuesto = "Selecciona un rango";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-[#1C2B1A] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#D4AF6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl text-[#1C2B1A] tracking-wider uppercase mb-3">
          ¡Bienvenido a Río Maggiore!
        </h2>
        <p className="text-[#7A6A4A] font-sans text-sm leading-relaxed mb-6">
          Tu registro fue exitoso. En las próximas <strong>24 horas</strong> un asesor se comunicará contigo al WhatsApp que registraste.
        </p>
        <div className="bg-[#1C2B1A] text-[#D4AF6A] rounded-none px-6 py-4 font-sans text-sm tracking-wider">
          📲 También puedes escribirnos directo:<br />
          <span className="font-semibold text-lg mt-1 block">+57 310 000 0000</span>
        </div>
        <button
          onClick={() => { setEnviado(false); setForm({ nombre:"",whatsapp:"",email:"",ciudad:"",inmueble:"",presupuesto:"",exclusivo:false }); }}
          className="mt-6 text-xs text-[#9A8050] underline font-sans tracking-wider"
        >
          Registrar otro contacto
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Hero banner */}
      <div className="bg-[#1C2B1A] px-8 py-10 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-[#D4AF6A]" />
        </div>
        <p className="text-[#9A8050] font-sans text-xs tracking-[0.3em] uppercase mb-2">Preventa exclusiva</p>
        <h2 className="text-[#F5F0E8] text-2xl font-light tracking-wider uppercase leading-snug">
          Sé el primero en<br />
          <span className="text-[#D4AF6A]">descubrir Río Maggiore</span>
        </h2>
        <p className="text-[#7A9670] font-sans text-sm mt-3 leading-relaxed">
          Regístrate y accede a precios de preventa, información exclusiva y una invitación al evento de lanzamiento del <strong className="text-[#D4AF6A]">6 de junio</strong>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 px-2">
        {/* Nombre */}
        <div>
          <Label className="font-sans text-xs tracking-widest uppercase text-[#5C4A2A] mb-2 block">
            Nombre completo *
          </Label>
          <Input
            value={form.nombre}
            onChange={e => setForm({...form, nombre: e.target.value})}
            placeholder="Tu nombre"
            className="rounded-none border-[#C9B99A] bg-white font-sans focus:border-[#1C2B1A] focus:ring-0"
          />
          {errors.nombre && <p className="text-red-600 text-xs mt-1 font-sans">{errors.nombre}</p>}
        </div>

        {/* WhatsApp + Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-sans text-xs tracking-widest uppercase text-[#5C4A2A] mb-2 block">
              WhatsApp *
            </Label>
            <Input
              value={form.whatsapp}
              onChange={e => setForm({...form, whatsapp: e.target.value})}
              placeholder="3XX XXX XXXX"
              className="rounded-none border-[#C9B99A] bg-white font-sans focus:border-[#1C2B1A] focus:ring-0"
            />
            {errors.whatsapp && <p className="text-red-600 text-xs mt-1 font-sans">{errors.whatsapp}</p>}
          </div>
          <div>
            <Label className="font-sans text-xs tracking-widest uppercase text-[#5C4A2A] mb-2 block">
              Email *
            </Label>
            <Input
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              placeholder="tu@email.com"
              className="rounded-none border-[#C9B99A] bg-white font-sans focus:border-[#1C2B1A] focus:ring-0"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1 font-sans">{errors.email}</p>}
          </div>
        </div>

        {/* Ciudad */}
        <div>
          <Label className="font-sans text-xs tracking-widest uppercase text-[#5C4A2A] mb-2 block">
            Ciudad de residencia
          </Label>
          <Input
            value={form.ciudad}
            onChange={e => setForm({...form, ciudad: e.target.value})}
            placeholder="Ej: Armenia, Medellín, Bogotá..."
            className="rounded-none border-[#C9B99A] bg-white font-sans focus:border-[#1C2B1A] focus:ring-0"
          />
        </div>

        {/* Tipo inmueble */}
        <div>
          <Label className="font-sans text-xs tracking-widest uppercase text-[#5C4A2A] mb-3 block">
            Me interesa *
          </Label>
          <div className="grid grid-cols-4 gap-2">
            {INMUEBLES.map(op => (
              <button
                key={op}
                type="button"
                onClick={() => setForm({...form, inmueble: op})}
                className={`py-3 text-xs font-sans tracking-wider uppercase border transition-all ${
                  form.inmueble === op
                    ? "bg-[#1C2B1A] text-[#D4AF6A] border-[#1C2B1A]"
                    : "bg-white text-[#5C4A2A] border-[#C9B99A] hover:border-[#1C2B1A]"
                }`}
              >
                {op}
              </button>
            ))}
          </div>
          {errors.inmueble && <p className="text-red-600 text-xs mt-1 font-sans">{errors.inmueble}</p>}
        </div>

        {/* Presupuesto */}
        <div>
          <Label className="font-sans text-xs tracking-widest uppercase text-[#5C4A2A] mb-3 block">
            Rango de presupuesto *
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {PRESUPUESTOS.map(op => (
              <button
                key={op}
                type="button"
                onClick={() => setForm({...form, presupuesto: op})}
                className={`py-3 px-4 text-xs font-sans tracking-wide border transition-all text-left ${
                  form.presupuesto === op
                    ? "bg-[#1C2B1A] text-[#D4AF6A] border-[#1C2B1A]"
                    : "bg-white text-[#5C4A2A] border-[#C9B99A] hover:border-[#1C2B1A]"
                }`}
              >
                {op}
              </button>
            ))}
          </div>
          {errors.presupuesto && <p className="text-red-600 text-xs mt-1 font-sans">{errors.presupuesto}</p>}
        </div>

        {/* Checkbox exclusivo */}
        <div className="flex items-start gap-3 bg-[#EDE8DC] border border-[#C9B99A] p-4">
          <Checkbox
            id="exclusivo"
            checked={form.exclusivo}
            onCheckedChange={v => setForm({...form, exclusivo: !!v})}
            className="mt-0.5 border-[#9A8050] data-[state=checked]:bg-[#1C2B1A] data-[state=checked]:border-[#1C2B1A]"
          />
          <label htmlFor="exclusivo" className="font-sans text-xs text-[#5C4A2A] leading-relaxed cursor-pointer">
            Quiero recibir <strong>información exclusiva del lanzamiento del 6 de junio</strong> y acceso prioritario a precios de preventa antes de la apertura pública.
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-[#D4AF6A] hover:bg-[#BF9A55] text-[#1C2B1A] rounded-none py-4 text-sm font-sans tracking-[0.2em] uppercase font-semibold transition-all mt-2"
        >
          Quiero ser parte de Río Maggiore
        </Button>

        <p className="text-center text-xs text-[#9A8050] font-sans">
          Tu información es confidencial. No compartimos tus datos con terceros.
        </p>
      </form>
    </div>
  );
}
