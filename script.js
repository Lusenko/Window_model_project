'use strict';

let buttonModel = document.querySelector('.button-model');
let model = document.querySelector('.modal');
let span = document.querySelector('.close-modal');

buttonModel.addEventListener('click', () => {
   model.style.display = 'block';
});
span.addEventListener('click', () => {
   model.style.display = 'none';
});
const picker = datepicker('.datepicker', {
   onHide: instance => {

   }
})