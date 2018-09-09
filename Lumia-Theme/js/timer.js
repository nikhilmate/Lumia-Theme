window.addEventListener('load', timer);
function timer(e) {
  window.setInterval(() => {
    let time = new Date();
    let mins = time.getMinutes();
    let hrs = time.getHours();
    hrs = hrs >= 10 ? hrs : '0' + hrs;
    mins = mins >= 10 ? mins : '0' + mins;
    let setTime = document.querySelector('#timer');
    setTime.innerHTML = `${hrs}:${mins}`;
  }, 1000); 
}