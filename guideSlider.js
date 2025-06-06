document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('#about-us .guide-card-wrapper');
    const cards = document.querySelectorAll('#about-us .guide-card');
    const leftArrow = document.querySelector('#about-us .left-arrow');
    const rightArrow = document.querySelector('#about-us .right-arrow');

    let currentIndex = 0;
    let cardsToShow = 2;
    const cardGap = 20;
    let cardWidthPercentage = 50;  // Изменяемая ширина карточки в процентах

    function updateCardsToShow() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            cardsToShow = 1;
            cardWidthPercentage = 100; // Полная ширина на маленьких экранах
        } else {
            cardsToShow = 2;
            cardWidthPercentage = 50; // 50% ширины на больших экранах
        }

        // Применяем ширину к карточкам
        cards.forEach(card => {
            card.style.width = `${cardWidthPercentage}%`;
        });
    }


    function updateSlider() {
        const totalCards = cards.length;

        if (currentIndex > totalCards - cardsToShow) {
            currentIndex = totalCards - cardsToShow;
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        let translateX = 0;
        for (let i = 0; i < currentIndex; i++) {
            translateX += cards[i].offsetWidth + cardGap;
        }

        wrapper.style.transform = `translateX(-${translateX}px)`;
    }

    function showNextGuide() {
        currentIndex += cardsToShow;

        if (currentIndex > cards.length - cardsToShow) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function showPreviousGuide() {
        currentIndex -= cardsToShow;
        if (currentIndex < 0) {
            currentIndex = Math.max(0, cards.length - cardsToShow);
        }
        updateSlider();
    }

    cards.forEach(card => {
        card.style.marginRight = `${cardGap}px`;
    });

    leftArrow.addEventListener('click', showPreviousGuide);
    rightArrow.addEventListener('click', showNextGuide);

    updateCardsToShow();
    window.addEventListener('resize', () => {
        updateCardsToShow();
        updateSlider();
    });

    updateSlider();
});