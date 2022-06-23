const editButton = document.querySelector('.edit-button'),
    popupEdit = document.querySelector('.popup_type_edit'),
    closePopupEdit = document.querySelector('.popup__close-button_type_edit'),
    name = document.querySelector('.profile__name'),
    description = document.querySelector('.profile__description'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputDescription = document.querySelector('.popup__input_type_description'),
    cardsContainer = document.querySelector('.elements__group'),
    addButton = document.querySelector('.add-button'),
    popupAdd = document.querySelector('.popup_type_add'),
    closePopupAdd = document.querySelector('.popup__close-button_type_add');

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


initialCards.forEach(function(item){
    const cardTemplate = document.querySelector('#card-template').content,
        card = cardTemplate.querySelector('.element').cloneNode(true),
        cardName = card.querySelector('.element__title'),
        cardImage = card.querySelector('.element__image');

    cardName.textContent = item.name;
    cardImage.setAttribute('src', item.link);
    

    cardsContainer.append(card);
})

function editProfile () {
    popupEdit.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
}

function closeEdit () {
    popupEdit.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    close();
}

function addPhoto () {
    popupAdd.classList.add('popup_opened');
}

function closeAdd () {
    popupAdd.classList.remove('popup_opened');
}



editButton.addEventListener('click', editProfile);

popupEdit.addEventListener('submit', formSubmitHandler);

closePopupEdit.addEventListener('click', closeEdit);

addButton.addEventListener('click', addPhoto);

closePopupAdd.addEventListener('click', closeAdd);


