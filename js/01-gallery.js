import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector(`.gallery`);
const markup = createMarkeUp(galleryItems);

galleryImg.innerHTML = createMarkeUp(galleryItems);

function createMarkeUp(galleryItems) {
  const markUp = galleryItems
    .map(({ preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" >
        <img
        src="${preview}"
        data-source="${original}" 
        title="" 
        alt="${description}" 
        class="gallery__image">
      </a> 
    </div>
    `;
  }).join(``);

  return markUp;
};

galleryImg.addEventListener(`click`, onImgClick);

function onImgClick(e) {
  blockStandartAction(e);
  if (e.target.nodeName !== 'IMG') {
    return
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" >
  `);
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      instance.close();
    }
  
  });
}

function blockStandartAction (e) {
  e.preventDefault()
};