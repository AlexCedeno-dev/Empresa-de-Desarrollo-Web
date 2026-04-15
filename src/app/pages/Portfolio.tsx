import { useState } from "react";
import { ExternalLink, Filter, Sparkles } from "lucide-react";

type ProjectCategory = "all" | "ecommerce" | "corporativo" | "landing" | "otros";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hola, me gustaría iniciar un proyecto web", "_blank");
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Restaurante La Terraza",
      category: "landing",
      description: "Sitio web moderno con menú digital, reservaciones online y galería de platillos. Aumentó reservaciones en 45%.",
      image: "https://images.unsplash.com/photo-1554672407-607cff89b5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzYyMTczMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["WordPress", "Reservaciones", "Responsive"],
    },
    {
      id: 2,
      title: "Tienda Fashion Boutique",
      category: "ecommerce",
      description: "E-commerce completo con pasarela de pago, gestión de inventario y sistema de envíos. +200 ventas mensuales.",
      image: "https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzdG9yZSUyMHdlYnNpdGV8ZW58MXx8fHwxNzc2MjMxMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["E-commerce", "Shopify", "SEO"],
    },
    {
      id: 3,
      title: "Inmobiliaria Premium",
      category: "corporativo",
      description: "Portal inmobiliario con búsqueda avanzada, tours virtuales 360° y sistema de contacto automático.",
      image: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjB3ZWJzaXRlfGVufDF8fHx8MTc3NjIzMTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Database", "CRM Integration"],
    },
    {
      id: 4,
      title: "Gimnasio FitZone",
      category: "landing",
      description: "Landing page con sistema de clases en vivo, membresías online y app móvil complementaria.",
      image: "https://images.unsplash.com/photo-1642052503083-bc49dd433478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzYyMzEyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Landing Page", "Stripe", "Video Streaming"],
    },
    {
      id: 5,
      title: "Estudio Jurídico",
      category: "corporativo",
      description: "Sitio web profesional para bufete de abogados con blog jurídico, chat en vivo y agenda de consultas.",
      image: "https://images.unsplash.com/photo-1642143231828-786fbd515a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGxhdyUyMGZpcm0lMjB3ZWJzaXRlfGVufDF8fHx8MTc3NjIzMTI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["WordPress", "Blog", "Calendly"],
    },
    {
      id: 6,
      title: "Portfolio Creativo",
      category: "otros",
      description: "Portfolio interactivo para diseñador gráfico con galería dinámica, animaciones y formulario de contacto.",
      image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzc2MjMxMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Framer Motion", "UI/UX"],
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: "all" as ProjectCategory, label: "Todos los proyectos" },
    { id: "ecommerce" as ProjectCategory, label: "E-commerce" },
    { id: "corporativo" as ProjectCategory, label: "Corporativo" },
    { id: "landing" as ProjectCategory, label: "Landing Pages" },
    { id: "otros" as ProjectCategory, label: "Otros" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0 hero-grid pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="reveal max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-700 shadow-sm mb-6 floating-badge">
              <Sparkles size={16} className="text-teal-600" />
              Proyectos que generan resultados
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 leading-tight tracking-tight mb-6">
              Mi{" "}
              <span className="gradient-text">Portafolio</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Estos son algunos de los proyectos en los que he trabajado. Cada uno diseñado estratégicamente para cumplir objetivos específicos de negocio.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-16">
        {/* FILTER SECTION */}
        <section className="reveal">
          <div className="glass rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter size={20} className="text-teal-700" />
              <h3 className="font-bold text-slate-900">Filtrar por categoría</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition ${
                    activeFilter === category.id
                      ? "bg-teal-700 text-white shadow-lg"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-teal-300 hover:text-teal-700"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="reveal">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card glass rounded-[2rem] overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-6">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-xl font-semibold flex items-center gap-2">
                      <ExternalLink size={16} />
                      Ver detalles
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-950 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-teal-50 border border-teal-200 text-teal-800 px-3 py-1 rounded-lg text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}
        </section>

        {/* STATS SECTION */}
        <section className="reveal">
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl md:text-4xl font-black text-slate-950 mb-4">
                Resultados que hablan por sí solos
              </h2>
              <p className="text-lg text-slate-600">
                Estos números demuestran el impacto real de un sitio web bien diseñado.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  50+
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Proyectos completados</h4>
                <p className="text-slate-600 text-sm">Sitios web entregados y en producción</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  98%
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Clientes satisfechos</h4>
                <p className="text-slate-600 text-sm">Tasa de satisfacción y recomendación</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  +45%
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Conversión promedio</h4>
                <p className="text-slate-600 text-sm">Aumento en captación de clientes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  24/7
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Soporte continuo</h4>
                <p className="text-slate-600 text-sm">Disponibilidad y mantenimiento</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex bg-teal-50 text-teal-700 font-semibold px-4 py-2 rounded-full text-sm mb-5">
              Testimonios
            </div>
            <h2 className="section-title text-3xl md:text-5xl font-black text-slate-950 mb-5">
              Lo que dicen mis clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-[2rem] p-6">
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Alex entregó exactamente lo que necesitábamos. Nuestras ventas online aumentaron un 60% en los primeros 3 meses."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-900">María González</div>
                <div className="text-sm text-slate-500">Dueña, Fashion Boutique</div>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-6">
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Profesional, creativo y muy responsable. El sitio quedó mejor de lo que imaginé. Totalmente recomendado."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-900">Carlos Ramírez</div>
                <div className="text-sm text-slate-500">Director, Estudio Jurídico</div>
              </div>
            </div>

            <div className="glass rounded-[2rem] p-6">
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Excelente comunicación durante todo el proyecto. El resultado final superó nuestras expectativas."
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-900">Laura Martínez</div>
                <div className="text-sm text-slate-500">Gerente, FitZone Gym</div>
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
              <h2 className="text-3xl md:text-5xl font-black mb-5">
                ¿Tu proyecto será el siguiente?
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Estoy listo para ayudarte a crear un sitio web que impulse tu negocio. Conversemos sobre tu proyecto.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={openWhatsApp}
                  className="shine bg-amber-400 hover:bg-amber-300 text-slate-950 text-lg font-black py-4 px-8 rounded-2xl transition transform hover:scale-[1.02] shadow-xl"
                >
                  Iniciar mi proyecto
                </button>

                <a
                  href="/sobre-mi"
                  className="bg-white/10 hover:bg-white/15 border border-white/15 text-white text-lg font-semibold py-4 px-8 rounded-2xl transition text-center"
                >
                  Conocer más sobre mí
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
