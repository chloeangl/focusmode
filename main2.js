
const body = document.querySelector('body');

// Night mode
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.zIndex = 1000;
overlay.style.backgroundColor = 'yellow';
overlay.style.opacity = 0.4;
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.pointerEvents = 'none';
body.appendChild(overlay);

const btn = document.createElement('button');
btn.textContent = 'Toggle';
btn.style.position = 'fixed';
btn.style.top = 0;
btn.style.left = 0;
btn.style.zIndex = 1001;
btn.style.backgroundColor = 'green';
btn.style.opacity = 0.8;
btn.style.width = '50px';
btn.style.height = '30px';
body.appendChild(btn);

window.localStorage.setItem('active', 'true');

function toggle() {
        if (window.localStorage.getItem('active') === 'true') {
            overlay.style.visibility = 'hidden';
            window.localStorage.setItem('active', 'false');
        } else {
            overlay.style.visibility = 'visible';
            window.localStorage.setItem('active', 'true');
        }
}

setInterval(() => {
    if ((window.localStorage.getItem('active') === 'true') && overlay.style.visibility === 'hidden') {
        overlay.style.visibility = 'visible'
    } else if ((window.localStorage.getItem('active') === 'false') && overlay.style.visibility === 'visible') {
        overlay.style.visibility = 'hidden'
    }
}, 250);

btn.addEventListener('click', toggle);



// const button = document.createElement('btn');
// let bool = true;
// button.addEventListener('click', function (){
//     overlayOn(bool);
//     if(bool === true){
//         bool = false;
//     } else {
//         bool = true;
//     }

    

// })