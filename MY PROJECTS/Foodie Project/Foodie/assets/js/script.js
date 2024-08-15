'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    });
}



/**
 * header sticky ^ back to top btn
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn]

for (let i = 0; i < searchBoxElems.length; i++) {
    searchBoxElems[i].addEventListener("click", function () {
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}


/**
 * Move cycle on scroll
 */

// Select the delivery boy element
const deliveryBoy = document.querySelector("[data-delivery-boy]");

// Initialize variables
let deliveryBoyMove = -80;
let lastScrollPos = 0;

// Add event listener to window scroll event
window.addEventListener("scroll", function () {
    // Get the top position of the delivery boy element
    const deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

    // Check if the delivery boy is within the desired range
    if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        // Get the current scroll position
        const activeScrollPos = window.scrollY;

        // Update the delivery boy move variable based on scroll direction
        if (activeScrollPos > lastScrollPos) {
            deliveryBoyMove++;
        } else {
            deliveryBoyMove--;
        }

        // Update the last scroll position
        lastScrollPos = activeScrollPos;

        // Update the delivery boy's transform style
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    }
});


