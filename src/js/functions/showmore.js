//Для роботи додати
//Для загального контейнера в якому все розміщується [data-show-container]
//Для обєкту в якому знаходиться список [data-show-list = "2"], де "2"-кількість обєктів що показується відразу (можна змінювати)
//Для обєктів [data-show-item]
//Для кнопки "показати ще" [data-show-more ="3"], де "3"-кількість обєктів що дадається (можна змінювати)
//Для кнопки "скинути" [data-show-close]
//Приклад структури внизу !!!!!




export function showMore (){
   //Масив контейнерів
   let showContainers = document.querySelectorAll('[data-show-container]')

   showContainers.forEach((container) =>{

      //Кнопка показати ще, з її значенням (за допомогою + змінюємо ти в число)
      let showMore = container.querySelector('[data-show-more]')
      let showMoreValue = +showMore.dataset.showMore

      //Обєкт список, зі наченням початкової кількості обєктів (за допомогою + змінюємо ти в число)
      let firstList = container.querySelector('[data-show-list]')
      let firstListValue = +firstList.dataset.showList

      //Масив обєктів що виводяться
      let showMoreArrayItems = container.querySelectorAll('[data-show-item]')

      //Виводимо початковий масив
      showMoreArrayItems.forEach((item, index) => {
         //Умови виводу масиву
         if(index < firstListValue){
            //Дії з обєктами що виводяться (можна прописати інші дії)
            item.style.display = 'block'
            } else if (index >= firstListValue){
               //Дії з обєктами що закримаються (можна прописати інші дії)
               item.style.display = 'none'
            }
         })

         //Передаємо початкове значення буферній змінній
         let showListValue = firstListValue

         //Обробник на весь контейнер
      container.addEventListener('click', function(event) {
         if(event.target.closest('button')){

            //Оновлюємо буфер, додаючи до нього значення кнопки "показати ще"!!!!! 
            showListValue = showListValue + showMoreValue
               if(event.target.closest('[data-show-more]')){
                  //Виводимо поточний масив
                  showMoreArrayItems.forEach((item, index) => {
                  //Умови виводу масиву
                  if(index < showListValue){
                     //Дії з обєктами що виводяться (можна прописати інші дії)
                     item.style.display = 'block'
                  } else if (index >= showListValue){
                     //Дії з обєктами що закримаються (можна прописати інші дії)
                     item.style.display = 'none'
                     }
                  })
            } else if (event.target.closest('[data-show-close]')){
               //Оновлюємо буфер до початкового значення при закриванні!!!!!
               showListValue = firstListValue
                  //Виводимо початковий масив
                  showMoreArrayItems.forEach((item, index) => {
                     if(index < firstListValue){
                        //Дії з обєктами що виводяться (можна прописати інші дії)
                        item.style.display = 'block'
                     } else if (index >= firstListValue){
                        //Дії з обєктами що закримаються (можна прописати інші дії)
                        item.style.display = 'none'
                     }
                  })
            } 
         }
      })
   })
}

//П Р И К Л А Д    С Т Р У К Т У Р И 
/* 
<div class="show__container" data-show-container>
   <ul class="show__list" data-show-list="2">
      <li class="show__item" data-show-item>
         <div class="show__item-body">Content</div>
       </li>
       <li class="show__item" data-show-item>
          <div class="show__item-body">Content</div>
       </li>
   </ul>
   <button class="show__button" data-show-more="1">Show More + 1</button>
   <button class="show__button" data-show-close>Close All</button>
</div>
*/

