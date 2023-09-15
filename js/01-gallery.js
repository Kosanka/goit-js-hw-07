import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');




const galleryItemsMarkup = (arr) =>
    arr.map(
        ({ preview, original, description }) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    )
        .join('');

// console.log(galleryItemsMarkup(galleryItems));
        

const listClickHandler = (e) => {
    // console.log(e);
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;

    //close modal by Esc
    const closeModalByEsc = (e) => {
        if (e.key === 'Escape') {
            modalInstance.close();
        }
    };

    const modalInstance = basicLightbox.create
        (`<img src="${e.target.dataset.source}">`, {
        onShow: (modalInstance) => window.addEventListener('keydown', closeModalByEsc),
		onClose: (modalInstance) => window.removeEventListener('keydown', closeModalByEsc),
        });

    modalInstance.show();

};



galleryListEl.insertAdjacentHTML('beforeend',galleryItemsMarkup(galleryItems));
galleryListEl.addEventListener('click', listClickHandler);