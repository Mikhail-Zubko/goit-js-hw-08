import { throttle } from 'lodash';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    emailarea: document.querySelector('.js-feedback-form input'),
    textarea: document.querySelector('.js-feedback-form textarea')
}

refs.form.addEventListener('submit', onFormSubmit)
refs.emailarea.addEventListener('input', onEmailareaInput)
refs.textarea.addEventListener('input', onTextareaInput)

populateEmailarea()
populateTextarea()


function onFormSubmit(evt) {
    evt.preventDefault()

    console.log('отправляем форму');

    evt.currentTarget.reset()
}

function onEmailareaInput(evt) {
    const email = evt.currentTarget.value

    localStorage.setItem('feedback-eml', email)
}

function onTextareaInput(evt) {
    const message = evt.currentTarget.value

    localStorage.setItem('feedback-msg', message)
}


function populateEmailarea() {
    const savedEmail = localStorage.getItem('feedback-eml')

    if (savedEmail) {
        console.log(savedEmail);
        refs.emailarea.value = savedEmail
    }
}


function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-msg')

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage

    }


}