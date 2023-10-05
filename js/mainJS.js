"use strict"

document.addEventListener("click", function (e) {
    
    const targetItem = e.target

    if (targetItem.closest('[data-ripple]')) {
        //constans
        const button = targetItem.closest('[data-ripple]');
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        //console.log(diameter)
        const radius = diameter / 2;

        //ripple 
        ripple.style.width = ripple.style.height = `${diameter}px`
        ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + screenX) - radius}px`
        ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + screenY) - radius}px`
        //console.log(ripple.style.left)
        //console.log(ripple.style.top)
       
        ripple.classList.add('ripple');

        //if once
        button.dataset.ripple === 'once' && button.querySelector('.ripple') ?
            button.querySelector('.ripple').remove() : null

        //btn add ripple
        button.appendChild(ripple)

        //timeOUT
        const timeOut = getAnimationDuration(ripple);
 
        //element delete
        setTimeout(() => {
            ripple ? ripple.remove() : null;
        }, timeOut)

        //getAnimationDuration
        function getAnimationDuration() {
            const aDuration = window.getComputedStyle(ripple).animationDuration;
            return aDuration.includes('ms') ?
                aDuration.replace('ms', '') : aDuration.replace('s', '') * 1000;
        }
    }
});