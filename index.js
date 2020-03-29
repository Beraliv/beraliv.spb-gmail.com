const getImages = () => {
  const baseUrl = 'https://images.pexels.com/photos';
  const urlParams = 'auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  const createImage = id => `${baseUrl}/${id}/pexels-photo-${id}.jpeg?${urlParams}`;

  const imageIds = [
    509922,
    1420701,
    1036808,
    1084188,
    1420709
  ];

  const images = imageIds.map(id => createImage(id));
  
  return images;
};

const imageOffLeft = document.getElementsByClassName('image-off-left')[0];
const mainImage = document.getElementsByClassName('main-image')[0];
const imageOffRight = document.getElementsByClassName('image-off-right')[0];

const leftArrow = document.getElementsByClassName('left-arrow')[0];
const rightArrow = document.getElementsByClassName('right-arrow')[0];

const images = getImages();

const setImage = (div, imageUrl) => {
  div.style.backgroundImage = `url(${imageUrl})`;
}

let currentImage = 0;

setImage(mainImage, images[currentImage]);

leftArrow.addEventListener('click', () => {
  currentImage = ((currentImage - 1) + images.length) % images.length;
  setImage(mainImage, images[currentImage]);
});
rightArrow.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  setImage(mainImage, images[currentImage]);
});
