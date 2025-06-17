"use strict";

const emailInput = document.querySelector(".cta__input");
const submitButton = document.querySelector(".cta__btn");
const message = document.querySelector(".cta__message");

let timeoutError;

const errorMessage = () => {
  message.innerHTML = `<span>Please provide a valid email adress</span>`;
  message.style.display = "block";
};

const clearMessage = () => {
  message.style.display = "none";
  message.innerHTML = "";
};

const submitForm = (e) => {
  e.preventDefault();
  clearTimeout(timeoutError);
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput.value)) {
    emailInput.value = "";
  } else {
    emailInput.classList.add("cta__input--error");
    emailInput.setAttribute("aria-invalid", "true");
    errorMessage();
    setTimeout(() => {
      emailInput.classList.remove("cta__input--error");
      emailInput.removeAttribute("aria-invalid");
      clearMessage();
    }, 2000);
  }
};

submitButton.addEventListener("click", submitForm);
