document.addEventListener('DOMContentLoaded', async () => {
const LIGHT = '#E5E5E5';
const DARK = '#707070';
const body = document.querySelector('body');
const array = document.querySelectorAll('div');

body.style.backgroundColor = DARK;
body.style.color = LIGHT;
for (const e of array) {
  e.backgroundColor = DARK;
  e.color = LIGHT;
}

// Night mode
const overlay = document.createElement('div')
overlay.setAttribute('id','overlay')
body.appendChild(overlay);

function overlayOn (click){
    
    //If click === true, set display to block
    if(click === true){
        overlay.style.display = 'block'
        //Else if click === false, set display to none
    } else if (click === false){
        overlay.style.display = 'none'
    }
}



// // Remove distractions / block websites from list
const button = document.getElementById('btn');

button.addEventListener('click', function (){
    overlayOn(true);
    console.log('click');
})



// });

});