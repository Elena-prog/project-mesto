const editButton = document.querySelector('.edit-button'),
    popup = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close-button'),
    name = document.querySelector('.profile__name'),
    description = document.querySelector('.profile__description'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputDescription = document.querySelector('.popup__input_type_description'),
    cardsContainer = document.querySelector('.elements__group');


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
    popup.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
}

function close () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    close();
}

editButton.addEventListener('click', editProfile);

popup.addEventListener('submit', formSubmitHandler);

closePopup.addEventListener('click', close);

