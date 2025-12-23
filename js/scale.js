import { Scale } from './const.js';

const formTag = document.querySelector('#upload-select-image');
const minusTag = formTag.querySelector('.scale__control--smaller');
const plusTag = formTag.querySelector('.scale__control--bigger');
const inputTag = formTag.querySelector('.scale__control--value');
const imageTag = formTag.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const renderScale = () => {
  inputTag.value = `${currentScale}%`;
  imageTag.style.transform = `scale(${currentScale}%)`;
};

minusTag.addEventListener('click', () => {
  currentScale = currentScale - Scale.STEP >= Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  renderScale();
});

plusTag.addEventListener('click', () => {
  currentScale = currentScale + Scale.STEP <= Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  renderScale();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  renderScale();
};

resetScale();
