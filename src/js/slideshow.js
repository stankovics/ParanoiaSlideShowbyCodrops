import { gsap } from 'gsap';
import { Slide } from './slide';

export class Slideshow {
  // DOM elements
  DOM = {
    // Main element .slides
    el: null,
    // .slides__img elements
    slides: null,
  };
  // Slide instances array
  slidesArr = [];
  // Current slide's index
  current = 0;
  // Total number of slides
  slidesTotal;
  // Current slide
  currentSlide;
  // Animation's direction(left or right)
  direction;
  // Check if the slideshow is running
  isAnimating = false;
  // Animation's duration and easing
  duration = 1.2;
  ease = 'power3.inOut';
  // Use a filter (brigtness) animation when trasittioning from one slide to another
  filterAnimation = true;

  constructor(DOM_el, options = {}) {
    this.DOM.el = DOM_el;

    // Some options
    this.duration =
      options.duration != undefined ? options.duration : this.duration;

    this.ease = options.ease != undefined ? options.ease : this.ease;

    this.filterAnimation =
      options.filterAnimation != undefined
        ? options.filterAnimation
        : this.filterAnimation;

    this.DOM.slides = this.DOM.el.querySelectorAll('.slides__img');

    // Create a slide for each .slides__img element
    this.DOM.slides.forEach(slideEl => this.slidesArr.push(new Slide(slideEl)));

    this.slidesTotal = this.DOM.slides.length;
  }

  /**
   * Set the current slide
   * @param {number} position - The position of slide.
   */
  setInitialSlide(position = this.current) {
    // Update current
    this.current = position;
    // The current slide
    this.currentSlide = this.slidesArr[this.current];
    // Set current image
    this.DOM.slides[this.current].classList.add('slides__img--current');
  }
  /**
   * Navigate the slideshow to the next slide
   */
}
