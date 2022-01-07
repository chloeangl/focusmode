document.addEventListener('DOMContentLoaded', async () => {
    const body = document.querySelector('body');
    const head = document.querySelector('head')
    
    const link = document.createElement('link');

    link.setAttribute('href','./style.css');
    link.setAttribute('rel','stylesheet');
    
    head.appendChild(link);


    // Night mode
    const overlay = document.createElement('div')
    overlay.setAttribute('id','overlay')
    body.appendChild(overlay);
    
    // const overlay = document.getElementById('overlay')
    function overlayOn (click){
        if(click === true){
            overlay.style.display = 'block'  
        } else {
            overlay.style.display = 'none'
        }
        console.log('click');
    }

    
    
    const button = document.getElementById('btn');
    
    let bool = true;
    if(button){
        button.addEventListener('click', function (){
            overlayOn(bool);
            if(bool === true){
                bool = false;
            } else {
                bool = true;
            }
        })
    }
    
    
    
});
// });
// const array = document.querySelectorAll('div');


// body.style.backgroundColor = DARK;
// body.style.color = LIGHT;
// for (const e of array) {
    //   e.backgroundColor = DARK;
    //   e.color = LIGHT;
    // }
    // chrome.runtime.onInstalled.addListener((reason) =>{
        //     if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
            //         chrome.tabs.create({
                //           url: 'index.html'
                //         });
                //       }
                // })
                
                // // Remove distractions / block websites from list
                // const LIGHT = '#E5E5E5';
                // const DARK = '#707070';