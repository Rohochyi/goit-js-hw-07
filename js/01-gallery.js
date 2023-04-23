import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${preview}">
          <img src="${preview}" class="gallery__image" data-source="${original}" alt="${description}">
          </a>
        </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImegeClick);

function onImegeClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width='800'>`
  );
  instance.show();
}
