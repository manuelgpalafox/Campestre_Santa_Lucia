window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    });
});

window.addEventListener('load', function () {
    var buttonheight = $(".carousel__contenedor").height();
    document.getElementById('buttons').style.height = buttonheight+"px";
});