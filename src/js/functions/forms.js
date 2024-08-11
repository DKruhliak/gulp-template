//Зразок роботи з формою
// import { validateForm } from "./forms.js";
// const form = document.getElementById("form-offer");

// form.addEventListener("submit", (e) => {
//   const submitBtn = form.querySelector('button[type="submit"]');
//   const submitBtnText = submitBtn.innerHTML;

//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData);

//   const formIsValid = validateForm(form);

//   if (formIsValid) {
//     return new Promise((resolve, _) => {
//       submitBtn.innerHTML = "Відправка ...";
//       setTimeout(() => {
//         resolve(data);
//       }, 2000);
//     }).then((res) => {
//       submitBtn.innerHTML = submitBtnText;
//       alert(JSON.stringify(res, null, 2));
//       form.reset();
//     });
//   }
// });

//Отримуємо форму
// const mainForm = document.forms.main;
// const footerForm = document.forms.footer;

//Прибираємо/додаємо значення плейсхолдер та класи,
export function placeholderNone() {
  const allForms = document.querySelectorAll("form");

  allForms.forEach((thisForm) => {
    let placeholderValue;
    thisForm.addEventListener("focusin", function (e) {
      if (e.target.closest("input") || e.target.closest("textarea")) {
        placeholderValue = e.target.placeholder;
        e.target.placeholder = "";
        e.target.classList.add("_form-focus");
        e.target.parentElement.classList.add("_form-focus");
        e.target.parentElement.classList.remove("_error");
        e.target.classList.remove("_error");
      }
    });

    thisForm.addEventListener("focusout", function (e) {
      if (e.target.closest("input") || e.target.closest("textarea")) {
        e.target.placeholder = placeholderValue;
        e.target.classList.remove("_form-focus");
        e.target.parentElement.classList.remove("_form-focus");
      }
    });
  });
}

//Валідація форми
export function validateForm(thisForm) {
  // Функції додавання та видалення класу '_error' для input
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  //функція тесту E-mail
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  //Атрибут з усіма обовязковими полями потім додаємо їх в HTML до потрібних форм
  let formReq = thisForm.querySelectorAll("[data-required]");
  let err = 0;

  formReq.forEach((form) => {
    //Cпочатку видаємо клас
    formRemoveError(form);
    //Cтворюємо перевірку E-mail
    //Додати атрибут data-email до форми в HTML !!!!
    if (form.closest("[data-email]")) {
      if (emailTest(form)) {
        formAddError(form);
        err++;
      }
      //Робимо перевірку checkbox
    } else if (
      form.getAttribute("type") === "checkbox" &&
      form.checked === false
    ) {
      formAddError(form);
      err++;
    } else {
      if (form.value === "") {
        formAddError(form);
        err++;
      }
    }
  });
  if (err > 0) {
    return false;
  } else {
    return true;
  }
}

export function useCustomDropdown() {
  // Полифіл для методу forEach для NodeList
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
    const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );

    // Клік по кнопці. Відкрити/Закрити випадаючий список
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      e.currentTarget.classList.toggle("dropdown__button--active");
    });

    // Вибір елемента списку. Запам’ятати вибране значення. Закрити випадаючий список
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    // Клік за межами випадаючого списку. Закрити випадаючий список
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });

    // Натискання на Tab або Escape. Закрити випадаючий список
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  });
}

//Валіація input укр телефону при введені
export function formatAndValidatePhoneNumber() {
  document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");

      if (value.startsWith("38")) {
        value = value.slice(2);
      }

      if (value.length > 10) {
        value = value.slice(0, 10);
      }

      let formattedValue = "+38 (";
      if (value.length > 0) {
        formattedValue += value.slice(0, 3);
      }
      if (value.length >= 4) {
        formattedValue += ") " + value.slice(3, 6);
      }
      if (value.length >= 7) {
        formattedValue += "-" + value.slice(6, 8);
      }
      if (value.length >= 9) {
        formattedValue += "-" + value.slice(8, 10);
      }

      e.target.value = formattedValue;
    });

    phoneInput.addEventListener("blur", function (e) {
      const pattern = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/;
      if (!pattern.test(e.target.value)) {
        e.target.value = "";
      }
    });
  });
}
