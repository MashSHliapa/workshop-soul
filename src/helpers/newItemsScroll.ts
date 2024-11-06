import { RefObject } from 'react';

export function newItemsScroll(pageElement: RefObject<HTMLElement>) {
  let yOffset;

  if (window.innerWidth < 767.98) {
    yOffset = -770;
  } else if (window.innerWidth < 991.98) {
    yOffset = -800;
  } else if (window.innerWidth < 1119.98) {
    yOffset = -580;
  } else {
    yOffset = -560;
  }

  const element = pageElement.current;
  if (element !== null) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
