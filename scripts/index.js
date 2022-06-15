const editButton = document.querySelector('.edit-button'),
    popup = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close-button'),
    name = document.querySelector('.profile__name'),
    description = document.querySelector('.profile__description'),
    inputName = document.querySelector('.popup__input_type_name'),
    inputDescription = document.querySelector('.popup__input_type_description');

function editProfile () {
    popup.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputDescription.value = description.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    description.textContent = inputDescription.value;
    close();
}

function close () {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', editProfile);

popup.addEventListener('submit', formSubmitHandler);

closePopup.addEventListener('click', close);

