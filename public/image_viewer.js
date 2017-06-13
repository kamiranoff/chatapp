import big from '../assets/beach.jpg';
import big2 from '../assets/girl.jpg';
import small from '../assets/girl-small.jpeg';
import './styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);

const bigImage2 = document.createElement('img');
bigImage2.src = big2;

document.body.appendChild(bigImage2);
