import anime from './js/animejs/lib/anime.es.js';

function main(){
    document.addEventListener('DOMContentLoaded', (event) => {
        anime({
            targets: '.non-icon',
            rotate: 360,
            duration: 1600,
            elasticity: 600,
            easing: 'easeOutElastic',
        });
    });
}


export{main}