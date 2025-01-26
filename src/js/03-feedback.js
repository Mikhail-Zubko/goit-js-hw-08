import { throttle } from 'lodash';

const STORAGE_KEY_EMAIL = 'feedback-eml';
const STORAGE_KEY_MESSAGE = 'feedback-msg';

const formData = {};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    //emailarea: document.querySelector('.js-feedback-form input'),
    //textarea: document.querySelector('.js-feedback-form textarea')
}

refs.form.addEventListener('submit', onFormSubmit)
//refs.emailarea.addEventListener('input', throttle(onEmailareaInput, 500))
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500))

refs.form.addEventListener('input', e => {
    //console.log(e.target.name);
    //console.log(e.target.value);

    formData[e.target.name] = e.target.value

    console.log(formData);
    // дальше нужно сохранить в локал сторедж
})

populateEmailarea()
populateTextarea()


function onFormSubmit(evt) {
    evt.preventDefault()

    console.log('отправляем форму');

    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY_EMAIL)
    localStorage.removeItem(STORAGE_KEY_MESSAGE)
}

function formData(evt) {
    const email = evt.target.value
    localStorage.setItem(STORAGE_KEY_EMAIL, email)
}
//function onEmailareaInput(evt) {
//const email = evt.target.value

// localStorage.setItem(STORAGE_KEY_EMAIL, email)
//}

//function onTextareaInput(evt) {
// const message = evt.target.value

//  localStorage.setItem(STORAGE_KEY_MESSAGE, message)
//}


function populateEmailarea() {
    const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL)

    if (savedEmail) {
        console.log(savedEmail);
        refs.emailarea.value = savedEmail
    }
}


function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY_MESSAGE)

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage

    }


}