const editButton = document.querySelector('.edit-button'),
    popupEdit = document.querySelector('.popup_type_edit'),
    formEdit = document.querySelector('.popup__container_type_edit'),
    closePopupEdit = document.querySelector('.popup__close-button_type_edit'),
    name = document.querySelector('.profile__name'),
    description = document.querySelector('.profile__description'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputDescription = document.querySelector('.popup__input_type_description'),
    cardsContainer = document.querySelector('.elements__group'),
    addButton = document.querySelector('.add-button'),
    popupAdd = document.querySelector('.popup_type_add'),
    closePopupAdd = document.querySelector('.popup__close-button_type_add'),
    inputTitle = document.querySelector('.popup__input_type_title'),
    inputLink = document.querySelector('.popup__input_type_link'),
    formAdd = document.querySelector('.popup__container_type_add'),
    popupImage = document.querySelector('.popup_type_img');
    fullImage = document.querySelector('.popup__image'),
    closePopupImage = document.querySelector('.popup__close-button_type_img'),
    popupSubtitle = document.querySelector('.popup__subtitle'),
    cardTemplate = document.querySelector('#card-template').content;

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
        likeButton = card.querySelector('.heart'),
        deleteButton = card.querySelector('.element__button-delete');

    cardName.textContent = cardData.name;
    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);

    cardImage.addEventListener('click', function() {openImage(cardData)});
    likeButton.addEventListener('click', handleLikeClick);
    deleteButton.addEventListener('click', handelDeleteCard);

    return card;
}

initialCards.forEach(function(item){
    renderCard(item, cardsContainer);
})

function openPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

function openPopupEdit () {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
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
}

editButton.addEventListener('click', openPopupEdit);

formEdit.addEventListener('submit', formEditSubmitHandler);

closePopupEdit.addEventListener('click', function() {closePopup(popupEdit)});

addButton.addEventListener('click', function() {openPopup(popupAdd)});

formAdd.addEventListener('submit', formAddSubmitHandler);

closePopupAdd.addEventListener('click', function() {closePopup(popupAdd)});

closePopupImage.addEventListener('click', function() {closePopup(popupImage)});