let masks = $(".mask_box .mask");
var swiper = new Swiper('.swiper-container', {
    // autoplay: {
    //     disableOnInteraction: false, //手动滑动之后不打断播放
    //     delay: 1000
    // },
    loop: true,
    on: {
        transitionStart: function () {
            this.active = $('.swiper-slide-active').attr('data-swiper-slide-index')
            var sum = this.realIndex;
            masks.eq(sum).css({
                opacity: 1
            }).siblings().css({
                opacity: 0
            })
            
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});