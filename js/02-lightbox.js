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
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});

console.log(galleryItems);
