/* TAB SWITCHING */
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.sidebar nav a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const sectionId = link.dataset.section;
    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.toggle('active', sec.id === sectionId);
    });

    // if user navigates to home, ensure hero slider works immediately
  });
});

/* HERO SLIDER */
let heroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-slider .slider-item');
if (heroSlides.length) {
  setInterval(() => {
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
  }, 5000);
}

/* PRODUCT CAROUSEL (single card view) */
let currentProduct = 0;
const productCards = Array.from(document.querySelectorAll('.product-card'));
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showProduct(index) {
  productCards.forEach((card, i) => card.classList.toggle('active', i === index));
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentProduct = (currentProduct - 1 + productCards.length) % productCards.length;
    showProduct(currentProduct);
  });
  nextBtn.addEventListener('click', () => {
    currentProduct = (currentProduct + 1) % productCards.length;
    showProduct(currentProduct);
  });
  // initial
  showProduct(currentProduct);
}

/* POPUP HANDLING */
const popup = document.getElementById('enquiryPopup');
const popupProductInput = document.getElementById('popupProduct');

function openPopup(productName = '') {
  if (popupProductInput) popupProductInput.value = productName;
  popup.style.display = 'flex';
  popup.setAttribute('aria-hidden','false');
}

function closePopup() {
  popup.style.display = 'none';
  popup.setAttribute('aria-hidden','true');
}

/* Close popup when clicking outside content */
popup && popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

/* Quick enquiry form handling (demo) */
const quickForm = document.getElementById('quickEnquiryForm');
quickForm && quickForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your enquiry has been noted. We will contact you soon.');
  quickForm.reset();
});

/* OPTIONAL: Pre-fill product name when Know More clicked (already set in openPopup) */

function openPopup(productName = "") {
  const popup = document.getElementById("enquiryPopup");
  const productInput = document.getElementById("popupProduct");
  
  if (productInput) {
    productInput.value = productName; // set product name
  }
  
  popup.classList.add("active");
}

function closePopup() {
  document.getElementById("enquiryPopup").classList.remove("active");
}

// Close popup if clicking outside content
window.addEventListener("click", function (event) {
  const popup = document.getElementById("enquiryPopup");
  if (event.target === popup) {
    closePopup();
  }
});

