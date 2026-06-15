// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Tab System
let btn = document.querySelectorAll('.links');
// console.log(btn);


for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let tab_get = this.dataset.tab;
        let tab_content = document.getElementById(tab_get);



        let all_content = document.querySelectorAll('.tab-content');
        for (j = 0; j < all_content.length; j++) {
            all_content[j].style.display = "none";
        }

        let links_btn = document.querySelectorAll('.links');
        for (k = 0; k < links_btn.length; k++) {
            links_btn[k].classList.remove('active');
        }


        tab_content.style.display = "block";
        this.classList.add('active');

    })


}