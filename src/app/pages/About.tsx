import { Code, Palette, Zap, Award, Coffee, Lightbulb, MessageCircle, CheckCircle } from "lucide-react";



export function About() {
  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola, me gustaría saber más sobre tus servicios", "_blank");
  };

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "WordPress",
    "UI/UX Design",
    "SEO & Marketing",
    "Responsive Design",
  ];

  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovación",
      description: "Siempre busco las mejores tecnologías y tendencias para crear soluciones modernas.",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Comunicación",
      description: "Mantengo una comunicación clara y constante durante todo el proyecto.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Calidad",
      description: "Cada proyecto lo entrego con los más altos estándares de calidad.",
    },
    {
      icon: <Zap size={32} />,
      title: "Eficiencia",
      description: "Optimizo cada sitio para velocidad y rendimiento excepcional.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 hero-grid pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 shadow-sm mb-6">
                <Coffee size={16} className="text-teal-600" />
                Desarrollador Web & Diseñador
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 leading-tight tracking-tight mb-6">
                Hola, soy{" "}
                <span className="gradient-text">Alex Cedeño</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Especialista en crear páginas web que no solo se ven increíbles, sino que realmente convierten visitas en clientes. Con más de 5 años de experiencia, ayudo a negocios como el tuyo a tener presencia digital profesional.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Mi enfoque combina <strong className="text-slate-900">diseño atractivo</strong>, <strong className="text-slate-900">desarrollo técnico sólido</strong> y <strong className="text-slate-900">estrategia de conversión</strong> para que tu inversión genere resultados reales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="shine bg-teal-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-teal-800 transition shadow-xl"
                >
                  Contactar ahora
                </button>
                <a
                  href="#valores"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:border-teal-300 hover:text-teal-700 transition shadow-sm text-center"
                >
                  Conocer más
                </a>
              </div>
            </div>

            <div className="reveal">
              <div className="glass rounded-[2rem] p-6 overflow-hidden">
                <img
                  src=""
                  alt="Desarrollador trabajando en su laptop"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-24 md:space-y-32">
        {/* SKILLS SECTION */}
        <section className="reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              Tecnologías & Habilidades
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              Herramientas que domino
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Trabajo con las tecnologías más modernas y probadas para garantizar sitios rápidos, seguros y escalables.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-[2rem] p-8 text-center hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-500 text-white flex items-center justify-center mx-auto mb-5">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-3">Desarrollo</h3>
              <p className="text-slate-600 mb-6">
                Código limpio, eficiente y escalable usando las mejores prácticas de la industria.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">React</span>
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">Node.js</span>
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">TypeScript</span>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-8 text-center hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center mx-auto mb-5">
                <Palette size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-3">Diseño UI/UX</h3>
              <p className="text-slate-600 mb-6">
                Interfaces atractivas e intuitivas que mejoran la experiencia del usuario.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">Figma</span>
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">Tailwind</span>
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">Design Systems</span>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-8 text-center hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-500 text-white flex items-center justify-center mx-auto mb-5">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-3">Optimización</h3>
              <p className="text-slate-600 mb-6">
                Sitios ultra-rápidos optimizados para SEO y conversión.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">SEO</span>
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">Performance</span>
                <span className="skill-badge bg-white border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700">Analytics</span>
              </div>
            </div>
          </div>

          <div className="mt-12 glass rounded-[2rem] p-8">
            <h3 className="text-2xl font-black text-slate-950 mb-6 text-center">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-badge bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 px-5 py-3 rounded-xl text-teal-800 font-semibold shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section id="valores" className="reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              Mi Filosofía
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              Valores que me guían
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Estos son los principios que aplico en cada proyecto para asegurar tu éxito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass rounded-[2rem] p-6 hover:-translate-y-1 hover:shadow-2xl transition">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-slate-950 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="reveal">
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex bg-amber-50 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
                  Experiencia
                </div>
                <h2 className="section-title text-3xl md:text-4xl font-black text-slate-950 mb-5">
                  +5 años creando presencia digital
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  He trabajado con docenas de clientes, desde emprendedores individuales hasta empresas consolidadas, ayudándoles a establecer su presencia online y atraer más clientes.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Cada proyecto es único, por eso dedico tiempo a entender tu negocio, tus objetivos y tu audiencia para crear una solución personalizada que genere resultados.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-teal-700 mb-1">50+</div>
                    <div className="text-sm text-slate-600">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-teal-700 mb-1">40+</div>
                    <div className="text-sm text-slate-600">Clientes felices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-teal-700 mb-1">5+</div>
                    <div className="text-sm text-slate-600">Años</div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src=""
                  alt="Desarrollador trabajando en su laptop"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="reveal">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-800 via-teal-700 to-slate-900 text-white p-8 md:p-14 shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-300/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-5">
                ¿Listo para llevar tu negocio al siguiente nivel?
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Conversemos sobre tu proyecto. Te daré una propuesta personalizada sin compromiso.
              </p>

              <button
                onClick={openWhatsApp}
                className="shine bg-amber-400 hover:bg-amber-300 text-slate-950 text-lg font-black py-4 px-8 rounded-2xl transition transform hover:scale-[1.02] shadow-xl"
              >
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
