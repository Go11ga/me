//= ../../../../node_modules/slick-carousel/slick/slick.js

/* Work slider */
$(function(){

    let slider = $("#work-slider");
    let btnLeft = $("#arrow-left-btn");
    let btnRight = $("#arrow-right-btn");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    btnLeft.on('click', function(){
        slider.slick('slickPrev');
    })

    btnRight.on('click', function(){
        slider.slick('slickNext');
    })

}());



