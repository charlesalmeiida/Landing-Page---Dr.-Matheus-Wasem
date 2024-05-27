AOS.init({
  duration: 1000,
  once: true,
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.7,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3.7,
      spaceBetween: 24,
    },
  },
})

var swiper = new Swiper(".swiper-entregavel", {
  slidesPerView: 3.1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-entregaveis",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3.1,
      spaceBetween: 24,
    },
  },
})

const buttonFaq = document.querySelectorAll(".js-button-faq")

buttonFaq.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active")
  })
})
