import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${item.preview}">
        <img src="${item.preview}" class="gallery__image" data-source="${item.original}" alt="${item.description}">
      </a>
    </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImegeClick);

function onImegeClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width='800'>`
  );
  instance.show();

  console.log(e);
}
