import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${preview}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
}
const lightbox = new SimpleLightbox(".gallery a");
