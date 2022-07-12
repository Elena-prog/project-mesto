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
    popupImage = document.querySelector('.popup_type_img');
    fullImage = document.querySelector('.popup__image'),
    buttonClosePopupImage = document.querySelector('.popup__close-button_type_img'),
    popupSubtitle = document.querySelector('.popup__subtitle'),
    cardTemplate = document.querySelector('#card-template').content,
    popupList = document.querySelectorAll('.popup');

function renderCard (cardData, container) {
    const card = createCard(cardData);
    container.prepend(card);
}

function openImage (cardData) {
    fullImage.setAttribute('src', cardData.link);
    fullImage.setAttribute('alt', cardData.name);
    popupSubtitle.textContent = cardData.name;
    openPopup(popupImage);
}

function handleLikeClick (evt) {
    evt.target.classList.toggle('heart_active');
}

function handelDeleteCard (evt) {
    evt.target.closest('.element').remove();
}

function createCard (cardData) {
    const card = cardTemplate.querySelector('.element').cloneNode(true),
        cardName = card.querySelector('.element__title'),
        cardImage = card.querySelector('.element__image'),
        buttonLike = card.querySelector('.heart'),
        buttonDelete = card.querySelector('.element__button-delete');

    cardName.textContent = cardData.name;
    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);

    cardImage.addEventListener('click', function() {openImage(cardData)});
    buttonLike.addEventListener('click', handleLikeClick);
    buttonDelete.addEventListener('click', handelDeleteCard);

    return card;
}

initialCards.forEach(function(item){
    renderCard(item, cardsContainer);
})

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
} 

function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

function openPopupEdit () {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
    
    const inputEvent = new Event('input');
    inputName.dispatchEvent(inputEvent);
}

function formEditSubmitHandler (evt) {
    evt.preventDefault();   
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    closePopup(popupEdit);
}

function formAddSubmitHandler (evt) {
    evt.preventDefault();
    const cardObj = {'name': inputTitle.value, 'link':inputLink.value};
    renderCard(cardObj, cardsContainer);
    closePopup(popupAdd);
    formAdd.reset();

    formAdd.querySelector('.popup__submit-button').setAttribute('disabled', true);
    formAdd.querySelector('.popup__submit-button').classList.add('popup__submit-button_invalid');
}

function closeByOverlay (popup) {
    popup.addEventListener('click', (evt) => {
        if(evt.target === evt.currentTarget) {
            closePopup(popup);
        }
    })
}

popupList.forEach((popupElement) => {
    closeByOverlay(popupElement);
})

buttonEdit.addEventListener('click', openPopupEdit);

formEdit.addEventListener('submit', formEditSubmitHandler);

buttonClosePopupEdit.addEventListener('click', function() {closePopup(popupEdit)});

buttonAdd.addEventListener('click', function() {openPopup(popupAdd)});

formAdd.addEventListener('submit', formAddSubmitHandler);

buttonClosePopupAdd.addEventListener('click', function() {closePopup(popupAdd)});

buttonClosePopupImage.addEventListener('click', function() {closePopup(popupImage)});