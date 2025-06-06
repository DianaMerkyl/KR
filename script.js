document.addEventListener('DOMContentLoaded', function () {

  const testimonialCardContainer = document.querySelector('#testimonials .testimonial-card-container');
  const testimonialCardWrapper = document.querySelector('#testimonials .testimonial-card-wrapper');
  const testimonialCards = document.querySelectorAll('#testimonials .testimonial-card');
  const leftArrowTestimonial = document.querySelector('#testimonials .left-arrow');
  const rightArrowTestimonial = document.querySelector('#testimonials .right-arrow');
  const dots = document.querySelectorAll('.testimonial-navigation .dot');

  let currentTestimonialIndex = 0;
  let testimonialCardWidth = 600; 
  const numTestimonialCards = testimonialCards.length;

  function updateDimensions() {
    if (window.innerWidth <= 768) {
      testimonialCardWidth = testimonialCardContainer.offsetWidth; 
    } else {
      testimonialCardWidth = 600; 
    }

    testimonialCardWrapper.style.width = `${testimonialCardWidth * numTestimonialCards}px`;

    testimonialCards.forEach(card => {
      card.style.flex = `0 0 ${testimonialCardWidth}px`;
    });

    updateTestimonials();
  }

  updateDimensions();

  window.addEventListener('resize', updateDimensions);

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

  const tourCategories = document.querySelectorAll(".filter-button");
  const tourList = document.getElementById("tour-list");

  function activateCategory(button) {
    tourCategories.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  }

  function filterToursByCategory(category) {
    const filteredTours = tours.filter(tour => tour.category === category);
    displayTours(filteredTours);
  }

  tourCategories.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      filterToursByCategory(category);
      activateCategory(button);
    });
  });

  filterToursByCategory("excursion");
  activateCategory(tourCategories[0]);

  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');
  const searchMessage = document.querySelector('#search-message');

  let originalTourListHTML = tourList.innerHTML;

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
    searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      const searchTerm = searchInput.value;
      performSearch(searchTerm);
    });
  }
});

document.querySelector('.subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.querySelector('.subscribe-form input').value;
  alert(`Спасибо за подписку, ${email}!`);
});

const tours = [
  {
    id: 1,
    category: "excursion",
    name: "Байкальский Круиз",
    description: "Отправьтесь в незабываемый круиз по южному Байкалу! Исследуйте Чивыркуйский залив и остров Ярки, отдохните в горячих источниках, насладитесь живописными пейзажами и отдыхом на воде!",
    image: "pop1.jpg",
    price: 55000,
    duration: 6,
    nights: 5,
    link: "pop1.html"
  },
  {
    id: 4,
    category: "excursion",
    name: "Байкал: Зимняя Сказка",
    description: " Погрузитесь в зимнюю феерию Байкала! Посетите Листвянку и Байкальск, покатайтесь на собачьих упряжках, исследуйте ледяные пещеры и гроты, восхититесь зимним волшебством озера!",
    image: "pop3.jpeg",
    price: 65000,
    duration: 7,
    nights: 6,
    link: "pop2.html"
  },
  {
    id: 7,
    category: "excursion",
    name: "Сокровища Ольхона",
    description: "Откройте для себя мистические Сокровища Ольхона! Посетите Хужир и Шаман-скалу, отправьтесь на мыс Хобой во время внедорожной экскурсии. Окунитесь в сакральные места и уникальную атмосферу!",
    image: "pop2.jpg",
    price: 48000,
    duration: 5,
    nights: 4,
    link: "pop3.html"
  },
  {
    id: 2,
    category: "active",
    name: "Поход по Байкальскому Хребту",
    description: "Испытайте себя в настоящем приключении! Вас ждет треккинг по Байкальскому хребту, ночевки в палатках, костры, дикая природа и горные озера. Почувствуйте себя покорителем Байкала!",
    image: "pop4.jpg",
    price: 75000,
    duration: 8,
    nights: 7,
    link: "pop4.html"
  },
  {
    id: 5,
    category: "active",
    name: "Вокруг Ольхона",
    description: "Откройте для себя Байкал с воды! Отправьтесь в водный поход на байдарках вокруг Ольхона, исследуйте живописные бухты и дикие пляжи, займитесь рыбалкой! Активный отдых и единение с природой!",
    image: "pop5.jpg",
    price: 60000,
    duration: 7,
    nights: 6,
    link: "pop5.html"
  },
  {
    id: 11,
    category: "active",
    name: "Велотур по КЖД",
    description: "Совершите уникальное путешествие на двух колесах по Кругобайкальской ЖД! Вас ждут туннели, мосты, исторические памятники и захватывающие живописные виды. Незабываемый велотур!",
    image: "pop6.jpg",
    price: 58000,
    duration: 6,
    nights: 5,
    link: "pop6.html"
  },
  {
    id: 3,
    category: "weekend",
    name: "Байкальская Ривьера",
    description: "Насладитесь отличным отдыхом на берегу Байкала в Листвянке! Посетите Байкальский музей и смотровую площадку Камень Черского, полюбуйтесь на нерп в нерпинарии! Короткий, но насыщенный тур!",
    image: "pop7.jpg",
    price: 22000,
    duration: 3,
    nights: 2,
    link: "pop7.html"
  },
  {
    id: 6,
    category: "weekend",
    name: "Аршан: Целебные источники",
    description: "Погрузитесь в мир здоровья и духовности в поселке Аршан! Попробуйте целебные минеральные источники, посетите буддийский дацан, прогуляйтесь по Тункинской долине и почувствуйте гармонию!",
    image: "pop8.jpg",
    price: 28000,
    duration: 3,
    nights: 2,
    link: "pop8.html"
  },
  {
    id: 12,
    category: "weekend",
    name: "Теплые Озера",
    description: "Зарядитесь энергией природы на Теплых Озерах! Купайтесь в кристальной воде, отдыхайте на песчаных пляжах, гуляйте в сосновом бору! Идеальный отдых на выходные!",
    image: "pop9.jpeg",
    price: 25000,
    duration: 3,
    nights: 2,
    link: "pop9.html"
  }
];


if (typeof bootstrap !== 'undefined') {
  const bookTourButton = document.querySelector('.book-tour-btn');
  console.log(bookTourButton);

  if (bookTourButton) {
    console.log('Event listener added');
    bookTourButton.addEventListener('click', function (event) {
      event.preventDefault();


      const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
      console.log(bookingModal);

      bookingModal.show();
    });
  }


  document.addEventListener('DOMContentLoaded', function () {


    function addBookingButtonListeners() {

      const bookTourButtons = document.querySelectorAll('.book-tour-btn');

      bookTourButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();

          let bookingModalEl;
          let bookingFormEl;
          if (button.closest('header')) {
            bookingModalEl = document.getElementById('bookingModalHeader');
            bookingFormEl = document.getElementById('bookingFormHeader');
          } else {
            bookingModalEl = document.getElementById('bookingModalBottom');
            bookingFormEl = document.getElementById('bookingFormBottom');
          }

          const bookingModal = new bootstrap.Modal(bookingModalEl);
          bookingModal.show();


          if (bookingFormEl) {
            bookingFormEl.addEventListener('submit', function (event) {
              event.preventDefault();

              let name, phone, email, tourName, comments;
              if (button.closest('header')) {
                name = document.getElementById('nameHeader').value;
                phone = document.getElementById('phoneHeader').value;
                email = document.getElementById('emailHeader').value;
                tourName = document.getElementById('tourNameHeader').value;
                console.log('Данные формы (шапка):', {
                  name: name,
                  phone: phone,
                  email: email,
                  tourName: tourName
                });

              } else {
                name = document.getElementById('nameBottom').value;
                phone = document.getElementById('phoneBottom').value;
                email = document.getElementById('emailBottom').value;
                comments = document.getElementById('commentsBottom').value;
                console.log('Данные формы (низ):', {
                  name: name,
                  phone: phone,
                  email: email,
                  comments: comments
                });
              }


              bookingModal.hide();

              const successModalEl = document.getElementById('successModal');
              successModalEl.classList.add('show');
              const successModalCloseButton = successModalEl.querySelector('.btn-close');
              successModalCloseButton.addEventListener('click', function () {
                successModalEl.classList.remove('show');
                bookingModal.show();

              });

              bookingFormEl.reset();
            });
          }
        });
      });
    }


    addBookingButtonListeners();

    if (bookingForm) {
      bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;

        console.log('Данные формы:', {
          name: name,
          phone: phone,
          email: email,
          comments: comments
        });

        const bookingModalEl = document.getElementById('bookingModal');
        const bookingModal = bootstrap.Modal.getInstance(bookingModalEl);
        bookingModal.hide();

        const successModalEl = document.getElementById('successModal');
        successModalEl.classList.add('show');


        const successModalCloseButton = successModalEl.querySelector('.btn-close');
        successModalCloseButton.addEventListener('click', function () {
          successModalEl.classList.remove('show');

          if (bookingModalEl) {
            // Если bookingModal - это Bootstrap Modal instance, то вызываем метод show
            if (bookingModal && typeof bookingModal.show === 'function') {
              bookingModal.show();
            } else {
              bookingModalEl.style.display = 'block';
            }
          }

        });

        bookingForm.reset();
      });
    }
  });
}



function displayTours(toursToDisplay) {
  const tourList = document.getElementById("tour-list");
  tourList.innerHTML = "";
  toursToDisplay.forEach(tour => {
    const tourElement = document.createElement("div");
    tourElement.classList.add("tour-card");
    tourElement.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}">
            <p class="price">Цена: ${tour.price} руб</p>
            <h3>${tour.name}</h3>
            <div class="duration">
                <i class="far fa-calendar-alt"></i> ${tour.duration} дней / ${tour.nights} ночей
            </div>
            <p>${tour.description}</p>
            <a href="${tour.link}" class="button">Подробнее о туре</a>
        `;
    tourList.appendChild(tourElement);
  });
}




