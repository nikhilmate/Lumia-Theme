let header = document.querySelector('header');

function slideMovement(e) {
  let slider = document.querySelector('.slider');
  let strip = document.querySelector('.strip');
  if (slider.className.match('hide-slider') && strip.className.match('hide-strip')) {
    slider.classList.remove('hide-slider');
    strip.classList.remove('hide-strip');
    console.log(slider, strip);
  } else {
    slider.classList.add('hide-slider');
    strip.classList.add('hide-strip');
  }
}

let static = document.querySelector('.static');

function add(e) {
  console.log(e.clientY);
}

static.addEventListener('drag', add);
header.addEventListener('click', slideMovement);

