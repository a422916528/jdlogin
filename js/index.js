$(function () {
    // 点击切换tab栏
    $('.login-list li').on('click', function () {
        $(this).children('a').addClass('current');
        $(this).siblings('li').children('a').removeClass('current');
        // let index = $(this).index();
        const index = $(this).index();
        // 对应的内容显示
        $('.login-con .con-item').eq(index).show().siblings('.con-item').hide();
    });
    animation();

    // 二维码移动动画
    function animation() {
        $('.QR-code').animate({
            left: -2
        }, function () {
            $('.saoasao').stop().fadeIn(500);
        });
        const time = setTimeout(() => {
            $('.saoasao').stop().fadeOut(100);
            $('.QR-code').animate({
                left: 65
            });
        }, 5000);
        // 鼠标经过再次调用
        $('.saoma-login').on('mouseenter', function () {
            animation();
        });
    }
})