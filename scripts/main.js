document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const closeMenu = document.querySelector(".close-menu");

  // Open the navigation menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  // Close the navigation menu
  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
const testimonialsList = document.querySelector('.testimonials-list');
const testimonials = document.querySelectorAll('.testimonials-list li');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
let visibleTestimonials = 1; // Default: 1 testimonial visible
const totalTestimonials = testimonials.length;

// Function to calculate the number of visible testimonials based on screen size
function calculateVisibleTestimonials() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1024) {
    visibleTestimonials = 3; // Show 3 testimonials on larger screens
  } else if (screenWidth >= 768) {
    visibleTestimonials = 2; // Show 2 testimonials on medium screens
  } else {
    visibleTestimonials = 1; // Show 1 testimonial on smaller screens
  }
}

// Function to update the slide position
function updateSlide() {
  const slideWidth = testimonials[0].offsetWidth; // Get the width of a single testimonial
  testimonialsList.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  testimonialsList.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
}

// Function to move to the next slide
function nextSlide() {
  const maxIndex = totalTestimonials - visibleTestimonials; // Calculate the maximum index
  if (currentIndex < maxIndex) {
    currentIndex += 1; // Move forward by 1
  } else {
    currentIndex = 0; // Loop back to the start
  }
  updateSlide();
}

// Function to move to the previous slide
function prevSlide() {
  const maxIndex = totalTestimonials - visibleTestimonials; // Calculate the maximum index
  if (currentIndex > 0) {
    currentIndex -= 1; // Move backward by 1
  } else {
    currentIndex = maxIndex; // Loop to the last set of testimonials
  }
  updateSlide();
}

// Navigate to the previous testimonial
leftArrow.addEventListener('click', () => {
  prevSlide();
});

// Navigate to the next testimonial
rightArrow.addEventListener('click', () => {
  nextSlide();
});

// Adjust slide position and visible testimonials on window resize
window.addEventListener('resize', () => {
  calculateVisibleTestimonials();
  updateSlide();
});

// Initial setup
calculateVisibleTestimonials();
updateSlide();

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Default: 1 slide visible
  spaceBetween: 20, // Space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Show 2 slides on medium screens
    },
    1024: {
      slidesPerView: 3, // Show 3 slides on large screens
    },
  },
});  