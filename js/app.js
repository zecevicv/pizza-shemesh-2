/* #ScrollSpy
================================================== */

// Handling link marking
let section = document.querySelectorAll(".section");

if (section) {
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    let scrollPosition = '';

    if (window.innerWidth > 1024) {
      scrollPosition = ((document.documentElement.scrollTop + 350) || (document.body.scrollTop + 350));
    } else {
      scrollPosition = ((document.documentElement.scrollTop + 100) || (document.body.scrollTop + 100));
    }

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        if (document.querySelector('.header-links .active')) {
          document.querySelector('.header-links .active').setAttribute('class', ' ');
        }
        document.querySelector('.header-links a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
}

// Handling link clicks
const scrollSpyLinks = document.querySelectorAll('.header-links a');

scrollSpyLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.hash;
    let yOffset = 0;

    if (window.innerWidth > 1024) {
      yOffset = -95;
    } else {
      yOffset = -100;
    }

    const element = document.querySelector(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});

/* #Banner Slider
    ======================================================= */
  if (document.querySelector('.banner .swiper')) {
    new Swiper('.banner .swiper', {
      loop: true,
      navigation: {
        nextEl: '.banner .swiper-button-next',
        prevEl: '.banner .swiper-button-prev',
      },
    });
  }