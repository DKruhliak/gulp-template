import { validateForm } from "./forms.js";
const form = document.getElementById("form-offer");

form.addEventListener("submit", (e) => {
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitBtnText = submitBtn.innerHTML;

  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const formIsValid = validateForm(form);

  if (formIsValid) {
    return new Promise((resolve, _) => {
      submitBtn.innerHTML = "Відправка ...";
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((res) => {
      submitBtn.innerHTML = submitBtnText;
      alert(JSON.stringify(res, null, 2));
      form.reset();
    });
  }
});
