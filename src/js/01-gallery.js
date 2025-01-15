// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//import { sum as fnSum, add } from './gallery-items'
//import * as data from './02-video'

//const sum = 10
//console.log(galleryItems);
//console.log(sum);
//console.log(fnSum(4, 5));
//console.log(add(2, 2));
//console.log(data.add(2, 3));

import value from './02-video'
import { add, sum } from './02-video'

console.log(add(2, 3));
console.log(sum(5, 5));

console.log(value);

const gallery = document.querySelector(".gallery");

//gallery.addEventListener("click", onShowFullImg);

gallery.insertAdjacentHTML("beforeend", createGalarryMarkup(galleryItems));

function createGalarryMarkup(pictures) {
    const markup = pictures
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`;
        })
        .join("");
    return markup;
}

let simpleGallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
simpleGallery.on("changed.simplelightbox", function () {
    document.body.style.backgroundColor = getRandomHexColor()
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

/*
const showFullPic = basicLightbox.create(`<img src="">`, {
    onShow: instance => {
        window.addEventListener("keydown", onCloseImg);
    },
    onClose: instance => {
        window.removeEventListener("keydown", onCloseImg);
    }
})

console.log(basicLightbox.create(`<img src="">`));

function onShowFullImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    showFullPic.element().querySelector("img").src = e.target.dataset.source;
    showFullPic.show()
}

function onCloseImg(e) {
    if (e.code === "Escape") {
        showFullPic.close()
        return
    }
}
*/

/*<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="small-image.jpg" 
      alt="Image description" />
   </a>
</li>
*/

/*
Создание и рендер разметки по массиву данных galleryItems
 и предоставленному шаблону элемента галереи. Используй 
 готовый код из первого задания.
Подключение скрипта и стилей библиотеки используя 
CDN сервис cdnjs. Необходимо добавить ссылки на два файла:
 simple-lightbox.min.js и simple-lightbox.min.css.
Инициализация библиотеки после того как элементы галереи 
созданы и добавлены в ul.gallery. Для этого ознакомься 
с документацией SimpleLightbox - в первую очередь секции 
«Usage» и «Markup».
Посмотри в документации секцию «Options» и добавь 
отображение подписей к изображениям из атрибута alt. 
Пусть подпись будет снизу и появляется через 250 
миллисекунд после открытия изображения.
*/
