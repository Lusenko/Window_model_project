let buttonModal = document.querySelector('.button-modal');
let modal = document.querySelector('.modal');
let firsInput = document.querySelector('.datepicker');
let span = document.querySelector('.close-modal');
let selectBlock = document.querySelector('.select-block');
let select = document.querySelector('.select');
let infoDay = document.querySelector('.info-day');
let infoCar = document.querySelector('.info-car');
let blockWithInfo = document.querySelector('.show-info');

buttonModal.addEventListener('click', () => {
   modal.style.display = 'block';
});
span.onclick = function (){
   modal.style.display = 'none';
}
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
let showDay;
let showCar;
function showInfo(){
    showDay = firsInput.value;
    infoDay.value = showDay;
    showCar = select.value;
    infoCar.value = showCar;
}
select.addEventListener('change', () => {
   if(select.value == 'Audi' || select.value == 'BMW'
   || select.value == 'Ford' || select.value == 'Kia'){
      modal.style.display = 'none';
      blockWithInfo.style.display = 'block';
      showInfo();
   }
})