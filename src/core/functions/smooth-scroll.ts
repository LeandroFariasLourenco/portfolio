import { APP } from '../constants';

const smoothScroll = (element: HTMLElement) => {
  window.scrollTo({
    behavior: 'smooth',
    top: (element.getBoundingClientRect().top + window.scrollY) - APP.header.height,
  });
};

export default smoothScroll;
