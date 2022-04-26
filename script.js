'use script'

const btnShowModal = document.getElementById('btn-show');
const btnCloseModal = document.getElementById('btn-close');
const ModalContainer = document.getElementById('modal-container');
const overlayContainer =document.getElementById('overlay');


btnShowModal.addEventListener('click',function(){
    ModalContainer.classList.add('show');
    overlayContainer.classList.add('show');

});


btnCloseModal.addEventListener('click',function(){
    ModalContainer.classList.remove('show');
    overlayContainer.classList.remove('show');

});


overlayContainer.addEventListener('click',function(){
    ModalContainer.classList.remove('show');
    overlayContainer.classList.remove('show');

});

