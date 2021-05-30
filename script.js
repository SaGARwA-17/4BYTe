window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu(){
    const menutoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener("load", ()=>{
    const preload = document.querySelector('.preload');
    preload.classList.add('loaded');
});