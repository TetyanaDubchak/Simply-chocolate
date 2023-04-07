// new Swiper('.swiper', {});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
    freeMode: true,
    
  
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },

  mousewheel: {
    sensitivity: 1,
   
  },

  breakpoints: {

    1200: {
      slidePerView: 4,
      spaceBetween: 18,
    },
    
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      
    },

    375: {
      slidesPerView: 1,
     spaceBetween: 20,
    },

    

    
  }

  
  
  
});
