// Top-Control v0.0.1
// Made with <3 by Arek Sredzki

var topControl = document.getElementById('top-control');

topControl.onclick = function() {
  var selector = 'body';
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    selector = 'html';
  }
  scrollTo(document.querySelector(selector), 0, 100);
};

function scrollTo(element, to, duration) {
  if (duration < 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 2;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
  }, 10);
}

window.onscroll = animateTopControl;

function animateTopControl() {
  if (window.pageYOffset >= 250) {
    if (!topControl.classList.contains('active')) {
      topControl.classList.add('active');
    }
  } else {
    topControl.classList.remove('active');
  }
}
