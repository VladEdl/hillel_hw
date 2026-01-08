'use strict';

const cardsContainer = document.querySelector('.cards');
if (cardsContainer) {
    cardsContainer.addEventListener('click', (e) => {

        const currentBtn = e.target.closest('[data-read-more-btn]');
        if (!currentBtn) return;

        const currentCard = currentBtn.closest('.card');

        currentCard.classList.toggle('expanded');

        if (currentCard.classList.contains('expanded')) {
            currentBtn.innerText = "Hide";
        } else {
            currentBtn.innerText = "Read More";
        }

    });
}
