import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Star, TrendingUp, Search } from "lucide-react";

export function Home() {
  const [activeTab, setActiveTab] = useState<"dominio" | "hosting" | "contenido">("dominio");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola, me interesa tu propuesta web", "_blank");
  };

  const chartData = [
    { name: "Busca online", value: 85, color: "#0d9488" },
    { name: "No busca", value: 15, color: "#e2e8f0" },
  ];

  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 hero-grid pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 shadow-sm mb-6 floating-badge">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-soft"></span>
                Propuesta digital lista para cerrar ventas
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 leading-tight tracking-tight">
                Tu nueva sucursal{" "}
                <span className="gradient-text">abierta 24/7</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Diseñada para que tu negocio se vea profesional, inspire confianza y convierta visitas en mensajes, llamadas y clientes.
              </p>

              <div className="mt-8 space-y-2 text-slate-600">
                <p className="text-sm text-slate-500">Preparado por: Alex Cedeño</p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("por-que")}
                  className="shine bg-teal-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-teal-800 transition shadow-xl hover:-translate-y-0.5 transform"
                >
                  Ver propuesta
                </button>
                <button
                  onClick={openWhatsApp}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:border-teal-300 hover:text-teal-700 transition shadow-sm"
                >
                  Contactar ahora
                </button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-slate-900">+85%</div>
                  <div className="text-xs md:text-sm text-slate-500 mt-1">Investiga online</div>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-slate-900">3</div>
                  <div className="text-xs md:text-sm text-slate-500 mt-1">Semanas estimadas</div>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-slate-900">24/7</div>
                  <div className="text-xs md:text-sm text-slate-500 mt-1">Presencia activa</div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="glass rounded-[2rem] p-5 md:p-7">
                <div className="rounded-[1.5rem] bg-slate-950 overflow-hidden shadow-2xl border border-slate-800">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <div className="ml-3 text-xs text-slate-400">www.tunegocio.com</div>
                  </div>

                  <div className="p-6 md:p-8 bg-gradient-to-br from-white to-slate-50">
                    <div className="bg-gradient-to-r from-teal-700 to-teal-500 rounded-3xl p-6 text-white shadow-lg">
                      <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Sitio premium</p>
                      <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                        Presencia digital que vende por ti
                      </h2>
                      <p className="mt-3 text-white/85">
                        Profesional, rápida, adaptable a celular y lista para captar clientes.
                      </p>
                      <div className="mt-5 inline-flex bg-white text-teal-700 font-bold px-4 py-2 rounded-xl">
                        Contactar por WhatsApp
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-5">
                      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div className="text-sm text-slate-500 mb-1">Credibilidad</div>
                        <div className="font-bold text-slate-900 text-lg">Diseño profesional</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div className="text-sm text-slate-500 mb-1">Conversión</div>
                        <div className="font-bold text-slate-900 text-lg">Formulario + CTA</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div className="text-sm text-slate-500 mb-1">Velocidad</div>
                        <div className="font-bold text-slate-900 text-lg">Carga optimizada</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <div className="text-sm text-slate-500 mb-1">Visibilidad</div>
                        <div className="font-bold text-slate-900 text-lg">SEO básico incluido</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm shadow-sm">Responsive</div>
                  <div className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm shadow-sm">WhatsApp</div>
                  <div className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm shadow-sm">SEO</div>
                  <div className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm shadow-sm">Hosting incluido</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-24 md:space-y-32">
        {/* POR QUE */}
        <section id="por-que" className="scroll-mt-28 reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              1. El Por Qué
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              Estar en internet ya no es opcional
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Una página web profesional te da presencia, credibilidad y un canal de ventas abierto todo el tiempo. No solo te ven mejor: te contactan más.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="glass rounded-[2rem] p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-slate-100 hover:shadow-md transition">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Star size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Credibilidad inmediata</h3>
                    <p className="text-slate-600 mt-1">
                      Un sitio bien hecho transmite confianza desde el primer vistazo. Eso hace que el cliente te tome más en serio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-slate-100 hover:shadow-md transition">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Más mensajes y prospectos</h3>
                    <p className="text-slate-600 mt-1">
                      Integramos botones directos, llamadas a la acción y formularios para convertir visitas en contactos reales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-slate-100 hover:shadow-md transition">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Search size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Visibilidad en Google</h3>
                    <p className="text-slate-600 mt-1">
                      Tu negocio aparece cuando la gente está buscando justo el servicio que tú ofreces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-6 md:p-8">
              <div className="text-center">
                <div className="inline-flex bg-amber-50 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
                  Insight de mercado
                </div>
                <h3 className="text-2xl font-black text-slate-900">Comportamiento del consumidor</h3>
                <p className="text-slate-500 mt-2 mb-6">
                  Porcentaje de personas que investigan online antes de comprar localmente.
                </p>
              </div>

              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg">
                  <span className="text-amber-300">85%</span>
                  busca primero en internet
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REQUERIMIENTOS */}
        <section id="requerimientos" className="scroll-mt-28 reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              2. Requerimientos
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              La analogía de la casa
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Te explico lo necesario de forma sencilla para que sepas exactamente qué se necesita y de qué nos encargamos nosotros.
            </p>
          </div>

          <div className="glass rounded-[2rem] overflow-hidden">
            <div className="grid md:grid-cols-3 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("dominio")}
                className={`py-4 px-5 font-semibold transition ${
                  activeTab === "dominio"
                    ? "bg-teal-700 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                1. Dominio
              </button>
              <button
                onClick={() => setActiveTab("hosting")}
                className={`py-4 px-5 font-semibold transition ${
                  activeTab === "hosting"
                    ? "bg-teal-700 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                2. Hosting
              </button>
              <button
                onClick={() => setActiveTab("contenido")}
                className={`py-4 px-5 font-semibold transition ${
                  activeTab === "contenido"
                    ? "bg-teal-700 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                3. Contenido
              </button>
            </div>

            <div className="p-8 md:p-12 min-h-[320px] flex items-center justify-center">
              {activeTab === "dominio" && (
                <div className="text-center max-w-2xl">
                  <div className="text-6xl mb-6">⌂</div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4">La dirección de tu negocio</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Es el nombre con el que te encontrarán en internet, por ejemplo:{" "}
                    <span className="font-mono bg-slate-100 px-2 py-1 rounded text-teal-700">www.tunegocio.com</span>
                  </p>
                  <div className="inline-flex bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Nosotros lo configuramos por ti
                  </div>
                </div>
              )}

              {activeTab === "hosting" && (
                <div className="text-center max-w-2xl">
                  <div className="text-6xl mb-6">◉</div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4">El terreno donde vive tu web</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Es el servidor donde guardamos tu sitio, imágenes y contenido para que esté visible 24/7.
                  </p>
                  <div className="inline-flex bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Nosotros lo administramos
                  </div>
                </div>
              )}

              {activeTab === "contenido" && (
                <div className="text-center max-w-2xl">
                  <div className="text-6xl mb-6">✦</div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4">La esencia de tu marca</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Aquí entra tu logo, textos, fotos, servicios, historia y cualquier material con el que construiremos la imagen de tu negocio.
                  </p>
                  <div className="inline-flex bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Tú nos compartes este material
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="scroll-mt-28 reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              3. Nuestro Proceso
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              Un proceso claro y sin estrés
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Así llevamos tu proyecto desde la idea hasta la publicación oficial, de forma ordenada y profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="glass rounded-[2rem] p-6 hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg mb-5">1</div>
              <p className="text-sm text-teal-700 font-semibold mb-2">Día 1</p>
              <h3 className="text-xl font-black text-slate-950 mb-3">Descubrimiento</h3>
              <p className="text-slate-600">
                Definimos objetivos, estilo visual, colores, tono y lo que tu negocio necesita comunicar.
              </p>
            </div>

            <div className="glass rounded-[2rem] p-6 hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg mb-5">2</div>
              <p className="text-sm text-teal-700 font-semibold mb-2">Semana 1</p>
              <h3 className="text-xl font-black text-slate-950 mb-3">Diseño y estructura</h3>
              <p className="text-slate-600">
                Te mostramos una propuesta visual del sitio y ajustamos hasta que refleje bien tu marca.
              </p>
            </div>

            <div className="glass rounded-[2rem] p-6 hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg mb-5">3</div>
              <p className="text-sm text-teal-700 font-semibold mb-2">Semana 2</p>
              <h3 className="text-xl font-black text-slate-950 mb-3">Desarrollo</h3>
              <p className="text-slate-600">
                Construimos tu web, optimizamos velocidad, adaptamos a celular y dejamos todo funcional.
              </p>
            </div>

            <div className="glass rounded-[2rem] p-6 hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg mb-5">4</div>
              <p className="text-sm text-teal-700 font-semibold mb-2">Semana 3</p>
              <h3 className="text-xl font-black text-slate-950 mb-3">Lanzamiento</h3>
              <p className="text-slate-600">
                Revisamos los últimos detalles, publicamos tu sitio y lo dejamos listo para recibir clientes.
              </p>
            </div>
          </div>
        </section>

        {/* INVERSION */}
        <section id="inversion" className="scroll-mt-28 reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              4. Inversión y Entregables
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              Transparencia total en tu inversión
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aquí tienes lo que incluye tu paquete y cómo se estructura el pago de forma clara.
            </p>
          </div>

          <div className="glass rounded-[2rem] overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-950">¿Qué incluye tu proyecto?</h3>
                  <div className="inline-flex bg-emerald-50 text-emerald-700 font-semibold px-4 py-2 rounded-full text-sm">
                    Entrega profesional
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-teal-600 text-xl mb-2">✔</div>
                    <h4 className="font-bold text-slate-900 mb-1">Diseño responsivo</h4>
                    <p className="text-slate-600 text-sm">Perfecto en celular, tablet y computadora.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-teal-600 text-xl mb-2">✔</div>
                    <h4 className="font-bold text-slate-900 mb-1">5 secciones clave</h4>
                    <p className="text-slate-600 text-sm">Inicio, nosotros, servicios, galería y contacto.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-teal-600 text-xl mb-2">✔</div>
                    <h4 className="font-bold text-slate-900 mb-1">WhatsApp + formulario</h4>
                    <p className="text-slate-600 text-sm">Canales directos para captar clientes.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-teal-600 text-xl mb-2">✔</div>
                    <h4 className="font-bold text-slate-900 mb-1">Redes sociales</h4>
                    <p className="text-slate-600 text-sm">Integración con tus perfiles y enlaces.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-teal-600 text-xl mb-2">✔</div>
                    <h4 className="font-bold text-slate-900 mb-1">SEO básico</h4>
                    <p className="text-slate-600 text-sm">Optimización inicial para Google.</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                    <div className="text-teal-600 text-xl mb-2">✔</div>
                    <h4 className="font-bold text-slate-900 mb-1">Dominio + hosting</h4>
                    <p className="text-slate-600 text-sm">1 año incluido en el paquete inicial.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-teal-400/10 rounded-full blur-3xl"></div>

                <div className="relative">
                  <div className="text-sm uppercase tracking-[0.22em] text-white/60 font-semibold mb-3">
                    Paquete Web Profesional
                  </div>

                  <div className="text-5xl md:text-6xl font-black leading-none mb-2">
                    $<span>8,500</span>
                  </div>
                  <div className="text-white/60 mb-8">MXN</div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
                      <div className="font-bold text-lg">50% anticipo</div>
                      <div className="text-white/70 text-sm">Para apartar lugar, diseño e infraestructura.</div>
                    </div>
                    <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
                      <div className="font-bold text-lg">50% contra entrega</div>
                      <div className="text-white/70 text-sm">Cuando apruebes la página final.</div>
                    </div>
                  </div>

                  <div className="bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-2xl inline-flex shadow-lg">
                    Propuesta válida por 7 días
                  </div>

                  <p className="text-white/60 text-xs mt-6 leading-relaxed">
                    Mantenimiento: dominio y hosting se renuevan anualmente a partir del segundo año.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="reveal">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-800 via-teal-700 to-slate-900 text-white p-8 md:p-14 shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-300/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-4xl mx-auto text-center">
              <div className="inline-flex bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Siguientes pasos
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-5">
                Si te gusta la propuesta, empezamos hoy
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Solo necesitamos confirmar, recibir el anticipo y reunir tu material para comenzar el diseño de inmediato.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-left mb-10">
                <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-2xl bg-white text-teal-700 font-black flex items-center justify-center mb-4">1</div>
                  <div className="font-bold text-lg mb-1">Confirmación</div>
                  <p className="text-white/75 text-sm">Validamos la propuesta y definimos el arranque.</p>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-2xl bg-white text-teal-700 font-black flex items-center justify-center mb-4">2</div>
                  <div className="font-bold text-lg mb-1">Anticipo</div>
                  <p className="text-white/75 text-sm">Se realiza el 50% para reservar lugar y comenzar.</p>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-2xl bg-white text-teal-700 font-black flex items-center justify-center mb-4">3</div>
                  <div className="font-bold text-lg mb-1">Material</div>
                  <p className="text-white/75 text-sm">Nos compartes logo, fotos y textos para construir tu web.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={openWhatsApp}
                  className="shine bg-amber-400 hover:bg-amber-300 text-slate-950 text-lg font-black py-4 px-8 rounded-2xl transition transform hover:scale-[1.02] shadow-xl"
                >
                  ¡Aceptar propuesta y empezar!
                </button>

                <button
                  onClick={() => scrollToSection("inversion")}
                  className="bg-white/10 hover:bg-white/15 border border-white/15 text-white text-lg font-semibold py-4 px-8 rounded-2xl transition"
                >
                  Ver inversión otra vez
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
