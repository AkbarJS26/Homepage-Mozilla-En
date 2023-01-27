const navbar = document.querySelector('.navbar');
console.log(navbar);

window.addEventListener('scroll', function () {
    const pointScroll = this.window.scrollY;
    console.log(pointScroll);

    if (pointScroll > 0) {
        navbar.classList.add('showNavbar');
    } else {
        navbar.classList.remove('showNavbar');
    }
});