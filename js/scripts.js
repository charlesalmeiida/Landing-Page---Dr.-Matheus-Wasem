var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.7,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
})
