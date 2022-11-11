$(document).ready(function () { // 문서준비 이벤트 시작
    /* aos */
    AOS.init();

    
  const mb = new Swiper(".mb", {
    autoplay: true,
    speed : 1000,
    loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
});
  
  const review = new Swiper('.review', {
   // 옵션
    loop: true,
navigation : {   
nextEl : '.swiper-button-next',  // 다음 버튼
prevEl : '.swiper-button-prev',  // 이전 버튼
},
  });
  


}); // 문서준비 이벤트 끝