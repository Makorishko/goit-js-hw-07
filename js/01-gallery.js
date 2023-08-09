import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const liItems = galleryItems.map(item => {
    const li = `<li>
    <a class="gallery__link" href=${item.original} src=${item.preview}>
    <img class="js-item" src=${item.preview} ${item.description} data-source="${item.original}" width=360>
    </a>
    </li>`;
    return li;
}).join('');

galleryContainer.insertAdjacentHTML("beforeend", liItems);

galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();
  
    if (!event.target.classList.contains('js-item')) {
        return
    }
 
    const url = event.target.dataset.source;
    

const instance = basicLightbox.create(`
    <div class="modal" >
    <img src=${url} width=1200 height=800>;
    
    </div>
`)

instance.show()
});

console.log(basicLightbox);
    
   




  