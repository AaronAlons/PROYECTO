const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)


function fixNav () {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
let currentIndex = 1;
        function showSlide(index) {
            document.getElementById(`slide${index}`).checked = true;
        }
        function nextSlide() {
            currentIndex = currentIndex >= 3 ? 1 : currentIndex + 1;
            showSlide(currentIndex);
        }
        function prevSlide() {
            currentIndex = currentIndex <= 1 ? 3 : currentIndex - 1;
            showSlide(currentIndex);
        }
        setInterval(nextSlide, 3000);