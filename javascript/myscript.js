// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Saat Menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik luar sidbar hilang nav

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})
