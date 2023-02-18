const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('.gallery');

const addImages = images.map(img => {
  const imgToAdd = `<li class="gallery__item"><img src="${img.url}" alt="${img.alt}"></li>`;
  return imgToAdd;
});
galleryRef.insertAdjacentHTML('beforeend', addImages.join(' '));













// .gallery{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   column-gap: 30px;
//   list-style: none;
// }
// .gallery__img{
//   display: block;
//   max-width: 400px;
//   height: 200px;
// }