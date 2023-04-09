$('.slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    // {
    //   breakpoint: 769,
    //   settings: {
    //     slidesToShow: 2,
    //   },
    //   },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //   },
    // },
    // {
    //   breakpoint: 376,
    //   settings: {
    //     slidesToShow: 1,
    //   },
    // },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
      },
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    
  ],

});


