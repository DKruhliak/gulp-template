//Для роботи в href="#popup" додати id певного попапа
//Додати атрибут data-popup-link
//Приклад <a href="#popup" class="why__button button" data-popup-link></a>

const popupLinks = document.querySelectorAll('[data-popup-link]')
const body = document.querySelector('body')
const popupLock = document.querySelectorAll('.padding-lock')

const unlock = true

if(popupLinks.length > 0){
   popupLinks.forEach((link)=>{
      link.addEventListener('click',function(event){
         const popupName = link.getAttribute('href').replace('#','');
         const currentPopup = document.getElementById(popupName);
         popupOpen(currentPopup);
         event.preventDefault();
      })
   })
}

const closePopupIcons = document.querySelectorAll('.close-popup')
if(closePopupIcons.length>0){
   closePopupIcons.forEach((icon)=>{
      icon.addEventListener('click',function(event){
         popupClose(icon.closest('.popup'));
         event.preventDefault();
      })
   })
}


function popupOpen(currentPopup){
   const popupActive = document.querySelector('.popup._open')
   if(popupActive){
      popupClose(popupActive, false);
   } 
   else {
      bodyLock();
   }
   currentPopup.classList.add('_open')
   currentPopup.addEventListener('click',function(event){
      if(!event.target.closest('.popup__content')){
         popupClose(event.target.closest('.popup'))
      }
   })
}

function popupClose (currentPopup){
   currentPopup.classList.remove('_open')
   bodyUnLock()
}


function bodyLock (){
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
   console.log(lockPaddingValue)
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('_lock')
}


function bodyUnLock(){
   body.classList.remove('_lock')
   body.style.paddingRight = '';
}


document.addEventListener('keydown', function (e) {
   if(e.which === 27){
      const popupActive = document.querySelector('.popup._open')
         popupClose(popupActive)
   }
})