import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


let bg = document.querySelector('.hero__right img');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
