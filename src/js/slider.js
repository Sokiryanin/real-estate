// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.slider-main-block', {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-prev',
    prevEl: '.body-main-block__arrow.swiper-button-next',
  },
});


