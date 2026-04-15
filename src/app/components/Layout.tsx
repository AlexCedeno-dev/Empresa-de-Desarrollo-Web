import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { openWhatsApp } from "../utils/constants";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="glass rounded-2xl px-4 md:px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 text-white flex items-center justify-center font-extrabold shadow-lg">
                PW
              </div>
              <div>
                <div className="font-extrabold text-slate-900 leading-tight">PropuestaWeb</div>
                <div className="text-xs text-slate-500 -mt-0.5">Diseño + estrategia + conversión</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-7 text-sm font-medium">
              <Link
                to="/"
                className={`transition ${
                  isActive("/") ? "text-teal-700" : "text-slate-600 hover:text-teal-700"
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/sobre-mi"
                className={`transition ${
                  isActive("/sobre-mi") ? "text-teal-700" : "text-slate-600 hover:text-teal-700"
                }`}
              >
                Sobre Mí
              </Link>
              <Link
                to="/portafolio"
                className={`transition ${
                  isActive("/portafolio") ? "text-teal-700" : "text-slate-600 hover:text-teal-700"
                }`}
              >
                Portafolio
              </Link>
              <button
                onClick={openWhatsApp}
                className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition"
              >
                Hablemos
              </button>
            </div>

            <button onClick={toggleMobileMenu} className="md:hidden text-slate-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-3 glass rounded-2xl p-4">
              <div className="flex flex-col gap-3 text-sm font-medium">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`text-left transition ${
                    isActive("/") ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  to="/sobre-mi"
                  onClick={closeMobileMenu}
                  className={`text-left transition ${
                    isActive("/sobre-mi") ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                  }`}
                >
                  Sobre Mí
                </Link>
                <Link
                  to="/portafolio"
                  onClick={closeMobileMenu}
                  className={`text-left transition ${
                    isActive("/portafolio") ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                  }`}
                >
                  Portafolio
                </Link>
                <button
                  onClick={openWhatsApp}
                  className="bg-slate-900 text-white px-4 py-3 rounded-xl text-left"
                >
                  Hablemos por WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 PropuestaWeb. Diseño estratégico enfocado en conversión.
          </p>
        </div>
      </footer>

      {/* CTA MOVIL */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 sticky-mobile-cta bg-white/95 backdrop-blur-md border-t border-slate-200 p-3">
        <button
          onClick={openWhatsApp}
          className="w-full bg-teal-700 text-white py-4 rounded-2xl font-bold shadow-lg"
        >
          Contactar por WhatsApp
        </button>
      </div>
    </div>
  );
}