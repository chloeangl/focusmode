document.addEventListener('DOMContentLoaded', () => {

  const LIGHT = '#E5E5E5';
  const DARK = '#707070';
  const body = document.querySelector('body');

// Dark mode

function darkMode(status) {

  if (status) {
    // activate darkmode
    const divs = document.querySelectorAll('div');
    const images = document.querySelectorAll('img');
    const p = document.querySelectorAll('p');
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const h4 = document.querySelectorAll('h4');
    const h5 = document.querySelectorAll('h5');
    const h6 = document.querySelectorAll('h6');

    body.style.backgroundColor = DARK;
    body.style.color = LIGHT;
    divs.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    divs.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    images.forEach(e => {
      e.opacity = 0.8;
    });
    p.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    h1.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    h2.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    h3.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    h4.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
    h5.forEach(e => {
      e.backgroundColor = DARK;
      e.color = LIGHT;
    });
  } else {
    // deactivate darkmode
    console.log('deactivate');
  }
}




// Night mode
const overlay = document.createElement('div')
overlay.setAttribute('id','overlay')
body.appendChild(overlay);

 



// Remove distractions / block websites from list



});


