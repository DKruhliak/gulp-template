new Swiper ('.slider-images',{

   //додаємо стрілки,авляти свої елементи
   navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   //НАВІГАЦІЯ, ПОТОЧНЕ ПОЛОЖЕННЯ
   pagination:{
      el:'.swiper-pagination',

      
      // //БУЛЕТИ  (кружечки)!!!!!!
      // type: 'bullets',

      // //клікабельні булети(можна клікати для навігації)
      // clickable: true,

      // //динамічні булети(активний більший  - інші менші)
      // dynamicBullets: true,

      // //кастомні булети, нумеровані (className, стандартний клас по замовчуваню)
      // renderBullet: function (index, className) {
      //    return  '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
      
      //ФРАКЦІЯ  (1/6)!!!!!!!
      type: 'fraction',
      //кастомні фракції

      renderFraction: function (currentClass, totalClass){
         return `Фото <span class = "` + currentClass + ` "> </span>` + 
         ' із ' + 
         `<span class = " ` + totalClass + `" + </span>`
      },

      //   //ПРОГРЕСБАР (лінія) (не працює) !!!!!!!
      // type: 'progressbar',
   },

   //СКРОЛ
   scrollbar: {
      el: '.swiper-scrollbar',
      
   //можливілть перетаскувати
   draggable: true,
   },


   // НАЛАШТУВАННЯ TOUCH

   //вкл/викл на ПК
   simulateTouch: true,

   //курсор перетаскування для ПК
   grabCursor: true,

   //переключення по кліку на слайд для ПК
   // slideToClickedSlide: true,
   
   //чутливість свайпу(для того щоб потрібно було меньше зусиль то значення треба збільшити)
   // touchRatio: 1,

   //кут спрацювання свайпу
   // touchAngle: 45,


   //НАВІГАЦІЯ ПО ХЕШУ
   hashNavigation: {

      //відслідкувати стан
      watchState: true,

   },


   //КЕРУВАННЯ КЛАВІАТУРОЮ
   keyboard: {
      //вкл/викл
      enabled: true,

      //включити лише тоді коли слайдер в межах вьюпорта, коли його видно
      onlyInViewport: true,

      //вкл/викл кнопками pageUpDown
      pageUpDown: true,
   },

   //КЕРУВАННЯ КОЛЕСОМ МИШІ
   mousewheel: {

      //чуттевість 
      sensitivity: 1,

      //Клас обєкту на якому буде спрацьовувати подія прокрутка, якщо не вказато то буде відразу на всіх 
      eventsTarget: ".slider-images"
   },

   //АВТОВИСОТА
   // autoHeight: true,

   //КІЛЬКІСТЬ СЛАЙДІВ ДЛЯ ПОКАЗУ (можна не цілі типу 2.2)!!!!!!!!!
   slidesPerView: 3,

   //ВІДКЛЮЧЕННЯ ФУНКЦІОНАЛУ ЯКЩО СЛАЙДІВ МЕНЬШЕ НІЖ ПОТРІБНО
   // watchOverflof: true,

   //ВІДСТУПИ МІЖ СЛАЙДАМИ!!!!!!
   spaceBetween: 30,

   //КІЛЬКІСТЬ ПРОЛИТУЄМИХ СЛАЙДІВ
   // slisedPerGroup: 3,

   //АКТИВНИЙ СЛАЙД ПО ЦЕНТРУ!!!!!!!!!!!!!!!!!!!!!!!!!
   // centeredSlides: true,


   //МУЛЬТИРЯДНІСТЬ
   // slidesPerColumn: 2,

   //БЕЗКІНЕЧНИЙ СЛАЙДЕР!!!!!!!!
   // loop: true,

   //ВІЛЬНИЙ РЕЖИМ СЛІЙДЕРА
   // freeMode: true,

   //АВТОПРОКРУТКА!!!!!!!!!!!!!!
   // autoplay: {
   //    //пауза між прокрутками
   //    delay: 1000,
   //    //закінчити на останньому 
   //    stopOnLastSlide: false,
   //    //вимкнути після ручної прокрутки
   //    disableOnInteraction: false,
   // },

   //ШВИДКІСТЬ ПРОКРУТКИ
   speed: 800,

   //ВЕРТИКАЛЬНИЙ СЛАЙДЕР
   // direction: 'vertical',

   //ЕФЕКТИ ПЕРЕМАННЯ СЛАЙДІВ (при показі одного слайда)
   // Листання
   effect: 'slide',

   //Зміна прозорості
   // effect: 'fade',

   // fadeEffect: {
   //    //паралельна зміна прозорості
   //    crossFade: true
   // },

   //ЕФЕКТ ПЕРЕМАННЯ СЛАЙДІВ (при показі одного слайда)
   //Переворот
   // effect: 'flip',
   // flipEffect: {
   //       //Тінь
   //       slideShadows: true,
   //       //Показ тільки активного слайда
   //       limitRitation: true,
   // },

   //ЕФЕКТ ПЕРЕМАННЯ СЛАЙДІВ
   //Куб
   // effect: 'cube',

   // cubeEffect: {
   //    //налаштування тіні
   //    slideShadows: true,
   //    shadow: true,
   //    shadowOffset: 20,
   //    shadowScale: 0.95,
   // },

   //ЕФЕКТ ПЕРЕМАННЯ СЛАЙДІВ
   // effect: 'coverflow',

   // coverflowEffect: {

   //    rotate: 20,

   //    stretch: 100,

   //    slideShadows: true,

   // },

   // БРЕЙК ПОЙНТИ (АДАПТИВ) !!!!!!!!!!!!!!!!!!!!!!!!!!!!
   //ширина екрану, можна також інші параметри додавати
   // breakpoints: {
   //    320: {
   //       slidesPerView: 1,

   //    },
   //    480: {
   //       slidesPerView: 2,

   //    },
   //    992: {
   //       slidesPerView: 3,

   //    }
   // },

   //співвідношення сторін
   // breakpoints: {
   //    '@0.75': {
   //       slidesPerView: 2,

   //    },
   //    '@1.00': {
   //       slidesPerView: 2,

   //    },
   //    '@1.50': {
   //       slidesPerView: 3,

   //    }
   // },

   //Відключити попередню загрузку
   //  preloadImages: false,
   //LAZY LOADING!!!!!!!!!!!!!!!!!!!!!!!

   // lazy:{
   //    //підгружати на старті переключення слайду
   //    loadOnTransitionStart: false,

   //    //підгружати попередній і наступний сайд
   //    loadPrevNext: false,

   // },
   //    //слідкувати за видимимим слайдами
   // watchSlidesProgress: true,
   //    //додаваня класу видимим слайдам
   // watchSlidesVidibility: true,

   //МІНІАТЮРИ ПРЕВЬЮ!!!!!!!!!!!!!!
 
//    thumbs: {

//   //свайпер з мініатюрою та його налаштування
//       swiper: {
//          el: '.slider-mini-images',
//          slidesPerView: 5,
//       }
//    }

//ОНОВЛЕННЯ СЛАЙДЕРА
//при змінах у елементів слайдера
   observer: true,
//при змінах у родительських елементах слайдера
   observeParents: true,
//при змінах у дочірніх елементах слайдера   
   observeSlideCverthildren: true,

});

// СЛАЙДЕР ПАРАЛАКС
const parallaxsSlider = new Swiper('.parallax-slider-images',{
   navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   speed:2000,
   parallax: true,

   loop: true,

   autoplay: {
      delay: 1000,
      //закінчити на останньому 
      stopOnLastSlide: false,
      //вимкнути після ручної прокрутки
      disableOnInteraction: false,
   },
})