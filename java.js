document.querySelectorAll('nav ul li a').forEach(link =>{
    link.addEventListener('click', function(event) {
event.preventDefault();
const targetId = this.getAttribute('href');
const targetSection = document.querySelector(targetId)

window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
        })
    });
});
