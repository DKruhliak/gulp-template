//Отримуємо форму
// const mainForm = document.forms.main;
// const footerForm = document.forms.footer;



//Прибираємо/додаємо значення плейсхолдер та класи, 
export function placeholderNone(){
const allForms = document.querySelectorAll('form');

allForms.forEach((thisForm)=>{
   let placeholderValue;   
   thisForm.addEventListener('focusin', function(e){
      if(e.target.closest('input') || e.target.closest('textarea')){
      placeholderValue = e.target.placeholder;
      e.target.placeholder = '';
      e.target.classList.add('_form-focus');
      e.target.parentElement.classList.add('_form-focus');
      e.target.parentElement.classList.remove('_error');
      e.target.classList.remove('_error');
      }  
   }) 

   thisForm.addEventListener('focusout', function(e){
   if(e.target.closest('input') || e.target.closest('textarea')){
      e.target.placeholder = placeholderValue;
      e.target.classList.remove('_form-focus');
      e.target.parentElement.classList.remove('_form-focus');
      }  
   })})

}


// Валідація форм
export function formValidate (){
   const allForms = document.querySelectorAll('form');

//Для обовязкових інпутів додаємо атрбут - data-required  
//Для полів де потрібна перевірка емейлу - data-email
//Приклад <input name="nameInput" type="text" data-required data-email />

   allForms.forEach((thisForm)=>{
      thisForm.addEventListener('submit', function(e){
         //Атрибут з усіма обовязковими полями потім додаємо їх в HTML до потрібних форм
         let formReq = thisForm.querySelectorAll('[data-required]')
         let err = 0;
   
         formReq.forEach((form)=>{
            //Cпочатку видаємо клас 
            formRemoveError(form)
            //Cтворюємо перевірку E-mail // додати клас _email до форми в HTML !!!!
            if(form.closest('[data-email]')){
               if(emailTest(form)){
                  formAddError(form)
                  err++;
               }
               //Робимо перевірку checkbox
            } else if (form.getAttribute('type') === 'checkbox' && form.checked === false){
                  formAddError(form)
                  err++;
            } else {
               if(form.value === ''){
                  formAddError(form)
                  err++;
               }
            }
         })
         if(err > 0){
            e.preventDefault();}
      })
   })

   // Функції додавання та видалення класу '_error' для input
   function formAddError (input){
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError (input){
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
   //функція тесту E-mail
   function emailTest (input){
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
   }
}




















// //Отримуємо елемнети форми
// const mainFormInput = mainForm.nameInput;
// //Родитель елемента
// const inputPerent = mainFormInput.parentElement;

// //Елемент повідомлення про помилку
// const infoForm = document.createElement('div')

// //Вставляємо елемент в середину родителя
// inputPerent.append(infoForm)

// mainFormInput.addEventListener('click', function(){
//    mainFormInput.placeholder = ''
// })








// // Робота із полями форми. Додавання класів, робота з placeholder


// // Валідація форм













// mainForm.addEventListener('submit', function(event){
//    if (mainFormInput.value.length === 0) {
//       infoForm.innerHTML = 'Заповність поле' 
//       infoForm.style.display = ''
//       event.preventDefault()
//       return
//    }
//    if (mainFormInput.value.length < 6) {
//       infoForm.innerHTML = 'Мінімальна кіл-сть символів 6' 
//       infoForm.style.display = ''
//       event.preventDefault()
//    }

// })


   
   


// mainFormInput.addEventListener('focus', function(event){
//    if (mainFormInput.nextElementSibling) {
//       mainFormInput.nextElementSibling.remove()
//    }
   




// mainFormInput.addEventListener('paste', function(event) {
//    console.log('вставка заборонена')
//    event.preventDefault()
// })






// const mainFormTextares = mainForm.nameTextarea;
// const textAreaLength = mainFormTextares.getAttribute('maxlength')

// mainFormTextares.insertAdjacentHTML ('afterend', `<div class ="infoString">Кількість символів <span></span> </div>`)

// const maxLength = document.querySelector('.infoString span')
// maxLength.innerHTML = textAreaLength


// mainFormTextares.addEventListener('input', function(){
   
//    let length = textAreaLength - mainFormTextares.value.length;
//    maxLength.innerHTML = length
// })

