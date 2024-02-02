const scrollingText = document.querySelector('.scrolling-text p');

function animateScroll() {
  const scrollingTextWidth = scrollingText.offsetWidth;
  const containerWidth = document.querySelector('.scrolling-text').offsetWidth;
  const duration = containerWidth / (scrollingTextWidth / 3);

  scrollingText.style.transform = 'translateX(' + containerWidth + 'px)';
  scrollingText.style.transition = 'none';
  setTimeout(function() {
    scrollingText.style.transform = 'translateX(-' + scrollingTextWidth + 'px)';
    scrollingText.style.transition = 'transform ' + duration + 's linear';
    setTimeout(animateScroll, duration * 1000);
  }, 100);
}

animateScroll();
