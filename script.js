'use strict';

let buttonModal = document.querySelector('.button-modal');
let modal = document.querySelector('.modal');
let span = document.querySelector('.close-modal');
let selectBlock = document.querySelector('.select-block');

buttonModal.addEventListener('click', () => {
   modal.style.display = 'block';
});
span.addEventListener('click', () => {
   modal.style.display = 'none';
});
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
const picker = datepicker('.datepicker', {
   onSelect: (instance, date) => {
      selectBlock.style.display = 'block';
   }
})