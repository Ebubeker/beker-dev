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

//onload effect
const loader = document.querySelector('.loader');
const loaderBelow = document.querySelector('.loaderBelow');

window.onload = () => {
    setTimeout(() => {
        const loader_one = document.querySelector('.loader-one-up'),
            loader_two = document.querySelector('.loader-two-up'),
            loader_three = document.querySelector('.loader-one-down'),
            loader_four = document.querySelector('.loader-two-down');

        console.log(loader_three)

        loader_one.classList.add('loader-1');
        loader_two.classList.add('loader-3');
        setTimeout(() => {
            loader_three.classList.add('loader-2');
            loader_four.classList.add('loader-4');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1200)
            setTimeout(() => {
                loaderBelow.style.display = 'none';
                let h1 = document.getElementById('second-writing');
                let h1_one = document.getElementById('first-writing');
                h1_one.classList.add('typing-demo-one');
                setTimeout(() => {
                    document.querySelector('.typing-demo-one').style.border = 'none';
                    h1.classList.add('typing-demo-two');
                    document.querySelector('.typing-demo-two').style.border = 'none';
                }, 1000);
            }, 1500);
        }, 300);

    }, 1500);
}