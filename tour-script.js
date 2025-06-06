document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const testimonialCardContainer = document.querySelector('#testimonials .testimonial-card-container');
    const testimonialCardWrapper = document.querySelector('#testimonials .testimonial-card-wrapper');
    const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');
    const leftArrowTestimonial = document.querySelector('#testimonials .left-arrow');
    const rightArrowTestimonial = document.querySelector('#testimonials .right-arrow');
    const dots = document.querySelectorAll('.testimonial-navigation .dot');
    let currentTestimonialIndex = 0;
    const testimonialCardWidth = 600;
    const numTestimonialCards = testimonialCards.length;

    if (testimonialCardWrapper) {
        testimonialCardWrapper.style.width = `${testimonialCardWidth * numTestimonialCards}px`;
    }

    function updateTestimonials() {
        const translateX = -currentTestimonialIndex * testimonialCardWidth;
        testimonialCardWrapper.style.transform = `translateX(${translateX}px)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonialIndex);
        });
    }

    function showTestimonial(index) {
        currentTestimonialIndex = index;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = numTestimonialCards - 1;
        } else if (currentTestimonialIndex >= numTestimonialCards) {
            currentTestimonialIndex = 0;
        }
        updateTestimonials();
    }

    if (leftArrowTestimonial && rightArrowTestimonial) {
        leftArrowTestimonial.addEventListener('click', () => {
            showTestimonial(currentTestimonialIndex - 1);
        });

        rightArrowTestimonial.addEventListener('click', () => {
            showTestimonial(currentTestimonialIndex + 1);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    setInterval(() => {
        showTestimonial(currentTestimonialIndex + 1);
    }, 5000);

    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchButton');
    const searchMessage = document.querySelector('#search-message');

    const tourSearchData = [
        { name: "Байкальский Круиз", link: "pop1.html" },
        { name: "Байкал: Зимняя Сказка", link: "pop2.html" },
        { name: "Сокровища Ольхона", link: "pop3.html" },
        { name: "Поход по Байкальскому Хребту", link: "pop4.html" },
        { name: "Вокруг Ольхона", link: "pop5.html" },
        { name: "Велотур по КЖД", link: "pop6.html" },
        { name: "Байкальская Ривьера", link: "pop7.html" },
        { name: "Теплы Озера", link: "pop9.html" },
        { name: "Аршан: Целебные источники", link: "pop8.html" },
        { name: "Байкал: Летний Эксперсс", link: "hot1.html" },
        { name: "Приключения на Байкале", link: "hot2.html" },
        { name: "Байкал: Гармония с Природой", link: "hot3.html" },
        { name: "Зимняя сказка в Листвянке", link: "tem1.html" },
        { name: "Экспедиция в Бухту Песчаная", link: "tem2.html" },
        { name: "Ледяная Сказка Байкала", link: "tem3.html" }
    ];

    function performSearch(searchTerm) {
        const searchText = searchTerm.toLowerCase();
        let foundTour = null;

        for (let i = 0; i < tourSearchData.length; i++) {
            if (tourSearchData[i].name.toLowerCase() === searchText) {
                foundTour = tourSearchData[i];
                break; 
            }
        }

        if (foundTour) {
            window.location.href = foundTour.link;
        } else {
            searchMessage.textContent = "По вашему запросу ничего не найдено.";
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault();
            const searchTerm = searchInput.value;
            performSearch(searchTerm);
        });
    }
});