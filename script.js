// toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger-menu diclik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik diluar diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});
