(function () {
  const header = document.querySelector ('.header');
  window.onscroll = () => {
    if(window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  }
}());

//BURGER HANDLER

(function () {
  const burgerItem = document.querySelector ('.header_burger');
  const menu = document.querySelector ('.header_nav');
  const menuCloseItem = document.querySelector ('.header_nav-close');
  burgerItem.addEventListener('click', () => {
    menu.classList.add ('header_nav_active');
  })
  menuCloseItem.addEventListener ('click', () => {
    menu.classList.remove ('header_nav_active');
  }) 
}());

// SCROLL TO ANCHORS

(function () {
  
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight; //ajs toxy nra hamar e, vor ete menun (mer depqum header-i prnktjn@) amboxj eji scroll-i jamanak misht ereva, u vorpeszi orinak Articles sexmelis gnanq Articlneri bajin, header-@ ira background-ov chcacki Articles-i mi mas@. Ete mer urish kajq sarqelis header@ chuzenq amboxj scroll-i jmnk mna verevum, et depqum es ej@ mez petq chi lini u es cod-i tox@ piti jnjenq, u bolor texeric jnjenq, vortex khandipi "headerElHeight" -@:
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function(t,b,c,d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0,run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);

  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
} ());

