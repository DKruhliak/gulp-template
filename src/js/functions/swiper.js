import Swiper from 'swiper/bundle';

export function initSliders(){

   if(document.querySelector('.slider-main')){
      new Swiper('.slider-main', {
         pagination:{
            el:'.slider-main .contlost-slider-main__dotts',
            clickable: true,
         },
         navigation:{
            nextEl: '.slider-main .slider-arrow--next',
            prevEl: '.slider-main .slider-arrow--prev',
         },
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 32,
         watchOverflof: true,
         speed: 1000,
         loop: true,
         preloadImages: true,
         parallax: true,
      })
   }
   
   //Додаємо далі інші слайдери, якщо вони є на сторінці
}
