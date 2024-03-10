const carouselInner = document.querySelector('.carousel-inner');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        let currentIndex = 0;
        
        function showSlide(index) {
          carouselInner.style.transform = `translateX(-${index * 100}%)`;
        }
        
        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex === 0) ? 1 : currentIndex - 1;
          showSlide(currentIndex);
        });
        
        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex === 1 ) ? 0 : currentIndex + 1;
          showSlide(currentIndex);
        });