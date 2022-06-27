const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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
    popupSubtitle = document.querySelector('.popup__subtitle');


initialCards.forEach(function(item){
    let cardObj = createCard();
    cardObj.cardName.textContent = item.name;
    cardObj.cardImage.setAttribute('src', item.link);
    cardsContainer.append(cardObj.card);

    openImage(cardObj.cardImage, item.link, item.name);
})

function openPopupEdit () {
    popupEdit.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
}

function formEditSubmitHandler (evt) {
    evt.preventDefault();   
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    closePopup(popupEdit);
}

function openPopupAdd () {
    popupAdd.classList.add('popup_opened');
    inputTitle.value = '';
    inputLink.value = '';
}

function formAddSubmitHandler (evt) {
    evt.preventDefault();
    let cardObj = createCard();  
        cardObj.cardName.textContent = inputTitle.value;
        cardObj.cardImage.setAttribute('src', inputLink.value);

    cardsContainer.prepend(cardObj.card);

    openImage(cardObj.cardImage, inputLink.value, inputTitle.value);

    closePopup(popupAdd);
}

function createCard () {
    const cardTemplate = document.querySelector('#card-template').content,
        card = cardTemplate.querySelector('.element').cloneNode(true),
        cardName = card.querySelector('.element__title'),
        cardImage = card.querySelector('.element__image'),
        likeButton = card.querySelector('.heart'),
        deleteButton = card.querySelector('.element__button-delete');

    likeButton.addEventListener('click', like);
    deleteButton.addEventListener('click', function() {
        card.remove();
    })

    return {'card': card, 'cardName': cardName, 'cardImage': cardImage};
}

function like (evt) {
    evt.target.classList.toggle('heart_active');
}

function openImage (image, link, name) {
    image.addEventListener('click', function(){
        popupImage.classList.add('popup_opened');
        fullImage.setAttribute('src', link);
        popupSubtitle.textContent = name;
        closePopupImage.addEventListener('click', function() {closePopup(popupImage)})
    })
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopupEdit);

formEdit.addEventListener('submit', formEditSubmitHandler);

closePopupEdit.addEventListener('click', function() {closePopup(popupEdit)});

addButton.addEventListener('click', openPopupAdd);

formAdd.addEventListener('submit', formAddSubmitHandler);

closePopupAdd.addEventListener('click', function() {closePopup(popupAdd)});