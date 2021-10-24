const fixedClassname = 'fixed';
const heroElement = document.getElementById('hero');

document.addEventListener('scroll', function() {
  if (window.scrollY > heroElement.offsetTop) {
    heroElement.classList.add(fixedClassname);
  }
  else {
    heroElement.classList.remove(fixedClassname);
  }
});