function showInputError (formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
}

function hideInputError (formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement, parameters) {
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, parameters.inputErrorClass, parameters.errorClass);
    } else {
        hideInputError(formElement, inputElement, parameters.inputErrorClass, parameters.errorClass);
    }
}

function hasInvalidInput (inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    })
}

function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
    if(hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
}

function setEventListeners (formElement, parameters) {
    const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
    const buttonElement = formElement.querySelector(parameters.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, parameters.inactiveButtonClass);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, parameters);
        toggleButtonState(inputList, buttonElement, parameters.inactiveButtonClass);
      });
    });
}

function enableValidation (parameters) {
    const formList = Array.from(document.querySelectorAll(parameters.formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, parameters);
    })
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_visible'
}); 