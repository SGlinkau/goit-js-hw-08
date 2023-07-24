import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";

const img = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

img.insertAdjacentHTML("beforeend", markup);

img.addEventListener("click", lightBoxModal);

function lightBoxModal(e) {
  e.preventDefault();
  const target = e.target;
  const image = target.dataset.source;
  if (e.target.nodeName !== "a.gallery__link") {
    const modal = basicLightbox.create(
      `
        <img width="1400" height="900" src="${image}">
	`
    );
    modal.show();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.close();
    });
  }
}