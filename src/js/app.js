import gameField from './gameField';
import imageGoblin from '../img/goblin.png';

function addImage(source, description) {
  const image = document.createElement('img');
  image.src = source;
  image.alt = description;
  return image;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.body.appendChild(gameField.generate());

const img = addImage(imageGoblin, 'goblin');

const fieldCells = [...document.querySelectorAll('.field-cell')];

function checkRandomIndex() {
  const prevIndex = fieldCells.findIndex((el) => el.querySelector('img'));
  const randomIndex = getRandomInt(15);
  return randomIndex !== prevIndex ? randomIndex : checkRandomIndex();
}

setInterval(() => {
  fieldCells[checkRandomIndex()].appendChild(img);
}, 1100);
