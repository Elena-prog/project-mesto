const fullImage = document.querySelector('.popup__image'),
    popupSubtitle = document.querySelector('.popup__subtitle'),
    popupImage = document.querySelector('.popup_type_img');

class Card {
    constructor(data, templateSelector, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }

    _openImage() {
        fullImage.setAttribute('src', this._link);
        fullImage.setAttribute('alt', this._name);
        popupSubtitle.textContent = this._name;
        this._openPopup(popupImage);
    }
    
    _handleLikeClick (evt) {
        evt.target.classList.toggle('heart_active');
    }
    
    _handelDeleteCard (evt) {
        evt.target.closest('.element').remove();
    }
    
    _createCard () {
        const card = this._templateSelector.querySelector('.element').cloneNode(true),
            cardName = card.querySelector('.element__title'),
            cardImage = card.querySelector('.element__image'),
            buttonLike = card.querySelector('.heart'),
            buttonDelete = card.querySelector('.element__button-delete');
    
        cardName.textContent = this._name;
        cardImage.setAttribute('src', this._link);
        cardImage.setAttribute('alt', this._name);
    
        cardImage.addEventListener('click', () => {this._openImage()});
        buttonLike.addEventListener('click', this._handleLikeClick);
        buttonDelete.addEventListener('click', this._handelDeleteCard);
        
        return card;
    }

    renderCard(container) {
        const card = this._createCard();
        container.prepend(card);
    }
}

export {Card, popupImage};