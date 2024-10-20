let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

loadFormData();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
}
