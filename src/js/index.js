import gsap from 'gsap';
import { Slideshow } from './slideshow';
import { preloadImages } from './utils';

// Body element
const bodyEl = document.body;
/**
 * Body color / const bodyColor,
 * The getComputedStyle() method gets the computed CSS properties and values of an HTML element,
 * The getComputedStyle() method returns a CSSStyleDeclaration object,
 * getPropertyValue() method gets value from CSSStyleDeclaration object.
 * In this case we are getting value of css variable --color-bg,  that is #4000EA;
 * */
const bodyColor = getComputedStyle(bodyEl).getPropertyValue('--color-bg');

// Three Slideshow instances: main, and two for the navigation items
const slideshowMain = new Slideshow(
  document.querySelector('.slideshow > div.slides')
);
const slideshowNavNext = new Slideshow(
  document.querySelector('.slideshow nav.nav--next .slides'),
  { duration: 1, filterAnimation: false }
);
const slidesshowNavPrev = new Slideshow(
  document.querySelector('.slideshow nav.nav--prev .slides'),
  { duration: 1, filterAnimation: false }
);
// Nav controlos to navigate the main slideshow
const navCtrls = {
  prev: document.querySelector('.slideshow nav.nav--prev'),
  next: document.querySelector('.slideshow nav.nav--next'),
};

// Title elements
const titleElems = [
  ...document.querySelectorAll('.meta__content > .meta__content-title'),
];
// Preload images then remove loader (loading class)
preloadImages('.slides__img-inner').then(() =>
  bodyEl.classList.remove('loading')
);
// Set the current slide
slideshowMain.setInitialSlide();
// Setup the current slide values for the navigation elements, which are based on the slideshowMain's current value
slidesshowNavPrev.setInitialSlide(
  slideshowMain.current
    ? slideshowMain.current - 1
    : slideshowMain.slidesTotal - 1
);
slideshowNavNext.setInitialSlide(
  slideshowMain.current < slideshowMain.slidesTotal - 1
    ? slideshowMain.current + 1
    : 0
);
