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



function removerAtributo() {
    document.getElementById("buttons").removeAttribute("style");
}

function agregarAtributo() {
    document.getElementById("buttons").style.display = "none";
}

document.querySelectorAll('.carousel__lista img').forEach(carousel__elemento => {
    carousel__elemento.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = carousel__elemento.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

