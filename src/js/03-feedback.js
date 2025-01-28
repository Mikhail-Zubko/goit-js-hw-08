import { throttle } from 'lodash';

STORAGE_KEY = 'feedback-form';
//const STORAGE_KEY_EMAIL = 'feedback-eml';
//const STORAGE_KEY_MESSAGE = 'feedback-msg';
const parseJson = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formData = {...parseJson};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    //emailarea: document.querySelector('.js-feedback-form input'),
    //textarea: document.querySelector('.js-feedback-form textarea')
}
populateTextarea()

refs.form.addEventListener('submit', onFormSubmit)
//refs.emailarea.addEventListener('input', throttle(onEmailareaInput, 500))
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500))

refs.form.addEventListener('input', throttle(onForm, 500))
    //console.log(e.target.name);
    //console.log(e.target.value);


    //formData[e.target.name] = e.target.value

    //console.log(formData);
    // дальше нужно сохранить в локал сторедж
//})

//populateEmailarea()



function onFormSubmit(evt) {
    evt.preventDefault()

    //console.log('отправляем форму');
    const dataBack = new FormData(evt.currentTarget)
    dataBack.forEach((name, value) => {
        console.log(value, name);
    })
    localStorage.removeItem(STORAGE_KEY)
    evt.currentTarget.reset()
    //localStorage.removeItem(STORAGE_KEY_EMAIL)
    //localStorage.removeItem(STORAGE_KEY_MESSAGE)
}

////////function storagevalue(evt) {
  //  const email = evt.target.value
   // localStorage.setItem(STORAGE_KEY_EMAIL, email)
   // console.log(email)
  //  console.log(localStorage)
/////////}
//function onEmailareaInput(evt) {
//const email = evt.target.value

// localStorage.setItem(STORAGE_KEY_EMAIL, email)
//}

//function onTextareaInput(evt) {
// const message = evt.target.value

//  localStorage.setItem(STORAGE_KEY_MESSAGE, message)
//}


//function populateEmailarea() {
//    const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL)

//    if (savedEmail) {
 //      console.log(savedEmail);
    //    refs.emailarea.value = savedEmail
   // }
//}
function onForm(evt) {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(STORAGE_KEY , JSON.stringify(formData))
}

function populateTextarea() {
    const savedForm = parseJson

    if (savedForm) {
        console.log(savedForm);
        //refs.textarea.value = savedMessage
        Object.entries(savedForm).forEach(([name, value]) => {
            refs.form.elements[name].value = value
        })
    }

}