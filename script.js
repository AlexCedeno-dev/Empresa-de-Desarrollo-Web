    const WHATSAPP_NUMBER = "5210000000000";
    const CLIENT_NAME = "[Nombre del Cliente]";
    const QUOTE_PRICE = "12,500";

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function toggleMobileMenu() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    }

    function closeMobileMenu() {
      document.getElementById('mobile-menu').classList.add('hidden');
    }

    function openWhatsApp() {
      const msg = encodeURIComponent(
        "Hola, vi la propuesta web y me interesa avanzar con el proyecto."
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    }

    function showTab(id) {
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach(content => content.classList.add('hidden'));

      const btns = ['dominio', 'hosting', 'contenido'];
      btns.forEach(btn => {
        const el = document.getElementById('btn-' + btn);
        el.classList.remove('bg-teal-700', 'text-white');
        el.classList.add('bg-slate-50', 'text-slate-600');
      });

      document.getElementById('content-' + id).classList.remove('hidden');

      const activeBtn = document.getElementById('btn-' + id);
      activeBtn.classList.remove('bg-slate-50', 'text-slate-600');
      activeBtn.classList.add('bg-teal-700', 'text-white');
    }

    function initChart() {
      const canvas = document.getElementById('marketChart');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Investigan online', 'No investigan o van directo'],
          datasets: [{
            data: [85, 15],
            backgroundColor: ['#0f766e', '#e2e8f0'],
            borderWidth: 0,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '72%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: "'Inter', sans-serif",
                  size: 13,
                  weight: '600'
                },
                color: '#475569',
                padding: 18
              }
            },
            tooltip: {
              backgroundColor: '#0f172a',
              padding: 12,
              titleFont: {
                family: "'Inter', sans-serif",
                size: 14,
                weight: '700'
              },
              bodyFont: {
                family: "'Inter', sans-serif",
                size: 13
              },
              callbacks: {
                label: function(context) {
                  return ' ' + context.label + ': ' + context.raw + '%';
                }
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1400
          }
        }
      });
    }

    function initReveal() {
      const items = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.12
      });

      items.forEach(item => observer.observe(item));
    }

    function injectDynamicData() {
      const clientEl = document.getElementById('client-name-display');
      const priceEl = document.getElementById('price-display');

      if (clientEl) clientEl.textContent = CLIENT_NAME;
      if (priceEl) priceEl.textContent = QUOTE_PRICE;
    }

    document.addEventListener('DOMContentLoaded', () => {
      injectDynamicData();
      initChart();
      initReveal();
    });