// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainet = document.querySelector(".gallery");

function createGallery() {
  return galleryItems
    .map(
      ({ preview, description, original }) =>
        `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `
    )
    .join("");
}

galleryContainet.insertAdjacentHTML("afterbegin", createGallery());

const lightbox = new SimpleLightbox(".gallery__item", {
  animationSpeed: 250,
  loop: true,
  enableKeyboard: true,
  preloading: true,
  docClose: true,
  captionsData: "alt",
});
