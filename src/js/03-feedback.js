import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};

const formEl = document.querySelector('.feedback-form');


fillingFormSubmit();

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
//   Object.keys(formData).forEach(el => delete formData[el]);
console.log(formData);
}

formEl.addEventListener('input', throttle(handleInputValue, 500));

function handleInputValue(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    // let inputValue = localStorage.getItem(LOCALSTORAGE_KEY);
    // inputValue = inputValue ? JSON.parse(inputValue) : {};
    // inputValue[evt.target.name] = evt.target.value;
    // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputValue));
}


function fillingFormSubmit() {
    let dataStorage = localStorage.getItem(LOCALSTORAGE_KEY);

   try { 
    if (dataStorage) {
        dataStorage = JSON.parse(dataStorage);
        // console.log(dataStorage);
        Object.entries(dataStorage).forEach(
            ([key, value]) => {
            formData[key] = value;
            formEl[key].value = value}
          ); 
        }
    }
        catch (error) {
console.log(error.name);
console.log(error.message);
    }
    }
