import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const listGalleryEl = galleryItems.map(image =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img 
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                
            />
        </a>
    </div>`).join('');

galleryEl.insertAdjacentHTML("beforeend", listGalleryEl);

galleryEl.addEventListener('click', evt => {
    evt.preventDefault()
    
    const eventTarget = evt.target

    if (eventTarget.nodeName !== "IMG") {
        return
    };

    openModal(eventTarget);
    });

function openModal(event) {
    const instance = basicLightbox.create(`
    <img src="${event.dataset.source}" width="800" height="600">
`)
    instance.show()
};

console.log(galleryItems);
