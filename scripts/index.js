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
    formAdd = document.querySelector('.popup__container_type_add');


initialCards.forEach(function(item){
    const cardTemplate = document.querySelector('#card-template').content,
        card = cardTemplate.querySelector('.element').cloneNode(true),
        cardName = card.querySelector('.element__title'),
        cardImage = card.querySelector('.element__image'),
        likeButton = card.querySelector('.heart');

    cardName.textContent = item.name;
    cardImage.setAttribute('src', item.link);
    cardsContainer.append(card);
    likeButton.addEventListener('click', like);
})

function openPopupEdit () {
    popupEdit.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
}

function closeEdit () {
    popupEdit.classList.remove('popup_opened');
}

function formEditSubmitHandler (evt) {
    evt.preventDefault();   
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    closeEdit();
}

function openPopupAdd () {
    popupAdd.classList.add('popup_opened');
    inputTitle.value = '';
    inputLink.value = '';
}

function closeAdd () {
    popupAdd.classList.remove('popup_opened');
}

function formAddSubmitHandler (evt) {
    evt.preventDefault();   
    const cardTemplate = document.querySelector('#card-template').content,
        card = cardTemplate.querySelector('.element').cloneNode(true),
        cardName = card.querySelector('.element__title'),
        cardImage = card.querySelector('.element__image'),
        likeButton = card.querySelector('.heart');

    cardName.textContent = inputTitle.value;
    cardImage.setAttribute('src', inputLink.value);
    cardsContainer.prepend(card);
    closeAdd();
    likeButton.addEventListener('click', like);
}

function like (evt) {
    evt.target.classList.toggle('heart_active');
}

editButton.addEventListener('click', openPopupEdit);

formEdit.addEventListener('submit', formEditSubmitHandler);

closePopupEdit.addEventListener('click', closeEdit);

addButton.addEventListener('click', openPopupAdd);

formAdd.addEventListener('submit', formAddSubmitHandler);

closePopupAdd.addEventListener('click', closeAdd);