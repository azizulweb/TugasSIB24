// // document.addEventListener("DOMContentLoaded", function() {
// //   const carouselInner = document.querySelector('.carousel-inner');
// //   const prevBtn = document.querySelector('.carousel-prev');
// //   const nextBtn = document.querySelector('.carousel-next');
// //   let currentIndex = 0;
// //   const slideInterval = 5000;
  
// //   function showSlide(index) {
// //     carouselInner.style.transform = `translateX(-${index * 100}%)`;
// //   }
  
// //   prevBtn.addEventListener('click', () => {
// //     currentIndex = (currentIndex === 0) ? 3 : currentIndex - 1;
// //     showSlide(currentIndex);
// //   });
  
// //   nextBtn.addEventListener('click', () => {
// //     currentIndex = (currentIndex === 3 ) ? 0 : currentIndex + 1;
// //     showSlide(currentIndex);
// //   });
// // });

// script.js
// document.querySelector('.cta-button').addEventListener('click', function() {
//   // Tangani tindakan saat tombol di klik
//   // Misalnya: membuka formulir, menampilkan pesan, dll.
// });

document.addEventListener('DOMContentLoaded', function()
 {
  let slides = document.querySelectorAll('.carousel-item');
  let currentSlide = 0;

  // Function to show the next slide
  function nextSlide() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = 'block';
  }

  // Function to show the previous slide
  function prevSlide() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
  }

  // Start automatic sliding
  let slideInterval = setInterval(nextSlide, 5000);

  // Attach click event listeners to buttons
  document.querySelector('.carousel-prev').addEventListener('click', function() {
      clearInterval(slideInterval); // Stop automatic sliding
      prevSlide(); // Move to previous slide
      slideInterval = setInterval(nextSlide, 5000); // Start automatic sliding again
  });

  document.querySelector('.carousel-next').addEventListener('click', function() {
      clearInterval(slideInterval); // Stop automatic sliding
      nextSlide(); // Move to next slide
      slideInterval = setInterval(nextSlide, 5000); // Start automatic sliding again
  });
});
