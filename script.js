const saraza = document.getElementById('hero');
const sarazaOffset = saraza.offsetTop;

document.addEventListener('scroll', function() {
  if (window.scrollY > sarazaOffset) {
    saraza.classList.add('fixed');
  }
  else {
    saraza.classList.remove('fixed');
  }
});