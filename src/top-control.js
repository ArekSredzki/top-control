// Scroll to top
window.onscroll = animateTopControl;

var topControl = document.getElementById('top-control');

function animateTopControl() {
  if (window.pageYOffset >= 250) {
    addClass(topControl, 'active');
  } else {
    removeClass(topControl, 'active');
  }
}

topControl.onclick = function() {
  scrollTo(document.body, 0, 100);
}

function scrollTo(element, to, duration) {
  if (duration < 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 2;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
  }, 10);
}

function addClass(el, cssClass) {
  el.className += ' ' + cssClass;
}

function removeClass(el, cssClass) {
  var elClass = ' ' + el.className + ' ';
  while (elClass.indexOf(' ' + cssClass + ' ') != -1)
    elClass = elClass.replace(' ' + cssClass + ' ', '');
  el.className = elClass;
}
