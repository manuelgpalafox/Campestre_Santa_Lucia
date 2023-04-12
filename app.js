window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    });
});

window.addEventListener('load', function () {
    var buttonheight = $(".carousel__contenedor").height();
    document.getElementById('buttons').style.height = buttonheight + "px";
});