// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img
      loading="lazy"
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
// console.log(galleryEl);

new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
