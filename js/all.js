$(document).ready(function () {
    // 設定offcanvas左右選單切換
    $('.nav').click(function(e){
      e.preventDefault();
      /* Act on the event */
      $('.wrap').toggleClass('open');
    });
    $('.asideoff a').click(function(e){
      e.preventDefault();
      /* Act on the event */
      $('.wrap').removeClass('open');
    });
    // fontawesome icon
    $("a[href$='.bars']").addClass('fa fa-bars');
    $("a[href$='.window-close']").addClass('fas fa-window-close');

    // 設計下拉式收合選單
    $('.dropdown').click(function(event){
        /* Act on the event */
        event.preventDefault();
        // $('.dropdown-open').slideToggle();

        // 讓點擊到的 .dropdown 亮起來，其他.dropdown移除active樣式
        $(this).toggleClass('active');

        // 讓點擊到的 .dropdown找到父元素 li ，再找裡面的 .dropdown-open 判斷收合
        $(this).parent().find('.dropdown-open').slideToggle();

        // 自己以外的 .dropdown-open 隱藏起來
        $(this).parent().siblings().find('.dropdown-open').slideUp();

        // 自己以外的 .dropdown 移除active樣式
        $(this).parent().siblings().find('.dropdown').removeClass('active');
    });

    // 關閉的效果
    $('.news-close').click(function(event){
        /* Act on the event */
        event.preventDefault();
        $('.news').hide(); 
    });
    
    // Swiper -輪播效果
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      // 取消默認行為
      $('.item').on('click', function (e) {
        e.preventDefault();
      });
      $('.header').on('click', function (e) {
        e.preventDefault();
      });
      $('.footer').on('click', function (e) {
        e.preventDefault();
      });
});