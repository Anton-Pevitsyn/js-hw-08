import _ from "lodash";
const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  message: document.querySelector(".feedback-form textarea"),
};
onInput();

const formData = {};

function submitForm(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function setLocalStorage(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
refs.form.addEventListener("submit", submitForm);
refs.form.addEventListener("input", _.throttle(setLocalStorage, 250));

function onInput() {
  const getLocalStarag = localStorage.getItem("feedback-form-state");
  const parseObjects = JSON.parse(getLocalStarag);
  console.log(getLocalStarag);
  if (getLocalStarag) {
    refs.email.value = parseObjects.email;
    refs.message.value = parseObjects.message;
  }
}
