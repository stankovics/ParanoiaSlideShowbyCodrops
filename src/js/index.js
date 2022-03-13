import gsap from 'gsap';
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

// Preload images then remove loader (loading class)
preloadImages('.slides__img-inner').then(() =>
  bodyEl.classList.remove('loading')
);
// Nav controls object to navigate the main slideshow
