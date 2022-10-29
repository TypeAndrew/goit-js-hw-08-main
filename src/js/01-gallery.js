import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

class Gallery {

    galleryEl = document.querySelector(".gallery");
    galleryList = ``;

    initGallery() {

        this.galleryEl.classList.add("gallery");

        galleryItems.forEach(element => {

            this.galleryList += `<a class="gallery__item" href="${element.original}">
                                <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
                                </a>`;

        });
        this.galleryEl.innerHTML = this.galleryList;
        let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

    };

    start() {
        this.initGallery();
    };

}

let gallery = new Gallery().start();

//console.log(galleryItems);