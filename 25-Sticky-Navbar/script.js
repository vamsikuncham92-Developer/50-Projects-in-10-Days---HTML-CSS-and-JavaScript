const navs = document.querySelectorAll('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
    navs.forEach(nav => {
        if (window.scrollY > nav.offsetHeight + 150) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}
