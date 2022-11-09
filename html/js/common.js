$(document).ready(function () { // 문서준비 이벤트 시작
    /* aos */
    AOS.init();

    
const mb = new Swiper(".mb", {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}); // 문서준비 이벤트 끝