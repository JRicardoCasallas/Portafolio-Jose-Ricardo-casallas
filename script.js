/* ===============================
   SCRIPT PRINCIPAL - Hoja de Vida
   =============================== */

/* ====== LIGHTBOX para Certificados ====== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");
const downloadBtn = document.getElementById("download-btn");

const cerrar = document.querySelector(".cerrar");
const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const certificados = document.querySelectorAll(".certificado img");

let currentIndex = 0;

// Abrir lightbox con animación
certificados.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    actualizarLightbox();
    lightbox.classList.add("show"); // fade-in
  });
});

// Cerrar lightbox con animación
cerrar.addEventListener("click", () => {
  lightbox.classList.remove("show"); // fade-out
  setTimeout(() => (lightbox.style.display = "none"), 300);
});

// Botón anterior
anterior.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + certificados.length) % certificados.length;
  actualizarLightbox();
});

// Botón siguiente
siguiente.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % certificados.length;
  actualizarLightbox();
});

// Actualizar contenido
function actualizarLightbox() {
  const img = certificados[currentIndex];
  lightboxImg.src = img.src;
  caption.textContent = img.alt;
  downloadBtn.href = img.dataset.pdf;
  lightbox.style.display = "flex"; // mostrar siempre antes de animar
}

/* ====== Cerrar con tecla ESC ====== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("show");
    setTimeout(() => (lightbox.style.display = "none"), 300);
  }
});

/* ====== NAVBAR: resaltar enlace activo ====== */
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
