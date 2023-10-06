//Паралакс мишкою
export function mouseParallax() {

 //Отримуємо всі контейнери
 const parallaxContainers = document.querySelectorAll('[data-parallax-mouse-container]')
 //Отримуємо всі обєкти анімації
 const parallaxItems = document.querySelectorAll('[data-parallax-item]')

 //Налаштування====================
 //Швидкість в атрибуті data-parallax-container="1", 1 - по замочуванню, чим менше число тим повільніше

 //Значення мзміщення обєкта в атрибуті data-parallax-item="1", 1 - по замовчуванню, чим менше значення тим більше зміщення, "-"зміна направлення

 //Для роботи додати потрібні атрибути до потрібних обєктів==================

 parallaxContainers.forEach(parallaxContainer => {
    
    //Отримуємо значення швидкості з атрибуту
    const speed = parallaxContainer.dataset.parallaxMouseContainer;


    parallaxContainer.addEventListener('mousemove', function (e) {
      
       //Ширина висота блоку
       const currentWidthcontainer = parallaxContainer.offsetWidth;
       const currentHeightcontainer = parallaxContainer.offsetHeight;
 
       //Положення курсора відносно центру (нуля - 0)
       const coordX = e.clientX - currentWidthcontainer / 2;
       const coordY = e.clientY - currentHeightcontainer / 2;
 
       //Відсоток зміщення відносно контейнера
       let coordXprocent = coordX / currentWidthcontainer * 100
       let coordYprocent = coordY / currentHeightcontainer * 100
 
       let positionX = 0;
       let positionY = 0;
       
       //Змінні значення зміни положення обєкта
       const distX = coordXprocent - positionX;
       const distY = coordYprocent - positionY;
 
       //Значення зміщення 
       positionX =  Math.round(positionX + (distX * speed));
       positionY = Math.round(positionY + (distY * speed));
 
       
       parallaxItems.forEach(parallaxItem => {
       
       //Отримуємо значення data-parallax-item кожного обєкта
       let forItem = parallaxItem.dataset.parallaxItem
          
       //Значення зміщення з урахуванням коефіцієнту
       let resultPositionX = positionX / forItem 
       let resultPositionY = positionY / forItem 
 
       parallaxItem.style.cssText = `transform: translate(${resultPositionX}%,${resultPositionY}%);`   
       })
    })

 })

}
  
  

   
