let respButton = document.getElementById('responsiveButton');
let dropDown = document.querySelector('.nav-dropdown');
let blueStuff = document.querySelector('.blueStuff');

function toggleDropDown() {


    if (dropDown.style.display === '') {

        animation(dropDown, 'getUp', 'getDown');
        animation(blueStuff, 'getUpBlue', 'getDownBlue');
        changeDisplay(blueStuff, 'block');
        changeDisplay(dropDown, 'block');
        animation(respButton, 'fa-bars', 'fa-times');

    } else if (dropDown.style.display === 'none') {

        animation(dropDown, 'getUp', 'getDown');
        animation(blueStuff, 'getUpBlue', 'getDownBlue');
        changeDisplay(blueStuff, 'block');
        changeDisplay(dropDown, 'block');
        animation(respButton, 'fa-bars', 'fa-times');

    } else if (dropDown.style.display === 'block') {

        animation(dropDown, 'getDown', 'getUp');
        setTimeout(() => {
            animation(blueStuff, 'getDownBlue', 'getUpBlue');
            setTimeout(() => {

                changeDisplay(blueStuff, 'none');
                changeDisplay(dropDown, 'none');
            }, 750)
        }, 200);
        animation(respButton, 'fa-times', 'fa-bars');

    }
}

let animation = (element, remClass, addClass) => {

    element.classList.remove(remClass);
    element.classList.add(addClass);

};

let changeDisplay = (element, display) => {

    element.style.display = display;

};

window.addEventListener('resize', function(event) {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    if (newWidth > 1200) {
        changeDisplay(dropDown, 'none');
        changeDisplay(blueStuff, 'none');
        animation(dropDown, 'getUp', 'getDown');
        animation(blueStuff, 'getUpBlue', 'getDownBlue');
        animation(respButton, 'fa-times', 'fa-bars');
    }
    console.log(newHeight, newWidth);
});