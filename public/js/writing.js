let h1 = document.getElementById('second-writing');
setTimeout(() => {
    document.querySelector('.typing-demo-one').style.border = 'none';
    h1.classList.add('typing-demo-two');
    setTimeout(() => {
        document.querySelector('.typing-demo-two').style.border = 'none';
    }, 2000);
}, 2000);