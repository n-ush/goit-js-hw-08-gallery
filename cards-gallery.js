import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const cardsGrid = createGalleryGrid(galleryItems);

function createGalleryGrid(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join(" ");
}

galleryList.insertAdjacentHTML("beforeend", cardsGrid);

const imageOriginal = document.querySelector("ul.js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const btnClose = document.querySelector(".lightbox__button");
const overlayRef = document.querySelector(".lightbox__overlay");

imageOriginal.addEventListener("click", openOriginalImage);
modalRef.addEventListener("click", openOriginalImage);
btnClose.addEventListener("click", closeModal);
overlayRef.addEventListener("click", closeModal);

function openOriginalImage(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const imgOriginal = event.target.dataset.source;
  const altOriginal = event.target.alt;
  modalRef.classList.add("is-open");
  modalImg.setAttribute("src", imgOriginal);
  modalImg.setAttribute("alt", altOriginal);
}

function closeModal(event) {
  if (event.target.nodeName === "BUTTON" || event.target !== modalRef) {
    modalRef.classList.remove("is-open");
    modalImg.src = "";
  }
}
