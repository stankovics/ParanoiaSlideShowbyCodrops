import gsap from 'gsap';
import { preloadImages } from './utils';

// Preload images then remove loader (loading class)
preloadImages('.slides__img-inner').then(() =>
  document.body.classList.remove('loading')
);
