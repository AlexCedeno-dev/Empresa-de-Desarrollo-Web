// Constantes de la aplicación
export const WHATSAPP_NUMBER = "1234567890"; // Reemplazar con tu número real

export const openWhatsApp = (message: string = "Hola, me interesa tu propuesta web") => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
