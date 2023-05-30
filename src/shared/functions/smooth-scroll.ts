import { APP } from "../constants/app";

const smoothScroll = (element: HTMLElement) => {
  window.scrollTo({
    behavior: 'smooth',
    top: (element.getBoundingClientRect().top + window.scrollY) - APP.header.height,
  });
};

export default smoothScroll;
