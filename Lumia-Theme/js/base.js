let container = document.querySelector('.container');
container.addEventListener('drag', eventclick);
let prev = null;

function eventclick(e) {
  console.log(prev, e.clientY);
  if (e.clientY !== prev) {
    diff = e.clientY - prev;
    container.scrollTo(0, e.clientY);
  }
  prev = e.clientY;
};

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callnow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callnow) func.apply(context, args);
  };
};
/*
ui.addEventListener('click', eventclick);
function eventclick(e) {
  let target = e.target;
  if (e.target.className ) {
    console.log('selected');
  }
  document.body.classList.add('fade');
  //target.classList.add('selected');
  window.setTimeout(function() {
    console.log('waited');
  }, 200);
}


*/