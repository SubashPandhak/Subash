const navSlide = () => {
     const burger = document.querySelector('.burger');
    const nav = document.querySelector('.list');
    const navLinks = document.querySelectorAll('.list li');

    burger.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
    });
}
navSlide();