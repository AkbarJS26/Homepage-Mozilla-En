# Mozilla Homepage Clone English Language Version
Hi everyone, this is my first project after I learned about making websites from the front-end side by myself through Youtube tutorials. This is a clone project, I cloned the English version of the Mozilla homepage. This project is not 100% the same as the original, there are some differences that I have. Starting from using icons, then animations when website pages are scrolled, and navbars on the tablet and mobile versions.

----

## In this project i use :

- HTML
- [Bootstrap Framework Version V5.3](https://getbootstrap.com/)
- Vanilla Javascript
- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)
- [GSAP - GreenSock](https://greensock.com/gsap/)

-------

## Syntax Javascript
This is the Javascript syntax that I use. Very simple, just pops up the navbar when the page is scrolled.

```javascript
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
```
----

## This is the view from the website

![website view (1)](https://user-images.githubusercontent.com/119624307/214856361-d0d70a29-4f87-4315-ab41-42c16008ecac.gif)

----

> Handphone Version

![handphone view](https://user-images.githubusercontent.com/119624307/214856697-3e35090c-5658-443d-ba95-977bec4201ff.gif)

----

> And This Tablet Version

![tablet view](https://user-images.githubusercontent.com/119624307/214859829-8a3e2217-d9de-4426-a70f-0b3af7297860.gif)

## Syntax AOS

```javascript
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000,
        });
    </script>
```
----

## Syntax GSAP

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/TextPlugin.min.js"></script>
    <script>
        gsap.registerPlugin(TextPlugin);
        gsap.to('header .container .row .col-lg-6 h1', { duration: 6, text: 'Make Firefox yours' });
    </script>

```
----

###### Thanks for visiting this repo 😊
