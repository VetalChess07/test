const slider = document.querySelector(".mySwiper");
const slider1 = document.querySelector(".swiper__inner")




/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  let mySwiper = new Swiper(slider, {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper = new Swiper(slider1, {
    slidesPerView: 4,
    spaceBetween: 10,
    slideClass: "game__slide",
    wrapperClass: "slider__wrapper",
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next--1",
      prevEl: ".swiper-button-prev--1",
    },
  });
