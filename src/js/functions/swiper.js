import Swiper from "swiper/bundle";

export function initSliders() {
  if (document.querySelector(".slider-hero")) {
    new Swiper(".slider-hero", {
      pagination: {
        el: ".slider-hero .slider-hero__dots",
        clickable: true,
      },
      navigation: {
        nextEl: ".slider-main .slider-arrow--next",
        prevEl: ".slider-main .slider-arrow--prev",
      },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      watchOverflof: true,
      speed: 1000,
      loop: true,
      preloadImages: true,
      parallax: true,
      autoplay: {
        delay: 4500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
    });
  }
  if (document.querySelector(".slider-tours")) {
    new Swiper(".slider-tours", {
      pagination: {
        el: ".slider-tours .slider-tours__dots",
        clickable: true,
      },
      navigation: {
        nextEl: ".tours__slider .slider-arrow--next",
        prevEl: ".tours__slider .slider-arrow--prev",
      },
      observer: true,
      observeParents: true,
      watchOverflof: true,
      speed: 1000,
      loop: true,
      preloadImages: true,
      parallax: true,
      autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        1170: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
        1720: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
      },
    });
  }

  //Додаємо далі інші слайдери, якщо вони є на сторінці
}
