/* Modal */
$(function(){
    $('[data-modal]').on('click', function(){
        $('body').addClass('no-scroll');
        $('#modal').addClass('modal--active');

        setTimeout(function(){
            $(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

    });

    $('[data-close]').on('click', function(){
        $(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function(){

            $('#modal').removeClass('modal--active');
            $('body').removeClass('no-scroll');
        }, 200);
    });

}());
