import {Card, popupImage} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './cards.js';

const parameters = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_visible'
};  

const buttonEdit = document.querySelector('.edit-button'),
    popupEdit = document.querySelector('.popup_type_edit'),
    formEdit = document.querySelector('.popup__container_type_edit'),
    buttonClosePopupEdit = document.querySelector('.popup__close-button_type_edit'),
    name = document.querySelector('.profile__name'),
    description = document.querySelector('.profile__description'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputDescription = document.querySelector('.popup__input_type_description'),
    cardsContainer = document.querySelector('.elements__group'),
    buttonAdd = document.querySelector('.add-button'),
    popupAdd = document.querySelector('.popup_type_add'),
    buttonClosePopupAdd = document.querySelector('.popup__close-button_type_add'),
    inputTitle = document.querySelector('.popup__input_type_title'),
    inputLink = document.querySelector('.popup__input_type_link'),
    formAdd = document.querySelector('.popup__container_type_add'),
    buttonClosePopupImage = document.querySelector('.popup__close-button_type_img'),
    cardTemplate = document.querySelector('#card-template').content,
    popupList = document.querySelectorAll('.popup');

initialCards.forEach(function(item) {
    const card = new Card(item, cardTemplate, openPopup);
    card.renderCard(cardsContainer);
})

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
} 

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

function openPopupEdit() {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
    
    const inputEvent = new Event('input');
    inputName.dispatchEvent(inputEvent);
}

function formEditSubmitHandler(evt) {
    evt.preventDefault();   
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    closePopup(popupEdit);
}

function formAddSubmitHandler(evt) {
    evt.preventDefault();
    
    const cardObj = {'name': inputTitle.value, 'link':inputLink.value};
    const card = new Card(cardObj, cardTemplate, openPopup);
    card.renderCard(cardsContainer);
    closePopup(popupAdd);
    formAdd.reset();

    formAdd.querySelector('.popup__submit-button').setAttribute('disabled', true);
    formAdd.querySelector('.popup__submit-button').classList.add('popup__submit-button_invalid');
}

function closeByOverlay(popup) {
    popup.addEventListener('click', (evt) => {
        if(evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    })
} 

popupList.forEach((popupElement) => {
    closeByOverlay(popupElement);
})

buttonEdit.addEventListener('click',openPopupEdit);
formEdit.addEventListener('submit', formEditSubmitHandler);
buttonClosePopupEdit.addEventListener('click', () => {closePopup(popupEdit)});
buttonAdd.addEventListener('click', () => {openPopup(popupAdd)});
formAdd.addEventListener('submit', formAddSubmitHandler);
buttonClosePopupAdd.addEventListener('click', () => {closePopup(popupAdd)});
buttonClosePopupImage.addEventListener('click', () => {closePopup(popupImage)});

const formList = Array.from(document.querySelectorAll(parameters.formSelector));

formList.forEach((formElement) => {
    const formValiator = new FormValidator(parameters, formElement);
    formValiator.enableValidation();
})



